'use client'

import { useContext, useEffect, useState } from 'react';
import { Type } from '@/models/type';
import TypeDialog from '@/dialogs/type';
import { ModalContext } from '@/providers/modal';
import { useTypeFinder } from '@/hooks/types';
import TypeChip from '@/components/type-chip';

export default function Types() {
  const { findAllTypes } = useTypeFinder();
  const [types, setTypes] = useState<Type[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const { toggleModal } = useContext(ModalContext);

  useEffect(() => {
    setMounted(true);

    if (!types.length) {
      setTypes(findAllTypes());
    }
  }, [findAllTypes, types]);

  function openTypeModal(type: Type): void {
    const dialog = <TypeDialog typeId={ type.id } />;

    toggleModal(dialog);
  }

  if (!mounted) {
    return null;
  }

  return (
    <section className='flex flex-col items-center gap-4 p-10'>
      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
        { types?.map((type: Type) => (<TypeChip type={ type } key={ type.id } onClick={ () => openTypeModal(type) } cursor='pointer' />)) }
      </div>
    </section>
  );
}


