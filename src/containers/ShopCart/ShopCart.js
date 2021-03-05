import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./ShopCart.css";
import ShopCartList from "../../components/ShopCartList/ShopCartList";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const submitOrder = (e) => {
  e.preventDefault();
};

const ShopCart = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.order.products);
  const delivery = useSelector((state) => state.shop.delivery);
  const total = useSelector((state) => state.shop.total);
  const purchasing = useSelector((state) => state.shop.purchasing);

  const productKeys = Object.keys(products);
  const prodList = [];

  productKeys.forEach((ingKeys) => {
    const amount = products[ingKeys];
    console.log(amount.product);
    for (let i = 0; i < amount; i++) {
      prodList.push(
        <ShopCartList
          key={ingKeys + i}
          type={amount.product}
          title={amount.product}
        />
      );
    }
  });

  return (
    <form onSubmit={submitOrder}>
      <div className='ShopCart'>
        <Card className={classes.root}>
          <CardContent>
            <h2>Cart</h2>

            {prodList}
            {/* <ShopCartList type='Focaccia'price='150'amount='1'/>
            <ShopCartList type='Pizza'price='150'amount='1'/>
            <ShopCartList type='Pizza'price='150'amount='1'/> */}

            <div className='cards'>
              <div className='cart_wrapper'>
                <h4>Delivery</h4>
                <h4>Total</h4>
              </div>
              <div className='cart_wrapper_price'>
                <h4>{delivery}</h4>
                <h4>{total}</h4>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button size='small' disabled={purchasing}>Place order</Button>
          </CardActions>
        </Card>
      </div>
    </form>
  );
};

export default ShopCart;
