
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
function App() {
      

    // Получение инициализационных данных
    const { initData } = retrieveLaunchParams();
    let userId;
    // Проверка, что initData определен и имеет корректный формат
    if (initData) {
      try {
        // Создание URLSearchParams из строки запроса
        const urlParams = new URLSearchParams(JSON.stringify(initData));
        
        // Получение JSON строки и парсинг ее
        const userJson = urlParams.get('user');
        const user = userJson ? JSON.parse(userJson) : {};
        
        // Извлечение userId
        userId = user.id;

        console.log('User ID:', userId);
      } catch (error) {
        console.error('Ошибка при обработке initData:', error);
      }
    } else {
      console.error('initData не определен');
    }

  return (
    <>
     {userId}
    </>
  )
}

export default App
