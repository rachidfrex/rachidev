import "./App.css";
// import Nav from "./components/nav.jsx";
// import Header from "./components/header.jsx";
// import Assid from "./components/assid.jsx";
// import { Routes ,Route } from "react-router-dom";
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import { useEffect, useState } from "react";
function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);
  // console.log(products);
  // it should have the name of the product, the price
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  }
  console.log(cart);

  return (
    <>
      <div className=" bg-gray-100 ">
        <nav className="flex flex-row  justify-center  ">
          <ul className="flex flex-row gap-3 bg-slate-500 p-3 justify-center items-center border-2 border-slate-900 rounded-full px-10 mt-5  ">
            <li>
              <a href="/" className="text-white">Home</a>
            </li>
            <li>
              <a href="/products" className="text-white">Products</a>
            </li>
            <li>
              <a href="/cart" className="text-white">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center w-full py-3">Cart</h1>
        <div className="flex flex-row gap-3">
          {cart.map((product) => (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt=""
                className="w-[200px] aspect-[9/11] "
              />
              <hr />
              <div className="flex flex-col gap-1 pt-2 text-center w-full">
                <p>Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h1>Total: {total}</h1>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-3">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-center w-full py-3">Products</h1>
            <div className="flex flex-row gap-3">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product1}
                  alt=""
                  className="w-[200px] aspect-[9/11] "
                />
                <hr />
                <div className="flex flex-col gap-1 pt-2 text-center w-full">
                  <p>Price: 200</p>
                  <button
                    className=" bg-slate-200 p-2 rounded-md border border-slate-500 mx-10 "
                    onClick={() => addToCart({ name: 'Product 1', price: 200, image: product1 })}
                  >
                    add to cart
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product2}
                  alt=""
                  className="w-[200px] aspect-[9/11] "
                />
                <hr />
                <div className="flex flex-col gap-1 pt-2 text-center w-full">
                  <p>Price: 300</p>
                  <button
                    className=" bg-slate-200 p-2 rounded-md border border-slate-500 mx-10 "
                    onClick={() => addToCart({ name: 'Product 2', price: 300, image: product2 })}
                  >
                    add to cart
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md ">
                <img
                  src={product3}
                  alt=""
                  className="w-[200px] aspect-[9/11] "
                />
                <hr />
                <div className="flex flex-col gap-1 pt-2 text-center w-full">
                  <p>Price: 400</p>
                  <button
                    className=" bg-slate-200 p-2 rounded-md border border-slate-500 mx-10 "
                    onClick={() => addToCart({ name: 'Product 3', price: 400, image: product3 })}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
