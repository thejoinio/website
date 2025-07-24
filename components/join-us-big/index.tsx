export default function JoinUsBig ({type}: {type: "Waitlist" | "Whitelist"}) {
    return (
        <section className="font-[family-name:var(--font-tsb)] w-full pt-20">
            <div className="px-5 md:px-10 lg:px-20 w-full mx-auto shadow-[0px_0px_5px_0px_rgba(255,255,255,0.35)] bg-[linear-gradient(98deg,rgba(102,254,203,0.20)_6.1%,_rgba(137,64,255,0.20)_103.66%)]">
                <div className="flex flex-col justify-center gap-8 xs:gap-11 bg-globe bg-contain bg-no-repeat bg-bottom py-20 xs:py-[106px] px-1">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="uppercase font-medium text-sm xs:text-base">Join {type}</h2>
                        <p className="font-bold text-2xl/normal xs:text-4xl/normal md:text-5xl/normal text-center max-w-[16ch]">With Join, Every Dream Is A Possibility</p>
                    </div>
                </div>
            </div>
        </section>
    )
}