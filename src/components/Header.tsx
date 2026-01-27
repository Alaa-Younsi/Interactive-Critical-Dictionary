import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="nav-buttons">
        <button>
          تسجيل الدخول
        </button>
        <button>
          الدخول كضيف
        </button>
      </div>
    </header>
  );
};

export default Header;
