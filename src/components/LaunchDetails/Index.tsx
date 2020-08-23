import React from "react";
import { useLaunchProfileInfoQuery } from "./../../generated/graphql";
export const Index = () => {
  const { data, loading, error } = useLaunchProfileInfoQuery({});
  return <div>all details</div>;
};
