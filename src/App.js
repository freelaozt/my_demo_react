// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
// 路由指向页面
import IndexRoute from './router';

function App() {
  return (
    //切换路由
    <BrowserRouter>
      <div className="App">
          <IndexRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
