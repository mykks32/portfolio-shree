import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("border rounded-xl px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 hover:scale-105 hover:bg-lime-600 hover:rotate-2",
      secondary: "border-white/15 hover:scale-105 hover:bg-neutral-600 hover:rotate-2",
    },
    size: {
      sm: "h-10",
      md: "h-12"
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size: "sm" | "md";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant: variant,
        className: className,
        size,
      })}
      {...otherProps}
    />
  );
}
