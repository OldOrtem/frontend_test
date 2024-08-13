
import { useLayoutEffect } from 'react';
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
function App() {
  const [userId, setUserId] = useState(0);
  useLayoutEffect(()=>{
    const { initData } = retrieveLaunchParams();
    // Проверка, что initData определен и имеет корректный формат
    if (initData) {
      try {
        // Создание URLSearchParams из строки запроса
        const urlParams = new URLSearchParams(initData);
        
        // Получение JSON строки и парсинг ее
        const userJson = urlParams.get('user');
        const user = userJson ? JSON.parse(userJson) : {};
        
        // Извлечение userId
        setUserId(user.id);

        console.log('User ID:', userId);
      } catch (error) {
        console.error('Ошибка при обработке initData:', error);
      }
    } else {
      console.error('initData не определен');
    }
  },[])
  

    // Получение инициализационных данных
    

  return (
    <>
     {userId||0}
    </>
  )
}

export default App
