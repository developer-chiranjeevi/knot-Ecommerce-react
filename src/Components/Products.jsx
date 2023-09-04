


const Products = ({imgUrl,category}) =>{



    return(
        <div className="mt-5 lg:mt-0 relative w-[calc(100%)] lg:w-[calc(30%)] lg:hover:scale-110 duration-300">
            <img src={imgUrl} className="rounded-lg grayscale hover:grayscale-[calc(0%)] duration-300"/>
            <div className="absolute w-full bottom-0 text-5xl text-white uppercase">
                <div className="px-6 py-2 bg-black text-white">
                    <h1 className="text-start text-4xl lg:text-2xl">{category}</h1>
                </div>
            </div>
        </div>
    )
};

export default Products;