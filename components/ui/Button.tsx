type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-white text-black hover:bg-zinc-200 hover:-translate-y-1",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}