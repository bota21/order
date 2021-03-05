import OrderProducts from "../OrderProducts/OrderProducts";
import ShopCart from "../ShopCart/ShopCart";
import "./Order.css";

const Order = () => {
  return (
    <div className='Order'>
      <OrderProducts />
      <ShopCart />
    </div>
  );
};

export default Order;
