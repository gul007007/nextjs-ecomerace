"use client";

import { useState } from "react";

const SignupPage = () => {
  // (To collect data from input fields)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // (set error messages to show user)
  const [errorMessageOne, setErrorMessageOne] = useState("");
  const [errorMessageTwo, setErrorMessageTwo] = useState("");
  const [errorMessageThree, setErrorMessageThree] = useState("");
  const [errorMessageFour, setErrorMessageFour] = useState("");

  

  // This will trigger on button click and submit form.
  const signUpHandler = () => {
    const errors = {};
    if (!username) errors.username = "Username is required.";

    if (!email) errors.email = "Gmail is required.";
    if (!password) errors.password = "Password is required.";

    if(!confirmPassword) errors.confirmPassword = "Confirm password is required.";
    if (password !== confirmPassword) errors.notEqual = "password and confirm password do not match.";

    if(Object.keys(errors).length > 0) {
      setErrorMessageOne(errors.username || "");
      setErrorMessageTwo(errors.email || "");
      setErrorMessageThree(errors.password || "");
      setErrorMessageFour(errors.confirmPassword || errors.notEqual || "");
      
      return;
    }

    if (email) {
      const regExpression = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@gmail\.com$/;
      if (regExpression.test(email)) return;
      else setErrorMessageTwo("Invalid email format.");
    }

    // (reseting all error messages)
    setErrorMessageOne("");
    setErrorMessageTwo("");
    setErrorMessageThree("");
    setErrorMessageFour("");

    const signup_data = [username, email, password, confirmPassword];
    console.log("data => ", signup_data);
    // (resetting fields)
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="h-screen">
      {/* (Form start) */}
      <div className="h-[68%] flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold py-6">Sign Up</h2>

        <form
          className="w-full min-w-[297px]
          max-w-[639px] sm:w-[640px] sm:max-w-3xl mx-2 flex flex-col gap-5 h-full px-2"
        >
          {/* (Field-1) */}
          {errorMessageOne ? (
            <div className="-mb-7 text-base font-bold px-1">
              {errorMessageOne}
            </div>
          ) : (
            ""
          )}

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />

          {/* (Field-2) */}
          {errorMessageTwo ? (
            <div className="-mb-7 text-base font-bold px-1">
              {errorMessageTwo}
            </div>
          ) : (
            ""
          )}

          <input
            type="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />

          {/* (Field-3) */}
          {errorMessageThree ? (
            <div className="-mb-7 text-base font-bold px-1">
              {errorMessageThree}
            </div>
          ) : (
            ""
          )}

          <input
            type="password"
            value={password}
            minLength="5"
            maxLength="10"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />

          {/* (Field-4) */}
          {errorMessageFour ? (
            <div className="-mb-7 text-base font-bold px-1">
              {errorMessageFour}
            </div>
          ) : (
            ""
          )}


          <input
            type="password"
            minLength="5"
            maxLength="10"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="py-2 px-4 text-lg rounded-md text-gray-800 my-2 border"
          />
        </form>

        <button
          type="button"
          onClick={signUpHandler}
          className="bg-blue-600 text-white py-2 rounded-md my-[2rem] lg:my-[1.7rem] w-[95%] max-w-[620px]"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;