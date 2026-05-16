export type HandleChangeType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type FormEventType = React.FormEvent<HTMLFormElement>;
export interface LabelProps {
  children: React.ReactNode;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

export interface TagFieldProps {
  label: string;
  tags: string[];
  value: string;
  placeholder?: string;
  onChange: (e: HandleChangeType) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}
