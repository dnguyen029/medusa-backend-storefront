
import React from 'react';
import LocalizedClientLink from "@modules/common/components/localized-client-link";

export default function AboutPage() {
    return (
        <div className="bg-[#FDF8F5] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#2C1810]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-80"
                        alt="Studio interior"
                    />
                </div>
                <div className="relative z-20 text-center text-white px-6 max-w-4xl flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D9B382] mb-8 block animate-in slide-in-from-bottom-4 duration-700">Established 2024</span>
                    <h2 className="text-6xl md:text-8xl luxury-serif mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-100">The Studio</h2>
                    <div className="w-24 h-[1px] bg-white/30 my-8 animate-in zoom-in duration-1000 delay-200" />
                    <p className="text-lg md:text-xl font-light italic text-white/90 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                        Designing for a life lived slowly.
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8D4E3F] mb-8 block">Our Origin</span>
                <h3 className="text-4xl md:text-5xl luxury-serif mb-12 text-[#2C1810] leading-tight">
                    Born from a desire to return <br /> <span className="italic text-[#8D4E3F]">to the essential.</span>
                </h3>
                <p className="text-lg text-[#2C1810]/70 leading-relaxed font-light mb-8">
                    Arch & Grain began in a small workshop in the Pacific Northwest, where the rain falls heavy and the forests grow deep. We saw a world of disposable furniture and plastic veneers, and we wanted to offer an alternative: pieces that age, patina, and tell a story.
                </p>
                <p className="text-lg text-[#2C1810]/70 leading-relaxed font-light">
                    We believe the bathroom is not just a utility, but a sanctuary—a place of ritual and renewal. Our designs reflect this, balancing the permanence of stone with the warmth of living wood.
                </p>
            </section>

            {/* Team / Values Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Craftsmanship', desc: 'Every joint is hand-cut, every surface hand-finished.' },
                        { title: 'Sourcing', desc: 'We only use FSC-certified timber and ethically quarried stone.' },
                        { title: 'Longevity', desc: 'Built to last generations, not just renovation cycles.' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-12 text-center shadow-sm border border-[#F5E9E2]">
                            <h4 className="text-2xl luxury-serif mb-4 text-[#2C1810]">{item.title}</h4>
                            <div className="w-8 h-[1px] bg-[#8D4E3F] mx-auto mb-6"></div>
                            <p className="text-[#2C1810]/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto h-[600px]">
                    <div className="h-full overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            alt="Workshop tools"
                        />
                    </div>
                    <div className="h-full overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2000&auto=format&fit=crop"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            alt="Design sketches"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center bg-[#F5E9E2]">
                <h3 className="text-4xl luxury-serif mb-8 text-[#2C1810]">Visit our studio</h3>
                <p className="text-[#2C1810]/60 mb-12 max-w-md mx-auto">
                    We are open by appointment for design consultations and material viewing.
                </p>
                <LocalizedClientLink
                    href="/contact"
                    className="inline-block px-10 py-5 bg-[#2C1810] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform hover:bg-[#8D4E3F]"
                >
                    Book an Appointment
                </LocalizedClientLink>
            </section>
        </div>
    );
}
