"use client"

import dynamic from "next/dynamic"

const WanderingCat = dynamic(
  () => import("./WanderingCat.client"),
  { ssr: false }
)

export default function ClientOnlyPets() {
  return <WanderingCat />
}
