import React, { useEffect } from "react";
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
  const dishesKeys = Object.keys(dishes);
  const dishList = [];

  const deleteDish = (ingName) => {
    dispatch(removeIngridient(ingName));
  };
  useEffect(() => {
    console.log(dishes);
  }, [dishes]);

  if (
    dishes.Pasta === 0 &&
    dishes.Caesar === 0 &&
    dishes.Focaccia === 0 &&
    dishes.Lemonade === 0
  ) {
    dispatch(changePurchasing(true));
  }

  dishesKeys.forEach((ingKeys) => {
    const amount = dishes[ingKeys];
    for (let i = 0; i < amount; i++) {
      dishList.push(
        <ShopCartList
          key={ingKeys + i}
          type={ingKeys}
          title={ingKeys}
          amount={dishes[ingKeys]}
          price={PRODUCT_PRICES[ingKeys]}
          remove={deleteDish}
        />
      );
    }
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

          {dishList}

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
