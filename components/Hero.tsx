import Image from "next/image";
import BottleCap from "../public/Bottle-Cap.svg";
import BottleDown from "../public/Bottle-down.svg";
import BottleLeft from "../public/bottle-left.svg";
import BottleRight from "../public/bottle-right.svg";
import { useEffect, useState } from "react";

export default function Hero() {
    const [classNameC, setClassNameC] = useState("");
    const [classNameD, setClassNameD] = useState("");

    useEffect(() => {
        window.scroll(0, 0);

        const timer = setTimeout(() => {
            setClassNameC("move-down-again-c");
            setClassNameD("move-down-again-d");
            window.scrollTo({ top: 864, behavior: "smooth" });
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className="hero">
                <Image className={`bottle-cap ${classNameC}`}
                    src={BottleCap}
                    width={186}
                    alt="Bottle cap"
                />
                <div className="hero-info">
                    <p className="hero-title">
                        The Ultimate Companion
                        <br />
                        for Hydration
                    </p>
                    <p className="hero-description">
                        we believe in the power of hydration.
                        <br />
                        Our mission is simple yet vital
                    </p>
                </div>
                <button>Inquire Now</button>
                <div className="circle"></div>
                <Image className={`bottle-down ${classNameD}`}
                    src={BottleDown}
                    width={186}
                    alt="Bottle cap"
                />
                <div className="bottles">
                    <div className="bottle-bg">
                        <Image src={BottleLeft} alt="Bottle" />
                    </div>
                    <div className="bottle-bg">
                        <Image src={BottleRight} alt="Bottle" />
                    </div>
                </div>
            </div>
        </>
    );
}