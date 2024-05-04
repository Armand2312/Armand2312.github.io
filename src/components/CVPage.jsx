import { RightArrowIcon } from "../../public/Icons/Icons";

export default function CVPage() {
    return (
        <div className="flex justify-center p-2 items-center group">
            <img className="h-[500px] w-[400px] rounded-md  z-10" src="/Armand.CV.photo.png" alt="" />
            <div className="flex absolute items-center">
                <div className="bg-white flex flex-col p-5 gap-2 items-center justify-center h-[500px] w-[200px] ml-[250px] transform transition group-hover:translate-x-[180px] rounded-r-md">
                    <h1 className="font-semibold ">View/Download CV</h1>
                    <div className="flex flex-col space-y-2">
                        <button className="px-2 py-1 border border-blue-500 text-blue-500 rounded-md">View</button>
                        <button className="px-2 py-1 border bg-blue-500 text-white rounded-md">Download</button>
                    </div>

                </div>
                <div className="transform transition group-hover:rotate-180 group-hover:translate-x-[180px]">
                    <RightArrowIcon sizes={34} color={"black"} />
                </div>
            </div>
        </div>
    )
}