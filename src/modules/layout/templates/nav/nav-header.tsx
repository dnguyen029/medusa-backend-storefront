
"use client"

import React, { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MenuSidebar from "@modules/layout/components/menu-sidebar"

type NavHeaderProps = {
    cartButton: React.ReactNode
}

const NavHeader = ({ cartButton }: NavHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#FDF8F5]/80 backdrop-blur-md border-b border-[#F5E9E2]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Left: Menu & Links */}
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2 hover:bg-[#F5E9E2] rounded-full transition-colors text-[#2C1810]"
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="hidden lg:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-[#2C1810]">
                            <LocalizedClientLink href="/store" className="hover:text-[#8D4E3F] transition-colors">Collections</LocalizedClientLink>
                            <LocalizedClientLink href="/process" className="hover:text-[#8D4E3F] transition-colors">Bespoke</LocalizedClientLink>
                            <LocalizedClientLink href="/process" className="hover:text-[#8D4E3F] transition-colors">Story</LocalizedClientLink>
                        </div>
                    </div>

                    {/* Center: Title */}
                    <LocalizedClientLink
                        href="/"
                        className="text-2xl font-bold tracking-tight luxury-serif absolute left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-70 transition-opacity text-[#2C1810]"
                    >
                        ARCH & GRAIN
                    </LocalizedClientLink>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        <LocalizedClientLink
                            href="/contact"
                            className="hidden md:flex px-5 py-2.5 bg-[#D9B382] hover:bg-[#c9a372] text-[#2C1810] rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
                        >
                            Design Consultant
                        </LocalizedClientLink>

                        <button
                            className="p-2 hover:bg-[#F5E9E2] rounded-full transition-colors text-[#2C1810]"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>

                        <div className="relative">
                            {cartButton}
                        </div>
                    </div>
                </div>
            </header>

            <MenuSidebar
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default NavHeader
