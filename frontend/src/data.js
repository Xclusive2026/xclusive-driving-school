const WA_NUMBER = "447838709089";

export const BRAND = {
  name: "Xclusive Driving School",
  short: "Xclusive",
  logo: "https://customer-assets-lqy194kg.emergentagent.net/job_drive-school-6/artifacts/md4o03gs_Exclusive_Logo.jpg",
  phone: "07814 129029",
  phoneHref: "tel:+447814129029",
  phone2: "07838 709089",
  phone2Href: "tel:+447838709089",
  email: "ishie677@gmail.com",
  emailHref: "mailto:ishie677@gmail.com",
  email2: "kshaz798@gmail.com",
  email2Href: "mailto:kshaz798@gmail.com",
  areas: "Sheffield & Rotherham",
  facebookReviews: "https://www.facebook.com/profile.php?id=100091924760890&sk=reviews",
  instagram: "https://www.instagram.com/xculsivedriving",
  tiktok: "https://www.tiktok.com/@ali7864280",
  google: "https://www.google.com/search?kgmid=/g/11x2xn5l9x&q=Xclusive+Driving+School+(Automatic)#lrd=0x247e23d91ed942f:0x847f6048c3b7d56a,1,,,,",
};

export const waLink = (text = "Hi Xclusive Driving School, I'd like to book a driving lesson.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const LESSON_OPTIONS = [
  "Automatic — £40",
  "Refresher — £40",
  "Intensive Course — £600",
  "Block Lesson — £380 (10 hours)",
  "Advanced Training — £40",
  "Test Ready Lesson — £40",
  "Taxi Lesson — £40",
];

export const SERVICES = [
  {
    id: "automatic",
    title: "Automatic Driving Lessons",
    price: "£40",
    priceNote: "per hour",
    tag: "Our speciality",
    blurb: "Automatic is what we specialise in. With no clutch or gear changes to worry about, you can focus on the road and build your confidence.",
    cta: "Book an Automatic Lesson",
    lessonType: "Automatic — £40",
    icon: "GearSix",
  },
  {
    id: "refresher",
    title: "Refresher Lessons",
    price: "£40",
    priceNote: "per hour",
    blurb: "Haven't driven for a while? Whether you've recently passed your test or haven't driven in years, we'll help you get comfortable behind the wheel again.",
    cta: "Book a Refresher Lesson",
    lessonType: "Refresher — £40",
    icon: "ArrowsClockwise",
  },
  {
    id: "intensive",
    title: "Intensive Driving Course",
    price: "£600",
    priceNote: "course",
    blurb: "Want to get your lessons done in a shorter period? Our intensive driving course offers a focused and efficient way to help you achieve your driving goals. With a customised course lasting 1–2 weeks, you'll benefit from multiple lessons each day, allowing you to build confidence and skills quickly. We also provide fast-tracked practical test booking, comprehensive test preparation, and realistic mock test sessions to ensure you're fully prepared for test day.",
    cta: "Enquire About Intensive Courses",
    lessonType: "Intensive Course — £600",
    icon: "Lightning",
  },
  {
    id: "block",
    title: "Block Lesson",
    price: "£380",
    priceNote: "for 10 hours",
    tag: "Best value",
    blurb: "Book a block of 10 hours in one go and save. A great way to keep your lessons regular and make steady progress towards your test.",
    cta: "Enquire About Block Lessons",
    lessonType: "Block Lesson — £380 (10 hours)",
    icon: "Package",
  },
  {
    id: "advanced",
    title: "Advanced Training",
    price: "£40",
    priceNote: "per hour",
    blurb: "Already driving but want to improve? Our advanced training can help you become more confident in different road conditions, improve your awareness and sharpen your driving skills.",
    cta: "Enquire About Advanced Training",
    lessonType: "Advanced Training — £40",
    icon: "Medal",
  },
  {
    id: "testready",
    title: "Test Ready Lesson",
    price: "£40",
    priceNote: "per hour",
    blurb: "Got your test coming up? This lesson is all about helping you feel confident behind the wheel. We'll fine-tune your driving, work on any last-minute improvements, and make sure you're fully prepared to give yourself the best chance of passing first time.",
    cta: "Book a Test Ready Lesson",
    lessonType: "Test Ready Lesson — £40",
    icon: "SealCheck",
  },
  {
    id: "taxi",
    title: "Taxi Lesson",
    price: "£40",
    priceNote: "per hour",
    blurb: "Looking to become a taxi driver in Sheffield or Doncaster? We'll help you feel confident on the road and get you ready for the demands of taxi driving. From navigating busy roads to building safe, professional driving habits, our lessons are tailored to help you get where you need to be.",
    cta: "Book a Taxi Lesson",
    lessonType: "Taxi Lesson — £40",
    icon: "Taxi",
  },
];

export const WHY = [
  {
    title: "Automatic Specialists",
    body: "Automatic is our speciality. No clutch or gear changes to worry about — just concentrate on the road and enjoy learning at a pace that suits you.",
    icon: "GearSix",
  },
  {
    title: "Sheffield & Rotherham",
    body: "We provide driving lessons across Sheffield and Rotherham, making it easier to learn around your home, work, college or university.",
    icon: "MapPin",
  },
  {
    title: "Female Instructors Available",
    body: "If you'd feel more comfortable learning with a female instructor, just let us know when you enquire.",
    icon: "UserCircle",
  },
  {
    title: "Bilingual Instructors Available",
    body: "We have bilingual instructors available, so if you'd prefer some support in another language, let us know.",
    icon: "Translate",
  },
  {
    title: "Learn At Your Own Pace",
    body: "Everyone learns differently. We'll work with you at your own pace, explain things clearly and help you feel more confident with every lesson.",
    icon: "Heart",
  },
];
