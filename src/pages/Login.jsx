import React from "react";
import axios from "axios";
import { setUserSession } from "../service/AuthService";

const URL = "https://sb9mocqhba.execute-api.us-east-2.amazonaws.com/prod/";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setEmail(email.trim());
    setPassword(password.trim());

    if (password === "" || email === "") {
      setErrorMessage("Please fill all the fields");
      return;
    }
    const requestConfig = {
      headers: {
        "x-api-key": "d11D4qJK576istSFcI6Gj972gO1EIKjU8zLkO0YT",
      },
    };
    const requestBody = {
      email: email,
      password: password,
    };

    axios
      .post("https://sb9mocqhba.execute-api.us-east-2.amazonaws.com/prod/login", requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        // props.history.push('/home');
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div class="container px-4 max-w-6xl mx-auto my-8">
      <div class="w-full max-w-xl mx-auto">
        <form
          class="LgnForm max-w-sm mx-auto shadow-2xl bg-white rounded-lg pt-6 pb-8 mb-4 px-8"
          onSubmit={submitHandler}
        >
          <div class="MskForm">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                class="login-register-textBox focus:outline-none focus:shadow-outline apperance-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                class="login-register-textBox focus:outline-none focus:shadow-outline apperance-none"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            {errorMessage && <h5 class="text-red-600">{errorMessage}</h5>}

            <div class="flex items-center justify-between">
              <input
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                value={"Sign In"}
              ></input>
            </div>
            <p class="mt-2 text-black-500 text-xs">
              Don't have an account? <br />
              <a href="/register" class="text-blue-700 font-bold py-4">
                Create an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
