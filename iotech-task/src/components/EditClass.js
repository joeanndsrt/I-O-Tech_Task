import { Collapse, FormControl, TableCell, TableRow, Box, Button, OutlinedInput, FormHelperText } from '@mui/material';
import React, { useState } from 'react';

const EditClass = ({ classes, onClassUpdate, onClassDelete }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(classes.id);
  const [title, setTitle] = useState(classes.title);
  const [coach_name, setCoachName] = useState(classes.coach_name);
  const [timing, setTiming] = useState(classes.timing);
  const [price, setPrice] = useState(classes.price);

  const handleUpdate = async () => {
    const updatedClassData = { title, coach_name, timing, price, id };
    await onClassUpdate(updatedClassData);
    setOpen(false);
  };

  const handleDelete = async () => {
    await onClassDelete(id);
  }

  return (
    <>
       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>{classes.title}</TableCell>
            <TableCell>{classes.coach_name}</TableCell>
            <TableCell>{classes.timing}</TableCell>
            <TableCell>{classes.price}</TableCell>
            <TableCell>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" sx={{ backgroundColor: "#020e62", width: "60px", height: "40px", color: "#fff", mr: 1 }} onClick={() => setOpen(!open)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#020e62", width: "60px", height: "40px", color: "#fff" }} onClick={handleDelete}>
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
                        <h5>Update Class {classes.title}</h5>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Class Name',
                                }}
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Class Name</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Coach Name',
                                }}
                                value={coach_name}
                                onChange={(event) => setCoachName(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Coach Name</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Timing',
                                }}
                                value={timing}
                                onChange={(event) => setTiming(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Timing</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-Class"
                                aria-describedby="outlined-class-helper-text"
                                inputProps={{
                                'aria-label': 'Price',
                                }}
                                type='number'
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                            <FormHelperText id="outlined-class-helper-text">Price</FormHelperText>
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

export default EditClass;
