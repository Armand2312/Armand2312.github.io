import Image from "next/image"
import Link from "next/link"
import { DownIcon } from "../../public/Icons/Icons"

export default function MyProjectsButton() {
    return (
        <div>
            <a href={"#portfolio"} className="z-10 relative w-[185px] h-[185px] flex justify-center items-center
                 bg-circleStar bg-no-repeat bg-cover bg-center group">
                <Image className="animate-spin h-full w-full max-h-[148px] max-w-[141px]" src={"/rounded-text.png"} height={140} width={140} alt="" />
                <div className="absolute group-hover:translate-y-4 transition-transform">
                    <DownIcon  sizes={55} color={"white"} />
                </div>
                
            </a>

        </div>
    )
}