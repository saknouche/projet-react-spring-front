import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homePage/HomePage.jsx";
import {ToastContainer} from 'react-toastify';

function App() {

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer toastStyle={{ backgroundColor: "#f0f9f3" }} />
    </div>
  )
}

export default App
