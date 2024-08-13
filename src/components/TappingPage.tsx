import { useInitData } from "@telegram-apps/sdk-react";
import { useLayoutEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import energyStore from "../store/energyStore";
import styles from "./styles/tappingPage.module.scss"
import Coins from "./Coins";
import Fruit from "./Fruit";

const TappingPage = observer(() => {

  const [userId, setUserId] = useState<number|undefined>(0);
  const initData = useInitData();

  useLayoutEffect(()=>{
    setUserId(initData?.user?.id);
    statsService.loadStats(Number(userId));
  }, [])

  async function tap(){
    statsService.setCoins(statsService.getCoins()+5);
    statsService.setEnergy(statsService.getEnergy()-5);
    await statsService.saveStats(Number(userId));
  }

  return (
    
     <div className={styles.tappingPage}>
      id: {userId}
      <Coins/>
      <Fruit callback={tap}/>
      energy: {energyStore.value}
    </div>
    
  )
})

export default TappingPage;
