import { useEffect, useRef } from "react";

const Name = ({ data, setName, setDisplayIncome, Name }) => {
    const NameInput = useRef()
    const NameForm = useRef();

    const handleChange = (e) => {
        setName(e.target.value)

    }


    useEffect(() => {
      NameInput.current.focus()
    },[])
 
    return (
      
    <form action="" className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5" ref = {NameForm}>
      <p className="text-lg font-semibold text-center mb-4">Enter Your Name</p>
      <div className="w-full border-t border-gray-400"></div>
      <input
        type="text"
        value={Name}
        ref = {NameInput}
        onChange = {handleChange}
        className="block mx-auto rounded-md m-3 text-center w-3/12 h-10 outline-none p-2 border"
      />

    </form>
  );
};

export default Name;
