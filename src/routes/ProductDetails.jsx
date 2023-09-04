import { useParams } from "react-router";
import Topbar from "../Components/Topbar";
import Footer from '../Components/Footer';
import ProductImages from "../Components/ProductImages";

const ProductDetails = () =>{
    const {id} = useParams();
    
    return(
        <div className="">
            {/* Navbar Starts */}
            <Topbar />
            {/* Navbar Ends */}
            {/*Product Starts */}
            <div className="lg:h-[calc(70vh)] lg:flex p-4">
                    <div className="lg:hidden">
                        <ProductImages/>
                    </div>
                    <div className="hidden w-full lg:w-1/2 lg:flex flex-wrap ">
                        {/* Product image container */}
                        <img className="lg:h-[calc(70vh)] mr-4" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="product image" />
                        <img className="lg:h-[calc(70vh)] " src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="product image" />
                    </div>
                    
                    <div className="w-full mt-6 lg:mt-0 lg:w-1/2 flex flex-col justify-end">
                        {/* Product description container */}
                        <h1 className="uppercase bg-primary text-xs text-white w-fit px-4 py-2 rounded-lg">product id : {id}</h1>
                        <div className="mt-3">
                            <h1 className="uppercase text-xl text-shade1">freaky tshirts</h1>
                            <h1 className="capitalize text-2xl text-primary mt-2">men solid black half hand tshirts</h1>
                            <hr className="h-px bg-shade2 my-5" /> 
                            <h1 className="text-2xl mt-2 "><span className="uppercase text-shade1 text-sm mr-2">mrp</span>{`${600}₹`}</h1>
                            <h1 className="uppercase text-sm text-shade1 mt-1">inclusive all taxes</h1>
                        </div>
                        <div className="mt-10">
                            <button className="uppercase border-2 border-shade2 py-2 px-4 lg:py-4 lg:px-6 rounded-lg mr-2">s</button>
                            <button className="uppercase border-2 border-shade2 py-2 px-4 lg:py-4 lg:px-6 rounded-lg mr-2">m</button>
                            <button className="uppercase border-2 border-shade2 py-2 px-4 lg:py-4 lg:px-6 rounded-lg mr-2">l</button>
                            <button className="uppercase border-2 border-shade2 py-2 px-4 lg:py-4 lg:px-6 rounded-lg mr-2">xl</button>
                            <button className="uppercase border-2 border-shade2 py-2 px-4 lg:py-4 lg:px-6 rounded-lg mr-2">xll</button>
                        </div>
                        <div className="">
                            <button className="uppercase py-3 rounded-lg bg-primary hover:bg-secondary duration-300 w-full text-white mt-6">add to cart</button>
                        </div>

                    </div>
            </div>
            {/*Product Ends */}
            {/*Footer Starts */}
                <Footer />
            {/*Footer Ends */}
        </div>
       
    )
};


export default ProductDetails;