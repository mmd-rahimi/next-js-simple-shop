import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

function Header() {
  return (
    <div className='w-full h-[5rem] bg-black text-white flex justify-center items-center'>
      <div className='flex flex-row justify-around items-center w-full'>
        <Link href="/" className='text-xl font-semibold hover:scale-110 duration-100'>Home</Link>
        <h2 className='text-2xl font-bold'>Mood Style</h2>
        <Link href="/cart" className='hover:scale-120 duration-100'><FaCartShopping size={25}/></Link>
      </div>
    </div>
  )
}

export default Header