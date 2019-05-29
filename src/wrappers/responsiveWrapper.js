import React from "react";
import { Responsive } from "semantic-ui-react";

/**
 * HOF used for rendering a single Component responsively
 * - provides a "mobile" boolean prop for widths up to SUIR Responsive.onlyTablet.maxWidth
 * - does not provide "mobile" prop for widths above SUIR Responsive.onlyComputer.minWidth
 * - curries any additional props provided
 * @param {func} Component to render with or without "mobile" prop
 */
const responsiveWrapper = Component => props => (
  <>
    <Responsive
      children={<Component {...props} mobile />}
      maxWidth={Responsive.onlyTablet.maxWidth}
    />
    <Responsive
      children={<Component {...props} />}
      minWidth={Responsive.onlyComputer.minWidth}
    />
  </>
);

export default responsiveWrapper;
