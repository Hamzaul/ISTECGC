import Link from "next/link";

const Navlink = ({ item, handleClick }) => {
  return (
    <Link
      href={item.path}
      onClick={handleClick}
      className="px-2 md:px-2 lg:px-3 py-2 whitespace-nowrap hover:bg-[#8B0000] hover:text-black md:hover:bg-[#8B0000] md:hover:text-white"
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
