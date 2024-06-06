import { gql } from '@apollo/client';

export const GET_GRANTS = gql`
    query GetGrants {
        grants {
            id
            name
            foundation
            amount
            status
            deadline
            matchDate
        }
    }
`;