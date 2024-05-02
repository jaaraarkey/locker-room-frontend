import React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-xl bg-green-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  bg-gradient-to-br from-blue-400">
        <h1 className="text-3xl text-slate-100 font-thing text-left">
          Signup
          <span className="ml-1 font-bold text-slate-100 normal-case ">
            ChatApp
          </span>
        </h1>

        <form className=" flex flex-col ">
          <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
            nickname
          </label>
          <input
            type="text"
            placeholder=" your nickname..."
            className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
          ></input>

          <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
            email
          </label>
          <input
            type="text"
            placeholder="your email..."
            className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
          ></input>

          <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
            password
          </label>
          <input
            type="password"
            placeholder="enter your password..."
            className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
          ></input>

          <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
            confirm password
          </label>
          <input
            type="password"
            placeholder="enter your password..."
            className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
          ></input>
          <button
            className="
            w-full 
            btn px-10 
            text-white 
            mt-10  
            bg-pink-300
            bg-gradient-to-bl from-blue-400         
            bg-clip-padding 
            backdrop-filter 
            backdrop-blur-sm 
            opacity-90  
            shadow-xl btn-md  
            hover:bg-primary 
            hover:text-white border-none"
          >
            signin
          </button>
        </form>
      </div>
    </div>
  );
}

// ? Starter code:
// function Signup() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-md shadow-xl bg-green-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  bg-gradient-to-br from-blue-400">
//           <h1 className="text-3xl text-slate-100 font-thing text-left">
//             Signup
//             <span className="ml-1 font-bold text-slate-100 normal-case ">
//               ChatApp
//             </span>
//           </h1>

//           <form className=" flex flex-col ">
//             <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
//               nickname
//             </label>
//             <input
//               type="text"
//               placeholder=" your nickname..."
//               className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
//             ></input>

//             <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
//               email
//             </label>
//             <input
//               type="text"
//               placeholder="your email..."
//               className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
//             ></input>

//             <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
//               password
//             </label>
//             <input
//               type="password"
//               placeholder="enter your password..."
//               className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
//             ></input>

//             <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
//               confirm password
//             </label>
//             <input
//               type="password"
//               placeholder="enter your password..."
//               className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
//             ></input>
//             <button
//               className="
//               w-full
//               btn px-10
//               text-white
//               mt-10
//               bg-pink-300
//               bg-gradient-to-bl from-blue-400
//               bg-clip-padding
//               backdrop-filter
//               backdrop-blur-sm
//               opacity-90
//               shadow-xl btn-md
//               hover:bg-primary
//               hover:text-white border-none"
//             >
//               signin
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

export default Signup;
