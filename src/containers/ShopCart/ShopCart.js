import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./ShopCart.css";
import OrderList from "../../components/OrderList/OrderList";

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

const ShopCart = (props) => {
  const classes = useStyles();
  return (
    <form onSubmit={props.submit}>
      <div className='ShopCart'>
        <Card className={classes.root}>
          <CardContent>
            <h2>Cart</h2>
            <OrderList />
            <div className='cards'>
              <div className='cart_wrapper'>
                <h4>Delivery</h4>
                <h4>Total</h4>
              </div>
              <div className='cart_wrapper_price'>
                <h4>{props.delivery}</h4>
                <h4>{props.total}</h4>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button size='small'>Place order</Button>
          </CardActions>
        </Card>
      </div>
    </form>
  );
};

export default ShopCart;
