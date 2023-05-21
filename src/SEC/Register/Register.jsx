import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { authContext } from "../../Context/OneContext";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../libs/Hook/useTitle";

const Register = () => {
  const { createUser, googlePopUp, githubPopUp, user } =
    useContext(authContext);
  const [action, setAction] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const from = location?.state?.pathname || "/";
  const [errorData, setErrorData] = useState(null);

  const handleRegister = (e) => {
    useTitle("Register")
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    const name = middle.name.value;
    const imageURL = middle.photoURL.value;
    setAction(true);
    setErrorData(null);
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: imageURL,
        });
        toast.success("Account Successfully Created", {
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
      })
      .catch((err) => {
        setAction(false);
        setErrorData(err);
      });
  };
  const handleGoogle = () => {
    googlePopUp()
        .then((result) => {
            toast.success("Account Successfully Created", {
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
            toast.success("Account Successfully Created", {
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
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an Account for You!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="photoURL"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo URL
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-warning">
              {errorData && <p>{errorData.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className={`flex w-full justify-center btn ${
                  action ? "loading" : ""
                } rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {action ? "Creating Account" : "Create Account"}
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log In to Account
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

export default Register;
