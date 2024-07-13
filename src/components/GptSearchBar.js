import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const langKey = useSelector(store => store.config.lang)

    const handleGptSearchClick = async () => {
    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 text-white bg-black grid grid-cols-12 rounded-lg '
                onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder={lang[langKey].gptSearchPlaceholder}
                    className='p-4 m-2 col-span-9 rounded-lg text-black'
                    ref={searchText} />
                <button className='col-span-3 p-4 m-2 bg-red-700 text-white rounded-lg'
                    onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
