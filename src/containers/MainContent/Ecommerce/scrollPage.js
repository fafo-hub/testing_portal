import React from 'react'
import { useState, useEffect } from 'react'

const ScrollPage = () => {

    const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > window.innerHeight / 2) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= window.innerHeight / 2) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleScrollUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div>
          {showScroll && (
              <button onClick={handleScrollUpClick} className="scroll-btn scroll-up-btn">
                  <i className="fa fa-arrow-up"></i>
              </button>
          )}
          <button onClick={handleScrollClick} className="scroll-btn scroll-down-btn">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 m-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </button>
    </div>
  )
}

export default ScrollPage
