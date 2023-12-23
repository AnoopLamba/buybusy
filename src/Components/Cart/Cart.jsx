import CartSidebar from "./CartSidebar";
import CartList from "./CartList";
import Spinner from "react-spinner-material";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/reducers/cartReducer";

function Cart() {
  const { cartLoading, cart } = useSelector(cartSelector);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center px-4 py-5">
      {cartLoading ? (
        <div className="mt-[35vh]">
          <Spinner />
        </div>
      ) : cart.length === 0 ? (
        <h1 className="text-lg font-bold">No items in cart!</h1>
      ) : (
        <>
          <CartList />
          <CartSidebar />
        </>
      )}
    </div>
  );
}

export default Cart;
