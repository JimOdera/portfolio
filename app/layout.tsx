import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "James Nyang'oma Odera",
  description: 'James Nyangoma portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
