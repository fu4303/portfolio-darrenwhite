import { FC } from 'react';

const NavItem = ({ text, link }: { text: string; link: string }) => (
  <li className="text-white text-2xl font-bold mx-4 hover:text-orange-500 transition duration-150 ease-in-out">
    <a href={link}>{text}</a>
  </li>
);

const Nav: FC = () => (
  <nav>
    <ul className="ml-6 flex flex-col lg:flex-row justify-between items-end lg:items-center">
      <NavItem text="Home" link="/" />
      <NavItem text="Work" link="/work" />
      <NavItem text="Blog" link="/blog" />
    </ul>
  </nav>
);

export default Nav;