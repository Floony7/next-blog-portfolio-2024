import Image from "next/image";

type Props = {
  filename: string;
  title: string;
  customHeight?: number;
};

export default function PortfolioItem({
  filename,
  title,
  customHeight,
}: Props) {
  return (
    <Image
      className="rounded-[1.25rem] object-cover shadow-2xl shadow-slate-950/20"
      src={`/images/portfolio/${filename}`}
      alt={title}
      width="600"
      height={customHeight || 400}
      priority={true}
    />
  );
}
