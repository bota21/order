import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import "./OrderProducts.css";
import { fetchProducts } from "../../store/actions";
import { PRODUCT_PRICES } from "../../constants";
import { addIngridients } from "../../store/actions";

const OrderProducts = () => {
  const products = useSelector((state) => state.order.products);
  const dispatch = useDispatch();

  let prices = PRODUCT_PRICES;
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addProducts = (ingName) => {
    dispatch(addIngridients(ingName));
  };

  const renderOrderProducts = products.map((product) => {    
      for (let ingName in prices) {
        return (
          <Product
            key={product.product}
            title={product.product}
            image={product.image}
            price={product.product === ingName ? prices[ingName] : 0}
            addProduct={addProducts}
          />
        );
      }
    return prices;
  });
  return <div className='OrderProducts'>{renderOrderProducts}</div>;
};

export default OrderProducts;
