import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditClass from '../components/EditClass';
import classesService from '../services/classesService';
import AddClass from '../components/AddClass';

const ClassesEdit = () => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState(useLocation().state.classes);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onClassUpdate = async (updatedClass) => {
        try {
            await classesService.updateClassById(updatedClass.id, updatedClass);
            const updatedClasses = classes.map((c) => (c.id === updatedClass.id ? updatedClass : c));
            setClasses(updatedClasses);
        } catch (error) {
            console.error(error);
        }
    };
    

    const onClassDelete = async (id) =>{
        try {
            await classesService.deleteClassById(id);
            const updatedClasses = classes.filter(c => c.id !== id);
            setClasses(updatedClasses);
        } catch (error) {
            console.error(error);
        }
    }

    const addNewClass = async (newClass) => {
        try {
          const addedClass = await classesService.addClass(newClass);
          setClasses([...classes, addedClass]);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <h1>Edit Classes</h1>
            <Button variant="contained" className="m-4" onClick={() => navigate('/classes')}>
                <i class="fa-solid fa-arrow-left"></i>
            </Button>
            <Button variant="contained" onClick={handleClickOpen}>
                <i className="fa-solid fa-plus"></i>
            </Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Class Name</TableCell>
                            <TableCell>Coach Name</TableCell>
                            <TableCell>Timing</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {classes && classes.map((c) => (
                            c.id && // check if the id is not null or undefined
                            <EditClass key={c.id} classes={c} onClassUpdate={onClassUpdate} onClassDelete={() => onClassDelete(c.id)}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddClass open={open} handleClose={() => setOpen(false)} addNewClass={addNewClass}/>
        </>
    )
}

export default ClassesEdit;
