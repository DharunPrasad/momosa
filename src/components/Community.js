

const Community = () => {


  return (
    <form
      action=""
      className="bg-chatbg p-4 w-10/12 mx-auto rounded-xl my-5"

    >
      <p className="text-lg font-semibold text-center mb-4">Enter your Community</p>
      <div className="w-full border-t border-gray-400"></div>
    
          <div className="my-2 ml-3">
            <label className = "flex justify-start items-center">
            <input
        type="text"
        className="block mx-auto rounded-md m-3 text-center w-3/12 h-10 outline-none p-2 border"
      />

            </label>
          </div>

    </form>
  );
};

export default Community;
