import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
const ibmFont = IBM_Plex_Mono({
    weight: '700',
    subsets: ['latin'],
})
export default function NavBar() {
    const navItems = [{ 'name': "Events", 'link': '/events' }, { 'name': "Dev Team", 'link': '/dev-team' }, { 'name': "About Us", 'link': '/About-us' }]
    return (
        <div className='flex justify-between lg:p-8 min-w-full p-2'>
            <div className='p-2'>
                <Image src={'/images/logo.png'} alt='logo' width={60} height={60} />
            </div>
            {/* menu bar */}
            <div className='p-2' >
                <div>
                    <ul className='lg:flex gap-4 hidden'>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} className='text-[#F8861E] font-semibold text-2xl border-[#F8861E] border-2 p-1 bg-[#F5610D4D] w-[236px] '>
                                    <h3 className={`${ibmFont.className} text-center`}>{item.name}</h3>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <Image src={'/images/menu.svg'} alt='menu' width={40} height={40} />
                </div>
            </div>
        </div>
    )
}
