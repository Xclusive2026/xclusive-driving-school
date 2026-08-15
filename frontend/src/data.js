const WA_NUMBER = "447814129029";

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
  areas: "Sheffield & Rotherham",
  facebookReviews: "https://www.facebook.com/profile.php?id=100091924760890&sk=reviews",
};

export const waLink = (text = "Hi Xclusive Driving School, I'd like to book a driving lesson.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const LESSON_OPTIONS = [
  "Manual — £37.50",
  "Automatic — £40",
  "Refresher — £37.50 Manual / £40 Automatic",
  "Intensive Course — £380 (10hr block)",
  "Advanced Training — £40",
];

export const SERVICES = [
  {
    id: "manual",
    title: "Manual Driving Lessons",
    price: "£37.50",
    priceNote: "per hour",
    blurb: "Learn how to confidently handle a manual car, from your first clutch control lesson to getting ready for your test.",
    cta: "Book a Manual Lesson",
    lessonType: "Manual — £37.50",
    icon: "SteeringWheel",
  },
  {
    id: "automatic",
    title: "Automatic Driving Lessons",
    price: "£40",
    priceNote: "per hour",
    tag: "Our speciality",
    blurb: "If you don't want to worry about gears and clutch control, automatic lessons let you focus on the road and build your confidence.",
    cta: "Book an Automatic Lesson",
    lessonType: "Automatic — £40",
    icon: "GearSix",
  },
  {
    id: "refresher",
    title: "Refresher Lessons",
    price: "£37.50 / £40",
    priceNote: "manual / automatic",
    blurb: "Haven't driven for a while? Whether you've recently passed your test or haven't driven in years, we'll help you get comfortable behind the wheel again.",
    cta: "Book a Refresher Lesson",
    lessonType: "Refresher — £37.50 Manual / £40 Automatic",
    icon: "ArrowsClockwise",
  },
  {
    id: "intensive",
    title: "Intensive Driving Course",
    price: "£380",
    priceNote: "10hr block",
    blurb: "Want to get your lessons done in a shorter period? Our intensive course gives you a more focused way to work towards your driving goals.",
    cta: "Enquire About Intensive Courses",
    lessonType: "Intensive Course — £380 (10hr block)",
    icon: "Lightning",
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
];

export const WHY = [
  {
    title: "Automatic Specialists",
    body: "Prefer an automatic? That's what we specialise in. No clutch or gear changes to worry about — just concentrate on the road and enjoy learning.",
    icon: "GearSix",
  },
  {
    title: "Manual Lessons",
    body: "Want to learn in a manual? We'll help you get comfortable with clutch control, gears, manoeuvres and everything else you need to become a confident driver.",
    icon: "SteeringWheel",
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
