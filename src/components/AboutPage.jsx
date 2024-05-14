import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../../public/Icons/Icons";

export default function AboutPage() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center items-center">
                {/* Image */}
                <img className="h-[300px] rounded-lg shadow-md xl:ml-[150px]" src="/pexels-pixabay-461064.jpg" />

                {/* Text Area */}
                <div className="xl:mr-[150px]  flex flex-col gap-3 p-2">
                    <h1 className="text-lg text-blue-600 font-semibold">ABOUT ME</h1>
                    <h2 className="text-2xl md:text-4xl text-gray-800 font-semibold">Front-End Developer Based In London, UK.</h2>
                    <p className="text-gray-500 text-justify">Hi I'm Armand, I am a junior front-end developer living in London. I am a Computer Science graduate from the University of Surrey.</p>
                    <p className="text-gray-500 text-justify">Currently, I'm focused on using React/Next.js along with Tailwind CSS to build modern, user-friendly websites. I'm eager to put my skills to work and collaborate on projects.</p>

                    {/* Socials */}
                    <div className="flex gap-3 items-center">
                        <h1 className="font-semibold text-gray-800">Links | </h1>
                        <Link href={"https://www.linkedin.com/in/armand-oral-a6a749270/"} className="transition-all hover:scale-125">
                            <LinkedInIcon sizes={30} />
                        </Link>
                        <Link href={"https://github.com/Armand2312"} className="transition-all hover:scale-125 hover:text-blue">
                            <GitHubIcon sizes={30} />
                        </Link>

                    </div>

                </div>


            </div>
        </div>
    )
}