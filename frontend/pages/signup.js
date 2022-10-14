import { useState } from 'react';
import signupStyles from '../styles/Signup.module.css';

const signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;
  return (
    <section className={signupStyles.container}>
      <div className={signupStyles.main}>
        <h1 className={signupStyles.header}>
          Elevate your study habits today.
        </h1>
        <div className={signupStyles.signupbox}>
          <form>
            <h3 className={signupStyles.signupboxheader}>Register Now</h3>
            <div className={signupStyles.userbox}>
              <input type="text" name required />
              <label>username</label>
            </div>
            <div className={signupStyles.userbox}>
              <input type="email" name required />
              <label>email</label>
            </div>
            <div className={signupStyles.userbox}>
              <input type="password" name required />
              <label>password</label>
            </div>
            <div className={signupStyles.userbox}>
              <input type="password" name required />
              <label>confirm password</label>
            </div>
            <button className={signupStyles.button}>ENGAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default signup;
