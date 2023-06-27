import ReduxProvider from '@/components/ReduxProvider/ReduxProvider'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer/Footer'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
  description: 'Купи билет в два нажатия с помощью нашего замечательного сервиса',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles/>
        <div id='modal-root'></div>
          <ReduxProvider>
            <Header/>
            {children}
            <Footer/>
          </ReduxProvider>
      </body>
    </html>
  )
}