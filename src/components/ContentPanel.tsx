import React from 'react';

interface ContentPanelProps {
  isVisible: boolean;
  contentId: string;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ isVisible, contentId }) => {
  if (!isVisible) return null;

  const renderContent = () => {
    switch (contentId) {
      case 'old-mosta':
        return (
          <a href="/الطبع والصنعة عند القدامى.pdf" target="_blank" rel="noopener noreferrer">
            📄الطبع و الصنعة عند القدامى
          </a>
        );
      case 'new-mosta':
        return (
          <a href="/الرومانسية.pdf" target="_blank" rel="noopener noreferrer">
            📄الرومنسية
          </a>
        );
      case 'modern-mosta':
        return (
          <a href="/السيميائية.pdf" target="_blank" rel="noopener noreferrer">
            📄السيميائية
          </a>
        );
      case 'videosContent':
        return (
          <>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/bJCTPqYAp1o" frameBorder="0" allowFullScreen></iframe>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/BLOHA1vYIWc" frameBorder="0" allowFullScreen></iframe>
          </>
        );
      case 'pdfContent':
        return (
          <>
            <a href="/محاضرة رقم2.pdf" target="_blank" rel="noopener noreferrer">
              📄محاضرة رقم 1
            </a>
            <a href="/محاضرة رقم3.pdf" target="_blank" rel="noopener noreferrer">
              📄محاضرة رقم 2
            </a>
          </>
        );
      case 'facebookContent':
        return (
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/865681423072706/&show_text=false&width=500" 
            width="100%" 
            height="300" 
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        );
      case 'podcastContent':
        return (
          <a href="/podcast.mp4">
            بودكاست الناقد
          </a>
        );
      case 'textContent':
        return (
          <div className="training-content">
            <div className="training-section">
              <p className="training-title">
                <br />ورة تكوينية بعنوان: منهجيات التحليل الأدبي (البنية ,الدلالة ,الخطاب)
              </p>
              <p className="training-title">
                <br />الأهداف
              </p>
              <p className="training-text">
                <br />التعرف على مفاهيم البنية والدلالة والخطاب
              </p>
              <p className="training-text">
                <br />اكتساب أدوات التحليل الأولية للنصوص الأدبية
              </p>
              <p className="training-text">
                <br />المحاور الأساسية
              </p>
              <p className="training-text">
                <br />مفهوم البنية والبنية العميقة
              </p>
              <p className="training-text">
                <br />الدلالة والسياق
              </p>
              <p className="training-text">
                <br />الخطاب ووظائفه
              </p>
              <p className="training-text">
                <br />مصطلحات مرافقة: بنية، دلالة، خطاب، سياق، وظيفة، مرجع، نسق
              </p>
            </div>
            <div className="training-section">
              <p className="training-title">
                <br />دورةتكوينية بعنوان : تحليل الخطاب النقدي
              </p>
              <p className="training-title">
                <br />الأهداف
              </p>
              <p className="training-text">
                <br />فهم العلاقة بين الخطاب والسلطة والتمثيل
              </p>
              <p className="training-title">
                <br />المحاور
              </p>
              <p className="training-text">
                <br />الإيديولوجيا
              </p>
              <p className="training-text">
                <br />الهيمنة
              </p>
              <p className="training-text">
                <br />تحليل خطاب السلطة
              </p>
              <p className="training-text">
                <br />مصطلحات: إيديولوجيا، هيمنة، تمثيل، خطاب، تفكيك، سياقات السلطة
              </p>
            </div>
            <button>التسجيل</button>
          </div>
        );
      case 'lilbrary':
        return (
          <a href="/إشكالية المصطلح .pdf" target="_blank" rel="noopener noreferrer">
            📄اشكالية المصطلح
          </a>
        );
      default:
        return null;
    }
  };

  const isLargePanel = contentId === 'textContent';

  return (
    <div className={`content-panel ${isLargePanel ? 'large' : 'normal'}`}>
      {renderContent()}
    </div>
  );
};

export default ContentPanel;
