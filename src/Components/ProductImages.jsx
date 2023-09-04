import {Carousel} from "@material-tailwind/react";




const ProductImages = () =>{



    return(
        <div className="">
            <Carousel>
                <img className="md:w-full lg:w-fit lg:h-[calc(70vh)] mr-4" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="product image" />
                <img className="md:w-full lg:w-fit lg:h-[calc(70vh)] " src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="product image" />
            </Carousel>
        </div>
    )
};


export default ProductImages;