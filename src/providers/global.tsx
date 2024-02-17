'use client'

import { ThemeProvider } from 'next-themes';
import { SnackbarProvider } from '@/providers/snackbar';
import { ModalProvider } from '@/providers/modal';

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SnackbarProvider>
        <ModalProvider>
          { children }
        </ModalProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}