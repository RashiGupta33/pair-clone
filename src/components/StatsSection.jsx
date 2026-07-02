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

    return (
        <section className="relative overflow-hidden bg-white py-20 pl-10">
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
                <div className="relative mt-28 flex flex-col items-center justify-center gap-8 lg:h-[420px] lg:flex-row">
                    {/* Left */}
                    <div className="rotate-[-12deg] rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:absolute lg:left-0 lg:top-10 lg:w-[280px]">
                        <h3 className="bg-gradient-to-b from-[#111] to-[#7530FF] bg-clip-text text-7xl font-semibold text-transparent">
                            0+
                        </h3>

                        <p className="mt-3 text-2xl font-medium text-[#0B041C]">
                            skills & metrics
                        </p>

                        <p className="mt-4 text-gray-600">
                            Hiring with Pair vs a typical recruiting firm.
                        </p>
                    </div>

                    {/* Center */}
                    <div className="z-10 rounded-[36px] border border-gray-200 bg-white p-10 shadow-2xl lg:w-[360px]">
                        <h3 className="bg-gradient-to-b from-[#111] to-[#7530FF] bg-clip-text text-center text-8xl font-semibold text-transparent">
                            0%
                        </h3>

                        <p className="mt-5 text-center text-3xl font-medium text-[#0B041C]">
                            savings
                        </p>

                        <p className="mt-4 text-center text-gray-600">
                            Hiring with Pair vs a typical recruiting firm.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="rotate-[12deg] rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:absolute lg:right-0 lg:top-10 lg:w-[280px]">
                        <h3 className="bg-gradient-to-b from-[#111] to-[#7530FF] bg-clip-text text-7xl font-semibold text-transparent">
                            0x
                        </h3>

                        <p className="mt-3 text-2xl font-medium text-[#0B041C]">
                            more candidates
                        </p>

                        <p className="mt-4 text-gray-600">
                            That's how many more candidates you can assess without taking up
                            any of your engineers' time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}