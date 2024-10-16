"use client";

import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { SelectChangeEvent } from '@mui/material';

const BookingPage: React.FC = () => {
  const [hospital, setHospital] = useState('');

  
  const handleHospitalChange = (event: SelectChangeEvent<string>) => {
    setHospital(event.target.value);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px', margin: '0 auto' }}>
      <TextField 
        label="Name-Lastname" 
        name="Name-Lastname" 
        variant="standard" 
        required 
      />
      <TextField 
        label="Citizen ID" 
        name="Citizen ID" 
        variant="standard" 
        required 
      />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="hospital-label">Select Hospital</InputLabel>
        <Select
          labelId="hospital-label"
          id="hospital"
          value={hospital}
          onChange={handleHospitalChange}
        >
          <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
      </FormControl>
      <DateReserve />
      <Button type="submit" name="Book Vaccine" variant="contained" color="primary">
        Book Vaccine
      </Button>
    </form>
  );
};

export default BookingPage;
