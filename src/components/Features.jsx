import Practical from "../assets/practical.png";
import Global from "../assets/global.png";
import Cheating from "../assets/cheating.avif";
import Scalability from "../assets/scalibility.png";

export default function Features() {
    return (
        <section className="bg-[#09060F] py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full border border-white/10 bg-[#180C38] px-6 py-2 text-white">
                        Meet Pair
                    </span>

                    <h2 className="mt-8 text-5xl font-medium text-white">
                        The Future of SWE Hiring
                    </h2>
                </div>

                {/* Grid */}

                <div className="mt-24 space-y-8">

                    {/* BIG CARD */}

                    <div
                        className="
    w-full
    overflow-hidden
    rounded-[48px]
    border-t
    border-t-white/20
    bg-gradient-to-b
    from-[#0D032B]
    to-[#080212]
  "
                        style={{
                            boxShadow: `
      inset 0 .597px .418px -.5px rgba(219,189,255,.06),
      inset 0 1.81px 1.26px -1px rgba(219,189,255,.06),
      inset 0 4.78px 3.35px -1.5px rgba(219,189,255,.067),
      inset 0 15px 10.5px -2px rgba(219,189,255,.082),
      inset 0 1px 0 rgba(255,222,222,.04),

      0 .6px .42px -.83px rgba(0,0,0,.125),
      0 2.28px 1.6px -1.66px rgba(0,0,0,.125),
      0 10px 7px -2.5px rgba(0,0,0,.125),

      inset 0 1.09px .54px -.46px rgba(138,15,252,.184),
      inset 0 2.58px 1.29px -.93px rgba(138,15,252,.184),
      inset 0 4.72px 2.36px -1.4px rgba(138,15,252,.176),
      inset 0 7.84px 3.92px -1.87px rgba(138,15,252,.173),
      inset 0 12.67px 6.33px -2.34px rgba(138,15,252,.165),
      inset 0 20.74px 10.37px -2.81px rgba(138,15,252,.15),
      inset 0 35.71px 17.85px -3.28px rgba(138,15,252,.118),
      inset 0 65px 32.5px -3.75px rgba(138,15,252,.063)
    `,
                        }}
                    >
                        {/* Animation */}
                        <div className="flex h-[540px] items-center justify-center overflow-hidden">
                            {/* Put your image or iframe here */}
                            <img src={Scalability} className="w-full object-cover" />

                            {/* OR */}

                            {/* <iframe
      src="https://rive.app/s/R0cjlaBh4U_mVBPwzKXBPQ/embed?runtime=rive-renderer"
      className="h-full w-full border-0"
      allow="autoplay"
    /> */}
                        </div>

                        {/* Text */}
                        <div className="px-10 pb-10">
                            <h3
                                className="
        bg-gradient-to-b
        from-white
        to-[#C5A3FF]
        bg-clip-text
        text-center
        text-[40px]
        font-medium
        leading-[110%]
        tracking-[-0.02em]
        text-transparent
      "
                            >
                                Scalably vet ALL Candidates
                            </h3>

                            <p className="mx-auto mt-6 max-w-[760px] text-center text-[18px] leading-[150%] tracking-[-0.025em] text-white/40">
                                No more hiring recruiters to sift through resumes. With Pair, you can
                                scalably vet every single interested candidate who meets your hiring
                                criteria without wasting any of your existing engineers’ time conducting
                                interviews.
                            </p>
                        </div>
                    </div>

                    {/* ROW */}

                    <div className="grid gap-8 lg:grid-cols-2">

                        {/* Practical */}

                        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#120629] to-[#09040F] p-10">

                            <img
                                src={Practical}
                                className="w-full rounded-3xl"
                            />

                            <h3 className="mt-8 text-center text-3xl text-white">
                                Practical Skill Assessment
                            </h3>

                            <p className="mt-4 text-center text-white/60">
                                Instead of solving theoretical LeetCode problems...
                            </p>

                        </div>

                        {/* Global */}

                        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#120629] to-[#09040F] p-10">

                            <img
                                src={Global}
                                className="mx-auto w-72"
                            />

                            <h3 className="mt-8 text-center text-3xl text-white">
                                Global Talent Base
                            </h3>

                            <p className="mt-4 text-center text-white/60">
                                Get access to top candidates around the world...
                            </p>

                        </div>

                    </div>

                    {/* BIG CARD */}

                    <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#120629] to-[#09040F] p-12">

                        <img
                            src={Cheating}
                            className="mx-auto w-full max-w-4xl"
                        />

                        <h3 className="mt-12 text-center text-4xl text-white">
                            Cheating-Proof
                        </h3>

                        <p className="mx-auto mt-6 max-w-4xl text-center text-white/60">
                            Instead of preventing AI use, we encourage it...
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}