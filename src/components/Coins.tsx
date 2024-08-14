import { observer } from "mobx-react-lite";
import styles from "./styles/coins.module.scss"
import coinStore from "../store/coinStore";
import coin from "./../assets/coin.png"

const Coins = observer(() => {
  

    return (
      <div className={styles.coins}>
       <img className={styles.coins__img} src={coin} alt="coin" />
       <div className={styles.coins__value}>{coinStore.value.toLocaleString("de-DE")}</div>
      </div>
    )
  }
)
export default Coins;
  