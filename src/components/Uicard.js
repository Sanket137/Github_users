import React, { useState } from "react";
// import axios from "axios";

const Uicard = () => {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState([]);
  
  //   const [error,setError] = useState(false)
 

  const getUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      // console.log(res.status);

      setUserData(data);
      setUserName("");
      
    } catch (err) {
      // console.log(err);
    }
  };

  
  
  return (
    <div>
      {/* Input */}
      <form className="w-full max-w-sm" onSubmit={getUser}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter username"
            aria-label="Full name"
          />
          <button
            onClick={getUser}
            className="flex-shrink-0 bg-[#8AAAE5] hover:bg-[#4684f6] border-[#8AAAE5] hover:border-[#4684f6] text-sm border-4 text-black py-1 px-2 rounded"
            type="button"
          >
            Search 
          </button>
        </div>
      </form>

      {/* uicard */}

      <div className="card_group mt-6">
        <div className="w-sm rounded bg-[#8AAAE5] overflow-hidden shadow-lg lg:flex lg:w-full">
          <img
            className="w-[60%] mx-auto mt-5 rounded-[50%] lg:w-[30%] lg:py-[5rem]"
            src={userData.avatar_url}
            alt="Enter Username"
          />
          <div className="px-6 py-4 lg:my-auto">
            <div className="font-bold text-black px-10 py-2  bg-gray-200 rounded-full text-center text-xl mb-2">{userData.login}</div>
            <p className="text-black text-center px-10 py-1 bg-gray-200 rounded-full text-base">{userData.name}</p>
          </div>
          <div className="px-6 pt-4 pb-2 lg:my-auto">
          <div>Public repos</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {userData.public_repos}
            </span>
            <div>Public gists</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {userData.public_gists}
            </span>
            <div>Profile created on</div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               
              {userData.created_at}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uicard;
