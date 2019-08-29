import PropTypes from "prop-types";

// -- LOCATION -- //
const locationType = {
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  concatenated: PropTypes.string,
};

// -- COURSE -- //
export const courseLocationType = PropTypes.shape({
  mapUrl: PropTypes.string.isRequired,
  ...locationType,
});

export const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const courseType = {
  id: idType,
  price: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  shortName: PropTypes.string,
  location: courseLocationType,
};

export const courseTypeShape = PropTypes.shape(courseType);

// -- STUDENT -- //
export const studentType = {
  id: idType.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.shape(locationType),
};

export const studentTypeShape = PropTypes.shape(studentType);
