import UnderlineBar from "./UnderlineBar.tsx";

function SectionHeader({
  title,
  subtitle,
  padding,
}: {
  title: string;
  subtitle: string;
  padding?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-24 ${padding}`}
    >
      <div className="text-5xl font-bold">
        {title}
        <UnderlineBar />
      </div>
      <p className="text-center italic text-xl w-4/5 md:w-3/5">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
