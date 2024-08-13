import { useInitData } from "@telegram-apps/sdk-react";

function TappingPage() {
  const initData = useInitData();


  return (
    <>
     <div>
      {/* User ID: {userId} */}
      <br />
      {initData ? JSON.stringify(initData.user) : 1}
    </div>
    </>
  )
}

export default TappingPage;
