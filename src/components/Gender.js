

const Gender = () => {


  return (
    <form
      action=""
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"

    >
      <p className="text-lg font-semibold text-center mb-4">Enter your gender</p>
      <div className="w-full border-t border-gray-400"></div>
    
          <div className="my-2 ml-3 flex flex-col gap-2">
          <label className = "flex justify-start items-center">
              <input type="radio"  name = "gender" className="gender-input" id = "male"/>
              <span className="ml-2">Male</span>
            </label>
            <label className = "flex justify-start items-center">
              <input type="radio"  name = "gender" className="gender-input" id = "female"/>
              <span className="ml-2">Female</span>
            </label>
            <label className = "flex justify-start items-center">
              <input type="radio"  name = "gender" className="gender-input" id = "other"/>
              <span className="ml-2">Other</span>
            </label>
          </div>

    </form>
  );
};

export default Gender;
