import loginStyles from '../../styles/Login.module.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// useSelector allows us to select anything in the global state ex.. user, message etc.
// useDispatch allows us to dispatch actions like calling register func
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <section className={loginStyles.container}>
        <div className={loginStyles.main}>
          <h1 className={loginStyles.header}>Welcome Back</h1>
          <div className={loginStyles.loginbox}>
            <form onSubmit={onSubmit}>
              <h3 className={loginStyles.loginheader}>Login</h3>
              <div className={loginStyles.userbox}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <label>email</label>
              </div>
              <div className={loginStyles.userbox}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <label>password</label>
              </div>
              <button className={loginStyles.button}>ENGAGE</button>
            </form>
            <div className={loginStyles.notregistered}>
              <a href="/signup">Not Registered? Sign up here!</a>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
