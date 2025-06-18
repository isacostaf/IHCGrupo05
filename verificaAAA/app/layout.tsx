import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SkipLink } from '@/components/ui/skip-link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VerificaAAA',
  description: 'Ferramenta de verificação de acessibilidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SkipLink />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
