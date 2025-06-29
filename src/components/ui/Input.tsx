type InputProps = {
  id: string;
  type: 'text' | 'email' | 'password' | 'tel';
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  id,
  type,
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
}: InputProps) => {
  return (
    <label className='block space-y-2'>
      <span className='inline-block font-semibold first-letter:capitalize'>
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={type !== 'password' ? name : 'off'}
        className='border-prime-300/10 bg-prime-300/2 w-full rounded-xl border px-4 py-3 placeholder:font-semibold placeholder:text-gray-400 placeholder:first-letter:capitalize'
      />
    </label>
  );
};
