import React from "react";
import axios from "axios";

const URL = "https://sb9mocqhba.execute-api.us-east-2.amazonaws.com/prod/"

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setName(name.trim());
    setEmail(email.trim());
    setUsername(username.trim());
    setPassword(password.trim());

    if (
      username === "" ||
      password === "" ||
      email === "" ||
      name === ""
    ) {
      setErrorMessage("Please fill all the fields");
      return
    }
    if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters");
        return
    }

    const requestConfig = {
        headers: {
            "x-api-key": "d11D4qJK576istSFcI6Gj972gO1EIKjU8zLkO0YT",
        },
    };
    const requestBody = {
        name: name,
        email: email,
        username: username,
        password: password,
    };

    axios.post(URL+"register", requestBody, requestConfig).then((response) => {
        setErrorMessage("Account created successfully");
    }).catch((error) => {

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
        <form class="LgnForm max-w-sm mx-auto shadow-2xl bg-white rounded-lg pt-6 pb-8 mb-4 px-8" onSubmit={submitHandler}>
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
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                class="login-register-textBox focus:outline-none focus:shadow-outline apperance-none"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                class="login-register-textBox focus:outline-none focus:shadow-outline apperance-none"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                value={'Create Account'}
              >
              </input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
