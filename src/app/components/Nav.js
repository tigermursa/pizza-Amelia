import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full py-8 ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center ">
        {/* logo */}
        <Link href={"#"} className="max-w-[160px] lg:max-w-max">
          <Image src={"logo.svg"} alt="" width={180} height={180} />
        </Link>
        <div className="text-white flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image src={"phone.svg"} width={42} height={42} alt="" />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
            </div>
            <div>920 234 5768</div>
          </div>
          {/* cart */}
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src={"bag.svg"} width={38} height={38} alt="" />
            <div>3</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
