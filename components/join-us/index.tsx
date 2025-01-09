import { Button } from "../button";

export default function JoinUs () {
    return (
        <section className="px-4 md:px-6">
            <div className="my-20 w-full max-w-6xl mx-auto rounded-[36px] shadow-[0px_0px_5px_0px_rgba(255,255,255,0.35)] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,_rgba(137,64,255,0.20)_103.66%)]">
                <div className="flex flex-col justify-center gap-11 bg-[url(@/assets/images/globe-background.webp)] bg-contain bg-no-repeat bg-bottom py-[106px]">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="uppercase font-medium">Join Us</h2>
                        <p className="font-bold text-5xl/normal text-center max-w-[16ch]">With Join, Every Dream Is A Possibility</p>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="white">Join Presale</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}