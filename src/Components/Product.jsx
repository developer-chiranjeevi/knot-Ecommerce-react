


const Product = () =>{


    return(
        <div className="relative w-[calc(48%)] lg:mx-5 mt-10 flex lg:w-[calc(25%)] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src="./tshirt.jpg" alt="img-blur-shadow" />
            </div>
            <div className="p-6">
                <h1 className="uppercase text-shade1 mt-4">freaky tshirts</h1>
                <h1 className="capitalize lg:text-2xl mt-2">men solid red full hand tshirts</h1>
                <h1 className="mt-4">{`₹ ${600}`}</h1>
            </div>
        </div>

    )
};


export default Product;