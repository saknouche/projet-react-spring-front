import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homePage/HomePage.jsx";


function App() {

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
