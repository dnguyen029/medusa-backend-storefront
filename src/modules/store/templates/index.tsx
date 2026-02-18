
import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="bg-[#FDF8F5] min-h-screen pb-20">

      {/* Collection Header */}
      <div className="pt-32 pb-16 px-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8D4E3F] mb-4 block">The Collection</span>
        <h1 className="text-4xl md:text-6xl luxury-serif text-[#2C1810]" data-testid="store-page-title">
          Curated Artifacts
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-[#2C1810]/60 font-light leading-relaxed">
          Each piece is valid for a lifetime. Sourced from the finest quarries and forests, integrated with modern precision.
        </p>
      </div>

      {/* Filter Bar (Simplified) */}
      <div className="sticky top-0 z-30 bg-[#FDF8F5]/90 backdrop-blur-md border-y border-[#F5E9E2] py-4 px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.1em] text-[#2C1810]/60">
          <button className="text-[#2C1810] border-b border-[#2C1810] pb-1">All Objects</button>
          <button className="hover:text-[#8D4E3F] transition-colors">Stone Vanities</button>
          <button className="hover:text-[#8D4E3F] transition-colors">Wooden Console</button>
          <button className="hover:text-[#8D4E3F] transition-colors">Basins</button>
        </div>

        {/* Sort using existing component */}
        <div className="hidden md:block">
          <RefinementList sortBy={sort} />
        </div>
      </div>

      <div className="content-container px-6 md:px-12">
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
