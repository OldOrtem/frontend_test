import React from 'react';
import { SDKProvider} from '@telegram-apps/sdk-react';
import TappingPage from './components/TappingPage';

const App: React.FC = () => {
  // const [userId, setUserId] = useState<string | null>(null);
  

  return (
    <SDKProvider acceptCustomStyles >
      <TappingPage/>
    </SDKProvider>
  );
};

export default App;
