import { observer } from "mobx-react-lite"
import energyStore from "../store/energyStore"
import styles from "./styles/energy.module.scss"

const Energy = observer(() => {
  

    return (
      <div className={styles.energy}>
        <div className={styles.energy__text}>
          Your Energy: {energyStore.value/10}%
        </div>
        <div className={styles.energy__bar}>
          <div className={styles.energy__bar_active} style={{width:`${energyStore.value/10}`}}>
          </div>
          <div className={styles.energy_val}>
              {energyStore.value}
            </div>
        </div>
      </div>
    )
  }
)
export default Energy
  