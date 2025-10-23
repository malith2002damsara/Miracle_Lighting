# SEO Component Usage Examples

Copy and paste these examples into your respective page files.

## Wedding.js
```javascript
import SEO from '../components/SEO';

// Add inside the component return, before other JSX
<SEO 
  title="Wedding Lighting Services | Miracle Lighting Sri Lanka"
  description="Create magical moments with our stunning wedding lighting solutions. Professional decorative lighting including fairy lights, chandeliers, and backdrop lighting for your special day in Sri Lanka."
  keywords="wedding lights, wedding decoration, bridal lighting, wedding fairy lights, wedding chandeliers, Sri Lanka weddings, marriage decoration"
  url="https://miraclelighting.lk/wedding"
/>
```

## AboutUs.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="About Us | Miracle Lighting - Professional Event Lighting Sri Lanka"
  description="Learn about Miracle Lighting, Sri Lanka's trusted provider of decorative lighting for weddings, festivals, and special events. Quality service since [year]."
  keywords="about Miracle Lighting, event lighting company, wedding lighting Sri Lanka, professional lighting services"
  url="https://miraclelighting.lk/about"
/>
```

## Gallery.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Gallery | Miracle Lighting - View Our Stunning Light Decorations"
  description="Browse our gallery of beautiful lighting decorations for weddings, Kathina festivals, Christmas parties, and birthday celebrations across Sri Lanka."
  keywords="lighting gallery, wedding decoration photos, event lighting pictures, decorative lights Sri Lanka"
  url="https://miraclelighting.lk/gallery"
/>
```

## BirthdayParties.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Birthday Party Lighting | Miracle Lighting Sri Lanka"
  description="Make your birthday celebration unforgettable with Miracle Lighting's colorful and creative lighting setups. Perfect for all ages and party themes in Sri Lanka."
  keywords="birthday party lights, celebration lighting, party decoration, birthday lights Sri Lanka, kids party lighting"
  url="https://miraclelighting.lk/birthday-parties"
/>
```

## ChristmasParties.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Christmas Party Lighting | Miracle Lighting Sri Lanka"
  description="Transform your Christmas celebration with festive lighting solutions. Christmas tree lights, fairy lights, and decorative illuminations across Sri Lanka."
  keywords="Christmas lights, Christmas party decoration, festive lighting, Christmas tree lights, holiday lighting Sri Lanka"
  url="https://miraclelighting.lk/christmas-parties"
/>
```

## KathinaFestival.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Kathina Festival Lighting | Miracle Lighting Sri Lanka"
  description="Honor the sacred Kathina festival with elegant temple decorative lighting. Traditional and respectful illumination for Buddhist ceremonies in Sri Lanka."
  keywords="Kathina festival lights, temple lighting, Buddhist ceremony decoration, religious event lighting, temple decorative lights Sri Lanka"
  url="https://miraclelighting.lk/kathina-festival"
/>
```

## FAQ.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="FAQ | Miracle Lighting - Common Questions About Event Lighting"
  description="Find answers to frequently asked questions about our decorative lighting services, pricing, installation, and booking process."
  keywords="lighting FAQ, event lighting questions, wedding lighting help, Miracle Lighting information"
  url="https://miraclelighting.lk/faq"
/>
```

## jobs.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Careers | Join Miracle Lighting Team - Job Opportunities"
  description="Join the Miracle Lighting team! Explore career opportunities in event lighting, installation, design, and customer service in Sri Lanka."
  keywords="lighting jobs, event lighting careers, Miracle Lighting jobs, employment opportunities Sri Lanka"
  url="https://miraclelighting.lk/jobs"
/>
```

## Service Pages Examples

### IndoorLighting.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Indoor Lighting Services | Miracle Lighting Sri Lanka"
  description="Elegant ambience for indoor events. Professional indoor decorative lighting including chandeliers, fairy lights, and ambient lighting solutions."
  keywords="indoor lighting, event hall lighting, indoor decoration, ballroom lighting, Sri Lanka"
  url="https://miraclelighting.lk/indoor-lighting"
/>
```

### OutdoorLighting.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Outdoor Lighting Services | Miracle Lighting Sri Lanka"
  description="Enchant your outdoor celebrations with stunning pathway lights, festoon lights, and garden illuminations for weddings and events."
  keywords="outdoor lighting, garden lighting, pathway lights, outdoor event decoration, Sri Lanka"
  url="https://miraclelighting.lk/outdoor-lighting"
/>
```

### BackdropLighting.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Backdrop Lighting | Miracle Lighting Sri Lanka"
  description="Glow up your backdrops with professional lighting. Perfect for photo booths, stage backgrounds, and wedding backdrops."
  keywords="backdrop lighting, stage lighting, photo booth lights, background illumination, Sri Lanka"
  url="https://miraclelighting.lk/backdrop-lighting"
/>
```

### Chandeliers.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Chandelier Rental | Miracle Lighting Sri Lanka"
  description="Classic luxury with elegant chandeliers for weddings and high-end events. Beautiful crystal and modern chandelier options available."
  keywords="chandelier rental, crystal chandeliers, luxury lighting, wedding chandeliers, Sri Lanka"
  url="https://miraclelighting.lk/Chandeliers"
/>
```

### FairyLights.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Fairy Lights | Miracle Lighting Sri Lanka"
  description="Add a magical touch with beautiful fairy lights. Perfect for weddings, parties, and romantic outdoor settings."
  keywords="fairy lights, string lights, twinkle lights, romantic lighting, wedding fairy lights, Sri Lanka"
  url="https://miraclelighting.lk/Fairy-Lights"
/>
```

### FestoonLights.js
```javascript
import SEO from '../components/SEO';

<SEO 
  title="Festoon Lights | Miracle Lighting Sri Lanka"
  description="Vintage charm with festoon lights. Create a warm and inviting atmosphere for outdoor weddings and garden parties."
  keywords="festoon lights, vintage lighting, cafe lights, bistro lights, outdoor party lights, Sri Lanka"
  url="https://miraclelighting.lk/Festoon-Lights"
/>
```

---

## How to Implement

1. Import the SEO component at the top of your page file:
   ```javascript
   import SEO from '../components/SEO';
   ```

2. Add the SEO component inside your component's return statement, preferably at the top:
   ```javascript
   return (
     <>
       <SEO 
         title="Your Page Title"
         description="Your page description"
         keywords="your, keywords, here"
         url="https://miraclelighting.lk/your-page"
       />
       
       {/* Rest of your page content */}
     </>
   );
   ```

3. Make sure to wrap your existing JSX with `<>...</>` (React Fragment) if not already wrapped.

---

## Tips for Good SEO

1. **Title**: Keep it under 60 characters, include main keyword
2. **Description**: 150-160 characters, compelling and descriptive
3. **Keywords**: 5-10 relevant keywords separated by commas
4. **URL**: Use the exact URL path for the page
5. **Update Regularly**: Keep descriptions fresh and relevant
6. **Be Unique**: Each page should have unique meta tags

---

**Last Updated**: October 22, 2025
