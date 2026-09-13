import Image from "next/image";
function Images(onHover, src, alt) {
    return ( 
        <div className="relative">
            <Image src={src} alt={alt} width={128} height={128} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
     );
}

export default Images;