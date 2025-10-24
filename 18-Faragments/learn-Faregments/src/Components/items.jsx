import styles from "./item.module.css";

function Item({ foodItem }) {
  const handleBuy = (event) => {
    console.log("👉 Event object:", event); // Event ko console me dikhaya

    const userConfirm = confirm("Do you want to buy this item?");
    if (userConfirm) {
      console.log("✅ Order Booked for:", foodItem);
    } else {
      console.log("❌ Order Cancelled for:", foodItem);
    }
  };

  return (
    <li className={styles.nsc}>
      <span className={styles.nscspan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuy(event)} // Event pass kiya
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
