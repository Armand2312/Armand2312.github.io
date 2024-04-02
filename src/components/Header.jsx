import Link from "next/link"

export default function Header() {
    return (
        <header className="hidden md:flex flex-row top-0 sticky p-2 px-[50px] justify-between shadow-md items-center bg-gray-800 text-white z-20 select-none">
            <img className="cursor-pointer h-[40px] rounded-[75px] border-[3px] border-white" src="https://armand-next-ecommerce.s3.eu-west-2.amazonaws.com/armandlogo-ezgif.com-webp-to-jpg-converter+(1).jpg" alt="" />
            <nav className="md:w-2/3 lg:w-1/2 flex flex-row justify-between font-semibold">
                <Link className="hover:text-blue-300 transition-all" href={"/"}>Home</Link>
                <Link className="hover:text-blue-300 transition-all" href={"/"}>About</Link>
                <Link className="hover:text-blue-300 transition-all" href={"/"}>CV</Link>
                <Link className="hover:text-blue-300 transition-all" href={"/"}>Projects</Link>
                <Link className="hover:text-blue-300 transition-all" href={"/"}>Contact</Link>
            </nav>
        </header>
    )
}