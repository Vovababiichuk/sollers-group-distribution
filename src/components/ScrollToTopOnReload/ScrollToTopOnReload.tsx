import { useEffect } from 'react';

export const ScrollToTopOnReload: React.FC = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    scrollToTop();
  }, []); // викликається лише під час монтування компонента

  return null; // Компонент не повинен рендерити жодного DOM елемента
};

