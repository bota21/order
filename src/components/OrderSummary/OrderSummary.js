import { ListItemText } from "@material-ui/core";

export default function OrderSummary({ ingredients, total, delivery, price }) {
  const ingredientsSummary = Object.keys(ingredients).map((ingKey) => {
    return (
      <ListItemText key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
        {ingredients[ingKey]} <span>x {price[ingKey]} KZT</span>
      </ListItemText>
    );
  });
  return (
    <>
      {ingredientsSummary}
      <p>Delivery: {delivery}</p>
      <h3>Total price: {total} KZT</h3>
    </>
  );
}
