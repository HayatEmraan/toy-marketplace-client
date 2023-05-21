import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { authContext } from "../../Context/OneContext";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../libs/Hook/useTitle";

const LogIn = () => {
  useTitle("LogIn");
  const { logIn, googlePopUp, githubPopUp, user } = useContext(authContext);
  const [action, setAction] = useState(false);
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    setAction(true);
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        toast.success("Signed In Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
            navigate(from)
        }, 3000);
      })
      .catch((err) => {
        setAction(false);
        console.log(err);
      });
  };
  const handleGoogle = () => {
    googlePopUp()
        .then((result) => {
            toast.success("Signed In Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate(from);
            }, 3000);
            console.log(result.user)
        })
      .catch((err) => console.log(err));
  };
  const handleGithub = () => {
    githubPopUp()
        .then((result) => {
            toast.success("Signed In Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate(from);
            }, 2000);
            console.log(result.user)
        })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center btn ${
                  action ? "loading" : ""
                } rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {action ? "Signing Account" : "Sign In"}
              </button>
            </div>
          </form>
          <div className="flex flex-col w-full border-opacity-50 mt-6">
            <div className="divider">OR</div>
            <div className="grid place-items-center">
              <div className="text-4xl flex gap-6">
                <span onClick={handleGoogle} className="cursor-pointer">
                  <FcGoogle />
                </span>
                <span onClick={handleGithub} className="cursor-pointer">
                  <BsGithub className="w-8" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default LogIn;
