import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/reducers/cartReducer";

function CartList() {
  const { cart } = useSelector(cartSelector);

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 p-4">
      {cart.map((cartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

export default CartList;
