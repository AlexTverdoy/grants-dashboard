import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import { GET_GRANTS } from '../graphql/queries';
import { UPDATE_GRANT_STATUS } from '../graphql/mutations';
import GrantCard from '../components/GrantCard';
import GrantTable from '../components/GrantTable';

const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_GRANTS);
  const [updateGrantStatus] = useMutation(UPDATE_GRANT_STATUS);
  const [previousGrants, setPreviousGrants] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setPreviousGrants(data.grants.filter((grant: any) => grant.status !== 'Applied'));
    }
  }, [data]);

  const handleApprove = async (id: number, feedback: string) => {
    await updateGrantStatus({ variables: { id, status: 'Approved' } });
    refetch();
  };

  const handleReject = async (id: number, feedback: string) => {
    await updateGrantStatus({ variables: { id, status: 'Rejected' } });
    refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        New Matches
      </Typography>
      <Grid container spacing={3}>
        {data.grants
          .filter((grant: any) => grant.status === 'Applied')
          .map((grant: any) => (
            <Grid item xs={12} sm={6} md={4} key={grant.id}>
              <GrantCard grant={grant} onApprove={handleApprove} onReject={handleReject} />
            </Grid>
          ))}
      </Grid>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        All Grant Opportunities
      </Typography>
      <GrantTable grants={previousGrants} />
    </Container>
  );
};

export default Home;