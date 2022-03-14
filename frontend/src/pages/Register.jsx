import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
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
          <FaUser /> Register
        </h1>
        <p>Por favor cree una cuenta</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Ingrese un nombre"
              onChange={onChange}
            />
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
            <input
              type="text"
              className="form-control"
              id="password"
              name="password2"
              value={password2}
              placeholder="Ingrese nuevamente la contraseña"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
              <button type="submit" className="btn btn-block">Registrarse</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
