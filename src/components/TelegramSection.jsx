import Particles from "./Particles";

export default function TelegramSection() {
    return (
        <section
            id="telegram"
            className="relative overflow-hidden py-32"
            style={{
                background:
                    "linear-gradient(#fff 12.4402%,#5b37bf 52.3121%,#0b041c 100%)",
            }}
        >
            {/* Bottom Glow */}
            <div className="absolute bottom-[-180px] left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#a58cff]/30 blur-[180px]" />

            {/* Particles */}
            <Particles />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center">

                    {/* Heading */}
                    <h2 className="pt-70 max-w-6xl text-center text-5xl font-bold leading-[10rem] text-white md:text-7xl xl:text-[140px]">
                        30 Employees
                        <br />
                        $30b Valuation
                    </h2>

                    {/* Badge */}
                    <div className="-mb-5 mt-17 rounded-full border border-white/20 bg-[#180C38]/80 px-6 py-2 backdrop-blur">
                        <span className="text-lg font-medium text-white">
                            Use Case
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-10 max-w-2xl text-center text-lg leading-9 text-white md:text-[22px]">
                        Telegram hires exclusively through open coding contests where
                        candidates compete for a job. They have no recruiters or HR
                        employees. This allows them to hire the best people in the world.
                        You can now use Pair AI to scalably do the same at your company!
                    </p>
                </div>
            </div>
        </section>
    );
}