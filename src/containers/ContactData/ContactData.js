import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ValidationTextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { initState } from "../../store/Actions/shopActions";
import { sendOrderProducts } from "../../store/Actions/shopActions";
import { PRODUCT_PRICES } from "../../prices";
import Spinner from "../../components/UI/Spinner";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

export default function ContactData({ close }) {
  const dispatch = useDispatch();
  const { dishes, totalPrice, delivery } = useSelector((state) => {
    return {
      dishes: state.shop.dishes,
      totalPrice: state.shop.totalPrice,
      delivery: state.shop.delivery,
      // isLoading: state.shop.isLoading,
    };
  });
  const isLoading = useSelector(state => state.shop.isLoading)
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    const customerData = {
      dishes,
      data: { ...data },
    };
    if (data.name !== "" && data.phone !== "" && data.address !== "") {
      dispatch(sendOrderProducts(customerData));
      dispatch(initState());
    } else return;
  };

  return (
    <>
      <OrderSummary
        ingredients={dishes}
        total={totalPrice}
        delivery={delivery}
        price={PRODUCT_PRICES}
      />
      {isLoading ? <Spinner /> : null}
      <form onSubmit={submitOrder}>
        <DialogContent>
          <DialogContentText>
            Please fill in the fields to send your order
          </DialogContentText>
          <ValidationTextField
            autoFocus
            margin='dense'
            name='name'
            label='Add your name'
            type='text'
            fullWidth
            onChange={changeValueHandler}
          />
          <ValidationTextField
            autoFocus
            margin='dense'
            name='phone'
            label='Add your phone number'
            type='text'
            fullWidth
            onChange={changeValueHandler}
          />
          <ValidationTextField
            autoFocus
            margin='dense'
            name='address'
            label='Add your address'
            type='text'
            fullWidth
            onChange={changeValueHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color='secondary' variant='contained'>
            Disagree
          </Button>
          <Button color='primary' variant='contained' onClick={submitOrder}>
            Agree and Order
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
