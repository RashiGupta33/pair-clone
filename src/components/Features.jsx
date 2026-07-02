import Practical from "../assets/practical.png";
import Global from "../assets/global.png";
import Cheating from "../assets/cheating.avif";
import Scalability from "../assets/scalibility.png";

export default function Features() {
    const cardStyle = {
        background: "linear-gradient(180deg,#0D032B 0%,#080212 100%)",
        borderRadius: "40px",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,.12)",

        boxShadow: `
      inset 0 .6px .4px -.5px rgba(219,189,255,.06),
      inset 0 1.8px 1.2px -1px rgba(219,189,255,.06),
      inset 0 4.7px 3.3px -1.5px rgba(219,189,255,.07),
      inset 0 15px 10px -2px rgba(219,189,255,.08),

      inset 0 1px 0 rgba(255,255,255,.05),

      0 .6px .4px -.8px rgba(0,0,0,.12),
      0 2px 1.6px -1.6px rgba(0,0,0,.12),
      0 10px 7px -2.5px rgba(0,0,0,.12),

      inset 0 1px .5px rgba(138,15,252,.18),
      inset 0 3px 1px rgba(138,15,252,.18),
      inset 0 6px 3px rgba(138,15,252,.15),
      inset 0 12px 6px rgba(138,15,252,.12),
      inset 0 28px 16px rgba(138,15,252,.09)
    `,
    };

    return (
        <section
            className="relative overflow-hidden min-h-[1880px]"
            style={{ background: "linear-gradient(to bottom, #0c051e 0%, #080212 80%, #6E41EC 87%, #FFFFFF 96%)", }}
        >
            <div className="mx-auto max-w-[1280px] px-11">

                {/* Badge */}

                <div className="flex justify-center">
                    <span className="rounded-full bg-[#1A1037] px-8 py-3 text-lg font-medium text-white border border-white/10">
                        Meet Pair
                    </span>
                </div>

                {/* Heading */}

                <h2 className="mt-12 text-center text-[68px] font-medium leading-none tracking-[-0.05em] text-white">
                    The Future of SWE Hiring
                </h2>

                {/* ===== GRID ===== */}

                <div className="mt-20 grid grid-cols-12 gap-0">

                    {/* LEFT LARGE */}

                    <div
                        className="w-[750px] h-[650px] col-span-8"
                        style={cardStyle}
                    >
                        {/* Illustration */}

                        <div className="flex h-[420px] items-center justify-center overflow-hidden pt-8">

                            <img
                                src={Scalability}
                                alt="Scalably vet all candidates"
                                className="w-[70%] object-contain"
                            />

                        </div>

                        {/* Content */}

                        <div className="px-12 pb-12">

                            <h3
                                className="
                  bg-gradient-to-b
                  from-white
                  to-[#C7A7FF]
                  bg-clip-text
                  text-center
                  text-[40px]
                  font-medium
                  leading-[105%]
                  tracking-[-0.04em]
                  text-transparent
                  pt-5
                  pb-4
                "
                            >
                                Scalably vet
                                ALL Candidates
                            </h3>

                            <p
                                className="
                  mx-auto
                  mt-1
                  max-w-[530px]
                  text-center
                  text-[17px]
                  tracking-[-0em]
                  text-[#8C859D]
                "
                            >
                                No more hiring recruiters to sift through resumes.
                                With Pair, you can scalably vet every single
                                interested candidate who meets your hiring
                                criteria without wasting any of your existing
                                engineers' time conducting interviews.
                            </p>

                        </div>

                    </div>

                    {/* Right Column */}

                    <div className="w-[450px] h-[650px] flex flex-col gap-0">            {/* Practical Skill Assessment */}

                        <div
                            style={cardStyle}
                            className="flex h-[700px] flex-col"
                        >
                            <div className="h-[700px] w-[700px] items-center justify-center overflow-hidden -ml-33 -mt-37 -mb-40">
                                <img
                                    src={Practical}
                                    alt="Practical Skill Assessment"
                                    className="w-[100%] object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="bg-gradient-to-b from-white to-[#C7A7FF] bg-clip-text text-center text-[42px] font-medium leading-[105%] tracking-[-0.03em] text-transparent">
                                    Practical Skill
                                    <br />
                                    Assessment
                                </h3>

                                <p className="mx-auto mt-4 max-w-[300px] text-center text-[17px] font-semibold tracking-[-0.02em] text-[#8C859D]">
                                    Instead of solving theoretical LeetCode problems,
                                    candidates compete in timed coding challenges
                                    similar to what they will actually face on the job.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Row */}

                <div className="mt-6 grid grid-cols-12 gap-29">

                    {/* Global Talent Base */}

                    <div
                        className="col-span-4 w-[420px]"
                        style={cardStyle}
                    >
                        <div className="flex h-[300px] items-center justify-center pt-10">

                            <img
                                src={Global}
                                alt="Global Talent Base"
                                className="w-[100%] object-contain"
                            />

                        </div>

                        <div className="px-0 pb-8">

                            <h3 className="bg-gradient-to-b mt-20 from-white to-[#C7A7FF] bg-clip-text text-center text-[40px] font-medium leading-[110%] tracking-[-0.03em] text-transparent">
                                Global Talent Base
                            </h3>

                            <p className="mx-auto font-semibold mt-6 max-w-[360px] text-center text-[17px] leading-[165%] tracking-[-0.02em] text-[#8C859D]">
                                Get access to top candidates around the
                                <br />
                                world in our community.
                            </p>

                        </div>
                    </div>

                    {/* Cheating-Proof Starts Here */}

                    <div
                        className="col-span-8 w-[800px]"
                        style={cardStyle}
                    >              <div className="flex h-[350px] items-center justify-center pt-8">

                            <img
                                src={Cheating}
                                alt="Cheating-Proof"
                                className="w-[60%] object-contain"
                            />

                        </div>

                        <div className="px-12 pb-10">

                            <h3 className="bg-gradient-to-b from-white to-[#C7A7FF] bg-clip-text text-center text-[44px] font-medium tracking-[-0.03em] text-transparent">
                                Cheating-Proof
                            </h3>

                            <p className="mx-auto mt-5 max-w-[460px] text-center font-semibold text-[16px] tracking-[-0.02em] text-[#8C859D]">
                                There's no shortage of tools to cheat in LeetCode interviews.
                                Instead of trying to prevent AI use, we encourage it. We want
                                to see who can best utilize AI to solve technical problems in
                                the shortest time with the cleanest code.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section >
    );
}