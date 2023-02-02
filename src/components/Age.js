import { useEffect, useRef } from "react";

const Age = ({ data, setAge, setDisplayIncome, age }) => {

    const handleChange = (e) => {
        setAge(e.target.value)

    }



    return (
      
    <form action="" className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5">
      <p className="text-lg font-semibold text-center mb-4">Enter Your Age</p>
      <div className="w-full border-t border-gray-400"></div>
      <input
        type="number"
        value={age}
  
        onChange = {handleChange}
        className="block mx-auto rounded-md m-3 text-center w-3/12 h-10 outline-none p-2 border"
      />

    </form>
  );
};

export default Age;
