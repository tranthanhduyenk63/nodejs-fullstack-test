import Link from "next/link";

const TestCard = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className="font-medium bg-white shadow-md w-40 h-40 cursor-pointer justify-center flex items-center border-[1px] border-[#25221e2e] rounded-[12px]"
      href={href}
    >
      {text}
    </Link>
  );
};

export default function Home() {
  return (
    <main className="p-8 box-border h-full absolute w-full flex items-center">
      <div className="text-center w-full">
        <h3 className="font-bold text-center text-[#25221e] text-[1.75rem] opacity-75">
          ModernRecruiting Fullstack Test
        </h3>
        <div className="flex gap-6 mt-10 m-4 justify-center flex-wrap">
          <TestCard href="solutions/test1" text="3-state multilevel checkbox" />
          <TestCard href="solutions/test2" text="Heatmap sorting" />
          <TestCard href="solutions/test3" text="Data processing" />
          <TestCard href="solutions/test4" text="Code formatting" />
          <TestCard href="solutions/test5" text="Code optimization" />
        </div>
      </div>
    </main>
  );
}
