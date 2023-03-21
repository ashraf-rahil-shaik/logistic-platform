
import './App.css';
import SignInPage from './components/Signin';
import { Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Routes>
                <Route path='/' element ={<SignInPage/>} />
      
              </Routes>
    </div>
  );
}

export default App;
