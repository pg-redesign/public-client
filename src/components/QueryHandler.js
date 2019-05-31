import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";

import { ErrorMessage, LoadingMessage } from "./IconMessage";

const propTypes = {
  variables: PropTypes.object,
  query: PropTypes.func.isRequired,
  Consumer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

/**
 * API Query handler
 * - wraps a Consumer component to handle request states
 * - the Consumer only needs to use [this.]props.data
 *
 * behaviors:
 * - loading: <LoadingMessage>
 * - error: logs error, <ErrorMessage>
 * - data: passes Query response data and curried props to <Consumer>
 */
const QueryHandler = props => {
  const { query, variables, Consumer, ...consumerProps } = props;

  return (
    <Query query={query} variables={variables}>
      {requestState => {
        const { data, loading, error } = requestState;

        if (loading) return <LoadingMessage />;

        if (error) {
          // TODO: proper logging
          console.error(error);
          return <ErrorMessage />;
        }

        return <Consumer data={data} {...consumerProps} />;
      }}
    </Query>
  );
};

QueryHandler.propTypes = propTypes;

export default QueryHandler;
