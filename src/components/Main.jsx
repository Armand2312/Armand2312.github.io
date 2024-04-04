import ContactButton from "./ContactButton";
import MyProjectsButton from "./MyProjectsButton";

export default function Main() {
    return (
        <>
            <div className="flex md:grid md:grid-cols-[1.3fr_0.8fr] min-h-screen select-none">
                {/* Intro */}
                <div className="flex flex-col p-[25px] lg:p-[50px] gap-[50px] justify-center items-center md:mb-[100px] lg:ml-[50px] text-white z-10">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">Front-End Web Developer</h1>
                        <p className=" text-lg text-center">Hi, I'm Armand Oral. A passionate front-end developer based in Manchester, UK.</p>
                    </div>

                    {/* Button */}
                    <div>
                        <MyProjectsButton />
                    </div>

                    {/* Tech Stack */}
                    <div className="font-semibold flex items-center justify-center md:gap-2 whitespace-nowrap">
                        <h1>Tech Stack |</h1>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <img src="https://skillicons.dev/icons?i=git,js" />
                            <img src="https://skillicons.dev/icons?i=react,next" />
                            <img src="https://skillicons.dev/icons?i=tailwind,python" />
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex w-full">
                    <img className="h-screen rigth-0 mix-blend-lighten" src="/bg-computer.jpg"></img>
                </div>
            </div>
        </>
    )
}