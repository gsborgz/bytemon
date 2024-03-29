import { PropsWithChildren, useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { ModalContext } from '@/providers/modal';

export type ModalContent = React.ReactNode | JSX.Element | null;

export type ModalProps = {
  title: string;
  icon: JSX.Element;
  size?: number;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className={ `rounded overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-700 p-5` }>
      <section className='flex flex-row items-center justify-between mb-4'>
        <div className='flex flex-row items-center'>
          { props.icon }

          <h1 className='ml-2 text-xl'>{ props.title }</h1>
        </div>

        <XCircleIcon className='h-5 w-5 cursor-pointer' onClick={ () => toggleModal(null) } />
      </section>

      <section className='flex flex-row flex-wrap justify-between'>
        { props.children }
      </section>
    </div>
  );
}
