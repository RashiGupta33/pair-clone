export default function SubscribeSection() {
    return (
        <section
            id="subscribe"
            className="bg-[#0C051E] py-28 px-6"
        >
            <div className="mx-auto max-w-6xl">
                <div
                    className="relative overflow-hidden rounded-[32px] border-t border-white/10"
                    style={{
                        background:
                            "linear-gradient(180deg,#14083B 0%,#110524 100%)",
                        boxShadow: `
              inset 0 1px 0 rgba(255,222,222,.04),
              inset 0 0.6px .4px rgba(219,189,255,.06),
              inset 0 15px 10px rgba(219,189,255,.08),
              inset 0 65px 32px rgba(138,15,252,.06),
              0 .6px .4px rgba(0,0,0,.12),
              0 10px 7px rgba(0,0,0,.12)
            `,
                    }}
                >
                    <div className="mx-auto flex max-w-3xl flex-col items-center px-8 py-20">            {/* Badge */}
                        <div
                            className="mb-8 rounded-full border border-white/15 px-6 py-3"
                            style={{
                                background:
                                    "linear-gradient(180deg,#301363 0%,#190B3D 100%)",
                            }}
                        >
                            <span className="text-sm font-medium text-white">
                                Subscribe
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-3xl text-center text-[40px] font-medium leading-[1.3] tracking-[-0.02em] text-white md:text-[56px]">
                            Subscribe for Updates
                        </h2>

                        {/* Description */}
                        <div className="mt-6 text-center text-lg font-medium leading-7 text-white">
                            <p>Be the first to hear about our newest</p>
                            <p>courses and product updates!</p>
                        </div>            {/* Form */}
                        <form className="mt-12 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                  h-16
                  flex-1
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  px-6
                  text-white
                  placeholder:text-white/50
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#7B5CF5]
                  focus:ring-2
                  focus:ring-[#7B5CF5]/30
                "
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="
                  h-16
                  rounded-2xl
                  px-10
                  text-base
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
                                style={{
                                    background:
                                        "linear-gradient(180deg,#51308A 0%,#402D70 100%)",
                                }}
                            >
                                Submit
                            </button>
                        </form>          </div>

                    {/* Top highlight */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)",
                        }}
                    />

                    {/* Purple glow */}
                    <div
                        className="pointer-events-none absolute -bottom-40 left-1/2 h-[320px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(138,15,252,.45) 0%, rgba(138,15,252,.15) 45%, transparent 75%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}