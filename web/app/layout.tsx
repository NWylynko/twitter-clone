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
          <body className="max-w-7xl mx-auto">
            <div  className="grid grid-cols-2 m-2 gap-2">
              <Navigation />
              {children}
            </div>
          </body>
        </TRPCProvider>
      </AuthProvider>
    </html>
  )
} 
