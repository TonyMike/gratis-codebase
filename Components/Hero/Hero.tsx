import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[550px] w-full bg-red-300 relative ">
      <Image src="/images/hero.png" fill={true} alt="hero"  />
    </div>
  );
}

export default Hero;