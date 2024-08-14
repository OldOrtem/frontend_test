import statsService from "../service/StatsService";
import shadow from "./../assets/shadow.png"

import styles from "./styles/fruit.module.scss"

interface FruitProps{
  callback:()=>void;
}

function Fruit({callback}:FruitProps) {
    
  function tap(){
    if (statsService.getEnergy() > 0){
      callback();
    }
    
  }

    return (
      <div className={styles.fruit}>
       <img className={styles.fruit__img} onClick={tap} src={fruit} alt="fruit" />
       <img className={styles.fruit__shadow} src={shadow} alt="shadow" />
      </div>
    )
  }

  export default Fruit;
  