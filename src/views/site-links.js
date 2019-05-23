const siteLinks = {};

siteLinks.nav = {
  HOME: "/",
  REGISTRATION: "/register",
};

siteLinks.footer = {
	about: "/about",
};

export default siteLinks;

export const linksAsList = links =>
	Object.entries(links).map(([name, path]) => ({ name, path }));
