import React from 'react';

interface HeroProps {
  onOpenPanel: (panelId: number) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPanel }) => {
  return (
    <div className="hero" style={{ backgroundImage: "url('/arabe3.png')" }}>
      <div className="hero-content">
        <h1>!مرحبا</h1>
        <p>مرحباً بك في المعجم النقدي التفاعلي</p>
        <div className="hero-buttons">
          <button onClick={() => onOpenPanel(1)}>لديك حساب</button>
          <button onClick={() => onOpenPanel(2)}>انشاء حساب</button>
          <button onClick={() => onOpenPanel(3)}>من نحن</button>
          <button onClick={() => onOpenPanel(4)}>الدخول كضيف</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
