import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const AddClient = ({ open, handleClose, addNewClient }) => {
  const [clientData, setClientData] = useState({
    full_name: '',
    address: '',
    mobile_number: '',
    subscription_plan: ''
  });
  const [fileName, setFileName] = useState('');

  const [errors, setErrors] = useState({
    full_name: false,
    address: false,
    mobile_number: false,
    subscription_plan: false
  });


  const handleInputChange = (event) => {
    const { id, value } = event.target;
  
    //apply formatting to mobile_number field only
    let formattedValue = value;
    if (id === 'mobile_number') {
      // Remove non-numeric characters from the input
      const numericValue = value.replace(/[^0-9]/g, '');
      // Format the numeric input as a phone number
      formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  
    setClientData({ ...clientData, [id]: formattedValue });
    setErrors({ ...errors, [id]: false });
  };

  const handleSubscriptionChange = (event) => {
    const value = event.target.value;
    setClientData({ ...clientData, subscription_plan: value });
    setErrors({ ...errors, subscription_plan: false });
  }
  

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const image = URL.createObjectURL(file);
      setClientData({ ...clientData, image: image });
      setFileName(file.name);
    } 
  };

  const handleAddClient = async () => {
    try {
      // Check for errors before adding the class
      let hasErrors = false;
      const newErrors = {};
      for (const key in clientData) {
        if (!clientData[key]) {
          newErrors[key] = true;
          hasErrors = true;
        }
      }
      setErrors(newErrors);

      if (hasErrors) {
        return;
      } 
      
      await addNewClient(clientData);
      setClientData({ full_name: '', address: '', mobile_number: '', subscription_plan: '' });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a Client</DialogTitle>
      <DialogContent>
        <Button variant="contained" component="label" style={{ backgroundColor: '#020E62', color: '#fff'}}>
          Upload Avatar
          <input hidden accept="image/*" multiple type="file" onChange={handleFileInputChange}/>
        </Button>
        {fileName && <span className='file-name m-2'>{fileName}</span>}
        <TextField
          autoFocus
          margin="dense"
          id="full_name"
          label="Full Name"
          type="text"
          fullWidth
          variant="standard"
          value={clientData.full_name}
          onChange={handleInputChange}
          error={errors.full_name}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="address"
          label="Address"
          type="text"
          fullWidth
          variant="standard"
          value={clientData.address}
          onChange={handleInputChange}
          error={errors.address}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="mobile_number"
          label="Mobile Number"
          type="text"
          fullWidth
          variant="standard"
          value={clientData.mobile_number}
          onChange={handleInputChange}
          error={errors.mobile_number}
          required
        />
        <FormControl variant="standard" style={{ width: '100%' }}>
          <InputLabel id="subscription_plan-label">Subscription Plan</InputLabel>
          <Select
            id="subscription_plan"
            labelId='subscription_plan-label'
            value={clientData.subscription_plan}
            onChange={handleSubscriptionChange}
            error={errors.subscription_plan}
            required
            label="Subscription Plan"
          >
            <MenuItem value='Basic Plan'>Basic Plan</MenuItem>
            <MenuItem value='Premium Plan'>Premium Plan</MenuItem>
          </Select>
        </FormControl>
        <Grid container justifyContent="flex-end">
          <Button variant="contained" className='mt-4' onClick={handleAddClient} style={{ width: '100%', backgroundColor: '#020E62' }}>
            Add Class
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default AddClient