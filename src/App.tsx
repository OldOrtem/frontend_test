import React, { useEffect, useState } from 'react';
import { parseInitData, retrieveLaunchParams } from '@telegram-apps/sdk';

const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [consol, setConsol] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setConsol(...consol, "initData");
      const initData  = retrieveLaunchParams();
      setConsol(...consol, initData);
      
      if (initData) {
        // Assuming initData is a JSON string or can be parsed directly
        const urlParams = new URLSearchParams();
        const userJson = urlParams.get('user');
        
        if (userJson) {
          const user = JSON.parse(userJson);
          setUserId(user.id);
        } else {
          throw new Error('User data not found in initData');
        }
      } else {
        throw new Error('InitData is not defined');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      console.log("eeee");
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      User ID: {userId}
      <br />
      {consol}
    </div>
  );
};

export default App;
