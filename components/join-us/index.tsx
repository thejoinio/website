import { Button } from "../button";

export default function JoinUs () {
    return (
        <section className="px-5 md:px-10 lg:px-20 font-[family-name:var(--font-tsb)]">
            <div className="my-20 w-full max-w-6xl mx-auto rounded-[36px] shadow-[0px_0px_5px_0px_rgba(255,255,255,0.35)] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,_rgba(137,64,255,0.20)_103.66%)]">
                <div className="flex flex-col justify-center gap-8 xs:gap-11 bg-globe bg-contain bg-no-repeat bg-bottom py-20 xs:py-[106px] px-1">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="uppercase font-medium text-sm xs:text-base">Join Us</h2>
                        <p className="font-bold text-2xl/normal xs:text-4xl/normal md:text-5xl/normal text-center max-w-[16ch]">With Join, Every Dream Is A Possibility</p>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="white" href="/coming-soon">Join Whitelisting</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}