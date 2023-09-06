

const Banner = () =>{



    return(
            <div className="relative">
                <img className="lg:h-[calc(70vh)] lg:w-full" src="./bannerImg.jpg" alt="banner background image" />
                <div className="absolute w-full flex flex-col items-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                    <div className="backdrop-grayscale px-6 py-6">
                        <h1 className="text-center lg:text-start text-sm lg:text-4xl">Buy Latest Fashon Products at <br></br><span className="lg:bg-black">knot.in</span></h1>
                        <button className="mt-6 text-sm relative left-1/2 -translate-x-1/2 left border-2 border-white px-6 py-2 lg:px-14 inline-flex items-center justify-between lg:hover:bg-primary duration-300">
                        Explore Store
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
    )
};


export default Banner;