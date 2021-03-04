import "./App.css";
import OrderProducts from "./containers/OrderProducts/OrderProducts";
import ShopCart from "./containers/ShopCart/ShopCart";

function App() {
  const products = {
    id: 1,
    title: "focaccia",
    amount: 2,
    price: 250,
  };
  return (
    <div className='App'>
      <OrderProducts />
      <ShopCart array={products} />
    </div>
  );
}

export default App;
