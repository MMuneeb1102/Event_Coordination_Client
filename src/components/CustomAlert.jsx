import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, showAlert } from '../redux/alert/alert-slice';
export default function CustomAlerts() {
 const {show, text, severity} = useSelector((state)=>state.alert)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(hideAlert())
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {showAlert && (
        <Alert variant="filled" severity={severity} onClose={handleClose}>
          {text}
        </Alert>
      )}
    </Stack>
  );
}
