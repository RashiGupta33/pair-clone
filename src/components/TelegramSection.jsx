// import TelegramImage from "../assets/telegram.png";
import ParticleBackground from "./ParticleBackground";

export default function TelegramSection() {
    return (
        <section
            id="telegram"
            className="relative overflow-hidden bg-[#130627] py-32"
        >
            <ParticleBackground />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center">
                    {/* Badge */}
                    <div className="mb-8 rounded-full border border-white/20 bg-[#180C38] px-6 py-2 shadow-lg">
                        <span className="text-lg font-medium text-white">
                            Use Case
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="max-w-6xl text-center text-5xl font-bold leading-tight text-white md:text-7xl xl:text-[140px]">
                        30 Employees
                        <br />
                        $30b Valuation
                    </h2>

                    {/* Description */}
                    <p className="mt-10 max-w-4xl text-center text-lg leading-9 text-white/90 md:text-[22px]">
                        Telegram hires exclusively through open coding contests where
                        candidates compete for a job. They have no recruiters or HR
                        employees. This allows them to hire the best people in the world.
                        You can now use Pair AI to scalably do the same at your company!
                    </p>
                </div>

                {/* Telegram Image */}
                {/* <div className="relative mt-24 flex justify-center">
                    <img
                        src="#"
                        alt="Telegram"
                        className="w-[350px] md:w-[500px] xl:w-[650px]"
                    />
                </div> */}
            </div>
        </section>
    );
}