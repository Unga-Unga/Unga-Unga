import { CakeIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavButton = ({ children, url }) => {
  const router = useRouter();
  return (
    <Link href={url}>
      <button className={router.pathname === url ? 'text-2xl' : 'text-2xl opacity-40'}>{children}</button>
    </Link>
  );
};
const FloatingBar = () => {
  return (
    <div className="w-5/6 max-w-md p-4 px-16 bg-white rounded-full shadow-2xl absolute bottom-4 flex flex-row items-center justify-between">
      <NavButton url="/">🤴🏼</NavButton>
      <span className="text-2xl text-gray-300">|</span>
      <NavButton url="/exercises">💪🏼</NavButton>
    </div>
  );
};

export default FloatingBar;
