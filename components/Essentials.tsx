import Image from "next/image";
import Bottle1 from "../public/bottle-1.svg";
import Bottle2 from "../public/bottle-2.svg";
import Bottle3 from "../public/bottle-3.svg";
import Bottle4 from "../public/bottle-4.svg";

export default function Essentials() {
    return (
        <>
            <div className="essentials-top">
                <div>
                    <p className="essentials-title">Hydration Essentials</p>
                    <p className="essentials-description">Discover Our Range of Premium Water Bottles</p>
                </div>
                <button>
                    VIEW MORE
                </button>
            </div>
            <div className="essentials">
                <div>
                    <Image src={Bottle1} width={420} height={420} alt="Bottle" />
                    <p>Rainbow 600</p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    <Image src={Bottle2} width={420} height={420} alt="Bottle" />
                    <p>Ri0 650</p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    <Image src={Bottle3} width={420} height={420} alt="Bottle" />
                    <p>Big Bull 1300</p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    <Image src={Bottle4} width={420} height={420} alt="Bottle" />
                    <p>Rome 600</p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    <Image src={Bottle1} width={420} height={420} alt="Bottle" />
                    <p>Rainbow 600</p>
                    <button>LEARN MORE</button>
                </div>
                <div>
                    <Image src={Bottle2} width={420} height={420} alt="Bottle" />
                    <p>Rio 650</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </>
    );
}