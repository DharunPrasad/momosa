import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Scheme = () => {
    return (
        <div className="min-h-screen w-full">
            <Navbar/>
        <div className="bg-chatbg p-3 rounded-lg w-11/12 mx-auto mt-3" >
        <a href = "https://www.myscheme.gov.in/find-scheme/v3" rel="noreferrer" target="_blank" className="">
          <p className="text-primary font-semibold">Scheme for you</p>
          <p className="">This is your scheme</p>
        </a>
      </div>
      </div>
      );
}
 
export default Scheme;