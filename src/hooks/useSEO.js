import { useEffect } from 'react';

const useSEO = ({ title, description }) => {
  useEffect(() => {
    // Set Document Title
    document.title = title;

    // Helper function to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Standard SEO
    setMetaTag('name', 'description', description);
    
    // Open Graph (Social Media Sharing)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');

  }, [title, description]);
};

export default useSEO;
