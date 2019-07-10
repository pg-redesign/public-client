import React from "react";

import { QueryHandler } from "../components";

/**
 * HOF used for exporting a Consumer component with a data requirement
 * - HOF alias for <QueryHandler> wrapper component
 * - provides a data prop to the Consumer component
 * - curries any additional props
 * @param {func} Consumer receives props.data and curried props
 */
const withHandledQuery = (Consumer, query, variables) => props => (
  <QueryHandler
    query={query}
    Consumer={Consumer}
    variables={variables}
    {...props}
  />
);

export default withHandledQuery;
