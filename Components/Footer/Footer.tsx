import { AiFillFacebook, AiFillInstagram, AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import Logo from "../Logo";
const Footer = () => {
  return (
    <footer className="px-20 bg-black ">
      <div className="flex items-end justify-between py-10">
        <div className="space-y-4">
          <Logo />
          <p>
            Bonham Trade Centre, 50-54 Bonham <br /> Strand, Sheung Wan, Hong Kong
          </p>
        </div>
        <div className="space-y-3">
          <p>+1(402) 512-3371</p>
          <p>admin@gratisdigital.com</p>
        </div>
        <ul className="space-y-3">
          <li className="border-b-4 border-gray-700">Privacy Policy</li>
          <li className="border-b-4 border-gray-700">Terms and Conditions</li>
        </ul>

      </div>
      <div className="flex items-center justify-between py-6 text-sm text-gray-400 border-t border-gray-700" >
        <p className="">Gratisdigital © Copyright. All Rights Reserved.</p>
        <div className="flex items-center space-x-2">
          <span>Follow us:</span>
          <ul className="flex space-x-4">
            {/* {
              icons.map((icon)=> {

              })
            } */}

            <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center"><AiFillFacebook size={'20px'} color='black' /></li>
            <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center"><AiFillInstagram size={'20px'} color='black' /></li>
            <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center"><AiFillLinkedin size={'20px'} color='black' /></li>
            <li className="h-[35px] w-[35px] rounded-full bg-white flex justify-center items-center"><AiFillYoutube size={'20px'} color='black' /></li>

          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;