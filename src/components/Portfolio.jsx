"use client"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { GitHubIcon } from "../../public/Icons/Icons";

export default function Portfolio() {

    return (

        <div className="flex flex-col  xl:px-[200px] 2xl:px-[300px] gap-3 h-full w-full mb-8" >
            <div className="flex justify-center items-center">
                <h1 className="text-lg text-blue-600 font-semibold">MY PROJECTS</h1>
            </div>

            <Carousel className="rounded-xl">

                {/* First Project */}
                <div className="relative h-full w-full">
                    <img
                        src="/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
                        alt="image 1"
                        className=" h-[600px] w-full"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Portfolio Website
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                The GitHub repository for this website.
                            </Typography>

                            {/* Buttons */}
                            <div className="flex justify-center gap-2">
                                <Link href={"https://github.com/Armand2312/Armand2312.github.io"}>
                                    <Button size="lg" color="white">
                                        <div className="flex items-center justify-center gap-1">
                                            GitHub <GitHubIcon sizes={24} color={"black"}/>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second project */}
                <div className="relative h-full w-full">
                    <img
                        src="/bruno-kelzer-LvySG1hvuzI-unsplash.jpg"
                        alt="image 2"
                        className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Ecommerce Website (Full Stack)
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                A simple ecommerce website with add to cart and checkout functionality with an admin panel. Made with mainly Next.js and Tailwind CSS.

                            </Typography>

                            {/* Buttons */}
                            <div className="flex gap-2">
                                <Link href={"/"}>
                                    <Button size="lg" color="white">
                                        <div className="flex items-center justify-center gap-1">
                                            GitHub <GitHubIcon sizes={24} color={"black"} />
                                        </div>
                                    </Button>
                                </Link>
                                <Link href={"https://armand2312-ecommerce-demo.onrender.com/"}>
                                    <Button color="white" className="p-[18px]" >
                                        <div>
                                            Live Demo
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Project */}
                <div className="relative h-full w-full">
                    <img
                        src="/luca-bravo-9l_326FISzk-unsplash.jpg"
                        alt="image 3"
                        className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                New projects on the way...
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                I am working on exciting new projects, check later for updates.
                            </Typography>

                            {/* Buttons */}
                            {/* <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}