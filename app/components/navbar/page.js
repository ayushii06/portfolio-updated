'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import menu from  '../../public/menu.png'
import cross from '../../public/cross.svg'


function page() {
  const pathname = usePathname()

  const handleClick = () => {
    const nav = document.querySelector('.nav')
    document.querySelector('.icon').style.display = 'none'
    nav.classList.toggle('hidden')
  }

  const handleCrossClick = () => {
    const nav = document.querySelector('.nav')
    document.querySelector('.icon').style.display = 'block'
    nav.classList.toggle('hidden')
  }

  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'My Work',
      href: '/projects',
    },
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
        <div className="md:hidden icon" style={{'width':'6%'}}>
          <Image src={menu} onClick={handleClick}/>
        </div>

        <div style={{"zIndex":"2","position":"absolute","top":"2px",
        "right":"-2px","padding": "25px 27px","background": "#282828","transition": "1s left"}} className="nav hidden bg-transparent md:hidden flex-row px-4 gap-x-8">
          <Image src={cross } width={25} className='' onClick={handleCrossClick}/>
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
                <p>{link.name}</p>
              </Link>
            ); 
          })}
        </div>
    </div>
    </>
  )
}

export default page