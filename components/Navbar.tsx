import Image from "next/image";
import Logo from "../public/30TOL-logo.svg";

export default function Navbar() {
    return (
        <>

            <div className="navigation">
                <div className="navigation-left">
                    <Image
                        src={Logo}
                        height={40}
                        alt="Logo"
                    />
                </div>
                <div className="navigation-right">
                    <nav className="nav-items">
                        <a href="/shop">Shop</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/about">About</a>
                        <a href="/journal">Journal</a>
                        <a href="/custom">Custom</a>
                    </nav>
                    <button>
                        Inquiry Now
                    </button>
                </div>
            </div>
        </>
    );
}
