import { useState } from "react";
import { useDispatch } from 'react-redux';

import FormInput from "../form-input/form-input.component.";
import Button from "../button/button.component";

import { SignInContainer } from "./sign-in-form.styles";
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';

const defaultFormValues = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [ formFields, setFormFields ] = useState(defaultFormValues);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // see if we authenticated the username and password
    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break
        default:
          console.log(err);
      }
    }
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <SignInContainer className='sign-in-container'>
      <h1>Sign In Page</h1>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit' >Sign in</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google Sign In</Button>
        </div>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;