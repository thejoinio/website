'use client'
import { PlusIcon } from "@/assets/svg"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export const Card: React.FC<{heading?: string, image: string|StaticImageData, width: number, height: number, details?: string}> = ({heading="Means of Exchange", image, width, height, details="Use JOIN as a secure and transparent means of exchange within the ecosystem."}) => {
    const [active, setActive] = useState(false);
    return (
        <div className="bg-[#09141B] bg-opacity-0 flex h-fit rounded-3xl scale-90 md:scale-100">
            <div onBlur={()=>setActive(false)} onClick={()=>setActive(!active)} className="flex flex-col items-center relative group w-full max-w-[272px] aspect-square transition-all duration-1000 gap-2.5 hover:gap-5 border border-white/80 rounded-[14px] p-4 md:p-5 bg-opacity-100 bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,rgba(137,64,255,0.20)_103.66%)] z-10">
                <h4 className="text-xl/6 text-center max-w-[9ch] mx-auto overflow-hidden transition-all duration-1000 grid !grid-rows-[1fr] opacity-100 group-hover:!grid-rows-[0fr] group-hover:opacity-0 group-hover:transition-all group-hover:duration-1000">
                <span className="overflow-hidden">
                    {heading}
                </span>
                </h4>
                <div className="flex h-full max-h-[130px] md:max-h-[160px] w-fit justify-center items-center p-3 md:p-6">
                    <Image src={image} alt="#" width={width} height={height} className={`max-w-[${width}] w-fit h-auto mx-auto transition-all duration-1000 scale-[0.85] md:scale-90 group-hover:scale-105 md:group-hover:scale-110 object-scale-down`} />
                </div>
                <div className={`text-xs/6 text-center overflow-hidden transition-all duration-1000 grid !grid-rows-[0fr] opacity-0 group-hover:!grid-rows-[1fr] group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 ${active ? "grid-rows-[1fr]": "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden">
                        {details}
                    </p>
                </div>
                <div className="overflow-hidden transition-all duration-1000 grid !grid-rows-[1fr] opacity-100 group-hover:!grid-rows-[0fr] group-hover:opacity-0 group-hover:transition-all group-hover:duration-1000">
                    <span className="flex justify-center items-center gap-2 text-sm/4 overflow-hidden">
                        <button onClick={()=>setActive(!active)} aria-label="Plus" className="border-2 border-[#4C4C4C] rounded-3xl px-3.5 py-[5px]">
                            <PlusIcon />
                        </button>
                        Details
                    </span>
                </div>
                <div className="absolute top-[13px] left-[13px] rounded-[8px_0_0_0] border-white/80 border-t border-l w-3.5 h-3.5" />
                <div className="absolute top-[13px] right-[13px] rounded-[0_8px_0_0] border-white/80 border-t border-r w-3.5 h-3.5" />
                <div className="absolute bottom-[13px] right-[13px] rounded-[0_0_8px_0] border-white/80 border-b border-r w-3.5 h-3.5" />
                <div className="absolute bottom-[13px] left-[13px] rounded-[0_0_0_8px] border-white/80 border-b border-l w-3.5 h-3.5" />
            </div>
        </div>
    )
}