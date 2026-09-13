import dynamic from "next/dynamic";
const Videoback = dynamic(() => import("./Videoback.jsx"), { ssr: false });
const Homevideo = () => {
  // TODO: drop the real ISTE-CGC background video at this path
  const pathval = "/videos/hero-background.mp4";
  return (
    <div>
      <Videoback srcval={pathval} />
    </div>
  );
};

export default Homevideo;
