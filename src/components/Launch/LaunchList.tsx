import React from "react";
import { LaunchListQuery } from "./../../generated/graphql";
interface Props {
  data: LaunchListQuery;
}
export const LaunchList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ul>
        {console.log(data)}
        {data.launches?.map((launchOBJ, ind) => {
          <li>{launchOBJ?.mission_name}</li>;
        })}
      </ul>
    </div>
  );
};
