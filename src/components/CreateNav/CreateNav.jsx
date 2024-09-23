
import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const CreateNav = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Profile", path: "/profile/:username" },
        { id: 5, name: "NotFound", path: "*" }
    ];



    return (
        <nav>

            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp></IoCloseSharp> : <IoMdMenu></IoMdMenu>
                }

            </div>

            <ul className={`md:flex justify-between  md:static absolute duration-1000   px-6 ${open ? 'top-12 ' : '-top-60'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }

            </ul>



        </nav>
    );
};

export default CreateNav;