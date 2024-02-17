import { Type } from '@/models/type';
import { useDictionary } from '@/hooks/dictionary';
import Image from 'next/image';
import Icon from './icon';

export type TypeChipProps = {
  type: Type;
  size?: 'xs' | 'sm' | 'md';
  cursor?: string;
  onClick?: () => void;
};

export default function TypeChip(props: TypeChipProps) {
  const { locale } = useDictionary();
  const backgroundColor = props.type.color;

  const smallCard = (
    <div
      className={ `flex items-center justify-center font-bold w-40 p-4 rounded-lg shadow-lg cursor-${props.cursor || 'default'} select-none border-l-4 border-b-4 border-slate-900/50` }
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Icon
        src={ props.type.icon }
        className='absolute left-4 top-[50%] translate-y-[-50%] dark:invert'
        size={ 24 }
      />
    </div>
  );
  const mediumCard = (
    <div
      className={ `relative text-center text-xs font-bold w-40 p-4 rounded-lg shadow-lg cursor-${props.cursor || 'default'} select-none border-l-4 border-b-4 border-slate-900/50` }
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Icon
        src={ props.type.icon }
        className='absolute left-4 top-[50%] translate-y-[-50%] dark:invert'
        size={ 24 }
      />

      <span className='drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.5)]'>
        { (locale(`type.${props.type.name}.name`)).toUpperCase() }
      </span>
    </div>
  );
  const largeCard = (
    <div
      className={ `relative text-center text-lg font-bold w-56 p-4 rounded-xl shadow-lg cursor-${props.cursor || 'default'} select-none border-l-6 border-b-6 border-slate-900/50` }
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Icon
        src={ props.type.icon }
        className='absolute left-4 top-[50%] translate-y-[-50%] dark:invert'
        size={ 24 }
      />

      <span className='flex-grow text-center drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.5)]'>
        { (locale(`type.${props.type.name}.name`)).toUpperCase() }
      </span>
    </div>
  );

  switch (props.size) {
    case 'xs':
      return smallCard;
    case 'sm':
      return mediumCard;
    default:
      return largeCard;
  }
}
