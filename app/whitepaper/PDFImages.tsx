'use client';
import { useState } from 'react';
import Image from 'next/image'
import page1 from "@/assets/whitepaper/1.png";
import page2 from "@/assets/whitepaper/2.png";
import page3 from "@/assets/whitepaper/3.png";
import page4 from "@/assets/whitepaper/4.png";
import page5 from "@/assets/whitepaper/5.png";
import page6 from "@/assets/whitepaper/6.png";
import page7 from "@/assets/whitepaper/7.png";
import page8 from "@/assets/whitepaper/8.png";
import page9 from "@/assets/whitepaper/9.png";
import page10 from "@/assets/whitepaper/10.png";
import page11 from "@/assets/whitepaper/11.png";
import page12 from "@/assets/whitepaper/12.png";
import page13 from "@/assets/whitepaper/13.png";
import page14 from "@/assets/whitepaper/14.png";


const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14];

export const PDFImages = () => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    if(zoomLevel < 100){
      setZoomLevel(zoomLevel + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 10);
    }
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto flex flex-col border-b border-[#374151]">
      <div className="fixed bottom-5 right-5 gap-2 flex justify-center items-center mb-4">
        <button onClick={handleZoomIn} disabled={zoomLevel === 100} className="disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 border rounded-lg">+</button>
        <div className='w-8 text-sm text-center mx-auto'>{zoomLevel}%</div>
        <button onClick={handleZoomOut} disabled={zoomLevel === 50} className="disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 border rounded-lg">-</button>
      </div>
      <div style={{ width: `${zoomLevel}%`, transition: 'transform 0.3s ease' }} className='whitepaper h-full flex flex-col items-center gap-4 mt-10 mb-16 mx-auto'>
        {pages.map((page, idx)=> (
          <Image key={idx} className='mx-auto' src={page} width={1920} placeholder='blur' height={1080} alt={`Whitepaper page ${idx}`} />
        ))}
      </div>
    </section>
  );
};
