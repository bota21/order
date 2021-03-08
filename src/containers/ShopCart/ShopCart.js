import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { PRODUCT_PRICES } from "../../prices";
import {
  removeIngridient,
  changePurchasing,
  placeOrder,
  closeModal,
} from "../../store/Actions/shopActions";
import Modal from "../../components/UI/Modal";
import ContactData from "../ContactData/ContactData";
import ShopCartList from "../../components/ShopCartList/ShopCartList";
import "./ShopCart.css";

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

const ShopCart = () => {
  const classes = useStyles();
  const dishes = useSelector((state) => state.shop.dishes);
  const delivery = useSelector((state) => state.shop.delivery);
  const total = useSelector((state) => state.shop.totalPrice);
  const purchasing = useSelector((state) => state.shop.purchasing);
  const openModal = useSelector((state) => state.shop.openModal);
  const dispatch = useDispatch();
  const productName = Object.keys(dishes);
  const productAmount = Object.values(dishes);

  const deleteDish = (ingName) => {
    dispatch(removeIngridient(ingName));
  };

  if (
    dishes.Pasta === 0 &&
    dishes.Caesar === 0 &&
    dishes.Focaccia === 0 &&
    dishes.Lemonade === 0
  ) {
    dispatch(changePurchasing(true));
  }

  const productObj = function (product, amount) {
    var result = [];
    for (var i = 0; i < product.length; i++) {
      const data = {
        product: product[i],
        amount: amount[i],
        price: PRODUCT_PRICES[product[i]],
      };
      result.push(data);
    }
    return result;
  };

  const dishList = productObj(productName, productAmount);
  console.log(dishList);
  const renderList = dishList.map((item) => {
    if (item.amount !== 0) {
      return (
        <ShopCartList
          key={item.product}
          type={item.product}
          title={item.product}
          amount={item.amount}
          price={item.price}
          remove={deleteDish}
        />
      );
    }
    return null;
  });

  const orderDishes = () => {
    dispatch(placeOrder());
  };
  const closeWindow = () => {
    dispatch(closeModal());
  };

  return (
    <div className='ShopCart'>
      <Card className={classes.root}>
        <CardContent>
          <h2>Cart</h2>

          {renderList}

          <div className='cards'>
            <div className='cart_wrapper'>
              <h4>Delivery</h4>
              <h4>Total</h4>
            </div>
            <div className='cart_wrapper_price'>
              <h4>
                {delivery} <span>KZT</span>
              </h4>
              <h4>
                {total} <span>KZT</span>
              </h4>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button size='small' disabled={purchasing} onClick={orderDishes}>
            Place order
          </Button>
        </CardActions>
      </Card>
      <Modal open={openModal} title='Your Order'>
        <ContactData close={closeWindow} />
      </Modal>
    </div>
  );
};

export default ShopCart;
