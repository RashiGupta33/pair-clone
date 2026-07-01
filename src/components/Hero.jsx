import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-white">
            {/* Hero Background */}
            <div
                className="relative min-h-screen overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #120C23 22.702%, #5F2CF0 72.489%, #FFFFFF 100%)",
                }}
            >
                {/* Header */}
                <header className="absolute inset-x-0 top-0 z-30">
                    <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-16 py-10">
                        <img
                            src="/logo.svg"
                            alt="Pair"
                            className="h-[42px] w-auto"
                        />
                    </div>
                </header>

                {/* Hero */}
                <div className="relative mx-auto h-screen min-h-[960px] w-full max-w-[1500px] px-16">
                    {/* Left Content */}
                    <div className="flex h-full items-center">
                        <div className="relative z-10 max-w-[760px]">
                            <h1
                                className="
                                    w-[760px]
                                    text-[88px]
                                    font-semibold
                                    leading-[1.1]
                                    tracking-[-0.02em]
                                    text-white
                                "
                            >
                                Hire the best candidates in <br /> the world with AI
                            </h1>

                            <p className="mt-8 ml-3 max-w-[600px] text-[26px] font-semibold leading-[1.5] text-[#EDEDF3]">
                                Say goodbye to LeetCode interviews and hello to <br />
                                practical coding competition based hiring.
                            </p>

                            <button className="group mt-12 flex items-center rounded-full bg-white p-1 shadow-xl transition-all duration-300 hover:shadow-2xl">

                                <span className="px-4 text-[18px] font-semibold text-[#361C68]">
                                    Hire with Pair
                                </span>

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#361C68] transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight className="h-5 w-5 text-white" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Globe */}
                    <div className="hero-globe">
                        <div className="hero-globe-container">
                            <div className="hero-globe-inner">
                                <iframe
                                    src="https://rive.app/s/CkqkSsBO_0a0mVqyWOFiKg/embed"
                                    title="Pair Globe"
                                    allow="autoplay"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}