import { useInitData } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import coinStore from "../store/coinStore";
import energyStore from "../store/energyStore";

const TappingPage = observer(() => {

  const [userId, setUserId] = useState<number|undefined>(0);
  const initData = useInitData();
  useEffect(()=>{
    setUserId(initData?.user?.id);
    statsService.loadStats(Number(userId));
  }, [])

  function tap(){
    statsService.setCoins(statsService.getCoins()+5);
    statsService.setEnergy(statsService.getEnergy()-5);
  }
  return (
    <>
     <div>
      User ID: {userId}
      <br />
      <div onClick={tap}>coins: {coinStore.value}</div>
      <br />
      energy: {energyStore.value}
    </div>
    </>
  )
})

export default TappingPage;
