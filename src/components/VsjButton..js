import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
export default function VsjButton() {

    return (
        <div>
            <center><Avatar alt="Varanasi Software Junction" src="https://3.bp.blogspot.com/-py5FbTZgvjo/YDi1bsQq16I/AAAAAAAACB0/BxejbJBcHA4AVfkB33WYC3YlVmxElM7BwCK4BGAYYCw/s1600/Varanasi%2BSoftware%2BJunction%2BPhone%2BLogo.png" />
            </center>
            <h1>Simple Buttons</h1>
            <hr />
            <Button variant="contained">Button</Button>
            <hr />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>



            <hr />
            <ButtonGroup
                orientation="vertical"

                variant="contained"
            >
                <Button>One</Button>,
                <Button>Two</Button>,
                <Button>Three</Button>,
            </ButtonGroup>
            <hr />





        </div>
    );
}
