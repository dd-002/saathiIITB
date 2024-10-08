'use client'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import ss from '../assets/ss.png'
import Image from 'next/image'
import Menu from '@/components/hamburger'

export default function Nav() {
    const path = usePathname()

    const links = [
        {
            path: '/',
            text: 'Home',
        },
        {
            path: '/identity',
            text: 'Identity',
        },
        {
            path: '/welfare',
            text: 'Welfare',
        },
        {
            path: '/blog',
            text: 'Blog',
        },
        {
            path: '/saathi-connect',
            text: 'Connect'
        },
        {
            path: '/about',
            text: 'About',
        },
    ]

    return (
        <>
            <div className="fixed left-0 top-5 z-50 w-full md:visible invisible">
                <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">

                    <div className="fixed left-10 top-10 z-50">
                    <Link href={'/'}>                    <div className="fixed left-10 top-10 z-50" >
                        <Image src={ss} width={80} height={80} alt='saathi logo'></Image>
                    </div></Link>
                    </div>
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.path}
                                className={clsx(
                                    'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1 transition-colors',
                                    path === link.path
                                        ? 'border-border dark:border-darkBorder'
                                        : 'border-transparent',
                                )}
                                href={link.path}
                            >
                                {link.text}
                            </Link>
                        )
                    })}
                    <ThemeSwitcher></ThemeSwitcher>
                </nav>
            </div>


            <div className="fixed left-0 top-5 z-50 w-full md:invisible visible">
                    <Link href={'/'}>                    <div className="fixed left-10 top-10 z-50" >
                        <Image src={ss} width={80} height={80} alt='saathi logo'></Image>
                    </div></Link>

                    <Menu></Menu>
            </div>

        </>

    )
}