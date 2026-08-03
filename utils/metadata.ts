import type { Metadata } from 'next'

export const SITE_URL = "https://www.promechengineering.co.za"

interface IHeadProps {
    title: string
    description: string
    canonical?: string
    robots?: boolean
}

export function buildMetadata({ title, description, canonical, robots }: IHeadProps): Metadata {
    const url = canonical ? `${SITE_URL}${canonical}` : undefined

    return {
        title,
        description,
        robots: robots === false ? "noindex, nofollow" : "index, follow",
        alternates: url ? { canonical: url } : undefined,
        openGraph: {
            siteName: "ProMech",
            title,
            description,
            type: "website",
            url,
            images: [
                {
                    url: `${SITE_URL}/images/branding/social.png`,
                    width: 500,
                    height: 500,
                    alt: "D-MER Logo",
                },
            ],
        },
    }
}
