import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Button from './Button'

const CardPart = () => {
    return (
        <div className='m-8'>
            <div className='flex flex-row'>
                <div className='w-14 h-14 rounded-xl bg-black text-white flex justify-center items-center'><AiFillStar className='text-3xl' /></div>
                <div className='ml-4'>
                    <h1 className='text-xl font-bold'>Trust Pilot</h1>
                    <p className='text-lg'>Rated Best <span className='text-xl font-semibold'>12.6K</span> Reviews</p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-14'>
                <div className='col-span-3 bg-gradient-to-b from-[#0a58ff] via-red-400  to-[#e0d234] h-36 md:h-48 rounded-xl flex justify-center items-center'>
                    <div className='bg-white bg-opacity-40 w-20 h-20 rounded-full text-white text-2xl font-bold flex justify-center items-center'>Play</div>
                </div>
                <div className='col-span-1 bg-blue-500 rounded-xl grid grid-rows-3'>
                    <div className='row-span-2 text-white flex justify-center items-center text-2xl font-bold'>72%</div>
                    <div className='row-span-1 rounded-xl bg-black text-white flex justify-center items-center text-2xl font-bold'>28%</div>
                </div>

            </div>
            <div className='max-w-[100%] mx-auto mt-16'>
                <Button style="border-[3px] border-black" >Signup to Get 50% OFF</Button>
                <Button style="bg-black text-white" >Explore New Products</Button>

            </div>

        </div >
    )
}

export default CardPart
