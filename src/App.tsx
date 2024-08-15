
import { SDKProvider} from '@telegram-apps/sdk-react';
import TappingPage from './components/TappingPage';
import './App.css'

// import Test from './components/Test';

const App: React.FC = () => {
  // const [userId, setUserId] = useState<string | null>(null);
  
  return (
    // <>
    // <Test/>
    // </>
    
    <SDKProvider acceptCustomStyles >
      
      <TappingPage/>
    </SDKProvider>
  );
};

export default App;
