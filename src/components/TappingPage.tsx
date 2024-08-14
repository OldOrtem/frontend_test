import { useInitData } from "@telegram-apps/sdk-react";
import { useLayoutEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import styles from "./styles/tappingPage.module.scss"
import Coins from "./Coins";
import Fruit from "./Fruit";
import Energy from "./Energy";

const TappingPage = observer(() => {

  const [userId, setUserId] = useState<number|undefined>(0);
  const initData = useInitData();

  useLayoutEffect(()=>{
    setUserId(initData?.user?.id);
    statsService.loadStats(Number(userId));

    const interval = setInterval(() => {
      if(statsService.getEnergy() < 1000){
        statsService.setEnergy(statsService.getEnergy()+1);
      }
      
    }, 1000);


    return () => {
      clearInterval(interval);
      statsService.saveStats(Number(userId));
    }
  }, [])

  async function tap(){
    statsService.setCoins(statsService.getCoins()+20);
    statsService.setEnergy(statsService.getEnergy()-20);
    await statsService.saveStats(Number(userId));
  }

  return (
    
     <div className={styles.tappingPage}>
      {/* id: {userId} */}
      <Coins/>
      <Fruit callback={tap}/>
      <Energy/>
    </div>
    
  )
})

export default TappingPage;
