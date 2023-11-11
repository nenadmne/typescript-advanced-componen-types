import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
  type: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, label, type, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </p>
  );
}
