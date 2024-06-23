import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Foot from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  // id:1,
  // qty:1,

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center flex-wrap-reverse md:flex-nowrap py-24 ${isDarkMode && "bg-slate-900"}`}>
        <div className="flex flex-wrap w-full md:w-4/6 justify-center">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>

        <div className="w-full md:w-3/6 py-10 md:py-0">
          <TableCart products={products} />
        </div>
      </div>
      <Foot />
    </Fragment>
  );
};

export default ProductsPage;
