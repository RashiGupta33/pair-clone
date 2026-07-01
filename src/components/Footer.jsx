export default function Footer() {
    return (
        <footer className="bg-[#0C051E] pt-24 pb-16">
            <div className="mx-auto max-w-[1600px] px-10 lg:px-20">
                {/* Logo */}
                <img
                    src="#"
                    alt="Pair AI"
                    className="h-10 w-auto"
                />

                {/* Divider */}
                <div className="my-12 h-px w-full bg-white/[0.08]" />

                {/* Bottom */}
                <div className="flex flex-col gap-8 text-[17px] text-white/65 md:flex-row md:items-center">
                    {/* Left */}
                    <p className="whitespace-nowrap">
                        © 2025 Pair AI. All rights reserved.
                    </p>

                    {/* Middle */}
                    <div className="flex flex-1 items-center justify-start gap-12 md:ml-12">
                        <a
                            href="/privacy"
                            className="transition-colors duration-300 hover:text-white"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="transition-colors duration-300 hover:text-white"
                        >
                            Terms of Service
                        </a>
                    </div>

                    {/* Right */}
                    <a
                        href="https://www.linkedin.com/company/pairai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-white"
                    >
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    );
}