import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()

    const NavItem: FunctionComponent<{
        activeItem: string,
        setActiveItem: Function,
        name: string,
        route: string
    }> = ({
        activeItem,
        setActiveItem,
        name,
        route
    }) => {
            return (
                activeItem !== name ? (
                    <Link href={route}>
                        <a>
                            <span className='hover:text-green-500' onClick={() => setActiveItem(name)}>{name}</span>
                        </a>
                    </Link>
                ) : null
            )
        }

    useEffect(() => {
        if (pathname === "/") setActiveItem("About")
        if (pathname === "/projects") setActiveItem("Projects")
        if (pathname === "/resume") setActiveItem("Resume")
    }, [])

    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='font-bold text-green-500 border-b-4 text-xl border-green-500 md:text-2x1'>{activeItem}</span>
            <div className='flex space-x-5 text-lg'>

                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name={"About"}
                    route={"/"}
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name={"Projects"}
                    route={"/projects"}
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name={"Resume"}
                    route={"/resume"}
                />

            </div>
        </div>
    )
}

export default Navbar