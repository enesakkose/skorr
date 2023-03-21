import Header from '@/components/Header'
import { Inter, Josefin_Sans } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin']
})

export const metadata = {
  title: 'Score',
  description: 'Generated by score',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
