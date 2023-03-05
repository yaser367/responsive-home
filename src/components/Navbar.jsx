import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { CgMenuRightAlt } from 'react-icons/cg'

const Navbar = () => {

    const [nav, setNav] = useState("nav")
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='h-20 px-8 z-50 bg-white top-0 sticky shadow-md'>
            <div className='flex items-center h-20 max-w-[1240px] mx-auto justify-between'>
                <div className='w-6 h-12 rounded-r-full bg-black'></div>
                <ul className='hidden md:flex'>
                    <li className='p-4 font-bold cursor-pointer'>Home</li>

                    <li className='p-4 font-bold cursor-pointer'>Page1</li>
                    <li className='p-4 font-bold cursor-pointer'>Page2</li>
                    <li className='p-4 font-bold cursor-pointer'>Page3</li>
                </ul>

                <div className='md:hidden flex flex-row' onClick={handleNav}>
                    <FiSearch className='text-3xl mr-9' />
                    {!nav ? <AiOutlineClose size={30} /> : <CgMenuRightAlt size={30} />}

                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>

                    <div className='w-6 h-12 rounded-r-full bg-black ml-4 mt-2'></div>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black'>option1</li>

                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black'>option2</li>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black'>option3</li>
                        <li className='p-4 border-b border-gray-600 font-bold cursor-pointer rounded-xl mt-2 hover:shadow-inner hover:shadow-black'>option4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
