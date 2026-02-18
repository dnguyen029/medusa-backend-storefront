
import React from 'react';
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default function ProcessPage() {
    return (
        <div className="bg-[#FDF8F5] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#2C1810]">
                <div className="absolute inset-0 z-0">
                    {/* Darker Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1595168066702-861f49673525?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover opacity-80"
                        alt="Artisan at work"
                    />
                </div>
                <div className="relative z-20 text-center text-white px-6 max-w-4xl flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D9B382] mb-8 block animate-in slide-in-from-bottom-4 duration-700">Our Philosophy</span>
                    <h2 className="text-6xl md:text-8xl luxury-serif mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-100">The Arch <br /><span className="italic block mt-2 text-[#F5E9E2]">&</span> Grain</h2>
                    <div className="w-24 h-[1px] bg-white/30 my-8 animate-in zoom-in duration-1000 delay-200" />
                    <p className="text-lg md:text-xl font-light italic text-white/90 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                        An unwavering commitment to architectural permanence and organic warmth.
                    </p>
                </div>
            </section>

            {/* The Two Pillars */}
            <section className="py-32 px-6 max-w-7xl mx-auto space-y-40">

                {/* Pillar 1: Stone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="animate-in slide-in-from-left duration-1000">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl luxury-serif text-[#8D4E3F]/30 italic">01</span>
                            <div className="w-12 h-[1px] bg-[#8D4E3F]"></div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8D4E3F]">The Arch</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl luxury-serif mb-8 text-[#2C1810]">Timeless <br /><span className="italic text-[#8D4E3F]">Stone</span></h3>
                        <p className="text-lg text-[#2C1810]/70 leading-relaxed mb-8 font-light">
                            Every vanity begins with the search for the perfect block. We source our Statuario Marble from Italy and our honed Travertine from Turkey.
                        </p>
                        <p className="text-lg text-[#2C1810]/70 leading-relaxed font-light">
                            Our stonemasons hand-finish every edge, ensuring the "Arch" silhouettes—our signature curves—retain the raw power of the mountain while offering a soft, tactile touch that invites the hand.
                        </p>
                    </div>
                    <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl relative group">
                        <img
                            src="https://images.unsplash.com/photo-1618219740975-d40974bb7378?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            alt="Stone Detail"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent"></div>
                    </div>
                </div>

                {/* Pillar 2: Wood */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="lg:order-2 animate-in slide-in-from-right duration-1000 delay-200">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl luxury-serif text-[#D9B382]/30 italic">02</span>
                            <div className="w-12 h-[1px] bg-[#D9B382]"></div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D9B382]">The Grain</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl luxury-serif mb-8 text-[#2C1810]">Living <br /><span className="italic text-[#D9B382]">Hardwood</span></h3>
                        <p className="text-lg text-[#2C1810]/70 leading-relaxed mb-8 font-light">
                            Hardwood is the soul of our studio. We specialize in Rift-Sawn White Oak and Smoked Ash, selected for their stability in high-humidity environments.
                        </p>
                        <p className="text-lg text-[#2C1810]/70 leading-relaxed font-light">
                            We use traditional joinery—mortise and tenon—to ensure our cabinetry lasts as long as the home itself. Each unit is sealed with a proprietary matte wax that celebrates the open grain rather than hiding it under plastic.
                        </p>
                    </div>
                    <div className="lg:order-1 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl relative group">
                        <img
                            src="https://images.unsplash.com/photo-1611269154421-4e27233eb299?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            alt="Wood Grain Detail"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent"></div>
                    </div>
                </div>

            </section>

            {/* Philosophy Callout */}
            <section className="bg-[#F5E9E2] py-40 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-12 shadow-sm rotate-45">
                        <div className="w-2 h-2 rounded-full bg-[#8D4E3F]"></div>
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 text-[#8D4E3F]">A Legacy of Quality</h4>
                    <blockquote className="text-3xl md:text-5xl luxury-serif italic leading-[1.3] text-[#2C1810] mb-16">
                        "We build for the senses. A vanity should feel as intentional as a piece of sculpture, yet as reliable as the ground beneath your feet."
                    </blockquote>
                    <div className="flex items-center justify-center gap-6">
                        <div className="w-8 h-[1px] bg-[#2C1810]/20"></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2C1810]/60">Studio Founders, Arch & Grain</p>
                        <div className="w-8 h-[1px] bg-[#2C1810]/20"></div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6 text-center bg-[#FDF8F5]">
                <h3 className="text-4xl luxury-serif mb-8 text-[#2C1810]">Ready to design your sanctuary?</h3>
                <LocalizedClientLink
                    href="/contact"
                    className="inline-block px-10 py-5 bg-[#2C1810] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform hover:bg-[#8D4E3F]"
                >
                    Contact Our Studio
                </LocalizedClientLink>
            </section>
        </div>
    );
}
