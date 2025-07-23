"use client";

import Link from "next/Link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/home",
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
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    return (
        <nav className = "flex gap-8">
            {links.map((link, index) => {
                return <Link href = {link.path} key = {index}>
                        {link.name}
                    </Link>
            })}
        </nav>
    );
};

export default Nav;