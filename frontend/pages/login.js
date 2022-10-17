import loginStyles from '../styles/Login.module.css';

const login = () => {
  return (
    <section className={loginStyles.container}>
      <div className={loginStyles.main}>
        <h1 className={loginStyles.header}>Welcome Back</h1>
        <div className={loginStyles.loginbox}>
          <form>
            <h3 className={loginStyles.loginheader}>Login</h3>
            <div className={loginStyles.userbox}>
              <input type="text" name required />
              <label>username</label>
            </div>

            <div className={loginStyles.userbox}>
              <input type="password" name required />
              <label>password</label>
            </div>

            <button className={loginStyles.button}>ENGAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default login;
