import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/controlSlice';
import "./1Login.css"

// here I used the form and validation logic form previous task, and and integrated it so that the data is sent to the store

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if  (values.password !== values.password2){
    errors.password2 = "Passwords cannot be confirmed ";
  }else if (!/[A-Z]/.test(values.password)) {
    errors.password= 'Must include at least one uppercase letter';
  }else if(!/[a-z]/.test(values.password)) {
    errors.password = 'Must include at least one lowercase letter';
  }else if(!/[0-9]/.test(values.password)) {
    errors.password = 'Must include at least one number';
  }
  else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password)){
    errors.password = 'Must include a special character'
  }

//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

  return errors


};

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    },
    validate,
    onSubmit: values => {
      const user = {
        username: values.firstName,
        lastName: values.lastName,
        email: values.email,
        logged: true,
      };
      dispatch(setUser(user)); 
      // Save to sessionStorage as a string
      console.log("Saving to sessionStorage:", values);
      sessionStorage.setItem('user', JSON.stringify(values));
      alert("User info saved!");
    },
  });

  return (
    <div className='Home-registration'>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <div className='Home-input' >
        <label className='Home-input-label' htmlFor='firstName'>First Name</label>
        <input
          className='Home-input-write'
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
        </div>
        <div className='Home-input' >
        <label className='Home-input-label' htmlFor='lastName'>Last Name</label>
        <input
        className='Home-input-write'
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
        </div>
        <div className='Home-input' >
        <label className='Home-input-label' htmlFor='email'>Email Address</label>
        <input
          className='Home-input-write'
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
        </div>
        <div className='Home-input' >
        <label className='Home-input-label' htmlFor='password'>Password</label>
        <input
          className='Home-input-write'
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password} 
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
        </div>
        <div className='Home-input' >
        <label className='Home-input-label' htmlFor='password2'>Password 2</label>
        <input
          className='Home-input-write'
          id='password2'
          name='password2'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password2} 
        />
        {formik.touched.password2 && formik.errors.password2 && (
          <div>{formik.errors.password2}</div>
        )}
        </div>        

        <button className='Login-loginbutton' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
