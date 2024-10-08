import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2" />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />
      <div>
        <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">
          {" "}
          Sign up{" "}
        </Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link to="/Kanbas/Account/Signin" className="btn btn-primary w-100">
          Sign in
        </Link>
      </div>
    </div>
  );
}
