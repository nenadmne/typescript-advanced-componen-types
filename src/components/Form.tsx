import { type ComponentPropsWithoutRef, type FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  };
  return (
    <form onSubmit={submitHandler} {...otherProps}>
      {children}
    </form>
  );
}
