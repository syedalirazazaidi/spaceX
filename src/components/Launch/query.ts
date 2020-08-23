import gql from "graphql-tag";

export const LaunchList = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
