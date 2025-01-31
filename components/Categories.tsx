import Image from "next/image";
import BottleInHand from "../public/Hand-Holding-Bottle.svg";
import VacuumeBottle from "../public/vaccume-bottle.svg";
import FridgeBottle from "../public/fridge-bottle.svg";
import BorosilicateBottle from "../public/borosilicate-bottle.svg";
import KettleBottle from "../public/kettle-bottle.svg";

export default function Categories() {
    return (
        <div className="category">
            <Image src={BottleInHand} height={860} alt="Bottle in a hand" />
            <div className="types">
                <ul>
                    <li>
                        <Image src={VacuumeBottle} alt="Hand holding a bottle"/>
                        <p>Vacuum Bottles</p>
                    </li>
                    <li>
                        <Image src={FridgeBottle} alt="Hand holding a bottle"/>
                        <p>Fridge Bottles & Jugs</p>
                    </li>
                    <li>
                        <Image src={BorosilicateBottle} alt="Hand holding a bottle"/>
                        <p>Borosilicate Bottles</p>
                    </li>
                    <li>
                        <Image src={KettleBottle} alt="Hand holding a bottle"/>
                        <p>Kettles</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
