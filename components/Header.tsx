import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-md border-b pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white ">
              쇼핑몰 블로그
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
