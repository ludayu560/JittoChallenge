import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jitto Challenge
              </span>
            </a>

            <div className="hidden w-full md:block md:w-auto">
              <ul class="navbarContainer">
                <li>
                  <NavLink exact className="navbarElement" to="/">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarElement" to="/register">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarElement" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbarElement" to="/Cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
