import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => item.id === product.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="md:sticky md:top-24">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
          <thead>
            <tr className="font-bold text-xl">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 &&
              cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 10)}...</td>
                    <td>$ {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                    <td>{item.qty}</td>
                    <td>$ {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                  </tr>
                );
              })}
            <tr ref={totalPriceRef}>
              <td colSpan={3}>
                <b>Total Price</b>
              </td>
              <td>
                <b>$ {total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCart;
