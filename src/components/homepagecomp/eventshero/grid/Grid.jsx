import Gridlink from "./gridlink/Gridlink";

const Grid = () => {
  // Reuses the same posters as the Events page (src/data/events.js) so we
  // don't duplicate image assets. Swap these 3 for different picks any time
  // by changing the `path` values below.
  const gridpaths = [
    {
      title: "Graviton",
      path: "/Pictures/events/graviton.webp",
    },
    {
      title: "MCU x CGC",
      path: "/Pictures/events/monster-campus-unleashed.webp",
    },
    {
      title: "Vault Heist",
      path: "/Pictures/events/vault-heist.webp",
    },
  ];
  return ( 
    <div className="flex flex-col grayscale hover:grayscale-0 transition-all duration-150">
      {gridpaths.map((path=>(
        <Gridlink item={path} key={path.title}/>
      )))}
    </div>
   );
}
 
export default Grid;