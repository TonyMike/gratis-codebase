import Link from "next/link";
import Button from "../Button";
import Logo from "../Logo";


const navlinks = ['services', 'About us']
const Header = () => {
  return (
    <header className="h-[12vh] px-20">
      <nav className="flex items-center justify-between">
        <Logo withText={true} />
        <ul className="flex items-center space-x-10">
          {

            navlinks.map(link => {
              return <li key={link} className="text-sm capitalize">
                <Link href="#">{link}</Link>
              </li>
            })
          }
        </ul>
        <Button text={'Get a free Quote'} />
      </nav>
    </header>
  );
}

export default Header;