import Image from "next/image";
import Button from "../Button";
import Card from "../Card";


const Partners = () => {

  return (
    <div className="bg-white py-10">
      <div className=" ">
        <h3 className="text-black text-4xl text-center capitalize font-semibold leading-[3.2rem] ">We are one of the most effective <br />
          Digital Marketing Agencies in the industry</h3>
        <p className="mt-10 text-gray-600 text-sm text-center leading-6">With our expertise in affiliate marketing, lead generation, e-commerce marketing, and affiliate program management,<br /> we provide unrivaled solutions that ensure you to stand out from the crowd. We are committed to driving results that go <br /> beyond what you envisioned, enabling your business to flourish and succeed in the digital realm.</p>
        <div className="flex justify-center mt-10">
          <Button text="Get Started" />
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="h-[80px] cursor-pointer w-[80px] rounded-full relative">
            <Image fill src="/images/down.png" alt="drop down button" />
          </div>
        </div>
        <div className=" mt-10 py-5">
          <h3 className="text-black text-4xl text-center capitalize font-semibold mb-4">Modern Marketing and design that works</h3>
          <p className="text-gray-600 text-sm text-center leading-6">We are committed to providing results that go beyond what you envisioned, enabling your business to <br /> flourish and succeed in the digital realm.</p>
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-hidden w-full flex-nowrap px-10 mt-14 py-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      <div className="bg-black p-20">
        <div className="flex items-end">
          <h2 className="text-4xl leading-10 w-2/3">
            Empowering You to<br />
            Thrive in the Competitive <br />
            World of Digital Marketing"
          </h2>

          <p className="w-1/3">Partner with Gratis Digital and unlock the power of targeted leads to propel your business to new heights. Amplify your digital marketing success and stay ahead of the competition.</p>
        </div>
      </div>

    </div>

  );
}

export default Partners;