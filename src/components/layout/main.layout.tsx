import { FC } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const MainLayout: FC<any> = ({ children }) => {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
