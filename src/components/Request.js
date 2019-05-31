import React from "react";
import PropTypes from "prop-types";
import { Query, Mutation } from "react-apollo";

import optionalProp from "../utils/optional-prop";
import { ErrorMessage, LoadingMessage } from "./IconMessage";

const propTypes = {
  variables: PropTypes.object,
  query: optionalProp.ifOtherPropDefined("mutation"),
  mutation: optionalProp.ifOtherPropDefined("query"),
  Consumer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

/**
 * API Request wrapper
 * - wraps a component to handle different request states
 * - the component only needs to consume [this.]props.data
 *
 * behaviors:
 * - loading: <LoadingMessage>
 * - error: logs error, <ErrorMessage>
 * - data: passes data and curried props to <Consumer>
 */
const Request = props => {
  const { query, mutation, variables, Consumer, ...consumerProps } = props;

  const RequestComponent = query ? Query : Mutation;

  return (
    <RequestComponent query={query} mutation={mutation} variables={variables}>
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
    </RequestComponent>
  );
};

Request.propTypes = propTypes;

export default Request;
