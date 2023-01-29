import { tw } from 'typewind';

import { AuthProvider } from '@/providers/AuthProvider'
import { TRPCProvider } from '@/providers/TRPCProvider'
import './globals.css'
import { Navigation } from './Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <TRPCProvider>
          <head />
          <body className={tw.max_w_7xl.mx_auto.h_screen}>
            <div className={tw.flex.flex_row.h_screen.gap_6}>
              <Navigation />
              {children}
            </div>
          </body>
        </TRPCProvider>
      </AuthProvider>
    </html>
  )
}
