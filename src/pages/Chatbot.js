import Age from "../components/Age";
import Name from "../components/Name";
import Navbar from "../components/Navbar";
import Svg from "../components/Svg";
import hug from "../assets/hugging-face.png";
import Gender from "../components/Gender";
import Community from "../components/Community";
import { Link } from "react-router-dom";

const Chatbot = () => {


  return (
    <div className="pb-32 max-h-screen min-h-screen overflow-auto">
     <Navbar/>
     <div className=" m-4 w-10/12 ml-10 relative bg-chatbg rounded-lg p-3 text-lg">
              <Svg />
              <p className="">
                Hello, my name is Momosa, and I'm here to help you
                <img src={hug} className="inline" />
              </p>
            </div>
     <Name/>
     <Age/>
     <Gender/>
     <Community/>
     <Link to = "/scheme" className="block mx-auto w-fit bg-primary text-white py-3 px-5 rounded">Submit</Link>
    </div>
  );
};

export default Chatbot;
