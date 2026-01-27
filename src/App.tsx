import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SlidePanel from './components/SlidePanel';
import SubPanel from './components/SubPanel';
import ContentPanel from './components/ContentPanel';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [subPanelVisible, setSubPanelVisible] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if clicking on slide-panel, sub-panel, or content-panel
      const clickedSlidePanel = target.closest('.slide-panel');
      const clickedSubPanel = target.closest('.sub-panel');
      const clickedContentPanel = target.closest('.content-panel');
      const clickedHeroButton = target.closest('.hero-buttons');
      const clickedHeaderButton = target.closest('.nav-buttons');
      const clickedButton = target.closest('button');
      
      // Close main slide panel ONLY if clicking outside the slide panel (but not on hero/header buttons)
      if (activePanel !== null && 
          !clickedSlidePanel && 
          !clickedSubPanel &&
          !clickedContentPanel &&
          !clickedHeroButton &&
          !clickedHeaderButton) {
        setActivePanel(null);
      }

      // Close sub panel when clicking anywhere EXCEPT on buttons (to allow button clicks to work)
      if (subPanelVisible && !clickedSubPanel && !clickedButton) {
        setSubPanelVisible(false);
      }

      // Close content panel when clicking anywhere EXCEPT on buttons (to allow button clicks to work)
      if (activeContent !== null && !clickedContentPanel && !clickedButton) {
        setActiveContent(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activePanel, subPanelVisible, activeContent]);

  const openPanel = (panelId: number) => {
    setActivePanel(panelId);
    setSubPanelVisible(false);
    setActiveContent(null);
  };

  const toggleSubPanel = () => {
    setSubPanelVisible(!subPanelVisible);
    setActiveContent(null);
  };

  const openContent = (contentId: string) => {
    setActiveContent(contentId);
    setSubPanelVisible(false);
  };

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <Hero onOpenPanel={openPanel} />
      
      {[1, 2, 3, 4].map(panelId => (
        <SlidePanel
          key={panelId}
          isActive={activePanel === panelId}
          panelId={panelId}
          onToggleSubPanel={toggleSubPanel}
          onOpenContent={openContent}
        />
      ))}

      <SubPanel isVisible={subPanelVisible} onOpenContent={openContent} />

      {activeContent && (
        <ContentPanel isVisible={true} contentId={activeContent} />
      )}

      <InfoSections />
      <Footer />
    </div>
  );
}

export default App;
