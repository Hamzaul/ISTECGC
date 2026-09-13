import Domainmain from "./domainmain/Domainmain";
const Domainsubsec = () => {
  const domainroll = [
    {
      domainname: "MANAGEMENT",
      imgpath: "/Pictures/gifs/managementgif.mp4",
      description: "Coordinate and promote chapter activities while managing events and campaigns. This experience builds essential organization and management skills, enhancing the chapter's visibility and engagement.",
    },
    {
      domainname:"DESIGN",
      imgpath: "/Pictures/gifs/designgif.mp4",
      description: "Learn to create attractive visuals and engaging social media posts, learning UI/UX design. Whether new or experienced, this opportunity enhances your ability to create effective, attention-sbbing designs.",
    },
    {
      domainname:"TECHNICAL",
      imgpath: "/Pictures/gifs/technicalgif.mp4",
      description: "Gain expertise in web and app development, Al/ML, and competitive programming. Create websites, apps, and Al solutions while tackling challenges and refining skills to succeed in the digital landscape.",
    }
  ]
  return ( 
    <div className="flex flex-col lg:flex lg:flex-row md:my-20">
      {domainroll.map(link => (
        <Domainmain item={link} key={link.domainname} />  
      ))}
    </div>
   );
}
 
export default Domainsubsec;