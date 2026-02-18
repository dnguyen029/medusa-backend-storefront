
import { Suspense } from "react"
import NavHeader from "./nav-header"
import CartButton from "@modules/layout/components/cart-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <NavHeader
        cartButton={
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                href="/cart"
                data-testid="nav-cart-link"
              >
                Cart (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        }
      />
    </div>
  )
}
