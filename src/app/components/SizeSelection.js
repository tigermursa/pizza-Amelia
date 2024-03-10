import Image from "next/image";

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div className="">
      <div>
        <label className="bg-red-200 flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "small"
                ? " border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            alt=""
            width={60}
            height={60}
          />
          <impute
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
