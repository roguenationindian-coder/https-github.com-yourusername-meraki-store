type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <p className="font-body uppercase tracking-[8px] text-gray-500">
        {eyebrow}
      </p>

      <h2 className="font-heading mt-4 text-5xl">
        {title}
      </h2>

      {description && (
        <p className="font-body mx-auto mt-5 max-w-xl text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}