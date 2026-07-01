import Practical from "../assets/practical.png";
import Global from "../assets/global.png";
import Cheating from "../assets/cheating.avif";
import Scalability from "../assets/scalibility.png";

export default function Features() {
    return (
        <section className="bg-[#0B041C] py-32">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20 max-w-3xl">
                    <h2 className="text-5xl font-medium leading-tight text-white md:text-6xl">
                        Why companies choose Pair
                    </h2>

                    <p className="mt-6 text-lg text-white/60">
                        Evaluate engineers with practical coding competitions instead of
                        resumes and traditional interviews.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {/* Practical */}
                    <div className="rounded-[32px] border border-white/10 bg-[#17102C] p-8">
                        <img
                            src={Practical}
                            alt=""
                            className="w-full rounded-2xl"
                        />

                        <h3 className="mt-8 text-3xl font-semibold text-white">
                            Practical Assessments
                        </h3>

                        <p className="mt-4 text-white/60">
                            Test real-world engineering skills instead of memorized interview
                            questions.
                        </p>
                    </div>

                    {/* Global */}
                    <div className="rounded-[32px] border border-white/10 bg-[#17102C] p-8">
                        <img
                            src={Global}
                            alt=""
                            className="mx-auto w-72"
                        />

                        <h3 className="mt-8 text-3xl font-semibold text-white">
                            Hire Globally
                        </h3>

                        <p className="mt-4 text-white/60">
                            Source and evaluate engineers from anywhere in the world.
                        </p>
                    </div>

                    {/* Anti Cheating */}
                    <div className="rounded-[32px] border border-white/10 bg-[#17102C] p-8">
                        <img
                            src={Cheating}
                            alt=""
                            className="w-full rounded-2xl"
                        />

                        <h3 className="mt-8 text-3xl font-semibold text-white">
                            Anti-Cheating Detection
                        </h3>

                        <p className="mt-4 text-white/60">
                            AI detects suspicious behaviour and keeps assessments fair.
                        </p>
                    </div>

                    {/* Scalability */}
                    <div className="rounded-[32px] border border-white/10 bg-[#17102C] p-8">
                        <img
                            src={Scalability}
                            alt=""
                            className="mx-auto w-80"
                        />

                        <h3 className="mt-8 text-3xl font-semibold text-white">
                            Built to Scale
                        </h3>

                        <p className="mt-4 text-white/60">
                            Evaluate thousands of candidates without increasing engineering
                            workload.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}