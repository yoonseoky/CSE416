import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from '@mui/material';
  import React, { useCallback } from 'react';
  import { useState } from 'react';
  
  function ConfirmModal({
    open,
    handleClose,
    confirmDelete,
  }) {
    return (
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle align="center"> Delete a Course</DialogTitle>
          <DialogContent style={{ width: '400px' }}>
            <DialogContentText>Really want to delete?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={confirmDelete}>Yes</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
  
  export default ConfirmModal;
  