import React from "react";
import { useLaunchListQuery } from "./../../generated/graphql";
import { LaunchList } from "./query";
export const Launch = () => {
  const { data, loading, error } = useLaunchListQuery();
  if (loading) return <h2>Loading...</h2>;

  if (error || !data) return <h2>Error</h2>;
  console.log(data);

  return (
    <h2>
      <LaunchList data={data} />
    </h2>
  );
};
