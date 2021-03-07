import Button from "@material-ui/core/Button";
import "./ShopCartList.css";

const ShopCartList = ({ type, amount, price, remove }) => {
  let renderListProducts = () => {
    return (
      <div className='cards'>
        <div className='cart_wrapper'>
          <h4>{type}</h4>
        </div>
        <div className='cart_wrapper_amount'>
          <h4>x{amount}</h4>
        </div>
        <div className='cart_wrapper_price'>
          <h4>
            {price}
            <span> KZT</span>
          </h4>
        </div>
        <div className='cart_wrapper_remove'>
          <Button onClick={() => remove(type)}>-</Button>
        </div>
      </div>
    );
  };

  switch (type) {
    case "Pizza":
      return renderListProducts();
    case "Caesar":
      return renderListProducts();
    case "Focaccia":
      return renderListProducts();
    case "Lemonade":
      return renderListProducts();
    default:
      return null;
  }
};
export default ShopCartList;
