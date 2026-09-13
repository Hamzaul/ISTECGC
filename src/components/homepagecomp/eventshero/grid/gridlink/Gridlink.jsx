
const Gridlink = ({item}) => {
  return ( 
    <div className="split-img-c flex w-fit">
      <span className={`split-img-m w-[150px] h-[145px] md:w-[300px] md:h-[285px] lg:w-[420px] lg:h-[400px] bg-cover my-6 hover:mx-[8px] md:hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
      <span className={`split-img-m w-[150px] h-[145px] md:w-[300px] md:h-[285px] lg:w-[420px] lg:h-[400px] bg-cover my-6 bg-pos-x-150 md:bg-pos-x-300 lg:bg-pos-x-400 hover:mx-[8px] md:hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
      <span className={`split-img-m w-[150px] h-[145px] md:w-[300px] md:h-[285px] lg:w-[420px] lg:h-[400px] bg-cover my-6 bg-pos-x-300 md:bg-pos-x-600 lg:bg-pos-x-800 hover:mx-[8px] md;hover:mx-[14px] transition-all ease-in-out duration-500`}
      style={{backgroundImage: `url(${item.path})`}}></span>
    </div>  
   );
}
 
export default Gridlink;