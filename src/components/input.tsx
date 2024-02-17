export type InputProps = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  initialValue?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className='flex-1 flex flex-col gap-1'>
      <label htmlFor={ `input-${props.id}` } className='block text-sm font-medium text-gray-900 dark:text-white'>{ props.label }</label>

      <input
        id={ `input-${props.id}` }
        type={ props.type }
        className='h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={ props.placeholder }
        required={ props.required }
        maxLength={ props.maxLength }
        minLength={ props.minLength }
        disabled={ props.disabled }
        value={ props.initialValue }
        onChange={ props.onChange }
      />
    </div>
  );
}