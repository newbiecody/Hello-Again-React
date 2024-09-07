import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return <div className="grid grid-col-1 place-content-center text-sm text-ha-cream bg-ha-dirty-green h-[200px]">
        <div className="flex justify-center">© Copyright hello, again. (S) Pte Ltd. 2024. All Rights Reserved.</div>
        <div className="flex justify-center items-center">Follow us on Instagram<FontAwesomeIcon icon={faInstagram}/></div>
    </div>
}