import Link from 'next/link';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  bgColor?: string;
  textColor?: string;
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  icon?: JSX.Element;
  full?: boolean;
  onClick?: () => void;
  to?: string;
}

export default function Button(props: ButtonProps) {
  const gray ='bg-gray-300';
  const teal = 'bg-teal-400';
  const textWhite = 'text-white';

  if (props.to) {
    <Link
      href={ props.to }
      className={ `${props.primary ? teal : (props.secondary ? gray : props.bgColor)} ${props.textColor || textWhite} ${props.full ? 'w-full' : ''} font-bold py-2 px-4 rounded flex gap-2 items-center justify-center select-none` }
    >
      { props.icon || null }
      { props.label || null }
    </Link>
  }

  return (
    <button
      type={ props.type }
      className={ `${props.primary ? teal : (props.secondary ? gray : props.bgColor)} ${props.textColor || textWhite} ${props.full ? 'w-full' : ''} font-bold py-2 px-4 rounded flex gap-2 items-center justify-center select-none` } onClick={ props.onClick }
    >
      { props.icon || null }
      { props.label || null }
    </button>
  );
}