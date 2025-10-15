import { type FC } from "react";

const Auth:  FC = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-900 items-center justify-center">
        <div className="border-b border-white/10 pb-12 w-[400px]">
          <h2 className="text-base font-semibold text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>
                       
                        <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                password
                
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

          </div>
          <div className="d-flex">
                                              <button className="text-red-50 mt-5   ms-5 justify-center items-center"> login</button>


          </div>

        </div>

      </div>

    </>
  );
};

export default Auth;
