import PropTypes from "prop-types";

import optionalProp from "../../utils/optional-prop";

export default {
	Logo: PropTypes.func.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		}),
	).isRequired,
	children: optionalProp.ifOtherPropDefined("content"),
	content: optionalProp.ifOtherPropDefined("children"),
};
