
import React from 'react';

export default function ContactPage() {
    return (
        <div className="bg-[#FDF8F5] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[#2C1810]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-60"
                        alt="Workspace desk"
                    />
                </div>
                <div className="relative z-20 text-center text-white px-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D9B382] mb-6 block animate-in slide-in-from-bottom-4 duration-700">Inquiries</span>
                    <h1 className="text-5xl md:text-7xl luxury-serif mb-4 animate-in slide-in-from-bottom-8 duration-1000 delay-100">Bespoke Design</h1>
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div className="space-y-16 animate-in slide-in-from-left duration-1000 delay-200">
                        <div>
                            <h3 className="text-3xl luxury-serif mb-8 text-[#2C1810]">The Studio</h3>
                            <p className="text-[#2C1810]/70 font-light leading-relaxed mb-8 text-lg">
                                We welcome visitors by appointment to view our material library and discuss custom commissions.
                            </p>
                            <div className="space-y-4 text-[#2C1810]">
                                <p className="font-bold uppercase tracking-widest text-xs opacity-60">Address</p>
                                <p className="font-serif text-xl">123 Artisan Way, <br />Portland, OR 97209</p>
                            </div>
                            <div className="space-y-4 text-[#2C1810] mt-8">
                                <p className="font-bold uppercase tracking-widest text-xs opacity-60">Email</p>
                                <a href="mailto:hello@archandgrain.com" className="font-serif text-xl hover:text-[#8D4E3F] transition-colors">hello@archandgrain.com</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl luxury-serif mb-8 text-[#2C1810]">Trade Program</h3>
                            <p className="text-[#2C1810]/70 font-light leading-relaxed">
                                We offer exclusive pricing and customization options for interior designers and architects. Please inquire below with your credentials.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-10 shadow-lg border border-[#F5E9E2] animate-in slide-in-from-right duration-1000 delay-300">
                        <h3 className="text-2xl luxury-serif mb-8 text-[#2C1810]">Start a Conversation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/60">First Name</label>
                                    <input type="text" className="w-full bg-[#FAFAFA] border-b border-[#2C1810]/20 p-3 focus:outline-none focus:border-[#8D4E3F] transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/60">Last Name</label>
                                    <input type="text" className="w-full bg-[#FAFAFA] border-b border-[#2C1810]/20 p-3 focus:outline-none focus:border-[#8D4E3F] transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/60">Email Address</label>
                                <input type="email" className="w-full bg-[#FAFAFA] border-b border-[#2C1810]/20 p-3 focus:outline-none focus:border-[#8D4E3F] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/60">Subject</label>
                                <select className="w-full bg-[#FAFAFA] border-b border-[#2C1810]/20 p-3 focus:outline-none focus:border-[#8D4E3F] transition-colors text-[#2C1810]/80">
                                    <option>General Inquiry</option>
                                    <option>Custom Commission</option>
                                    <option>Trade Program</option>
                                    <option>Press</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/60">Message</label>
                                <textarea rows={5} className="w-full bg-[#FAFAFA] border-b border-[#2C1810]/20 p-3 focus:outline-none focus:border-[#8D4E3F] transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-[#2C1810] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8D4E3F] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
