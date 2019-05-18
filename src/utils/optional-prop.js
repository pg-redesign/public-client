const optionalProp = {};

optionalProp.ifOtherPropDefined = otherPropName => (
	props,
	propName,
	componentName,
) => {
  const errorMessage = `Invalid props: [${componentName}] requires either [${propName}] or ${otherPropName} to be defined.`;
  
	if (
		[props[propName], props[otherPropName]].every(value => value === undefined)
	) {
		return new Error(errorMessage);
	}
};

export default optionalProp;
