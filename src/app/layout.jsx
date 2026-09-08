import {  Plus_Jakarta_Sans } from 'next/font/google';
import './global.css';
import Providers from './Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-toledana',
});


export const metadata = {
  title: 'ToledanaDev - Soluciones de Software IA a Medida',
  description: 'Desarrollo de software y soluciones tecnológicas IA a medida para potenciar tu negocio. Transformamos tus ideas en aplicaciones web innovadoras y eficientes.',
   icons: {
    icon: "/branding/toledana_ico.webp", 
    shortcut: "/branding/toledana_ico.webp",
    apple: "/branding/toledana_ico.webp", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} `}>
      <body className="min-h-screen font-sans antialiased selection:bg-primary/30">
        <Providers>
         <Navbar />
           <main className="transition-colors duration-300 bg-toledana-white dark:diagonal-gradient-pro min-h-screen pt-20">
            {children}
           </main>
         <Footer />
        </Providers>
      </body>
    </html>
  );
}