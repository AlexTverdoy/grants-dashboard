import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

interface FeedbackDialogProps {
  open: boolean;
  feedback: string;
  setFeedback: (feedback: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ open, feedback, setFeedback, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Provide Feedback</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Feedback"
          type="text"
          fullWidth
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;