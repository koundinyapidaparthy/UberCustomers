import gql from "graphql-tag";

 const walletQuery=gql`
    query ($username: String) {
        wallet(where: {username: {_eq: $username}}) {
        id
        pickup
        drop
        money_for_this_ride
        payment_method
        }
    }
`;

  
  export default walletQuery