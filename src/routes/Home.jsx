import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () =>{
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    
    return(
        <div className="">
          {/* Navbar Starts */}
            <div className="">
            <nav className="text-black sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-gray-900">
              <Link href="/" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                KNOT.IN
              </Link>
              <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link href="/" className="flex items-center">Home</Link>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link href="/" className="flex items-center">Men</Link>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link href="/" className="flex items-center">Women</Link>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link href="/" className="flex items-center">Blog</Link>
                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link href="/" className="flex items-center">Contact</Link>
                </li>
              </ul>
              <button onClick={()=>{navigate('/signin')}} className="middle none center hidden rounded-lg bg-primary py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-black/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                go to cart
              </button>
              <div onClick={() => setNavOpen(!navOpen)} className="block lg:hidden">
                {
                  (
                    navOpen?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  )
                }
                  
              </div>
            </div>
            <div className={(navOpen?"block h-[calc(44vh)] w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden":"block h-[calc(0vh)] w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden")}>
              <ul className="mt-2 mb-4 flex flex-col gap-2 pb-2 ">
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  <Link className="flex items-center justify-between text-lg mb-3" href="/">
                    Home
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </Link>
                  <Link className="flex items-center justify-between text-lg mb-3" href="/">
                    Men
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </Link>
                  <Link className="flex items-center justify-between text-lg mb-3" href="/">
                    Women
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </Link>
                  <Link className="flex items-center justify-between text-lg mb-3" href="/">
                    Blog
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </Link>
                  <Link className="flex items-center justify-between text-lg" href="/">
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </Link>
                </li>
              </ul>
              <button className="w-full text-white bg-primary py-3 rounded-lg mb-2">Go To Cart</button>
              <button className="w-full text-white bg-primary py-3 rounded-lg">Sign Out</button>
            </div>
          </nav>
          {/* Navbar Ends */}
          <div className="">
            <Banner />
              <div className="lg:flex items-center justify-between mt-10 px-6">
                <Products />
                <Products />
                <Products />
              </div>
            <Footer />
          </div>
        </div>
    </div>
    )
};


export default Home;