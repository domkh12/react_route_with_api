import { Suspense, lazy, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoadingComponent } from "./components/LoadingComponent";
import NavBarComponent from "./components/NavBarComponent";
import { BASE_URL } from "./utils/baseUrl";
const CardComponent = lazy(() => import("./components/Cards/CardComponent"));

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL + "users");
      const data = await response.json();
      setUsers(data.users);
      console.log(data.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="flex flex-wrap min-h-screen justify-center items-center gap-7 my-7">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          users.map((user) => (
            <div key={users.id}>
              <CardComponent profile={user.image} name={user.lastName} />
            </div>
          ))
        )}
      </main>
    </>
  );
}

export default App;
