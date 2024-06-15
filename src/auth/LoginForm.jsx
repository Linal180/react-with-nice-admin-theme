import { useState } from "react";
import { apiPost } from "../axios";
import { validatePassword, validateUsername } from "../utils";
import { INVALID_EMAIL_OR_PASSWORD, TOKEN } from "../constants";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');


  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameValidation = validateUsername(username);
    const passwordValidation = validatePassword(password);

    setUsernameError(usernameValidation ? usernameValidation : "");
    setPasswordError(passwordValidation ? passwordValidation : '');

    if (usernameValidation || passwordValidation) {
      return;
    }

    try {
      const response = await apiPost('users/token/', {
        email: username,
        password
      })

      if (!response?.access) {
        setError(response.details ? response.details : INVALID_EMAIL_OR_PASSWORD)
      }

      if (response.access) {
        localStorage.setItem(TOKEN, response.access);
        window.location = '/profile'
      }
    } catch (error) {
      setError(INVALID_EMAIL_OR_PASSWORD)
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit}
                    >
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={() => setUsernameError(validateUsername(username))}
                            required
                          />
                          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => setPasswordError(validatePassword(password))}
                          required
                        />
                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value={remember}
                            id="rememberMe"
                            onChange={(e) => setRemember(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don &apos; t have account?{" "}
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
