import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/useSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        alt="logo" src={LOGO} />
      {user &&
        <div className='flex p-2 m-2'>
          {showGptSearch && (<select
            className="p-2 mr-10 bg-gray-700 text-white rounded-md"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button className='mr-11'
            onClick={handleGptSearch}>
            {!showGptSearch ? (<img alt='search'
              className='w-7 h-7'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/443px-Vector_search_icon.svg.png' />) :
              (<img alt='home'
                className='w-10 h-10 rounded-full'
                src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-button-white-icon.png' />)}
          </button>
          <img alt='usericon'
            className='h-11 w-11 '
            src={user?.photoURL} />
          <button onClick={handleSignOut}
            className='text-white font-bold m-2'>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header
