'use client'

import { useContext } from 'react';
import { ModalContext } from '@/providers/modal';

export default function ModalContainer() {
  const { showModal, modalContent } = useContext(ModalContext);

  if (!showModal || !modalContent) {
    return null;
  }

  return (
    <section className='fixed z-30 flex items-center justify-center min-h-[93%] w-full bg-slate-800 bg-opacity-70'>
      { modalContent }
    </section>
  );
}
