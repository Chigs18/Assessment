import Input from "./Input";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object({
  username: yup.string().required('Username is required'),
  phone: yup.string().required('Phone Number is required').matches(/^\+?[1-9][0-9]{7,14}$/, 'Invalid phone number'),
  email: yup.string().required('Email id required').email('Email is not valid'),
  password: yup.string().required('Password is required').min(6,'Password must be 6 character'),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must be match"),
})

function App() {

  const {handleSubmit, register, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="Sign-up">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          id="username"
          type="text"
          placeholder="Enter Username"
          label='Username'
          register = {{...register('username')}}
          errorMessage={errors.username?.message}
        />

        <Input
          id="phone"
          type="text"
          placeholder="Enter Phone Number"
          label='Phone'
          register = {{...register('phone')}}
          errorMessage={errors.phone?.message}
        />

        <Input
          id="email"
          type="email"
          placeholder="Enter Email"
          label='Email'
          register = {{...register('email')}}
          errorMessage={errors.email?.message}
        />

        <Input
          id="passworm"
          type="password"
          placeholder="Enter Password"
          label='Password'
          register = {{...register('password')}}
          errorMessage={errors.password?.message}
        />

        <Input
          id="confirm_passworm"
          type="password"
          placeholder="Enter Confirm Password"
          label='Confirm Password'
          register = {{...register('confirmPassword')}}
          errorMessage={errors.confirmPassword?.message}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
