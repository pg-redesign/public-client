const siteLinks = {
  LANDING: "/",
  ABOUT: "/about",
  COURSES: "/courses",
  CONTACT: "/contact",
  INSTRUCTORS: "/instructors",
  REGISTRATION: "/registration",
  CREDIT_PAYMENT: "/payment/credit",
};

const linksAsList = links =>
  Object.entries(links).map(([name, path]) => ({ name, path }));

export const navList = linksAsList({
  Home: siteLinks.LANDING,
  Registration: siteLinks.REGISTRATION,
  Courses: siteLinks.COURSES,
  Instructors: siteLinks.INSTRUCTORS,
  "Contact Us": siteLinks.CONTACT,
});

export default siteLinks;
