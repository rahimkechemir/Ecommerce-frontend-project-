import { Route, Routes, useParams } from "react-router-dom";
import BtmHeader from "./component/header/BtmHeader.jsx";
import TopHeader from "./component/header/TopHeader.jsx";
import Home from "./page/home/Home.jsx";
import ProductDetails from "./page/home/productdetails/ProductDetails.jsx"
import Cart from "./page/home/cart/Cart.jsx"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Scrolltop from "./component/Scrolltop.jsx";
import { AnimatePresence } from "framer-motion";
import Categorypage from "./page/categorypage/Categorypage.jsx";
import Searchresults from "./page/Searchresults.jsx";
import Favorites from "./page/favorites/Favorites.jsx";
function App() {

  return (
    <><header>
      <TopHeader />
      <BtmHeader />
    </header>
      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px'
        }
      }} />

      <Scrolltop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/search' element={<Searchresults />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/category/:category' element={<Categorypage />} />

        </Routes>
      </AnimatePresence>





    </>

  )

}
export default App;