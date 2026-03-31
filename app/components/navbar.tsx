import HLogo from "./h-logo";

export default function Navbar() {
  return (
    <div className="bg-white p-4 ">
      <div className="flex items-center gap-2">
        <p className="bg-main text-white w-8 h-8 flex justify-center items-center text-xl font-normal rounded-xl">
          H
        </p>
        <p className="font-medium text-2xl">Hexodea</p>
      </div>
    </div>
  );
}
