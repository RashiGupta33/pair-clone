// Hero.jsx

import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Header */}
            <header className="absolute top-0 left-0 z-20 w-full">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
                    {/* Replace with your logo */}
                    <img
                        src="/logo.svg"
                        alt="Pair"
                        className="h-8 w-auto"
                    />
                </div>
            </header>

            <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-16 px-6 pt-40 pb-20 lg:flex-row">
                {/* Left */}
                <div className="flex-1">
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-[#0B041C] md:text-6xl lg:text-7xl">
                        Hire the best candidates in the world with AI
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                        Say goodbye to LeetCode interviews and hello to practical coding
                        competition based hiring.
                    </p>

                    <button className="group mt-10 flex items-center gap-4 rounded-full bg-white px-2 py-2 shadow-lg ring-1 ring-gray-200 transition hover:shadow-xl">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#361C68] transition group-hover:translate-x-1">
                            <ArrowRight className="h-5 w-5 text-white" />
                        </span>

                        <span className="pr-6 text-lg font-semibold text-[#361C68]">
                            Hire with Pair
                        </span>
                    </button>
                </div>

                {/* Right */}
                <div className="flex flex-1 justify-center">
                    <div className="aspect-square w-full max-w-[620px] overflow-hidden rounded-3xl">
                        <iframe
                            src="https://rive.app/s/CkqkSsBO_0a0mVqyWOFiKg/embed"
                            title="Pair Animation"
                            className="h-full w-full border-0"
                            allow="autoplay"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}