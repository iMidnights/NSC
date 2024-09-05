import Page from "@/components/aboutPage"

import type { Metadata } from "next"

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About',
}

export default Page