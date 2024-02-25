'use client'

import Modal from '@/components/modal';
import { useState } from 'react';
import { useTypeFinder } from '@/hooks/type-finder';
import { Type } from '@/models/type';
import { useDictionary } from '@/hooks/dictionary';
import Icon from '../components/icon';
import TypeChip from '../components/type-chip';

export type TypeDialogData = {
  typeId: number;
}

export default function TypeDialog(props: TypeDialogData) {
  const { findOneType, findAdvantages } = useTypeFinder();
  const { locale } = useDictionary();
  const [type, setType] = useState<Type>();

  const [findType, setFindType] = useState<boolean>();

  if (!findType) {
    setFindType(true);
    setType(findOneType(props.typeId));
  }

  if (!type) {
    return null;
  }

  return (
    <Modal title={ locale(`type.${type.name}.name`) } icon={ <Icon size={ 30 } src={ type.icon } className='dark:invert' /> }>
      <div className='flex flex-col gap-4'>
        <span>{ locale(`type.${type.name}.description`) }</span>

        { findAdvantages(type).length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{ `${locale('type.advantages')}:` }</span>

            <div className='grid grid-cols-3 gap-2'>
              { findAdvantages(type).map((advantage) => (
                <TypeChip key={ advantage.id } type={ advantage } size='sm' />
              )) }
            </div>
          </div>
        ) : null }

        { type.weaknesses.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{ `${locale('type.weaknesses')}:` }</span>

            <div className='grid grid-cols-3 gap-2'>
              { type.weaknesses.map((weakness) => (
                <TypeChip key={ weakness } type={ findOneType(weakness) } size='sm' />
              )) }
            </div>
          </div>
        ) : null }

        { type.resistances.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{ `${locale('type.resistances')}:` }</span>

            <div className='grid grid-cols-3 gap-2'>
              { type.resistances.map((resistance) => (
                <TypeChip key={ resistance } type={ findOneType(resistance) } size='sm' />
              )) }
            </div>
          </div>
        ) : null }

        { type.immunities.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{ `${locale('type.immunities')}:` }</span>

            <div className='grid grid-cols-3 gap-2'>
              { type.immunities.map((immunity) => (
                <TypeChip key={ immunity } type={ findOneType(immunity) } size='sm' />
              )) }
            </div>
          </div>
        ) : null }
      </div>
    </Modal>
  );
}