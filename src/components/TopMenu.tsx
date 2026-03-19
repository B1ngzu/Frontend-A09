import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="flex items-center justify-end px-10 py-3 bg-gray-800 shadow-md gap-4">
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-contain" />
    </nav>
  );
}
