import Link from "next/Link";
import { Button } from "./button.jsx";

import Nav from "./Nav.jsx";

const Header = () => {
    return (
        <header className = "py-8 xl:py-12 text-white bg-pink-50/20">
            <div className = "container mx-auto">
                <Link href = "/">
                    <h1 className = "text-4xl font-semibold">
                        Andy <span className = "text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex">
                    <Nav />
                    <Link href = "/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                
            </div>
        </header>
    );
};

export default Header;