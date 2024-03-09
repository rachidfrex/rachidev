import React from 'react'

function Nav() {
  return (
    <>
        <nav className='flex text-white gap-5 w-full border-b border-white z-40 '>
            <ul 
            className='flex gap-5 justify-center items-center p-5 w-full tracking-wide text-sm   '
            >
            <li
            className=' '
            >Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            </ul>
        </nav>
    </>
  )
}

export default Nav