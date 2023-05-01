import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classesService from '../services/classesService';
import Class from '../components/Class'

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await classesService.getClasses();
      setClasses(result);
    };
    fetchData();
  }, []);
  
  // const handleDelete = async (id) => {
  //   await classesService.deleteClass(id);
  //   setClasses(classes.filter((c) => c.id !== id));
  // };
  return (
    <>
      <h1>Classes Preview Page</h1>
      <Link to="/classes/create" className="btn btn-primary mb-3">
        Edit Classes 
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Class Title</th>
            <th>Class Description</th>
            <th>Coach Name</th>
            <th>About the Coach</th>
            <th>Class Timing</th>
            <th>Class Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Class classes={classes}/>
        </tbody>
      </table>
    </>
  );
};

export default Classes;
