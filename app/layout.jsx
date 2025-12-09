import { Outfit, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import { TranslationProvider } from "@/hooks/use-translation"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
})

export const metadata = {
  title: "El-Batioui Oussama | Software Engineer",
  description: "Portfolio of El-Batioui Oussama, Software Engineering student specializing in full-stack development",
  generator: "v0.app",
  icons: {
    icon: "/custom-logo.png",
    apple: "/custom-logo.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${greatVibes.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TranslationProvider>
            {children}
            <Analytics />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
