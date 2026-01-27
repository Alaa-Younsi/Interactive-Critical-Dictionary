import React from 'react';

interface SubPanelProps {
  isVisible: boolean;
  onOpenContent: (contentId: string) => void;
}

const SubPanel: React.FC<SubPanelProps> = ({ isVisible, onOpenContent }) => {
  if (!isVisible) return null;

  return (
    <div className="sub-panel">
      <button onClick={() => onOpenContent('old-mosta')}>قديمة</button>
      <button onClick={() => onOpenContent('new-mosta')}>حديثة</button>
      <button onClick={() => onOpenContent('modern-mosta')}>معاصرة</button>
    </div>
  );
};

export default SubPanel;
