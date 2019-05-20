const siteLinks = {};

siteLinks.nav = {
	home: "/",
};

siteLinks.footer = {
	about: "/about",
};

export default siteLinks;

export const linksAsList = links =>
	Object.entries(links).map(([name, path]) => ({ name, path }));
