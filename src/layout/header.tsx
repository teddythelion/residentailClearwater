import { useRouter } from 'next/router';
import useMounted from '@/hooks/useMounted';
import { useToggle } from '@/layout/context';
import useScrollHeader from '@/hooks/useScrollHeader';
import CustomImage from '@/components/image';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,} from '@/components/ui/navbar';


const style = {
  home: `text-white`,
  notHome: `bg-light dark:bg-dark dark:text-white text-custom shadow`,
  header: `fixed z-20 left-0 top-0 px-3 2xl:px-40 w-full md:px-4 lg:px-24 xl:px-28 logoFix`,  
};

export default function Header() {
  const { asPath } = useRouter();
  const { toggle } = useToggle();
  const { headerRef } = useScrollHeader();
  const isMounted = useMounted();

  return (
    <header
      ref={asPath === '/' ? headerRef : null}
      className={`${style.header} ${
        isMounted && asPath === '/' ? style.home : style.notHome
      }`}
    >
      <Navbar className="md:h-10 lg:h-10 xl:h-10 2xl:h-10 px-6">
        <NavbarBrand href="/">
          <CustomImage
            src={'/logo.png'}
            alt={'clearwater logo'}
            width={280}
            height={89}
            className ={'2xl:w-3/7 2xl:h-full lg:w-56 pb-2.5   '}
          />
        </NavbarBrand>
        <NavbarToggler toggle={toggle} />
        <NavbarCollapse>
          <NavbarNav orientation="end">
            <NavbarItem>              
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
