const BASE =
  "inline-flex h-[46px] cursor-pointer items-center gap-2 rounded-[10px] border px-[18px] text-[16.5px] font-semibold no-underline transition-colors duration-150";

const VARIANTS = {
  primary: "border-ink bg-ink text-paper hover:border-ink-hover hover:bg-ink-hover",
  secondary: "border-rule-2 bg-paper text-ink hover:border-ink",
};

const classes = (variant, className) => `${BASE} ${VARIANTS[variant]} ${className}`;

export function Button({ variant = "secondary", className = "", ...props }) {
  return <button type='button' className={classes(variant, className)} {...props} />;
}

/** A link styled as a button. External links always open in a new tab. */
export function ButtonLink({ variant = "secondary", external = false, className = "", ...props }) {
  const target = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <a className={classes(variant, className)} {...target} {...props} />;
}
