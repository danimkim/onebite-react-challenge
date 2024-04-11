import OrderEditor from "../components/FoodOrder/OrderEditor";
import styles from "./../styles/FoodOrder.module.css";

export default function FoodOrder() {
  return (
    <section className={styles.Container}>
      <h2 className={styles.Title}>배달의민족 주문</h2>
      <OrderEditor />
    </section>
  );
}
