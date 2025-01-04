import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen">
      {/* (Form start) */}
      <div className="h-96 flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold py-6">Log In</h2>
        <form
          className="w-full min-w-[297px]
          max-w-[639px] sm:w-[640px] sm:max-w-3xl mx-2 flex flex-col gap-5 px-2"
        >
          

          {/* (Field-1) */}
          <input
            type="email"
            placeholder="Email"
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />

          {/* (Field-2) */}
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />

          
        </form>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md  w-[95%] max-w-[620px] mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
