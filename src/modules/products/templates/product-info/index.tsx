import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  sanityData?: any
}

const ProductInfo = ({ product, sanityData }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-3xl leading-10 text-ui-fg-base"
          data-testid="product-title"
        >
          {sanityData?.title || product.title}
        </Heading>

        {sanityData?.subtitle && (
          <Text className="text-large text-ui-fg-subtle italic">
            {sanityData.subtitle}
          </Text>
        )}

        <Text
          className="text-medium text-ui-fg-subtle whitespace-pre-line"
          data-testid="product-description"
        >
          {sanityData?.description || product.description}
        </Text>

        {sanityData?.features && sanityData.features.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-6">
            <Text className="font-semibold mb-4 text-small-regular text-ui-fg-base">Key Features</Text>
            <ul className="list-disc list-outside pl-5 space-y-2">
              {sanityData.features.map((feature: string, index: number) => (
                <li key={index} className="text-medium text-ui-fg-subtle">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {sanityData?.specifications && sanityData.specifications.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-6">
            <Text className="font-semibold mb-4 text-small-regular text-ui-fg-base">Specifications</Text>
            <div className="grid grid-cols-1 gap-y-3">
              {sanityData.specifications.map((spec: any, index: number) => (
                <div key={index} className="flex justify-between text-medium border-b border-dashed border-gray-100 pb-2 last:border-0 text-ui-fg-subtle">
                  <span className="font-medium text-ui-fg-base">{spec.label}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
