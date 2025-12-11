import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensure the browser does not restore previous scroll positions between route changes
if (typeof window !== 'undefined' && window.history?.scrollRestoration !== 'manual') {
  window.history.scrollRestoration = 'manual';
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }
    // Otherwise, scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

