import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
        {/* Header Start */}
        <div>
          <h1
            className="text-center py-2"
            style={{ fontSize: "50px", fontFamily: "serif"}}
          >
            Login
          </h1>
        </div>
        {/* Header End */}

        {/* Login Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-md-8">
                <form>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div class="form-check m-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault" style={{color: "#fff"}}>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="login-btn btn btn-dark w-100 py-3">
                    Log in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Login End */}

        <Footer />
    </>
  );
};

export default Login;
