import { useInitData } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

function TappingPage() {
  const [userId, setUserId] = useState(0);
  const initData = useInitData();
  useEffect(()=>{
    setUserId(initData?.user?.id);
  }, [])

  return (
    <>
     <div>
      User ID: {userId}
      <br />
    </div>
    </>
  )
}

export default TappingPage;
