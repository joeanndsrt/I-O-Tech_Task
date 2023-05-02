import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import classesService from '../services/classesService';

const AddClass = ({ open, handleClose, addNewClass }) => {
  const [classData, setClassData] = useState({
    title: '',
    description: '',
    timing: '',
    price: '',
    coach_name: '',
    coach_brief: ''
  });
  const [fileName, setFileName] = useState('');

  const [fileError, setFileError] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    timing: false,
    price: false,
    coach_name: false,
    coach_brief: false
  });
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setClassData({ ...classData, [id]: value });
    setErrors({ ...errors, [id]: false });
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const image = URL.createObjectURL(file);
      setClassData({ ...classData, image: image });
      setFileName(file.name);
      setFileError(false);
    } else {
      setFileName('Please select an image');
      setFileError(true);
    }
  };

  const handleAddClass = async () => {
    try {
      // Check for errors before adding the class
      let hasErrors = false;
      const newErrors = {};
      for (const key in classData) {
        if (!classData[key]) {
          newErrors[key] = true;
          hasErrors = true;
        }
      }
      setErrors(newErrors);

      if (hasErrors) {
        return;
      } else if (!fileName || fileError) {
            setFileName('Please select an image!');
            setFileError(true);
            return;
      }
      
      await addNewClass(classData);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a Class</DialogTitle>
      <DialogContent>
        <Button variant="contained" component="label">
          Upload Image
          <input hidden accept="image/*" multiple type="file" onChange={handleFileInputChange}/>
        </Button>
        {fileName && <span className={`file-name m-2 ${fileError ? 'text-danger' : ''}`}>{fileName}</span>}
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Class Title"
          type="text"
          fullWidth
          variant="standard"
          value={classData.title}
          onChange={handleInputChange}
          error={errors.title}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Class Description"
          type="text"
          fullWidth
          variant="standard"
          value={classData.description}
          onChange={handleInputChange}
          error={errors.description}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="timing"
          label="Timing"
          type="text"
          fullWidth
          variant="standard"
          value={classData.timing}
          onChange={handleInputChange}
          error={errors.timing}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Price"
          type="text"
          fullWidth
          variant="standard"
          value={classData.price}
          onChange={handleInputChange}
          error={errors.price}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="coach_name"
          label="Coach Name"
          type="text"
          fullWidth
          variant="standard"
          value={classData.coach_name}
          onChange={handleInputChange}
          error={errors.coach_name}
          required
        />
        <TextField
          autoFocus
          margin="dense"
          id="coach_brief"
          label="Coach Description"
          type="text"
          fullWidth
          variant="standard"
          value={classData.coach_brief}
          onChange={handleInputChange}
          error={errors.coach_brief}
          required
        />
        <Button variant="contained" color="success" className='mt-4' onClick={handleAddClass}>
          Add Class
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddClass;
