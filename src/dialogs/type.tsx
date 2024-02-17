'use client'

import Modal from '@/components/modal';
import { MapIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useTypeFinder } from '@/hooks/types';
import { Type } from '../models/type';
import { useDictionary } from '../hooks/dictionary';

export type TypeDialogData = {
  typeId: number;
}

export default function TypeDialog(props: TypeDialogData) {
  const { findOneType: getType } = useTypeFinder();
  const { locale } = useDictionary();
  const [type, setType] = useState<Type>();
  const [findType, setFindType] = useState<boolean>();
  const icon = <MapIcon className='h-5 w-5 text-slate-700 dark:text-neutral-50' />;

  if (!findType) {
    setFindType(true);
    setType(getType(props.typeId));
  }

  if (!type) {
    return null;
  }

  return (
    <Modal title={ locale(`type.${type.name}.name`) } icon={ icon }>
      <span>{ locale(`type.d`) }</span>
    </Modal>
  );
}