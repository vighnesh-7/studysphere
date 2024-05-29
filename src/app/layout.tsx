import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import getCurrentUser from '@/actions/getCurrentUser'
import ToasterProvider from '@/components/ToasterProvider'
import AuthProvider from '@/providers/AuthProvider'
import Duplayout from '@/components/duplayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study Sphere',
  description: 'study sphere',
  icons: {
    icon: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='max-h-[30px]'>
            <ToasterProvider />
          </div>
          <Duplayout children={children} currentUser={currentUser}/>
        </body>
      </html>
    </AuthProvider>
  )
}
