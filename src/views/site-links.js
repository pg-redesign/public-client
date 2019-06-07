const siteLinks = {
  LANDING: "/",
  ABOUT: "/about",
  COURSES: "/courses",
  INSTRUCTORS: "/instructors",
  REGISTRATION: "/registration",
  CREDIT_PAYMENT: "/payment/credit",
};

const linksAsList = links =>
  Object.entries(links).map(([name, path]) => ({ name, path }));

export const navList = linksAsList({
  HOME: siteLinks.LANDING,
  REGISTRATION: siteLinks.REGISTRATION,
  COURSES: siteLinks.COURSES,
  INSTRUCTORS: siteLinks.INSTRUCTORS,
});

export const footerList = linksAsList({
  ABOUT: siteLinks.ABOUT,
});

export default siteLinks;
