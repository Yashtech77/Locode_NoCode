import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white px-6 py-4 border border-b-gray-100 shadow">
            <div className="flex items-center justify-between">
                <Link to='/' className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full text-black flex items-center justify-center">
                        <img src='../src/assets/logo2crop.png' className='logo'></img>
                    </div>
                    <span className="text-black text-xl font-bold">Flowsy</span>
                </Link>

                <div className="flex items-center gap-4">
                    <ul className="flex flex-row text-black hover:cursor-pointer">
                        <Link to='/'><li className="mx-2 py-2 px-2">My Apps</li></Link>
                        <Link to='/about'><li className="mx-2 py-2 px-2">About</li></Link>
                        <NavLink to='/signup'><li className="mx-2 py-2 rounded-xl px-2 bg-[#edf3dc] ">Sign Up</li></NavLink>
                        <NavLink to='/login'><li className="mx-2 py-2 rounded-xl px-2 bg-[#edf3dc] ">Log In</li></NavLink>

                        <li className="mx-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            {/* <span aria-label="User profile" className="profile-icon hover:cursor-pointer text-gray-300 hover:outline rounded-2xl px-2">Img</span> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
