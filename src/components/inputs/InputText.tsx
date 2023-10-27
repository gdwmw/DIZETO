type InputTextProps = {
  width: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
};

export default function InputText({ width, id, label, value, onChange }: InputTextProps) {
  return (
    <fieldset
      style={{ width: width }}
      className="group rounded-md border-2 border-black px-3 pb-2 focus-within:border-red-600 dark:border-white dark:focus-within:border-red-600"
    >
      <legend className="px-2 font-semibold group-focus-within:text-red-600 dark:text-white">{label}</legend>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-transparent px-2 font-semibold outline-none dark:font-normal dark:text-white"
      />
    </fieldset>
  );
}
