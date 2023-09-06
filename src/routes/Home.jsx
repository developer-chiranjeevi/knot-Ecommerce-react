import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import Topbar from "../Components/Topbar";

const Home = () =>{

    
    return(
        <div className="">
          {/* Navbar Starts */}
            <Topbar />
          {/* Navbar Ends */}
          <div className="">
            <Banner />
              <div className="lg:flex items-center justify-between mt-10 px-6">
                <Products category={"tshirts"} imgUrl={"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"}/>
                <Products category={"tracks"} imgUrl={"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Products category={"crop top"} imgUrl={"https://images.unsplash.com/photo-1541600779338-df49cc24f2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvcHMlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"}/>
              </div>
            <Footer />
          </div>
        </div>
    )
};


export default Home;