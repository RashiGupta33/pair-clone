const logos = [
    "/logos/google.svg",
    "/logos/microsoft.svg",
    "/logos/anthropic.svg",
    "/logos/meta.svg",
    "/logos/openai.svg",
    "/logos/amazon.svg",
    "/logos/stripe.svg",
    "/logos/notion.svg",
];

export default function Companies() {
    return (
        <section className="bg-[#0B041C] py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-4xl font-medium leading-tight text-white md:text-6xl">
                    Built in collaboration
                    <br />
                    with hiring managers
                </h2>

                <div className="relative mt-20">
                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0B041C] to-transparent" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0B041C] to-transparent" />

                    <div className="flex w-max animate-marquee gap-8">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex h-24 w-64 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                            >
                                <img
                                    src={logo}
                                    alt=""
                                    className="max-h-10 w-auto opacity-80 transition duration-300 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}