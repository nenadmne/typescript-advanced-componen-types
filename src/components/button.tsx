import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

type AnchorProps = ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if ("href" in props) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
