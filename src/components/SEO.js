import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO Component for managing page meta tags
 * Use this component in each page to set custom SEO metadata
 */
const SEO = ({ 
  title = "Miracle Lighting | Wedding & Event Decorative Lights in Sri Lanka",
  description = "Miracle Lighting provides decorative lighting for weddings, Kathina festivals, Christmas and birthday parties across Sri Lanka.",
  keywords = "wedding lights, event lighting, decorative lights, Sri Lanka, Miracle Lighting",
  image = "https://miraclelighting.lk/cover.jpg",
  url = "https://miraclelighting.lk",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph (Facebook, WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
