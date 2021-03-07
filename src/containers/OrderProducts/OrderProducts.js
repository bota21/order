import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/orderActions";
import { addIngridients } from "../../store/Actions/shopActions";
import Product from "../../components/Product/Product";
import Spinner from "../../components/UI/Spinner";
import "./OrderProducts.css";

const OrderProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.order.products);
  const isLoading = useSelector((state) => state.order.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addProducts = (ingName) => {
    dispatch(addIngridients(ingName));
  };

  const renderOrderProducts = products.map((product) => {
    return (
      <Product
        key={product.product}
        type={product.product}
        title={product.product}
        image={product.image}
        price={product.price}
        addProduct={addProducts}
      />
    );
  });
  return (
    <>
      <div className='OrderProducts'>{renderOrderProducts}</div>
      {isLoading ? <Spinner /> : null}
    </>
  );
};

export default OrderProducts;
