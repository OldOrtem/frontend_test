import { initClosingBehavior, initSwipeBehavior, useInitData } from "@telegram-apps/sdk-react";
import { useEffect, useLayoutEffect, useState } from "react";
import statsService from "../service/StatsService";
import { observer } from "mobx-react-lite";
import coinStore from "../store/coinStore";
import energyStore from "../store/energyStore";

const TappingPage = observer(() => {

  const [userId, setUserId] = useState<number|undefined>(0);
  const initData = useInitData();

  const [closingBehavior] = initClosingBehavior();
  closingBehavior.enableConfirmation();
  const [swipeBehavior] = initSwipeBehavior();
  swipeBehavior.disableVerticalSwipe();

  useLayoutEffect(()=>{
    setUserId(initData?.user?.id);
    statsService.loadStats(Number(userId));
  }, [])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      saveUserData();
      // Standard behavior, which might not be required in some cases.
      alert("hi")
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const saveUserData = () => {
    // Function to save user data or perform any necessary operations before the app is closed
    statsService.saveStats(Number(userId));
  };

  function tap(){
    statsService.setCoins(statsService.getCoins()+5);
    statsService.setEnergy(statsService.getEnergy()-5);
    statsService.saveStats(Number(userId));
  }
  return (
    <>
     <div>

      <div>coins: {coinStore.value}</div>
      <br />
      <div onClick={tap}>click</div>
      <br />
      energy: {energyStore.value}
    </div>
    </>
  )
})

export default TappingPage;
