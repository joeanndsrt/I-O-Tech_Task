import React, { useState } from 'react';
import { Collapse, FormControl, TableCell, TableRow, Box, Button, OutlinedInput, FormHelperText, Select, MenuItem } from '@mui/material';

const EditClient = ({ clients, onClientUpdate, onClientDelete }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(clients.id);
  const [full_name, setFullName] = useState(clients.full_name);
  const [mobile_number, setMobileNumber] = useState(clients.mobile_number);
  const [address, setAddress] = useState(clients.address);
  const [subscription_plan, setSubscriptionPlan] = useState(clients.subscription_plan);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  
  const validateMobileNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '').substring(0, 10); // strip all non-numeric characters and take the first 10 digits
    if (phoneNumber.length < 10) {
      setMobileNumberError(true);
      return phoneNumber;
    } else {
      setMobileNumberError(false);
      const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); // format the phone number as (xxx) xxx-xxxx
      return formattedPhoneNumber;
    }
  };
  
  const handleMobileNumberChange = (event) => {
    const formattedPhoneNumber = validateMobileNumber(event.target.value);
    setMobileNumber(formattedPhoneNumber);
  };
  
  const handleUpdate = async () => {
    if (!mobileNumberError) {
      const updatedClientData = { full_name, mobile_number, address, subscription_plan, id };
      await onClientUpdate(updatedClientData);
      setOpen(false);
    }
  };
  const handleDelete = async () => {
    await onClientDelete(id);
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>{clients.full_name}</TableCell>
            <TableCell>{clients.mobile_number}</TableCell>
            <TableCell>{clients.address}</TableCell>
            <TableCell>{clients.subscription_plan}</TableCell>
            <TableCell>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" sx={{ backgroundColor: "#020e62", width: "70px", height: "30px", color: "#fff", mr: 1 }} onClick={() => setOpen(!open)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#020e62", width: "70px", height: "30px", color: "#fff" }} onClick={handleDelete}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                </div>
            </TableCell>
       </TableRow>

      {/* Update Dropdown */}
      <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <h5>Update Client {clients.full_name}</h5>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Full Name',
                                }}
                                value={full_name}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Fulll Name</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                          <OutlinedInput
                            id="formatted-mobile-number-input"
                            inputProps={{
                              'aria-label': 'Mobile Number',
                            }}
                            value={mobile_number}
                            onChange={handleMobileNumberChange}
                            placeholder="(xxx) xxx-xxxx"
                            error={mobileNumberError}
                          />
                          <FormHelperText id="outlined-class-helper-text">Mobiile Number</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Address',
                                }}
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Address</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <Select
                              value={subscription_plan}
                              onChange={(event) => setSubscriptionPlan(event.target.value)}
                              aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Subscription Plan',
                              }}
                            >
                              <MenuItem value='Basic Plan'>Basic Plan</MenuItem>
                              <MenuItem value='Premium Plan'>Premium Plan</MenuItem>
                            </Select>
                            <FormHelperText id="outlined-class-helper-text">Subscription Plan</FormHelperText>
                        </FormControl>
                        <Button variant="contained" sx={{ m: 1, width: '100%', backgroundColor: "#020e62", color: "#fff" }} onClick={handleUpdate}>
                            Update
                        </Button>
                    </Box>
                </Collapse>
            </TableCell>
       </TableRow>
    </>
  )
}

export default EditClient