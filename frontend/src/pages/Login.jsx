import { useState, useEffect } from "react";
import { FaSignInAlt} from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
      }))
  }

  const onSubmit = (e) => {
      e.preventDefault()
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Ingrese un email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Ingrese una contraseña"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
              <button type="submit" className="btn btn-block">Ingresar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
