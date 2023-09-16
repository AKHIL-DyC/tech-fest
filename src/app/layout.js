
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { getServerSession } from 'next-auth'
import  SessionProvider  from '@/context/SessionContext'



const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: 'Mecel',
  description: 'tech fest',
}

export default async function RootLayout({ children }) {
  const session =await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <SessionProvider session={session}>
        <div className='container'>
        <Navbar />
        {children}
        <Footer />
        </div>
        </SessionProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
