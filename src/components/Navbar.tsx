import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '校园记忆地图', path: '/map' },
    { name: '校友相册墙', path: '/album' },
    { name: '互动留言板', path: '/board' },
    { name: '个人时光舱', path: '/profile' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md border-b border-ruc-red/10" : "bg-transparent"
    )}>
      <div className="max-w-[1440px] mx-auto px-8 w-full flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <img src="images/中国人民大学校徽.png" alt="RUC Logo" className="h-14" />
          <div className="h-8 w-[1px] bg-gray-300 mx-2"></div>
          <div className="flex items-center space-x-3">
            <img src="images/RUC·时光驿站logo图.png" alt="Station Logo" className="h-12 rounded-full shadow-sm group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold ruc-red tracking-wider font-serif">RUC·时光驿站</span>
              <span className="text-xs text-gray-400 font-medium tracking-tighter">中国人民大学校友纪念社区</span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link text-2xl tracking-widest transition-all text-gray-800",
                location.pathname === link.path && "active text-ruc-red font-bold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-gray-600 hover:text-ruc-red font-medium text-base transition-colors">登录</Link>
          <Link to="/login" className="px-8 py-2.5 bg-ruc-red text-white rounded-md hover:bg-ruc-red-dark transition-all shadow-lg text-base font-bold tracking-wider">注册</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
