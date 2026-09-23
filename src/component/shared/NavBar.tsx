import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';


const NavBar = () => {
    return (
        <div className='border-b border-gray-700'>
            <nav className='flex justify-between items-center container mx-auto my-5'>
              <div className='flex gap-2 items-center'>  
                <Image src={logo} width={28} height={28} alt='logo'>

              </Image>
                <p className='font-bold text-2xl'>FITLOG</p></div>

                <ul className='flex gap-3 items-center'>
                   
                        <li className="rounded-full px-6 py-3 font-bold text-white hover:bg-[#17240f] hover:text-lime-400">
                          <Link href='/'>  Workouts
                          </Link>
                            
                            </li>
                  
                    <li>
                        <Link href='/my-plan' className="rounded-full px-6 py-3 font-bold text-white hover:bg-[#17240f] hover:text-lime-400">
                        My Plan
                        </Link>
                    </li>
                </ul>

                <ul className='flex gap-3'>
                    <li>Plan</li>
                    <li>Saved</li>

                </ul>
            </nav>
           
        </div>
    );
};

export default NavBar;