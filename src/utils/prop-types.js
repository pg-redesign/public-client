import PropTypes from "prop-types";

// future if description is split into short and long
// export const courseDescriptionType = PropTypes.shape({
//   short: PropTypes.arrayOf(PropTypes.string),
//   long: PropTypes.arrayOf(PropTypes.string),
// });

export const courseLocationType = PropTypes.shape({
  mapURL: PropTypes.string.isRequired,
  concatenated: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
});

export const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

// TODO: course price / cost?
export const courseType = {
  id: idType.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  location: courseLocationType.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const courseTypeShape = PropTypes.shape(courseType);
