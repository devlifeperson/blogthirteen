import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Fashion Forward - Style & Trends",
  description: "Latest fashion trends, style guides, and beauty tips.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Miscellaneous Tools",
    slug: "utility-tools",
    tools: [
      {
        title: "Public IP Finder",
        desc: "Discover your device's public IP address.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Invoice Generator",
        desc: "Generate detailed invoices for your business needs.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Password Generator",
        desc: "Create secure, random passwords to protect your accounts.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Browser Update Check",
        desc: "Check if your browser is running the latest version.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Online Code Formatter",
        desc: "Organize and format your HTML, CSS, JavaScript, or JSON code.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
  {
    title: "Image Editing Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Image Format Converter",
        desc: "Convert image formats such as JPEG, PNG, and WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Upload your images to a cloud platform for easy access and storage.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Resize Images Online",
        desc: "Resize images to fit your website, blog, or social media posts.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Compress Images",
        desc: "Optimize image sizes without compromising visual quality.",
        href: "https://review360.info",
      },
      {
        title: "Add Watermark to Images",
        desc: "Insert watermarks on your images to protect your copyright.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Crop Images Online",
        desc: "Crop and adjust images to your desired dimensions.",
        href: "https://review360.info/image-crop",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare two texts side-by-side to identify the differences.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Count the number of words, characters, and sentences in your text.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "SEO Tools",
    slug: "seo-tools",
    tools: [
      {
        title: "URL Redirect Checker",
        desc: "Check the redirection paths of your URLs to ensure they are working correctly.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Index Checker",
        desc: "Verify whether your website pages are indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Meta Tags Analyzer",
        desc: "Examine and optimize the meta tags of your website.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your site from Google’s index.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Backlink Generator",
        desc: "Generate high-quality backlinks to improve SEO.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Website Security Test",
        desc: "Analyze your website for potential security vulnerabilities.",
        href: "https://tools360s.com/safe-browsing",
      },
    ],
  },
  {
    title: "URL Utilities",
    slug: "url-utilities",
    tools: [
      {
        title: "QR Code Generator",
        desc: "Generate QR codes for easy sharing of your URLs.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Analytics",
        desc: "Analyze the performance and traffic of your shortened links.",
        href: "https://free-url.short360s.com/stats",
      },
      {
        title: "Shorten Your URL",
        desc: "Convert long URLs into shorter, more manageable links.",
        href: "https://free-url.short360s.com/",
      },
    ],
  },
];
