import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL, USER_AVATAR } from '../utils/constants'
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/useSlice';


const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toogleSignInForm = () => {
    setIsSignInForm(!IsSignInForm)
  }

  const handleButtonClick = () => {
    //Validate
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }))
          }).catch((error) => {
            seterrorMessage(error.message);
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "_" + errorMessage)
          // ..
        });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "_" + errorMessage)

        });

    }
  }

  return (
    <div>

      <Header />

      <div className='absolute h-max w-full'>
        <img className="" src={BG_URL} alt="logo" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        className='text-white absolute p-8 bg-black w-4/12 m-36 mx-auto left-0 right-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm &&
          <input
            ref={name}
            className='p-4 my-4 w-full rounded-lg bg-gray-700 border border-gray-500'
            type='text'
            placeholder='Full Name' />}
        <input
          ref={email}
          className='p-4 my-4 w-full rounded-lg bg-gray-700 border border-gray-500'
          type='text'
          placeholder='Email Address' />
        <input
          ref={password}
          className='p-4 my-4 w-full rounded-lg bg-gray-700 border border-gray-500'
          type='password'
          placeholder='Password' />
        <p className='text-red-500 font-semibold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4 my-6 w-full bg-red-600 rounded-lg hover:bg-red-500'
          onClick={handleButtonClick}>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {IsSignInForm &&
          <p className='pt-4'>New to Netflix?</p>}
        {IsSignInForm &&
          <p className='cursor-pointer font-semibold hover:underline' onClick={toogleSignInForm}>Sign Up Now.</p>}
        {!IsSignInForm &&
          <p className='pt-4'>Already a User?</p>}
        {!IsSignInForm &&
          <p className='cursor-pointer font-semibold hover:underline' onClick={toogleSignInForm}>Sign In Now...</p>}
      </form>
    </div >

  )
}

export default Login
