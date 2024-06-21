import React from 'react';

interface PropsInputs {
  id: string;
  kind: string;
  title: string;
  value: string;
  placeholder: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}
const Input: React.FC<PropsInputs> = ({
  id,
  kind,
  title,
  value,
  placeholder,
  onInput,
  error,
}) => {
  return (
    <div className="my-5">
      <label
        className="uppercase text-gray-600 block text-lg font-bold"
        htmlFor="name"
      >
        {title}:
      </label>
      <input
        type={kind}
        placeholder={placeholder}
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
        id={id}
        name={id}
        value={value}
        onChange={onInput}
      />
      {error && <span className="text-rose-600">{error}</span>}
    </div>
  );
};

export default Input;
