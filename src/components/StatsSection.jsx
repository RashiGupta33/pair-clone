import { useState } from "react";

export default function StatsSection() {
    const [mouse, setMouse] = useState({ x: -200, y: -200 });

    const heading = (
        <>
            <div className="relative py-2">
                <div className="absolute left-0 right-0 bottom-0 top-21 h-px bg-[#6B4DFF]/20"></div>
                <div className="relative inline-block px-2">
                    Instead of hiring based off resumes,
                </div>
            </div>

            <div className="relative py-2">
                <div className="absolute left-0 right-0 bottom-0 top-21 h-px bg-[#6B4DFF]/20"></div>
                <div className="relative inline-block px-2">
                    Pair allows us scalably assess what
                </div>
            </div>

            <div className="relative py-2">
                <div className="absolute left-0 right-0 bottom-0 top-21 h-px bg-[#6B4DFF]/20"></div>
                <div className="relative inline-block px-2">
                    every single candidate interested in
                </div>
            </div>

            <div className="relative py-2">
                <div className="absolute left-0 right-0 bottom-0 top-21 h-px bg-[#6B4DFF]/20"></div>
                <div className="relative inline-block px-2">
                    the position actually brings to the table
                </div>
            </div>
        </>
    );

    const cardStyle = {
        width: "440px",
        height: "400px",
        padding: "70px",
        borderRadius: "32px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        background: "linear-gradient(180deg,#FFFFFF 0%,#F1E8FF 100%)",

        border: "1.5px solid rgba(8,28,71,.16)",

        boxShadow: `
    inset 0 .597144px .418001px -.5px rgba(219,189,255,.06),
    inset 0 1.81088px 1.26762px -1px rgba(219,189,255,.06),
    inset 0 4.78699px 3.35089px -1.5px rgba(219,189,255,.06),
    inset 0 15px 10.5px -2px rgba(219,189,255,.08),
    inset 0 1px 0 rgba(255,222,222,.04),

    0 .78363px .548541px -.357143px rgba(77,11,99,.08),
    0 1.91965px 1.34375px -.714286px rgba(77,11,99,.08),
    0 3.63745px 2.54622px -1.07143px rgba(77,11,99,.08),
    0 6.35004px 4.44503px -1.42857px rgba(77,11,99,.08),
    0 11.0519px 7.73631px -1.78571px rgba(77,11,99,.08),
    0 20.2428px 14.17px -2.14286px rgba(77,11,99,.08),
    0 40px 28px -2.5px rgba(77,11,99,.08),

    inset 0 1.09174px .545872px -.46875px rgba(82,15,252,.19),
    inset 0 2.58762px 1.29381px -.9375px rgba(82,15,252,.18),
    inset 0 4.72009px 2.36005px -1.40625px rgba(82,15,252,.18),
    inset 0 7.84715px 3.92357px -1.875px rgba(82,15,252,.17),
    inset 0 12.6725px 6.33625px -2.34375px rgba(82,15,252,.16),
    inset 0 20.7436px 10.3718px -2.8125px rgba(82,15,252,.15),
    inset 0 35.7191px 17.8596px -3.28125px rgba(82,15,252,.12),
    inset 0 65px 32.5px -3.75px rgba(82,15,252,.06)
  `,
    };

    return (
        <section className="relative overflow-hidden bg-white py-20 pl-10 pb-40"
            style={{
                background:
                    "linear-gradient(#fff 0% 73%,#5326d0 100%)",
            }}>
            <div className="w-[1470px]">
                {/* Heading */}
                <div
                    className="relative"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();

                        setMouse({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                        });
                    }}
                    onMouseLeave={() => setMouse({ x: -200, y: -200 })}
                >
                    {/* Black Text */}
                    <h2 className="text-[60px] md:text-[87px] tracking-[-4px] leading-[5rem] font-medium text-center">
                        {heading}
                    </h2>

                    {/* Purple Reveal */}
                    <h2
                        className="absolute inset-0 pointer-events-none text-[60px] md:text-[87px] tracking-[-4px] leading-[5rem] font-medium text-center text-[#5A39F5]"
                        style={{
                            WebkitMaskImage: `radial-gradient(circle 250px at ${mouse.x}px ${mouse.y}px, black 0%, black 55%, transparent 100%)`,
                            maskImage: `radial-gradient(circle 250px at ${mouse.x}px ${mouse.y}px, black 0%, black 55%, transparent 100%)`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                        }}
                    >
                        {heading}
                    </h2>
                </div>

                {/* Cards */}
                <div className="relative mt-32 h-[470px] w-full">

                    {/* Left */}
                    <div
                        className="absolute left-[45px] top-[70px]"
                        style={cardStyle}
                    >

                        <div className="flex items-start">
                            <h3 className="bg-gradient-to-t from-[#0B041C] to-[#7530FF] bg-clip-text text-[88px] font-semibold leading-none tracking-[-2px] text-transparent">
                                100
                            </h3>

                            <span className="ml-1 bg-gradient-to-t from-[#0B041C] to-[#7530FF] bg-clip-text text-[88px] font-semibold leading-none tracking-[-2px] text-transparent">
                                x
                            </span>
                        </div>

                        <p className="text-[20px] leading-[150%] font-medium text-[#0B041C]">
                            That's how many more candidates you can assess without taking up any of
                            your existing engineers' time.
                        </p>
                    </div>

                    {/* Center */}
                    <div
                        className="absolute left-[500px] top-[70px]"
                        style={cardStyle}
                    >
                        <h3 className="bg-gradient-to-t from-[#0B041C] to-[#7530FF] bg-clip-text text-[88px] font-semibold leading-none tracking-[-2px] text-transparent">
                            90%
                        </h3>

                        <div>
                            <p className="mt-4 text-[28px] font-medium tracking-[-0.03em] text-[#0B041C]">
                                Savings
                            </p>

                            <p className="mt-8 text-[21px] font-medium leading-[150%] text-[#0B041C]">
                                Hiring with Pair vs a typical recruiting firm.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className="absolute left-[955px] top-[70px]"
                        style={cardStyle}
                    >
                        <h3 className="bg-gradient-to-t from-[#0B041C] to-[#7530FF] bg-clip-text text-[88px] font-semibold leading-none tracking-[-2px] text-transparent">
                            50+
                        </h3>

                        <div>
                            <p className="mt-4 text-[28px] font-medium tracking-[-0.03em] text-[#0B041C]">
                                Skills And Metrics
                            </p>

                            <p className="mt-8 text-[21px] font-medium leading-[150%] text-[#0B041C]">
                                Hiring with Pair vs a typical recruiting firm.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}