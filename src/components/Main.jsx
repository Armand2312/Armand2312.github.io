import MyProjectsButton from "./MyProjectsButton";

export default function Main() {
    return (
        <>
            <div className="flex justify-center md:grid md:grid-cols-[1.3fr_0.8fr] min-h-screen select-none">
                {/* Intro */}
                <div className="flex flex-col p-[25px] lg:p-[50px] gap-[50px] justify-center items-center md:mb-[100px] lg:ml-[50px] text-white">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">Front-End Web Developer</h1>
                        <p className=" text-lg text-center justify-center ">Hi, I&apos;m Armand Oral. A front-end developer based in London, UK.</p>
                    </div>

                    {/* Button */}
                    <div>
                        <MyProjectsButton />
                    </div>

                    {/* Tech Stack */}
                    <div className="font-semibold flex items-center justify-center gap-2 md:gap-2 whitespace-nowrap">
                        <h1>Tech Stack |</h1>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <img className="transition-all hover:-translate-y-4" src="https://skillicons.dev/icons?i=git,js" />
                            <img className="transition-all hover:-translate-y-4"src="https://skillicons.dev/icons?i=react,next" />
                            <img className="transition-all hover:-translate-y-4"src="https://skillicons.dev/icons?i=tailwind,python" />
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