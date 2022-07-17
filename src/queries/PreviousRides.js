import gql from "graphql-tag";

 const PREVIOUSRIDES=gql`
    query ($username: String) {
        all_user_ride_details(where:{username:{_eq:$username}}){
            id
            amount_paid
            pickup
            drop
            time_taken    
            date
            feedback
            feedback_comments
        }
    }
`;
export default PREVIOUSRIDES