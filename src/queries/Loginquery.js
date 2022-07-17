import gql from "graphql-tag";

const GET_MY_TODOS = gql`
  query($username:String,$password:String){
        user_details(where:{username:{_eq:$username},password:{_eq:$password}}){
        Exist
    }
  }
`;
export default GET_MY_TODOS