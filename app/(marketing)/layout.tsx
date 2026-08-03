import type { Metadata, Viewport } from 'next'

// Components
import Layout from "../../components/Layout/Layout"

// Styles & Icons
import '../../styles/global.scss'
import "../../assets/icons/style.css"
import "typeface-roboto"
import "typeface-montserrat"

import { SITE_URL } from "../../utils/metadata"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/images/branding/favicon.png",
  },
  authors: [{ name: "Webdacity" }],
  other: {
    copyright: `ProMech © ${new Date().getFullYear()}`,
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
