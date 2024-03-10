import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
const Header = () => {
    return (
        <div className="bg-[#2a4150] sticky top-0 z-10">
            <nav className="flex justify-between container mx-auto p-5 text-white items-center">
                <h3 className="text-2xl font-medium">Online Shop</h3>
                <div className="flex gap-5">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href=""><FaRegUser /></a>
                    <a href=""><BiLogOut /></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;