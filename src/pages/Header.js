import React from 'react'
// import Image from 'next/image'
// import {MenuIcon, SearchIcon, ShoppingCartIcon} from "heroicons/react/outline"
// import { IoSearch } from "react-icons/io5";
// import { HiOutlineShoppingCart } from "react-icons/hi";


const Header = () => {
  return (
        <header>
            <div>
                {/* Top nav */}
                <div className='flex items-center bg-agro-primarygreen p-2 h-[80px] flex-grow w-full'>
                    {/* <div>
                        <Image 
                            src="https://links.papareact.com/f90"
                            width={140}
                            height={40}
                            objectFit='contain'
                            className='cursor-pointer'
                        />
                    </div> */}

                    {/* if no logo use this */}
                    <div className='mt-2  flex items-center flex-grow sm:flex-grow-0 '>
                        <h2 className='font-medium text-1xl mb-[7px]'> ArgoXPlanet </h2>
                    </div>

                    {/* Search bar */}

                    <div className= 'hidden sm:flex items-center h-10 ml-2 pr-2 rounded-md flex-grow cursor-pointer bg-agro-primarygreen  hover:bg-agro-secondarygreen'>
                        <input className='p-2 h-full  flex-grow flex-shrink rounded-md focus:outline-none' type="text" />
                        {/* <IoSearch  className='text-2xl ml-[10px] '/> */}
                    </div>

                    {/* right side  */}

                    <div className='text-black flex items-center text-xs space-x-6 mx-7 whitespace-nowrap'>
                        <div className='link'>
                            <p>Hello Nittin Nobby Mathew</p>
                            <p className='font-extrabold md:text-sm'>Accounts & List</p>
                        </div>

                        <div className='link'>
                            <p>Returns</p>
                            <p className='font-extrabold md:text-sm'>& Orders</p>
                        </div>

                        <div className='link relative flex items-center'>
                            <span className='text-black absolute top-[-8px] right-[-6px] md:right-[41px] md:top-[-4px] h-4 w-4 bg-agro-basket text-center rounded-full font-bold'>0</span>
                            {/* <HiOutlineShoppingCart className='text-2xl'/> */}
                            <p className=' hidden md:inline font-extrabold md:text-sm mt-3'>Basket</p>
                        </div>``
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header
