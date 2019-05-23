import PropTypes from 'prop-types';

export const courseDescriptionType = PropTypes.shape({
  short: PropTypes.arrayOf(PropTypes.string),
  long: PropTypes.arrayOf(PropTypes.string),
});

export const courseLocationType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
});

export const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

// TODO: course price / cost?
export const courseType = {
	id: idType.isRequired,
  name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	shortName: PropTypes.string.isRequired,
	location: courseLocationType.isRequired,
  description: courseDescriptionType.isRequired,
}

export const courseTypeShape = PropTypes.shape(courseType);