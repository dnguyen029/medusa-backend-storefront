
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Instagram, Twitter, Facebook } from "lucide-react"

export default async function Footer() {
  return (
    <footer className="border-t border-[#F5E9E2] w-full bg-[#fcf9f6]">
      <div className="content-container flex flex-col w-full py-20">
        <div className="flex flex-col md:flex-row justify-between w-full h-full gap-12">

          {/* Brand & Studio Info */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold tracking-tight luxury-serif text-[#2C1810] hover:text-[#8D4E3F] transition-colors"
            >
              ARCH & GRAIN
            </LocalizedClientLink>
            <div className="flex flex-col gap-2 text-sm text-[#2C1810]/60 leading-relaxed font-light italic">
              <p>124 Grain St, Pacific Northwest</p>
              <p>studio@archandgrain.co</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 md:gap-20 text-[11px] font-bold tracking-[0.2em] uppercase text-[#2C1810] md:w-2/3 md:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-[#8D4E3F] mb-2">Explore</span>
              <LocalizedClientLink href="/store" className="hover:text-[#8D4E3F] transition-colors">Collection</LocalizedClientLink>
              <LocalizedClientLink href="/process" className="hover:text-[#8D4E3F] transition-colors">Our Process</LocalizedClientLink>
              <LocalizedClientLink href="/about" className="hover:text-[#8D4E3F] transition-colors">The Studio</LocalizedClientLink>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[#8D4E3F] mb-2">Service</span>
              <LocalizedClientLink href="/contact" className="hover:text-[#8D4E3F] transition-colors">Contact</LocalizedClientLink>
              <LocalizedClientLink href="/faq" className="hover:text-[#8D4E3F] transition-colors">FAQ</LocalizedClientLink>
              <LocalizedClientLink href="/shipping" className="hover:text-[#8D4E3F] transition-colors">Shipping</LocalizedClientLink>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[#8D4E3F] mb-2">Social</span>
              <a href="https://instagram.com" target="_blank" className="hover:text-[#8D4E3F] transition-colors flex items-center gap-2">
                Instagram
              </a>
              <a href="https://pinterest.com" target="_blank" className="hover:text-[#8D4E3F] transition-colors flex items-center gap-2">
                Pinterest
              </a>
            </div>
          </div>

        </div>

        <div className="flex w-full mt-20 justify-between items-end border-t border-[#2C1810]/5 pt-8">
          <Text className="text-[10px] uppercase font-bold tracking-widest text-[#2C1810]/40">
            © {new Date().getFullYear()} Arch & Grain. All rights reserved.
          </Text>
          <div className="flex gap-4 text-[#2C1810]/40">
            <Instagram size={18} className="hover:text-[#8D4E3F] cursor-pointer" />
            <Twitter size={18} className="hover:text-[#8D4E3F] cursor-pointer" />
            <Facebook size={18} className="hover:text-[#8D4E3F] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
