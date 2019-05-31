const siteLinks = {
  LANDING: "/",
  ABOUT: "/about",
  REGISTRATION: "/register",
  CHECK_PAYMENT: "/checkout/check",
  CREDIT_PAYMENT: "/checkout/credit",
};

const linksAsList = links =>
  Object.entries(links).map(([name, path]) => ({ name, path }));

export const navList = linksAsList({
  HOME: siteLinks.LANDING,
  REGISTRATION: siteLinks.REGISTRATION,
});

export const footerList = linksAsList({
  ABOUT: siteLinks.ABOUT,
});

export default siteLinks;
