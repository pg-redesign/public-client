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
  mapURL: PropTypes.string.isRequired,
  ...locationType,
});

export const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const courseType = {
  id: idType.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  location: courseLocationType.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const courseTypeShape = PropTypes.shape(courseType);

// -- STUDENT -- //
export const studentType = {
  id: idType.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string,
  location: PropTypes.shape(locationType),
  paymentType: PropTypes.oneOf(["CHECK", "CREDIT"]),
  hasPaid: PropTypes.bool,
};

export const studentTypeShape = PropTypes.shape(studentType);
