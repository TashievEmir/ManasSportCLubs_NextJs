"use client"
import './globals.css'
import { useRouter } from 'next/navigation';
import { Providers } from './provider'

export default function RootLayout({ children }) {
  const router = useRouter()

  return (
    <html lang="en">
      <body /*className={inter.className}*/>
        <main >
          <div >
          </div>
          <div>
              <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  )
}
