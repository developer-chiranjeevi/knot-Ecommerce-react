


const Products = () =>{



    return(
        <div className="mt-5 lg:mt-0 relative w-[calc(100%)] lg:w-[calc(30%)] lg:hover:scale-110 duration-300">
            <img src="./product1.jpg" className="rounded-lg grayscale hover:grayscale-[calc(0%)] duration-300"/>
            <div className="absolute w-full flex flex-col items-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                <div className="px-6 py-6">
                    <h1 className="text-start text-4xl lg:text-2xl">tShirts</h1>
                    <p className="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
        </div>
    )
};

export default Products;