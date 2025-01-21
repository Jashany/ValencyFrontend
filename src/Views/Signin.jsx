import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "admin@gmail.com") {
      router("/admin");
    } else if (email == "user@gmail.com") {
      router("/dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-PrimaryBlack bg-PrimaryWhite flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center font-semibold dark:text-white text-black text-lg">
          Welcome
        </h2>
        <p className="mt-1 text-center dark:text-PrimaryGrayTextDark text-slate-100">
          Login to continue
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-white text-slate-800"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="johndoe@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-4 border-none bg-[#1D1D1D] dark:text-white bg-TertiaryWhite rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium dark:text-white text-slate-800"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="•••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-4 border-none bg-[#1D1D1D] dark:text-white text-black bg-TertiaryWhite rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 hover:text-white bg-gradient-to-r from-[#AAE6E7] to-[#95E362] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <a href="/sign-up">
          <p className="text-center text-gray-600 hover:underline cursor-pointer">
            Don&apos;t have an account? Sign Up
          </p>
        </a>
      </div>
    </div>
  );
};

export default SigninPage;
