import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
function App() {
  const router = useRoutes(routes)
  return (
   <>
   <div>
    {router}

   </div>
   </>
  );
}

export default App;
