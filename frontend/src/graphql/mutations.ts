import { gql } from '@apollo/client';

export const UPDATE_GRANT_STATUS = gql`
    mutation UpdateGrantStatus($id: Int!, $status: String!) {
        updateGrantStatus(id: $id, status: $status) {
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