import { AuthProvider } from '@/providers/AuthProvider'
import { TRPCProvider } from '@/providers/TRPCProvider'
import './globals.css'

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
          <body>{children}</body>
        </TRPCProvider>
      </AuthProvider>
    </html>
  )
}
