import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 text-white absolute bg-gradient-to-r from-black'>
            <h1 className='text-5xl font-bold w-1/3' >{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className='flex'>
                <button className='bg-white text-black p-4 px-10 py-3 text-lg rounded-md flex flex-wrap hover:opacity-80'>
                    <img className='pt-1 w-6 h-6' src='https://www.emojiall.com/images/120/emojidex/1.0.14/25b6.png'></img>
                    Play
                </button>
                <button className='ml-4 p-4 px-10 py-3 bg-gray-400 text-black opacity-70 text-lg rounded-md flex flex-Wrap hover:opacity-80'>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
