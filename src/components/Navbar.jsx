import {NavLink} from "react-router-dom";
import {logo} from "../assets/images";
import {print} from "./test.js";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <img src={logo} alt='logo' className='w-18 h-18 object-contain'/>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/' className={({isActive}) => isActive ? "text-red-800" : "text-black"}>
                    <strong>Главная</strong>
                </NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? "text-blue-600" : "text-black"}>
                   <strong>Обо мне</strong>
                </NavLink>
                <NavLink to='/projects' className={({isActive}) => isActive ? "text-blue-600" : "text-black"}>
                    <strong>Проекты</strong>
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
