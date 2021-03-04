import Button from "@material-ui/core/Button";
import "./OrderList.css";

const OrderList = (props) => {
  return (
    <div className='cards'>
      <div className='cart_wrapper'>
        <h4>{props.title}</h4>
      </div>
      <div className='cart_wrapper_amount'>
        <h4>
          X<span>{props.amount}</span>
        </h4>
      </div>
      <div className='cart_wrapper_price'>
        <h4>{props.price}</h4>
      </div>
      <div className='cart_wrapper_remove'>
        <Button onClick={props.remove}>-</Button>
      </div>
    </div>
  );
};
export default OrderList;
