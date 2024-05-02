const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="w-full p-6 rounded-md shadow-xl bg-green-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  bg-gradient-to-br from-blue-400 ">
          <h1 className="text-3xl text-slate-100 font-thing text-left">
            Login
            <span className="ml-1 font-bold text-slate-100 normal-case ">
              ChatApp
            </span>
          </h1>

          <form className=" flex flex-col ">
            <div>
              <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
                email
              </label>
              <input
                type="text"
                placeholder="enter your email"
                className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="block mt-4 text-sm font-thing text-slate-50 text-left pb-2">
                password
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className="text-black input input-bordered w-full max-w-xl border-blue-700 bg-white
                "
              />
            </div>
            <a
              href="#"
              className="block mt-2 text-sm font-thing text-slate-300 hover:text-slate-100 ease-in-out[500ms] text-center p-4"
            >
              forgot password?
            </a>
            <div className="flex justify-around">
              <button
                className=" 
            w-80 
            btn px-10 
            text-slate-600 
            mt-3  
            bg-slate-300
            bg-gradient-to-tl from-blue-300         
            bg-clip-padding 
            backdrop-filter 
            backdrop-blur-sm 
            -opacity-50  
            shadow-xl btn-md  
            hover:bg-primary 
            hover:text-white border-none"
              >
                login
              </button>
            </div>
          </form>
        </div>
        <button
          className="
            w-80 
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
      </div>
    </>
  );
};
// ? Starter code:
// function Login() {
//     return (
//       <>
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//           <div className="w-full p-6 rounded-md shadow-xl bg-green-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  bg-gradient-to-br from-blue-400 ">
//             <h1 className="text-3xl text-slate-100 font-thing text-left">
//               Login
//               <span className="ml-1 font-semibold text-slate-100 normal-case ">
//                 ChatApp
//               </span>
//             </h1>

//             <form className=" flex flex-col ">
//               <div>
//                 <label className="block mt-4 text-sm font-thing text-slate-200 text-left pb-2">
//                   email
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="enter your email"
//                   className="input input-bordered w-full max-w-xl border-blue-700 bg-white"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="block mt-4 text-sm font-thing text-slate-50 text-left pb-2">
//                   password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="enter your password"
//                   className="text-black input input-bordered w-full max-w-xl border-blue-700 bg-white
//                   "
//                 />
//               </div>
//               <a
//                 href="#"
//                 className="block mt-2 text-sm font-thing text-slate-300 hover:text-slate-100 ease-in-out[500ms] text-center p-4"
//               >
//                 forgot password?
//               </a>
//               <div className="flex justify-around">
//                 <button className="  btn px-10 text-white shadow-xl   btn-md mt-2 hover:bg-blue-600 hover:text-white border-none">
//                   login
//                 </button>
//                 <button className="  btn px-10 text-white mt-2  shadow-xl btn-md  hover:bg-pink-500 hover:text-white border-none">
//                   signin
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   }

export default Login;
