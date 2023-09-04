import CartCard from "../Components/CartCard";
import TotalCard from "../Components/TotalCard";
import Footer from '../Components/Footer';
import Topbar from "../Components/Topbar";

const Cart = () =>{



    return(
        <div className="">
            {/* Navbar Starts */}
            <Topbar />
            {/* Navbar Ends */}
          <div className="lg:flex ">
            <div className="lg:mx-6 w-[calc(100%)] lg:w-[calc(55%)]">
              <CartCard price={600} subCategory={"freaky tshirts"} title={"men solid red full hand tshirts"} imgUrl={"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"}/>
             
            </div>
            <div className="lg:mx-6 w-[calc(100%)] lg:w-[calc(40%)]">
                <TotalCard />
            </div>
          </div>
          <div className="absolute w-full bottom-0">
            <Footer />
          </div>
        </div>
    )
};

export default Cart;