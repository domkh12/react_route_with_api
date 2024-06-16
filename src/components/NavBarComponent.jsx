
import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
export default function NavBarComponent() {
    const menuList = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/about',
            title: "About Us"
        },
        {
            path: '/product',
            title: "Product"
        },
        {
            path: '/service',
            title: "Service"
        }
    ]
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {
            menuList.map((menu,index)=>(
                <NavLink to={menu.path} className={({isActive})=>isActive ? "text-blue-600" : "text-black"} key={index}>
                    {menu.title}
                </NavLink>
            ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
