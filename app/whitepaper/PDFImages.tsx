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

export const PDFImages = () => {
  return (
    <section className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex border-b">
      <div className='whitepaper h-full flex flex-col items-center gap-4 mt-16 mb-16'>
        <Image className='mx-auto' src={page1} width={1785} height={2526} alt='Whitepaper page 1' />
        <Image className='mx-auto' src={page2} width={1785} height={2526} alt='Whitepaper page 2' />
        <Image className='mx-auto' src={page3} width={1785} height={2526} alt='Whitepaper page 3' />
        <Image className='mx-auto' src={page4} width={1785} height={2526} alt='Whitepaper page 4' />
        <Image className='mx-auto' src={page5} width={1785} height={2526} alt='Whitepaper page 5' />
        <Image className='mx-auto' src={page6} width={1785} height={2526} alt='Whitepaper page 6' />
        <Image className='mx-auto' src={page7} width={1785} height={2526} alt='Whitepaper page 7' />
        <Image className='mx-auto' src={page8} width={1785} height={2526} alt='Whitepaper page 8' />
        <Image className='mx-auto' src={page9} width={1785} height={2526} alt='Whitepaper page 9' />
        <Image className='mx-auto' src={page10} width={1785} height={2526} alt='Whitepaper page 10' />
        <Image className='mx-auto' src={page11} width={1785} height={2526} alt='Whitepaper page 11' />
        <Image className='mx-auto' src={page12} width={1785} height={2526} alt='Whitepaper page 12' />
        <Image className='mx-auto' src={page13} width={1785} height={2526} alt='Whitepaper page 13' />
        <Image className='mx-auto' src={page14} width={1785} height={2526} alt='Whitepaper page 14' />
      </div>
    </section>
  );
};
