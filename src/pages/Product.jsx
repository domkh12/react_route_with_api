import React, { useEffect, useState } from "react";
import CardProductComponent from "../components/Cards/CardProductComponent";
import { BASE_URL } from "../utils/baseUrl";
import { LoadingComponent } from "../components/LoadingComponent";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL + "products");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleOnClickCard(product){
    navigate("/product-detail", {state: product})
  }

  return (
    <div className="flex flex-wrap min-h-screen justify-center items-center gap-7 my-7">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        products.map((p) => (
          <CardProductComponent
            key={p.id}
            image={p.images[0]}
            title={p.title}
            price={p.price}
            onClickCard={()=>handleOnClickCard(p)}
          />
        ))
      )}
    </div>
  );
};

export default Product;
