import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Popup from './Popup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popup />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
