import {gql} from "apollo-angular";

export const GET_POSTS = gql`
  query getEmployees{
    getEmployees{
      name,
      position,
      level
  }
}`
