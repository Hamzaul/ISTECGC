import Navlink from "./navlink/Navlink";

const Links = ({ isOpen, handleClick }) => {
  const linkroll = [
    { title: "HOME", path: "/" },
    { title: "TEAM", path: "/team" },
    { title: "EVENTS", path: "/events" },
    { title: "GRAVITON", path: "/events" },
    { title: "GALLERY", path: "/gallery" },
  ];

  return (
    <div
      className={`${
        isOpen
          ? "flex absolute top-12 w-full  h-screen left-0 justify-start items-center gap-12 bg-black z-51 py-8 text-white"
          : "hidden"
      } flex-col md:flex md:flex-row`}
    >
      {linkroll.map((link) => (
        <Navlink item={link} handleClick={handleClick} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
