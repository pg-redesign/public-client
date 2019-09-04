const siteLinks = {
  LANDING: "/",
  ABOUT: "/about",
  COURSES: "/courses",
  INSTRUCTORS: "/instructors",
  TESTIMONIALS: "/testimonials",
  REGISTRATION: "/registration",
  CREDIT_PAYMENT: "/payment/credit",
  POLLUTION_COURSE: "/courses/pollution",
  REMEDIATION_COURSE: "/courses/remediation",
};

const linksAsList = links =>
  Object.entries(links).map(([name, path]) => ({ name, path }));

export const navList = linksAsList({
  "REGISTER NOW!": siteLinks.REGISTRATION,
  Home: siteLinks.LANDING,
  "The Pollution & Hydrology Course": siteLinks.POLLUTION_COURSE,
  "The Remediation Course": siteLinks.REMEDIATION_COURSE,
  Instructors: siteLinks.INSTRUCTORS,
  Testimonials: siteLinks.TESTIMONIALS,
  // "Contact Us": siteLinks.CONTACT,
});

export default siteLinks;
