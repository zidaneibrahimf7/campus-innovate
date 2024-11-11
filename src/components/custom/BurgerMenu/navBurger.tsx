// components/ui/BurgerMenu.tsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

interface MenuItem {
  title: string;
  link: string;
  isHidden: boolean;
}

export default function NavBurger({ navbarContent }: { navbarContent: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavigation = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden flex items-center">
      <button className="text-primary focus:outline-none" onClick={handleToggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center z-50">
          {navbarContent.map((menu, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(menu.link)}
              className="text-white text-lg mb-4 hover:text-secondary"
            >
              {menu.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
