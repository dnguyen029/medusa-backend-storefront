import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Arch & Grain | Luxury Bathroom Architecture",
  description:
    "We translate the raw honesty of stone and grain into the foundation of your daily restoration.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Fetch top 3 products for Signature Series
  const { response: { products } } = await listProducts({
    countryCode,
    queryParams: { limit: 3 }
  })

  return (
    <>
      <Hero />

      {/* Signature Series Section */}
      <div id="featured-shop" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 flex justify-between items-end reveal">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-m3-terracotta block mb-4">Our Gallery</span>
            <h3 className="text-5xl md:text-7xl luxury-serif text-m3-coffee">Signature Series</h3>
          </div>
          <Link
            href={`/${countryCode}/store`}
            className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-m3-sand pb-2 text-m3-coffee hover:text-m3-terracotta hover:border-m3-terracotta transition-all"
          >
            View Full Catalog
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <li key={product.id}>
                <ProductPreview region={region} product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Ethos Section */}
      <section className="py-40 px-6 bg-m3-oat">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { title: 'The Ethos', desc: 'Every piece of timber is tracked from the forest floor to your bath.', icon: 'Grain' },
            { title: 'The Arch', desc: 'Precision-milled stone that honors the architectural curve.', icon: 'Stone' },
            { title: 'The Bond', desc: 'A thirty-year structural promise built into every mortise joint.', icon: 'Joinery' }
          ].map((feature, i) => (
            <div key={i} className={`reveal text-left stagger-${i + 1}`}>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-m3-terracotta mb-10 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-m3-terracotta"></div>
                {feature.icon}
              </div>
              <h3 className="text-4xl luxury-serif mb-6 text-m3-coffee">{feature.title}</h3>
              <p className="text-m3-coffee/60 text-lg font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
