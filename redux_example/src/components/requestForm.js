import React from 'react';
import TextField from "@material-ui/core/TextField";


export default function requestForm() {

return (
    
        <form>
        <TextField
          id="outlined-simple-start-adornment"
          variant="outlined"
          label="Subject"
          // onChange={handleChange}
          name="subject"
        />
        <br />
        <br />
        <TextField
          id="outlined-simple-start-adornment"
          variant="outlined"
          // onChange={handleChange}
          name="clientName"
          label="Client Name"
          fullWidth="true"
        />
        <br />
        <br />
        <TextField
          id="outlined-simple-start-adornment"
          variant="outlined"
          // onChange={handleChange}
          name="clientCompany"
          label="Client Company"
          fullWidth="true"
        />
        <br />
        <br />
        <TextField
          id="outlined-simple-start-adornment"
          // onChange={handleChange}
          name="clientContactMethod"
          label="Client Contact"
          variant="outlined"
          fullWidth="true"
        />
        <br />
        <br />
        <TextField
          id="outlined-simple-start-adornment"
          // onChange={handleChange}
          name="skillCategory"
          label="Skill Category of Concern"
          variant="outlined"
          fullWidth="true"
        />
        <br />
        <br />
        <TextField
          id="outlined-simple-start-adornment"
          // onChange={handleChange}
          name="numberOfEngineers"
          label="Number of Engineers Needed"
          variant="outlined"
          fullWidth="true"
        />
      </form>
)
}
