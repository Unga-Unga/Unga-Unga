import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from '../providers/user.provider';

const NavButton = ({ children, url }) => {
  useEffect;

  const router = useRouter();
  return (
    <Link href={url}>
      <button className={router.pathname === url ? '' : 'opacity-40'}>{children}</button>
    </Link>
  );
};
const FloatingBar = () => {
  const { isLogged } = useUser();
  console.log(isLogged);
  return (
    isLogged && (
      <div className="w-5/6 max-w-md p-4 px-16 bg-white rounded-full shadow-2xl absolute bottom-4 flex flex-row items-center justify-between">
        <NavButton url="/">🤴🏼</NavButton>
        <NavButton url="/exercises">💪🏼</NavButton>
        <NavButton url="profile">🤡</NavButton>
      </div>
    )
  );
};

export default FloatingBar;
