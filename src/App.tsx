import React, { useEffect, useState } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const { initData } = retrieveLaunchParams();
      
      if (initData) {
        // Assuming initData is a JSON string or can be parsed directly
        const urlParams = new URLSearchParams(initData);
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
    } catch (e) {
      setError(`Error retrieving or parsing launch parameters: ${e.message}`);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>User ID: {userId}</div>;
};

export default App;
