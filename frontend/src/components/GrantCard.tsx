import React, { useState } from 'react';
import {Card, CardContent, Typography, Divider, Box, CardHeader, Avatar, IconButton, Chip, Grid} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FeedbackDialog from './FeedbackDialog';
import {grey} from "@mui/material/colors";

interface GrantCardProps {
  grant: any;
  onApprove: (id: number, feedback: string) => void;
  onReject: (id: number, feedback: string) => void;
}

const GrantCard: React.FC<GrantCardProps> = ({ grant, onApprove, onReject }) => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  const handleThumbUp = () => {
    setAction('approve');
    setOpen(true);
  };

  const handleThumbDown = () => {
    setAction('reject');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitFeedback = () => {
    if (action === 'approve') {
      onApprove(grant.id, feedback);
    } else if (action === 'reject') {
      onReject(grant.id, feedback);
    }
    setFeedback('');
    setOpen(false);
  };

  return (
    <Card
      sx={{
        border: '1px solid grey'
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="title">
            {grant.name[0]}
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label="ThumbUp"
              onClick={handleThumbUp}
            >
              <ThumbUpIcon />
            </IconButton>
            <IconButton
              aria-label="ThumbDown"
              onClick={handleThumbDown}
            >
              <ThumbDownIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {grant.foundation}
        </Typography>
        <Typography variant="h6">
          {grant.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column-reverse',
              alignContent: 'flex-end',
              width: 150,
              height: 150,
              padding: 2,
              marginTop: 3,
              marginBottom: 3,
              borderRadius: 2,
              bgcolor: 'primary.light',
            }}
          >
            <Typography variant="body1">
              Avg Amount
            </Typography>
            <Typography
              variant="h5"
              color='primary.main'
            >
              {`$ ${grant.amount}`}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 150,
              height: 150,
              marginTop: 3,
              padding: 2,
              marginBottom: 3,
              borderRadius: 2,
              bgcolor: 'secondary.light'
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Deadline
            </Typography>
            <Typography variant="body1">
              {grant.deadline}
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                marginBottom: 1
              }}
            />
            <Typography variant="body1" color="textSecondary">
              Getting started
            </Typography>
            <Typography variant="body1">
              Apply Online
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" color="textSecondary">
            Location
          </Typography>
          <Typography variant="body1">
            Wilmington, Delaware
          </Typography>
        </Box>
        <Typography variant="body1" color="textSecondary">
          Area of Funding
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <Chip label="Public Health Woman"/>
          </Grid>
          <Grid item>
            <Chip label="Culture Food"/>
          </Grid>
          <Grid item>
            <Chip label="Public Health Woman"/>
          </Grid>
          <Grid item>
            <Chip label="Culture Food"/>
          </Grid>
          <Grid item>
            <Chip label="Public Health Woman"/>
          </Grid>
          <Grid item>
            <Chip label="+2"/>
          </Grid>
        </Grid>
      </CardContent>
      <FeedbackDialog open={open} feedback={feedback} setFeedback={setFeedback} onClose={handleClose} onSubmit={handleSubmitFeedback} />
    </Card>
  );
};

export default GrantCard