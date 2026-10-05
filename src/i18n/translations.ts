export type Language = 'en' | 'fa'
export type Direction = 'ltr' | 'rtl'

export const translations = {
  en: {
    // Brand
    brandName: 'Everlight',
    brandTagline: 'Buy · Sell · Rent',
    brandSubtitle: 'PREMIUM PROPERTIES. BETTER LIVING.',

    // Navigation
    navHome: 'Home',
    navProperties: 'Properties',
    navAbout: 'About',
    navServices: 'Services',
    navContact: 'Contact',
    navFavorites: 'Favorites',
    navGetStarted: 'Get Started',
    langToggle: 'فارسی',

    // Hero Section
    heroEyebrow: 'PREMIUM PROPERTIES. BETTER LIVING.',
    heroTitlePrefix: 'Find Your',
    heroTitleMiddle: 'Dream Home',
    heroTitleSuffix: 'with Everlight',
    heroSubtitle: 'Discover modern homes, prime locations, and lifestyle-driven communities — all in one place.',
    heroBrowseBtn: 'Browse Properties',
    heroExpertBtn: 'Talk to an Expert',
    heroScrollHint: 'Scroll down to scrub 3D tour',

    // 3D HUD & Chapters
    hudTitle: '3D TIMELINE',
    hudScrollHint: '↕ Scroll to scrub',
    chapter1: '01 // SUNSET EXTERIOR & PATIO',
    chapter2: '02 // REFLECTIVE INFINITY POOL',
    chapter3: '03 // ARCHITECTURAL GLASS ATRIUM',
    chapter4: '04 // GRAND LIVING SANCTUARY',

    // Hero Climax Card
    climaxEyebrow: 'ARCHITECTURAL EXCELLENCE',
    climaxTitle: 'Crafted for the Extraordinary',
    climaxDesc: 'Where visionary 3D design meets California luxury. Every home in our curated portfolio represents timeless architecture and refined living.',
    climaxExploreBtn: 'Explore Properties',
    climaxScheduleBtn: 'Schedule Private Viewing',

    // SearchBar
    searchLocationLabel: 'Location',
    searchLocationPlaceholder: 'Any City',
    searchTypeLabel: 'Property Type',
    searchTypePlaceholder: 'Any Type',
    searchBudgetLabel: 'Budget',
    searchBudgetPlaceholder: 'Any Budget',
    searchButton: 'Search Properties',

    // Trust Features
    trustVerifiedTitle: 'Verified Listings',
    trustVerifiedDesc: '100% genuine listings with verified owners and deeds.',
    trustSecureTitle: 'Trusted & Secure',
    trustSecureDesc: 'Safe transactions with complete financial transparency.',
    trustSupportTitle: 'Expert Support',
    trustSupportDesc: 'Dedicated advisors guiding every step of your journey.',
    trustLivingTitle: 'Better Living',
    trustLivingDesc: 'Find a sanctuary curated specifically for your lifestyle.',

    // Featured Properties
    featuredBadge: 'CURATED SELECTION',
    featuredTitle: 'Featured Luxury Residences',
    featuredSubtitle: 'Handpicked properties combining prime location, visionary design, and exceptional comfort.',
    viewAllProperties: 'View All Properties',

    // Property Card & Details
    forSale: 'For Sale',
    forRent: 'For Rent',
    beds: 'Beds',
    baths: 'Baths',
    sqft: 'sqft',
    parking: 'Parking',
    yearBuilt: 'Year Built',
    viewDetails: 'View Details',
    shareProperty: 'Share',
    saveProperty: 'Save',
    savedToFavorites: 'Saved to Favorites',
    removedFromFavorites: 'Removed from Favorites',

    // Why Choose Us
    whyEyebrow: 'WHY EVERLIGHT',
    whyTitle: 'The Modern Standard for Luxury Real Estate',
    whySubtitle: 'We unite visionary architecture, data-driven pricing, and concierge service to redefine property acquisition.',
    statHappyClients: 'Happy Clients',
    statPropertiesSold: 'Properties Sold',
    statTotalVolume: 'Total Sales Volume',
    statYearsExperience: 'Years Experience',
    whyFeature1Title: 'Direct Architecture Walkthroughs',
    whyFeature1Desc: 'Interactive 3D timeline fly-throughs allow you to inspect structural proportions and lighting before setting foot on site.',
    whyFeature2Title: 'Vetted High-Yield Locations',
    whyFeature2Desc: 'Every neighborhood is assessed for long-term appreciation, security, lifestyle infrastructure, and zoning exclusivity.',
    whyFeature3Title: 'Private Concierge Advisory',
    whyFeature3Desc: 'From bespoke financing to title registration and interior design staging, our discreet team handles all complexities.',

    // CTA Section
    ctaBadge: 'START YOUR JOURNEY',
    ctaTitle: 'Ready to Experience Exceptional Living?',
    ctaSubtitle: 'Connect with our luxury property specialists for exclusive off-market listings and private consultations.',
    ctaBrowseBtn: 'Explore Listings',
    ctaContactBtn: 'Schedule a Consultation',

    // Footer
    footerBio: 'Everlight Homes is a premier luxury real estate agency dedicated to modern residences, architectural icons, and prime coastal estates.',
    footerQuickLinks: 'Quick Links',
    footerPropertyTypes: 'Property Types',
    footerContactInfo: 'Contact',
    footerNewsletterTitle: 'Join Our Private Journal',
    footerNewsletterDesc: 'Receive curated market insights and preview off-market properties.',
    footerEmailPlaceholder: 'Enter your email',
    footerSubscribeBtn: 'Subscribe',
    footerRights: 'All rights reserved. Everlight Homes Inc.',

    // Properties Page
    propertiesPageTitle: 'Explore Exclusive Properties',
    propertiesPageSubtitle: 'Discover our complete portfolio of architectural residences, contemporary villas, and luxury apartments.',
    filterTitle: 'Filter Properties',
    searchKeywordPlaceholder: 'Search by title, city, or feature...',
    sortByLabel: 'Sort by:',
    sortFeatured: 'Featured',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    sortAreaHigh: 'Largest Area',
    filterAllTypes: 'All Types',
    filterAllStatuses: 'All Statuses',
    filterPriceMin: 'Min Price',
    filterPriceMax: 'Max Price',
    filterBedrooms: 'Bedrooms',
    filterBathrooms: 'Bathrooms',
    filterAmenities: 'Amenities',
    filterClear: 'Clear Filters',
    resultsCount: '{count} properties found',
    noPropertiesFound: 'No properties found matching your criteria.',
    resetFiltersBtn: 'Reset All Filters',

    // Property Details Page
    backToProperties: 'Back to Properties',
    propertyOverview: 'Overview',
    propertyDescription: 'Description',
    propertyAmenities: 'Amenities & Luxuries',
    propertyFeatures: 'Key Features & Specs',
    contactAgentTitle: 'Inquire About This Property',
    agentAdvisor: 'Senior Property Advisor',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourPhone: 'Phone Number',
    yourMessage: 'Message',
    defaultInquiryMessage: 'Hello, I am interested in {title} and would like to arrange a private viewing or receive more information.',
    sendInquiryBtn: 'Send Inquiry',
    inquirySuccessMsg: 'Thank you! Your inquiry has been sent. Our advisor will reach out shortly.',
    similarPropertiesTitle: 'Similar Exclusive Properties',

    // About Page
    aboutBadge: 'OUR PHILOSOPHY',
    aboutHeroTitle: 'Redefining Modern Living Through Visionary Architecture',
    aboutHeroSubtitle: 'Founded on the principle that a home is more than shelter — it is an artful canvas for an intentional life.',
    aboutStoryTitle: 'Our Heritage & Journey',
    aboutStoryP1: 'Everlight Homes began with a singular obsession: to connect discerning buyers with homes of exceptional architectural caliber and uncompromised build quality.',
    aboutStoryP2: 'Over a decade, we have curated a portfolio that represents the pinnacle of modern luxury — from cliffside coastal retreats to minimalist urban penthouses.',
    aboutValuesTitle: 'Our Core Commitments',
    aboutValue1Title: 'Architectural Integrity',
    aboutValue1Desc: 'We exclusively represent homes that celebrate honest materials, abundant natural light, and harmonious site integration.',
    aboutValue2Title: 'Absolute Transparency',
    aboutValue2Desc: 'Complete clarity in documentation, pricing, structural inspections, and legal validation.',
    aboutValue3Title: 'Discreet Concierge Service',
    aboutValue3Desc: 'Bespoke, confidential representation tailored to high-net-worth clients, architects, and estate investors.',
    teamTitle: 'Our Leadership Team',
    teamSubtitle: 'Seasoned luxury real estate specialists, architects, and investment advisors.',

    // Services Page
    servicesBadge: 'BESPOKE SERVICES',
    servicesHeroTitle: 'Comprehensive Real Estate Concierge',
    servicesHeroSubtitle: 'From private acquisitions to architectural sales and portfolio advisory, we guide your real estate ambitions with precision.',
    service1Title: 'Prime Property Acquisition',
    service1Desc: 'Discreet search and acquisition services for prime private residences and off-market architectural estates.',
    service2Title: 'Curated Architectural Sales',
    service2Desc: 'World-class marketing, 3D digital fly-throughs, and global exposure to qualified luxury buyers.',
    service3Title: 'Luxury Leasing & Relocation',
    service3Desc: 'High-end furnished and unfurnished estates for executives, diplomats, and seasonal residents.',
    service4Title: 'Portfolio & Investment Advisory',
    service4Desc: 'Data-driven market intelligence identifying high-appreciation zones, yields, and strategic land positions.',
    service5Title: 'Valuation & Advisory',
    service5Desc: 'Comprehensive asset appraisal based on architectural significance, materials, and micro-market velocity.',
    service6Title: 'Interior & Architectural Staging',
    service6Desc: 'Transforming premium spaces with curated designer furnishings and lighting to maximize emotional resonance.',
    serviceLearnMore: 'Learn More',

    // Contact Page
    contactBadge: 'GET IN TOUCH',
    contactHeroTitle: 'Connect with Our Private Advisors',
    contactHeroSubtitle: 'Whether you are seeking your next signature residence or exploring the sale of an exceptional property, we are here to assist.',
    contactInfoTitle: 'Office & Advisory Chambers',
    contactAddress: '742 Evergreen Boulevard, Beverly Hills, CA 90210',
    contactHoursTitle: 'Consultation Hours',
    contactHours: 'Monday – Saturday: 9:00 AM – 7:00 PM PST',
    contactFormTitle: 'Send a Message',
    contactSubject: 'Subject',
    contactSubjectPlaceholder: 'e.g. Property Inquiry, Private Consultation, Listing Representation',
    contactSubmitBtn: 'Transmit Message',
    contactSuccess: 'Thank you! Your message has been received. A dedicated partner will contact you within 24 hours.',

    // Favorites Page
    favoritesTitle: 'Saved Properties',
    favoritesSubtitle: 'Review, compare, and inquire about your favorite curated residences.',
    favoritesEmptyTitle: 'No Saved Properties Yet',
    favoritesEmptyDesc: 'Click the heart icon on any property card to save homes to your private shortlist.',
    favoritesExploreBtn: 'Browse Luxury Portfolio',
    clearAllFavorites: 'Clear All Saved',
    addToFavorites: 'Add to favorites',
    removeFromFavorites: 'Remove from favorites',
    prevImage: 'Previous image',
    nextImage: 'Next image',

    // NotFound Page
    notFoundTitle: 'Page Not Found',
    notFoundDesc: 'The residence or page you are looking for does not exist or has been relocated.',
    backHomeBtn: 'Return to Homepage',
  },

  fa: {
    // Brand
    brandName: 'اورلایت',
    brandTagline: 'خرید · فروش · اجاره',
    brandSubtitle: 'املاک فاخر. زندگی برتر.',

    // Navigation
    navHome: 'صفحه اصلی',
    navProperties: 'املاک و مستغلات',
    navAbout: 'درباره ما',
    navServices: 'خدمات',
    navContact: 'تماس با ما',
    navFavorites: 'علاقه‌مندی‌ها',
    navGetStarted: 'شروع کنید',
    langToggle: 'English',

    // Hero Section
    heroEyebrow: 'املاک فاخر و لوکس. استانداردی نو در زندگی.',
    heroTitlePrefix: 'خانه رویایی خود را',
    heroTitleMiddle: 'با اورلایت',
    heroTitleSuffix: 'پیدا کنید',
    heroSubtitle: 'مجموعه‌ای بی‌نظیر از ویلاها و خانه‌های مدرن، لوکیشن‌های تراز اول و زندگی در کمال آرامش و آسایش.',
    heroBrowseBtn: 'مشاهده املاک',
    heroExpertBtn: 'گفتگو با مشاور ارشد',
    heroScrollHint: 'برای گردش سه‌بعدی به پایین اسکرول کنید',

    // 3D HUD & Chapters
    hudTitle: 'خط زمان سه‌بعدی',
    hudScrollHint: '↕ اسکرول برای حرکت فریم‌به‌فریم',
    chapter1: '۰۱ // نمای بیرونی و تراس غروب',
    chapter2: '۰۲ // استخر بی‌نهایت و چشم‌انداز آبی',
    chapter3: '۰۳ // آتریوم شیشه‌ای و پیوند با طبیعت',
    chapter4: '۰۴ // سالن نشیمن اصلی و معماری مدرن',

    // Hero Climax Card
    climaxEyebrow: 'شاهکار هنر و معماری',
    climaxTitle: 'خلق‌شده برای شکوه و تمایز',
    climaxDesc: 'تلاقی هنر معماری نوین و اوج شکوه و زیبایی. هر اقامتگاه در مجموعه ما، بیانیه‌ای از اصالت، زیبایی و آرامش بی‌پایان است.',
    climaxExploreBtn: 'مشاهده مجموعه املاک',
    climaxScheduleBtn: 'رزرو بازدید خصوصی',

    // SearchBar
    searchLocationLabel: 'موقعیت مکانی',
    searchLocationPlaceholder: 'همه شهرها',
    searchTypeLabel: 'نوع ملک',
    searchTypePlaceholder: 'همه انواع',
    searchBudgetLabel: 'بودجه',
    searchBudgetPlaceholder: 'هر بودجه‌ای',
    searchButton: 'جستجوی املاک',

    // Trust Features
    trustVerifiedTitle: 'املاک احراز هویت شده',
    trustVerifiedDesc: '۱۰۰٪ فایل‌های معتبر با بررسی دقیق اسناد و مدارک ثبتی.',
    trustSecureTitle: 'امن و شفاف',
    trustSecureDesc: 'معاملاتی ایمن با تضمین شفافیت مالی و حقوقی کامل.',
    trustSupportTitle: 'پشتیبانی و مشاوره تخصصی',
    trustSupportDesc: 'مشاوران مجرب در تمامی مراحل همراه و راهنمای شما هستند.',
    trustLivingTitle: 'زندگی متمایز و مدرن',
    trustLivingDesc: 'فضایی متناسب با سبک زندگی ایده‌آل و آرمان‌های شما.',

    // Featured Properties
    featuredBadge: 'گزیده املاک ویژه',
    featuredTitle: 'اقامتگاه‌های لوکس منتخب',
    featuredSubtitle: 'مجموعه‌ای گلچین‌شده از برترین ویلاها و آپارتمان‌ها با تلفیقی از معماری پیشرو و بهترین موقعیت مکانی.',
    viewAllProperties: 'مشاهده تمامی املاک',

    // Property Card & Details
    forSale: 'برای فروش',
    forRent: 'برای اجاره',
    beds: 'خواب',
    baths: 'سرویس',
    sqft: 'مترمربع',
    parking: 'پارکینگ',
    yearBuilt: 'سال ساخت',
    viewDetails: 'مشاهده جزئیات',
    shareProperty: 'اشتراک‌گذاری',
    saveProperty: 'ذخیره',
    savedToFavorites: 'به علاقه‌مندی‌ها افزوده شد',
    removedFromFavorites: 'از علاقه‌مندی‌ها حذف شد',

    // Why Choose Us
    whyEyebrow: 'چرا اورلایت',
    whyTitle: 'استاندارد نوین در معاملات املاک فاخر',
    whySubtitle: 'ما برترین آثار معماری، تحلیل‌های دقیق بازار و خدمات ویژه‌ی مشتریان را برای تجربه‌ای بی‌نقص گرد هم آورده‌ایم.',
    statHappyClients: 'مشتری خرسند',
    statPropertiesSold: 'ملک واگذار شده',
    statTotalVolume: 'ارزش کل معاملات',
    statYearsExperience: 'سال تجربه درخشان',
    whyFeature1Title: 'تور تعاملی سه‌بعدی',
    whyFeature1Desc: 'حرکت آزاد و فریم‌به‌فریم در فضای سه‌بعدی برای بررسی هندسه، نور و جزئیات پیش از حضور فیزیکی.',
    whyFeature2Title: 'لوکیشن‌های تراز اول با رشد سرمایه',
    whyFeature2Desc: 'بررسی دقیق پتانسیل رشد ارزش منطقه، امنیت، زیرساخت‌های رفاهی و انحصاری بودن محله.',
    whyFeature3Title: 'خدمات مشاوره‌ای اختصاصی و محرمانه',
    whyFeature3Desc: 'از تنظیم قراردادهای حقوقی و انتقال سند تا چیدمان داخلی، کلیه مراحل با نهایت ظرافت و دقت انجام می‌پذیرد.',

    // CTA Section
    ctaBadge: 'آغاز سفری نو',
    ctaTitle: 'آماده‌اید شکوه و آرامش را در خانه‌ای نو تجربه کنید؟',
    ctaSubtitle: 'همین امروز با کارشناسان تخصصی ما در ارتباط باشید و از گزینه‌های اختصاصی و خارج از مارکت مطلع شوید.',
    ctaBrowseBtn: 'بررسی گزینه‌ها',
    ctaContactBtn: 'درخواست مشاوره خصوصی',

    // Footer
    footerBio: 'اورلایت نامی معتبر در حوزه املاک لوکس و معماری معاصر؛ پیشگام در معرفی ویلاها و عمارت‌های مدرن در زیباترین مناطق.',
    footerQuickLinks: 'دسترسی سریع',
    footerPropertyTypes: 'انواع ملک',
    footerContactInfo: 'ارتباط با ما',
    footerNewsletterTitle: 'عضویت در خبرنامه ویژه',
    footerNewsletterDesc: 'از تحلیل‌های اختصاصی بازار و جدیدترین املاک خاص مطلع گردید.',
    footerEmailPlaceholder: 'ایمیل خود را وارد نمایید',
    footerSubscribeBtn: 'عضویت',
    footerRights: 'تمامی حقوق برای شرکت املاک اورلایت محفوظ است.',

    // Properties Page
    propertiesPageTitle: 'کاوش در مجموعه املاک ویژه',
    propertiesPageSubtitle: 'فهرست کامل ویلاهای مدرن، پنت‌هاوس‌های لوکس و آپارتمان‌های برتر را بررسی فرمایید.',
    filterTitle: 'فیلتر املاک',
    searchKeywordPlaceholder: 'جستجو بر اساس عنوان، شهر یا ویژگی...',
    sortByLabel: 'مرتب‌سازی بر اساس:',
    sortFeatured: 'املاک برگزیده',
    sortPriceLow: 'قیمت: از کم به زیاد',
    sortPriceHigh: 'قیمت: از زیاد به کم',
    sortAreaHigh: 'بیشترین متراژ',
    filterAllTypes: 'همه انواع',
    filterAllStatuses: 'همه وضعیت‌ها',
    filterPriceMin: 'حداقل قیمت',
    filterPriceMax: 'حداکثر قیمت',
    filterBedrooms: 'تعداد خواب',
    filterBathrooms: 'تعداد سرویس',
    filterAmenities: 'امکانات رفاهی',
    filterClear: 'پاکسازی فیلترها',
    resultsCount: '{count} ملک یافت شد',
    noPropertiesFound: 'هیچ ملکی با فیلترهای انتخابی یافت نشد.',
    resetFiltersBtn: 'بازنشانی فیلترها',

    // Property Details Page
    backToProperties: 'بازگشت به فهرست املاک',
    propertyOverview: 'نمای کلی ملک',
    propertyDescription: 'توضیحات تکمیلی',
    propertyAmenities: 'امکانات رفاهی و آسایشی',
    propertyFeatures: 'مشخصات فنی و ویژگی‌ها',
    contactAgentTitle: 'استعلام و درخواست اطلاعات ملک',
    agentAdvisor: 'مشاور ارشد املاک',
    yourName: 'نام و نام‌خانوادگی',
    yourEmail: 'آدرس ایمیل',
    yourPhone: 'شماره تماس',
    yourMessage: 'متن پیام شما',
    defaultInquiryMessage: 'درود، من علاقه‌مند به دریافت اطلاعات تکمیلی و رزرو بازدید از ملک {title} هستم.',
    sendInquiryBtn: 'ارسال درخواست',
    inquirySuccessMsg: 'درخواست شما با موفقیت ثبت گردید. کارشناس مربوطه به زودی با شما تماس خواهد گرفت.',
    similarPropertiesTitle: 'املاک مشابه و پیشنهادی',

    // About Page
    aboutBadge: 'فلسفه و آرمان ما',
    aboutHeroTitle: 'بازتعریف مفهوم سکونت از دریچه معماری فاخر',
    aboutHeroSubtitle: 'ما باور داریم که خانه تنها یک سرپناه نیست؛ بلکه بوم نقاشی برای یک زندگی پرمعنا و سرشار از آسایش است.',
    aboutStoryTitle: 'داستان و مسیر پیشرفت ما',
    aboutStoryP1: 'اورلایت با این آرمان آغاز شد: اتصال خریداران اهل هنر و سلیقه به سازه‌هایی با اصالت معماری و بالاترین کیفیت ساخت.',
    aboutStoryP2: 'طی بیش از یک دهه، مجموعه‌ای از ویلاهای ساحلی تا پنت‌هاوس‌های مینیمال شهری را با کمال افتخار به همراهانمان پیشکش کرده‌ایم.',
    aboutValuesTitle: 'ارزش‌های بنیادین اورلایت',
    aboutValue1Title: 'اصالت و اعتبار معماری',
    aboutValue1Desc: 'معرفی سازه‌هایی که نور طبیعی، متریال اصیل و همگامی با طبیعت پیرامون را گرامی می‌دارند.',
    aboutValue2Title: 'شفافیت و صداقت بی‌قید و شرط',
    aboutValue2Desc: 'ارائه تمامی اسناد، پیشینه حقوقی، قیمت‌گذاری کارشناسی و اطلاعات فنی با شفافیت صددرصدی.',
    aboutValue3Title: 'خدمات ویژه، انحصاری و محرمانه',
    aboutValue3Desc: 'پاسخگویی به حساسیت‌های ویژه سرمایه‌گذاران و چهره‌های برجسته با نهایت رازداری.',
    teamTitle: 'تیم مدیران و کارشناسان',
    teamSubtitle: 'متخصصان باسابقه در حوزه املاک لوکس، کارشناسان معماری و مشاوران سرمایه‌گذاری.',

    // Services Page
    servicesBadge: 'خدمات سفارشی',
    servicesHeroTitle: 'مجموعه جامع خدمات مشاوره‌ای املاک فاخر',
    servicesHeroSubtitle: 'از خرید و واگذاری آثار خاص تا ارزیابی دقیق و مدیریت سرمایه‌گذاری ملکی در کنارتان هستیم.',
    service1Title: 'خرید و اکتساب املاک خاص',
    service1Desc: 'جستجو و انتخاب گزینه‌های ناب و خارج از مارکت عمومی متناسب با استانداردهای شما.',
    service2Title: 'فروش و بازاریابی آثار معماری',
    service2Desc: 'معرفی حرفه‌ای ملک با فیلم‌برداری سینمایی و تورهای سه‌بعدی به خریداران معتبر بین‌المللی.',
    service3Title: 'اجاره و اقامتگاه‌های ویژه',
    service3Desc: 'ویلاها و آپارتمان‌های مبله و لوکس برای اقامت‌های بلندمدت و فصلی.',
    service4Title: 'مشاوره استراتژیک سرمایه‌گذاری',
    service4Desc: 'ارائه گزارش‌های تحلیلی از مناطق مستعد ارزش‌افزوده و پیش‌بینی روندهای قیمتی.',
    service5Title: 'کارشناسی و ارزش‌گذاری دقیق',
    service5Desc: 'تعیین قیمت عادلانه روز بر پایه ارزش‌های معمارانه، متریال به کار رفته و پویایی بازار.',
    service6Title: 'طراحی صحنه و چیدمان لوکس',
    service6Desc: 'استیجینگ و طراحی داخلی فضاهای ویژه با مبلمان شیک به منظور ایجاد بالاترین جذابیت بصری.',
    serviceLearnMore: 'اطلاعات بیشتر',

    // Contact Page
    contactBadge: 'ارتباط مستقیم',
    contactHeroTitle: 'گفتگو با مشاوران ارشد اورلایت',
    contactHeroSubtitle: 'خواه در جستجوی اقامتگاه بعدی خود باشید یا قصد واگذاری ملکی شاخص را داشته باشید، مشتاقانه پاسخگوی شما هستیم.',
    contactInfoTitle: 'دفتر مرکزی و اتاق مشاوره',
    contactAddress: 'بلوار اورگرین، بورلی هیلز، کالیفرنیا ۹۰۲۱۰',
    contactHoursTitle: 'ساعات پاسخگویی و مشاوره',
    contactHours: 'شنبه تا پنج‌شنبه: ۹:۰۰ صبح الی ۱۹:۰۰',
    contactFormTitle: 'ارسال پیام به دفتر مرکزی',
    contactSubject: 'موضوع درخواست',
    contactSubjectPlaceholder: 'مانند: استعلام ملک، مشاوره سرمایه‌گذاری، واگذاری ملک',
    contactSubmitBtn: 'ارسال درخواست',
    contactSuccess: 'با سپاس! پیام شما ثبت شد و حداکثر ظرف ۲۴ ساعت توسط کارشناس مربوطه پاسخ داده خواهد شد.',

    // Favorites Page
    favoritesTitle: 'املاک نشان‌شده و محبوب',
    favoritesSubtitle: 'فهرست گزیده‌ای از املاک مورد علاقه خود را مرور، مقایسه و پیگیری نمایید.',
    favoritesEmptyTitle: 'هنوز ملکی را نشان نکرده‌اید',
    favoritesEmptyDesc: 'با کلیک بر روی آیکون قلب در هر کارت، می‌توانید ملک را به فهرست علاقه‌مندی‌های خود بیفزایید.',
    favoritesExploreBtn: 'مشاهده ویلاها و املاک',
    clearAllFavorites: 'حذف همه موارد',
    addToFavorites: 'افزودن به علاقه‌مندی‌ها',
    removeFromFavorites: 'حذف از علاقه‌مندی‌ها',
    prevImage: 'تصویر قبلی',
    nextImage: 'تصویر بعدی',

    // NotFound Page
    notFoundTitle: 'صفحه مورد نظر یافت نشد',
    notFoundDesc: 'صفحه یا اقامتگاهی که در جستجوی آن هستید وجود ندارد یا تغییر مکان یافته است.',
    backHomeBtn: 'بازگشت به صفحه اصلی',
  },
} as const

export type TranslationKey = keyof typeof translations.en

// Persian translations for property metadata
export const propertyTranslations: Record<string, {
  title: string
  location: string
  city: string
  description: string
  type: string
  status: string
  amenities: string[]
  features: string[]
}> = {
  'azure-villa': {
    title: 'ویلای لاجوردی ساحلی',
    location: 'گوا',
    city: 'گوا',
    description: 'ویلایی معاصر و چشم‌نواز مشرف به آب‌های نیلگون با پنجره‌های قدی سرتاسری، استخر بی‌نهایت و پیوند بی‌نظیر فضای باز و بسته. طراحی شده توسط معماران برنده جوایز بین‌المللی.',
    type: 'ویلا',
    status: 'برای فروش',
    amenities: ['استخر بی‌نهایت', 'دید مستقیم دریا', 'خانه هوشمند', 'باغ اختصاصی', 'پارکینگ مسقف', 'تهویه مطبوع مرکزی'],
    features: ['دسترسی به ساحل اختصاصی', 'پنل‌های خورشیدی', 'سینمای خانگی', 'اتاق اختصاصی شراب', 'آشپزخانه باز محوطه', 'سیستم بازیافت آب باران'],
  },
  'skyline-residences': {
    title: 'اقامتگاه‌های افق آسمان',
    location: 'بمبئی، منطقه ورلی',
    city: 'بمبئی',
    description: 'پنت‌هاوسی باشکوه در طبقات فوقانی با دید ۳۶۰ درجه به خط افق شهر و اقیانوس. همراه با آسانسور اختصاصی، بالکن‌های وسیع و طراحی داخلی مینیمال لوکس.',
    type: 'پنت‌هاوس',
    status: 'برای فروش',
    amenities: ['استخر روی بام', 'دید پانوراما شهر', 'سالن بدنسازی مجهز', 'لابی من ۲۴ ساعته', 'اسپای اختصاصی'],
    features: ['آسانسور اختصاصی پرسرعت', 'سیستم صوتی یکپارچه', 'شیشه‌های سه‌جداره آکوستیک', 'سیستم تصفیه هوای هوشمند'],
  },
  'the-crest-villa': {
    title: 'عمارت قله شاهوار',
    location: 'بنگلور، ساداشیوانگار',
    city: 'بنگلور',
    description: 'عمارتی معاصر در یکی از مجلل‌ترین محله‌ها، با حیاط مرکزی سرسبز، متریال چوب ساج و سنگ طبیعی ایتالیایی و سالن پذیرایی با ارتفاع سقف دوبل.',
    type: 'عمارت',
    status: 'برای فروش',
    amenities: ['باغ ذن ژاپنی', 'استخر آب گرم', 'سیستم خانه هوشمند', 'سوئیت میهمان مستقل', 'باربیکیو حرفه‌ای'],
    features: ['سیستم گرمایش از کف', 'استخر شنا با سیستم تصفیه نمکی', 'ژنراتور برق اضطراری بی‌صدا', 'اتاق خدمتکار مستقل'],
  },
  'oasis-apartments': {
    title: 'واحه مدرن شهری',
    location: 'پونه، کوریگان پارک',
    city: 'پونه',
    description: 'آپارتمانی آرام و دلباز احاطه شده با درختان کهنسال، بالکن‌های عریض و نورگیری عالی در تمام طول روز.',
    type: 'آپارتمان',
    status: 'برای اجاره',
    amenities: ['فضای سبز اختصاصی', 'کلوپ سلامت', 'سالن اجتماعات', 'سیستم ضد حریق هوشمند', 'دوربین مداربسته'],
    features: ['کفپوش چوب بلوط', 'آشپزخانه با لوازم توکار بوش', 'سیستم مدیریت نور هوشمند'],
  },
  'lakeside-haven': {
    title: 'پناهگاه ساحل دریاچه',
    location: 'کرالا، آلپی',
    city: 'کرالا',
    description: 'اقامتگاهی شاعرانه و خلوت‌گزین در جوار دریاچه با اسکله قایقرانی اختصاصی و تراس‌های سایه‌دار رو به آب.',
    type: 'ویلا',
    status: 'برای فروش',
    amenities: ['اسکله اختصاصی قایق', 'محوطه ماهیگیری', 'استخر جکوزی روباز', 'آلاچیق اختصاصی'],
    features: ['چوب ضد رطوبت ساحلی', 'پنجره‌های کشویی ضد زنگ', 'سیستم تصفیه آب خانگی'],
  },
}

// Convert English digits to Persian digits
export function toPersianDigits(n: number | string): string {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return String(n).replace(/[0-9]/g, (w) => farsiDigits[+w])
}

// Format currency depending on language
export function formatCurrency(price: number, lang: Language): string {
  if (lang === 'fa') {
    if (price >= 10000000) {
      const crore = (price / 10000000).toFixed(2)
      return `${toPersianDigits(crore)} کرور تومان`
    }
    if (price >= 100000) {
      const lakh = (price / 100000).toFixed(1)
      return `${toPersianDigits(lakh)} لک / ماهانه`
    }
    return `${toPersianDigits(price.toLocaleString('en-US'))} تومان`
  }
  if (price >= 10000000) {
    return `₹ ${(price / 10000000).toFixed(2)} Cr`
  }
  if (price >= 100000) {
    return `₹ ${(price / 100000).toFixed(1)} L/mo`
  }
  return `₹ ${price.toLocaleString('en-US')}`
}

export const locationLabelsFa: Record<string, string> = {
  'All Locations': 'همه موقعیت‌ها',
  'Goa': 'گوا',
  'Bangalore': 'بنگلور',
  'Pune': 'پونه',
  'Mumbai': 'بمبئی',
  'Coorg': 'کورگ',
  'Hyderabad': 'حیدرآباد',
  'Delhi': 'دهلی',
  'Udaipur': 'اودایپور',
  'Chennai': 'چنای',
  'Shimla': 'شیملا',
  'Gurgaon': 'گورگائون',
  'Kochi': 'کوچی',
  'Rishikesh': 'ریشیکش',
  'Jaipur': 'جیپور',
}

export const propertyTypeLabelsFa: Record<string, string> = {
  'All Types': 'همه انواع',
  'Villa': 'ویلا',
  'Apartment': 'آپارتمان',
  'Bungalow': 'بانگلو',
  'Penthouse': 'پنت‌هاوس',
  'Mansion': 'عمارت',
  'Cottage': 'کلبه لوکس',
}

export const budgetLabelsFa: Record<string, string> = {
  'Any Budget': 'هر بودجه‌ای',
  'Under ₹50 Lakh': 'کمتر از ۵۰ لک',
  '₹50L – ₹1 Cr': '۵۰ لک تا ۱ کرور',
  '₹1 Cr – ₹3 Cr': '۱ تا ۳ کرور',
  '₹3 Cr – ₹6 Cr': '۳ تا ۶ کرور',
  '₹6 Cr+': 'بیش از ۶ کرور',
}

export const amenityLabelsFa: Record<string, string> = {
  'Swimming Pool': 'استخر شنا',
  'Infinity Pool': 'استخر بی‌نهایت',
  'Sea View': 'دید دریا',
  'City View': 'چشم‌انداز شهر',
  'Mountain View': 'دید کوهستان',
  'Garden': 'باغچه و فضای سبز',
  'Gym': 'باشگاه ورزشی',
  'Smart Home': 'خانه هوشمند',
  'Air Conditioning': 'تهویه مطبوع',
  'Parking': 'پارکینگ',
  'Concierge': 'لابی‌من و نگهبانی',
  'Fireplace': 'شومینه',
  'Power Backup': 'برق اضطراری',
  'Private Beach Access': 'ساحل اختصاصی',
  'Solar Panels': 'پنل خورشیدی',
  'Home Theater': 'سینمای خانگی',
  'Wine Cellar': 'اتاق نوشیدنی',
  'Outdoor Kitchen': 'آشپزخانه باز محوطه',
  'Rainwater Harvesting': 'بازیافت آب باران',
}

export function getLocalizedLocation(loc: string, lang: Language): string {
  if (lang === 'fa') return locationLabelsFa[loc] || loc
  return loc
}

export function getLocalizedType(type: string, lang: Language): string {
  if (lang === 'fa') return propertyTypeLabelsFa[type] || type
  return type
}

export function getLocalizedBudget(budget: string, lang: Language): string {
  if (lang === 'fa') return budgetLabelsFa[budget] || budget
  return budget
}

export function getLocalizedAmenity(amenity: string, lang: Language): string {
  if (lang === 'fa') return amenityLabelsFa[amenity] || amenity
  return amenity
}

