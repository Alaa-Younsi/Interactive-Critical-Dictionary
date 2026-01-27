import React from 'react';

interface SlidePanelProps {
  isActive: boolean;
  panelId: number;
  onToggleSubPanel?: () => void;
  onOpenContent?: (contentId: string) => void;
}

const SlidePanel: React.FC<SlidePanelProps> = ({ isActive, panelId, onToggleSubPanel, onOpenContent }) => {
  const renderPanelContent = () => {
    switch (panelId) {
      case 1:
        return (
          <>
            <h2>لديك حساب</h2>
            <div className="slide-buttons">
              <button>تسجيل الدخول</button>
              <button>انشاء حساب</button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2>انشاء حساب</h2>
            <div className="slide-buttons">
              <button>انشاء حساب</button>
              <button>تسجيل الدخول</button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2>من نحن</h2>
            <div className="panel-description">
              <h2>التعريف بالموقع</h2>
              <p>
                المعجم النقدي التفاعلي هو مشروع رقمي يهدف إلى بناء قاعدة معرفية شاملة تجمع أبرز المصطلحات والمفاهيم النقدية في مجال الأدب والنقد، وتعرض بطريقة تفاعلية تمكّن المستخدم من البحث والمقارنة والاطلاع على الشروحات المتعددة للمصطلح الواحد. كما يقدّم ترجمة دقيقة لهذه المصطلحات باللغتين الفرنسية والإنجليزية، لتيسير التواصل المعرفي والانفتاح على الدراسات العالمية. يسعى المعجم إلى توضيح الفروق الدلالية بين المصطلحات، والحد من فوضى الاصطلاح وتضارب المعاني في البحوث الأكاديمية، إضافةً إلى تعزيز الوعي النقدي لدى الباحثين والطلبة، وتوفير أداة علمية دقيقة تواكب التحولات المعرفية الحديثة في الخطاب النقدي العربي
              </p>
              <h2>التعريف بفريق العمل</h2>
              <p>
                <br /><span className="team-name">محمد زبيش</span> متخصص في الدراسات الأدبية والنقدية وأيضاً متخصص في تلقين العلوم الشرعية
              </p>
              <p>
                <br /><span className="team-name">نجوى لبازدة</span> متخصصة في الدراسات الأدبية والنقدية وأيضاً متخصصة في تسيير منشآت التربية والتعليم
              </p>
              <p>
                <br /><span className="team-name">دليلة مختاري</span> متخصصة في الدراسات الأدبية والنقدية وأيضاً متخصصة ايضاً في تربية النشء
              </p>
              <p>
                <br /><span className="team-name">رقية فلاحي</span> متخصصة في الدراسات الأدبية والنقدية
              </p>
              <p>
                <br /><span className="team-name">قيرواني أحمد زين الدين </span>متخصص في الدراسات النقدية والدراسات القانونية والسياسية وتطوير المهارات العملية
              </p>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2>الدخول كضيف</h2>
            <div className="slide-buttons">
              <button onClick={onToggleSubPanel}>المصطلحات</button>
              <button onClick={() => onOpenContent?.('pdfContent')}>المحاضرات</button>
              <button onClick={() => onOpenContent?.('videosContent')}>الملتقيات و الندوات</button>
              <button onClick={() => onOpenContent?.('podcastContent')}>بودكاست</button>
              <button>المقالات و المجلات</button>
              <button onClick={() => onOpenContent?.('textContent')}>البرامج التكوينية</button>
              <button onClick={() => onOpenContent?.('lilbrary')}>المكتبة الرقمية</button>
              <button>مذكرات التخرج ورسائل الدكتوراه</button>
              <button onClick={() => onOpenContent?.('facebookContent')}>المستجدات و الاصدارات</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`slide-panel ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: "url('/arabe10.png')" }}
    >
      {renderPanelContent()}
    </div>
  );
};

export default SlidePanel;
