import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalProviders from '@/providers/global';
import Header from '@/components/header';
import Main from '@/components/main';
import SnackbarContainer from '@/components/snackbar-container';
import ModalContainer from '@/components/modal-container';
import Footer from '@/components/footer';
import '@/assets/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poke Project',
  description: 'Please don\'t sue me Nintendo',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={ `${inter.className} h-screen` }>
        <GlobalProviders>
          <Header />

          <ModalContainer />

          <Main>
            <SnackbarContainer />

            { children }
          </Main>

          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}
