import { useInitData } from "@telegram-apps/sdk-react";
import { useLayoutEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import styles from "./styles/tappingPage.module.scss"
import Coins from "./Coins";
import Fruit from "./Fruit";
import Energy from "./Energy";



const TappingPage = observer(() => {
  const [step, setStep] = useState<number>(1); 
  const [userId, setUserId] = useState<number>(0);
  const initData = useInitData();
  

  useLayoutEffect(()=>{
    setStep(1);
    setUserId(initData?.user?.id as number);
    statsService.loadStats(Number(userId));

    const interval = setInterval(() => {
      if(statsService.getEnergy() < 1000){
        statsService.setEnergy(statsService.getEnergy()+step);
        
      }
      statsService.setCoins(statsService.getCoins()+step);
      statsService.saveStats(userId);
      
    }, 1000);


    return () => {
      clearInterval(interval);
      statsService.saveStats(userId);
    }
  }, [])

  

  return (
    
     <div className={styles.tappingPage}>
      {/* id: {userId} */}
      <Coins/>
      <Fruit step={step} />
      <Energy/>
    </div>
    
  )
})

export default TappingPage;
