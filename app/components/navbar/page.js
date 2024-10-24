'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import menu from  '../../public/menu.png'


function page() {
  const pathname = usePathname()

  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'My Work',
      href: '/projects',
    },
    {
      name: 'Hire Me',
      href: '/hire',
    },
    {
      name:'Register',
      href:'/register'
    }
  ]
  return (
    <>
    <div className="text-xl	font-bold	 flex flex-row justify-between text-white p-8">
        <div className="logo"><Image className="" height={32} weight={32} src={logo} /></div>
        <div className="flex flex-row gap-x-8">
        {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href
                ? ' text-yellow-400	'
                : 'text-white'
            }
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
                  </div>
        <div className="md:hidden" style={{'width':'6%'}}>
          <Image src={menu} />
        </div>
    </div>
    </>
  )
}

export default page