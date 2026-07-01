export default function StatsSection() {
    return (
        <section className="relative overflow-hidden bg-white py-28">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}

                <h2 className="mx-auto max-w-5xl text-center text-4xl font-medium leading-tight tracking-tight text-[#0B041C] md:text-5xl">
                    Instead of hiring based off resumes,
                    <br />
                    <span className="text-[#5F2CF0]">
                        Pair allows us scalably assess
                    </span>
                    <br />
                    what every single candidate interested
                    <br />
                    in the position actually brings to the table
                </h2>

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