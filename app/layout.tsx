import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CRM Dashboard',
  description: 'Minimalistic CRM Dashboard',
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
