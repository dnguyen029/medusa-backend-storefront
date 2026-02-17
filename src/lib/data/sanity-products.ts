import { sanityClient } from "../sanity"

export async function getSanityProductByHandle(handle: string) {
    const query = `*[_type == "product" && handle.current == $handle][0]{
    _id,
    title,
    subtitle,
    description,
    "slug": handle.current,
    "images": images[]{
      asset->{
        _id,
        url
      }
    },
    material,
    collection->{
      title
    }
  }`

    try {
        const product = await sanityClient.fetch(query, { handle })
        return product
    } catch (error) {
        console.warn("Error fetching Sanity product:", error)
        return null
    }
}

export async function getSanityProductByMedusaId(medusaId: string) {
    const query = `*[_type == "product" && medusaId == $medusaId][0]{
    _id,
    title,
    subtitle,
    description,
    "slug": handle.current,
    "images": images[]{
      asset->{
        _id,
        url
      }
    },
    material,
    collection->{
      title
    }
  }`

    try {
        const product = await sanityClient.fetch(query, { medusaId })
        return product
    } catch (error) {
        console.warn("Error fetching Sanity product:", error)
        return null
    }
}
