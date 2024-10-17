import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

export default function Form() {

    const personSchema = object ({
        first_name: string().required("Enter First Name").min(2),
        last_name: string().max(6, "Last Name is too long")
    })

    const person = {

    }

    const { register, handleSubmit, setValue, watch, formState: {errors}, reset } = useForm({resolver: yupResolver(personSchema)});

    const handleChange = (e) => {
        setValue(e.target.name, e.target.value);

        console.log(watch("first_name"))
    }

    const onSubmit = (data) => {
        let JSONData = JSON.stringify(data);
        
        console.log(JSONData);

        //add axios here

        reset()
      };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        '& .MuiInputBase-input': { color: 'white' }, // Target input text color
        '& .MuiInputLabel-root': { color: 'white' }, // Target label color (optional)
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" {...register("first_name")} onChange={handleChange} helperText={errors.first_name && <span>{errors.first_name.message}</span>} error={errors.first_name !== undefined}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" {...register("last_name")} onChange={handleChange} helperText={errors.last_name && <span>{errors.last_name.message}</span>} error={errors.last_name !== undefined}/>
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="success">Submit</Button>
        <Button onClick={() => reset()} variant="contained" color="error">Reset</Button>
      </Stack>
    </Box>
  );
}
