'use client';
import { useState } from 'react';
import Image from 'next/image'
import page1 from "@/app/assets/whitepaper/A4 - 1.png";
import page2 from "@/app/assets/whitepaper/A4 - 2.png";
import page3 from "@/app/assets/whitepaper/A4 - 3.png";
import page4 from "@/app/assets/whitepaper/A4 - 4.png";
import page5 from "@/app/assets/whitepaper/A4 - 5.png";
import page6 from "@/app/assets/whitepaper/A4 - 6.png";
import page7 from "@/app/assets/whitepaper/A4 - 7.png";
import page8 from "@/app/assets/whitepaper/A4 - 8.png";
import page9 from "@/app/assets/whitepaper/A4 - 9.png";
import page10 from "@/app/assets/whitepaper/A4 - 10.png";
import page11 from "@/app/assets/whitepaper/A4 - 11.png";
import page12 from "@/app/assets/whitepaper/A4 - 12.png";
import page13 from "@/app/assets/whitepaper/A4 - 13.png";
import page14 from "@/app/assets/whitepaper/A4 - 14.png";
import page15 from "@/app/assets/whitepaper/A4 - 15.png";

const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15];

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
    <section className="relative w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col border-b">
      <div className="fixed bottom-5 right-5 gap-2 flex justify-center items-center mb-4">
        <button onClick={handleZoomIn} disabled={zoomLevel === 100} className="disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 border rounded-lg">+</button>
        <div className='w-8 text-sm text-center mx-auto'>{zoomLevel}%</div>
        <button onClick={handleZoomOut} disabled={zoomLevel === 50} className="disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 border rounded-lg">-</button>
      </div>
      <div style={{ width: `${zoomLevel}%`, transition: 'transform 0.3s ease' }} className='whitepaper h-full flex flex-col items-center gap-4 mt-10 mb-16 mx-auto'>
        {pages.map((page, idx)=> (
          <Image key={idx} className='mx-auto' src={page} width={1785} placeholder='blur' height={2526} alt={`Whitepaper page ${idx}`} />
        ))}
      </div>
    </section>
  );
};
