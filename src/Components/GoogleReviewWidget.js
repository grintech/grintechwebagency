import React, { useEffect } from 'react';

const GoogleReviewWidget = () => {
  useEffect(() => {
    // Append the Elfsight platform script once on component mount
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-09ad5ffc-c128-411a-a51d-d6b8413e9932" data-elfsight-app-lazy></div>
  );
};

export default GoogleReviewWidget;
