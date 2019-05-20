const optionalProp = {};

/**
 * prop type for a required prop with an alias
 * - ensures either the prop itself or its alias are defined
 */
optionalProp.ifOtherPropDefined = aliasPropName => (
	props,
	propName,
	componentName,
) => {
	if (
		[props[propName], props[aliasPropName]].every(value => value === undefined)
	) {
		return new Error(
			`Invalid props: [${componentName}] requires either [${propName}] or ${aliasPropName} alias to be defined.`,
		);
  }
};

export default optionalProp;
