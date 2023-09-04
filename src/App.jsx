import Home from './routes/Home';
import {Routes, Route} from "react-router-dom";
import Signin from './routes/Signin';
import SignUp from './routes/SignUp';
import Cart from './routes/Cart';
import ProductDetails from './routes/ProductDetails';
import ForHim from './routes/Forhim';

const App = () => {

  return (
   <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/forhim" element={<ForHim />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
   </div>
  )
}

export default App;
