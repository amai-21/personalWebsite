"use client";

import { Sheet, SheetContent, SheetTrigger } from "./sheet.jsx";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contacts",
        path: "/contacts",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className = "flex justify-center items-center">
                <CiMenuFries className = "text-[32px] text-accent" />    
            </SheetTrigger>
            <SheetContent>contentPlaceHolder</SheetContent>      
        </Sheet>
    );
};

export default MobileNav;