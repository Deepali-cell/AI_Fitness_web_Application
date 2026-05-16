import { InputFieldProps, LabelProps, SelectFieldProps, TagFieldProps } from "@/types/field.type";

export const Label = ({ children }: LabelProps) => (
  <label className="text-[12px] text-zinc-200 font-extrabold uppercase tracking-wider mb-2 block">
    {children}
  </label>
);

export const InputField = ({ label, ...props }: InputFieldProps) => (
  <div className="w-full">
    {label && <Label>{label}</Label>}
    <input
      {...props}
      className="w-full bg-zinc-950 border border-zinc-300 p-3 rounded-xl text-white text-sm focus:border-blue-500 outline-none transition-all placeholder:text-zinc-700"
    />
  </div>
);

export const SelectField = ({ label, options, ...props }: SelectFieldProps) => (
  <div className="w-full">
    {label && <Label>{label}</Label>}
    <select
      {...props}
      className="w-full bg-zinc-950 border border-zinc-300 p-3 rounded-xl text-white text-sm focus:border-blue-500 outline-none transition-all"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export const TagField = ({
  label,
  tags,
  value,
  onChange,
  onAdd,
  onRemove,
  placeholder,
}: TagFieldProps) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-zinc-950 border border-zinc-300 p-3 rounded-xl text-white text-sm focus:border-blue-500 outline-none transition-all"
      />
      <button
        type="button"
        onClick={onAdd}
        className="bg-zinc-800 px-4 rounded-xl hover:bg-blue-600 transition-colors"
      >
        +
      </button>
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-[10px] flex items-center gap-2"
        >
          {tag}
          <button
            type="button"
            onClick={() => onRemove(i)}
            className="text-zinc-600 hover:text-red-500"
          >
            ✕
          </button>
        </span>
      ))}
    </div>
  </div>
);
