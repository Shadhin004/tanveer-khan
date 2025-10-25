import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})

export const metadata = {
	title: "Tanveer Khan - Portfolio",
	description: "Tanveer Khan is a professional web developer with over 5 years of experience in creating stunning and functional websites. Explore his portfolio to see his work and get in touch for your next project.",

	//for SEO
	keywords: [
    "Tanveer Khan",
    "web developer portfolio",
    "software engineer portfolio",
    "React.js developer",
    "Next.js developer",
    "full stack developer",
    "JavaScript developer",
  ],

  metadataBase: new URL("https://tanveer-khan.fi"),

  alternates: {
    canonical: "https://tanveer-khan.fi",
  },

  robots: {
    index: true,
    follow: true,
  },

	//for preview card when link is shared on social media
	openGraph: {
    title: "Tanveer Khan - Portfolio",
    description: "Explore the portfolio of Tanveer Khan, a professional web developer.",
    url: "https://tanveer-khan.fi",
    siteName: "Tanveer Khan",
    images: [
      {
        url: "https://tanveer-khan.fi/preview-tanveer.png", 
        width: 1200,
        height: 630,
        alt: "Tanveer Khan Portfolio",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
	children}) {
	return (
		<html lang="en" data-bs-theme="dark">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>{children}</body>
		</html>
	)
}
