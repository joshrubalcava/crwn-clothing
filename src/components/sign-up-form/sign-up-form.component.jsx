import { useState, /* useContext */ } from "react";

import FormInput from "../form-input/form-input.component.";
import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../context/user.context";

import { SignUpContainer } from './sign-up-form.styles';

const defaultFormValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //confirm password matches
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // see if we authenticated the username and password
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      //create a user document
      // setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered error', err);
      }
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormFields({ ...formFields, [ name ]: value });
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type="email"
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type="password"
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type="password"
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button buttonType='submit' type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;