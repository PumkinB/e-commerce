import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-48 md:max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-4 my-2 p-2 flex flex-col justify-between">{children}</div>;
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <div className="p-5">
      <Link to={`/product/${id}`}>
        <img src={image} alt="product" className="h-60 w-60 md:h-full md:w-full object-cover object-center" />
      </Link>
    </div>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <h1 className="text-xl md:text-3xl font-bold text-white py-4">{name.substring(0, 20)}...</h1>
      <p className="text-sm md:text-lg text-white my-5 py-4">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <span className="text-white text-lg font-bold md:text-xl">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <button className="py-2 px-2 bg-indigo-600 rounded-md text-white font-bold duration-500 active:translate-y-1" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add To Cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
