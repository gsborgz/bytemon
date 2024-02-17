import { Type } from '@/models/type';
import { useDictionary } from '@/hooks/dictionary';
import Image from 'next/image';

export type TypeChipProps = {
  type: Type;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
};

export default function TypeChip(props: TypeChipProps) {
  const { locale } = useDictionary();
  const backgroundColor = props.type.color;

  const smallCard = (
    <div
      className='grid grid-cols-2 justify-center font-bold w-40 p-4 rounded-lg shadow-lg cursor-pointer select-none'
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Image
        src='/logos/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={24}
        height={24}
        priority
      />
    </div>
  );
  const mediumCard = (
    <div
      className='grid grid-cols-2 justify-center text-md font-bold w-40 p-4 rounded-lg shadow-lg cursor-pointer select-none'
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Image
        src='/logos/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={24}
        height={24}
        priority
      />

      <span className='drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.5)]'>
        { (locale(`type.${props.type.name}.name`)).toUpperCase() }
      </span>
    </div>
  );
  const largeCard = (
    <div
      className='grid grid-cols-2 justify-center text-lg font-bold w-40 p-4 rounded-lg shadow-lg cursor-pointer select-none'
      style={{ backgroundColor }}
      onClick={ props.onClick }
    >
      <Image
        src='/logos/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={24}
        height={24}
        priority
      />

      <span className='drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.5)]'>
        { (locale(`type.${props.type.name}.name`)).toUpperCase() }
      </span>
    </div>
  );

  switch (props.size) {
    case 'small':
      return smallCard;
    case 'medium':
      return mediumCard;
    default:
      return largeCard;
  }
}
