# Google Analytics Setup Guide

## Step-by-Step Instructions

### 1. Create Google Analytics Account

1. Go to https://analytics.google.com/
2. Click "Start measuring" or "Admin" (gear icon)
3. Click "Create Account"
4. Fill in Account details:
   - Account name: "Miracle Lighting"
   - Data sharing settings: (check as preferred)
5. Click "Next"

### 2. Create Property

1. Property name: "Miracle Lighting Website"
2. Reporting time zone: "(UTC+05:30) Sri Lanka Time"
3. Currency: "Sri Lankan Rupee (LKR)"
4. Click "Next"

### 3. Business Information

1. Industry: "Events & Entertainment" or "Other"
2. Business size: Select appropriate size
3. Click "Next"

### 4. Choose Business Objectives

Select relevant options:
- Generate leads
- Examine user behavior
- Click "Create"

### 5. Accept Terms of Service

Read and accept the Google Analytics Terms of Service

### 6. Get Your Measurement ID

1. After property creation, you'll see a "Measurement ID" 
2. Format: `G-XXXXXXXXXX`
3. Copy this ID

### 7. Add Google Analytics to Your Website

Open `public/index.html` and add the following code **inside the `<head>` section**, right after the meta tags:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**IMPORTANT**: Replace `G-XXXXXXXXXX` with your actual Measurement ID!

### Example of where to place it in index.html:

```html
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#000000" />
  
  <!-- Basic SEO -->
  <title>Miracle Lighting | Wedding & Event Decorative Lights in Sri Lanka</title>
  <meta name="description" content="...">
  <!-- ... other meta tags ... -->
  
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
</head>
```

### 8. Deploy and Verify

1. Deploy your website to https://miraclelighting.lk
2. Visit your website
3. Go back to Google Analytics
4. Wait 24-48 hours for data to appear
5. Check "Reports" > "Realtime" to see live visitors

---

## What Google Analytics Will Track

✅ **Visitor Data**
- Number of visitors
- Where they're from (country, city)
- What device they use (mobile, desktop)
- Which browser they use

✅ **User Behavior**
- Which pages they visit
- How long they stay
- Which links they click
- Conversion paths

✅ **Traffic Sources**
- Direct traffic
- Google search
- Social media
- Referrals from other websites

✅ **Events** (if configured)
- Button clicks
- Form submissions
- Video plays
- Downloads

---

## Important Reports to Check

### 1. **Realtime Report**
See who's on your site RIGHT NOW
- Location: Reports > Realtime > Overview

### 2. **Acquisition Report**
Where your visitors come from
- Location: Reports > Acquisition > User acquisition

### 3. **Engagement Report**
Which pages are most popular
- Location: Reports > Engagement > Pages and screens

### 4. **Demographics**
Who your visitors are
- Location: Reports > User > Demographics

---

## Privacy Considerations

### Add Privacy Policy (Recommended)

Create a privacy policy page mentioning:
1. You use Google Analytics
2. It collects anonymous data
3. Users can opt-out if they want

### Cookie Consent (Optional but recommended)

Consider adding a cookie consent banner. You can use libraries like:
- `react-cookie-consent`
- `react-cookie-banner`

Install:
```powershell
npm install react-cookie-consent
```

Example usage:
```javascript
import CookieConsent from "react-cookie-consent";

<CookieConsent
  location="bottom"
  buttonText="I understand"
  cookieName="miracleLightingCookie"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.
</CookieConsent>
```

---

## Testing Google Analytics

### Method 1: Google Analytics Debugger (Chrome Extension)
1. Install "Google Analytics Debugger" from Chrome Web Store
2. Enable the extension
3. Visit your website
4. Open Chrome DevTools (F12)
5. Check Console for GA debug messages

### Method 2: GA Realtime Report
1. Open Google Analytics
2. Go to Reports > Realtime > Overview
3. Open your website in another tab
4. You should see yourself as an active user

### Method 3: Browser Network Tab
1. Open your website
2. Press F12 (DevTools)
3. Go to Network tab
4. Filter by "collect" or "analytics"
5. Reload page
6. You should see requests to google-analytics.com

---

## Common Issues & Solutions

### ❌ No data showing up
**Solution**: Wait 24-48 hours. GA can take time to process initial data.

### ❌ Still no data after 2 days
**Solutions**:
1. Check if Measurement ID is correct
2. Verify script is in the `<head>` tag
3. Check browser console for errors
4. Use Google Analytics Debugger extension
5. Make sure ad blockers are disabled when testing

### ❌ Only showing 1 page view
**Solution**: This is normal for Single Page Applications (React). Consider installing `react-ga` for better SPA tracking:

```powershell
npm install react-ga4
```

Then in your `App.js`:
```javascript
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.initialize('G-XXXXXXXXXX');
  ReactGA.send("pageview");
}, []);
```

---

## Next Steps After Setup

1. ✅ Set up conversion goals (contact form submissions, calls, etc.)
2. ✅ Link Google Ads if you plan to run ads
3. ✅ Set up Google Search Console integration
4. ✅ Create custom reports for your specific needs
5. ✅ Set up email alerts for important metrics

---

## Useful Resources

- Google Analytics Help: https://support.google.com/analytics
- GA4 Documentation: https://developers.google.com/analytics/devguides/collection/ga4
- React GA4: https://github.com/codler/react-ga4

---

**Note**: Your Measurement ID will look like `G-XXXXXXXXXX` where X is a combination of letters and numbers.

**Example**: `G-ABC123DEF4`

---

**Last Updated**: October 22, 2025
