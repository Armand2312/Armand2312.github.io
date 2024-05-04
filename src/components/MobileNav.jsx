import { CVIcon, ContactIcon, HomeIcon, ProfileIcon, ProjectsIcon } from "../../public/Icons/Icons";
import Link from "next/link";

export default function MobileNav() {
    return (
        
            <div className="bottom-0 bg-gray-800 p-4 sticky w-full md:hidden z-20">
                <div className="flex flex-row justify-between items-center">
                    <Link href={"#home"}>
                        <HomeIcon sizes={25} color={"white"} />
                    </Link>

                    <Link href={"#about"}>
                        <div className="p-[2.5px]">
                            <ProfileIcon sizes={20} color={"white"} />
                        </div>
                    </Link>

                    {/* <CVIcon sizes={25} color={"white"} /> */}
                    <ProjectsIcon sizes={25} color={"white"} />
                    <ContactIcon sizes={25} color={"white"} />
                </div>
            </div>
       
    )
}