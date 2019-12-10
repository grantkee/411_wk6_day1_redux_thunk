import React, {useState} from 'react'
import {
    Table,
    Button,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Menu,
    MenuItem,
    IconButton
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const menuOptions = [
    'Delete'
]

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)

    const [count] = useState(0)

    const handleClick = ( event ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const removeMake = ( id ) => {
        //keeps passing the last index of the array props.makes, so I'm trying to pass the key I'm using and filtering it out that way. However, that's also not working because the id that's being passed is the id of the very last index. For some reason, even though <Menu> is in the last TableCell, it's not being processed until the entire array has been mmapped over. I'm not really sure why it's doing that, but I'm pretty stuck
        let index = props.makes.findIndex(car => car.MakeId === id)
        props.deleteMake(index)
        handleClose()
        debugger;
    }

    return (
        <>
        <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map( (car, index) => (
                    <TableRow key={car.MakeId}>
                        <TableCell>{car['MakeId']}</TableCell>
                        <TableCell>{`${car['MakeName']}  ${index}`}</TableCell>
                        <TableCell>
                            <IconButton area-label='options' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
                                <MoreVert/>
                                <p>{index}</p>
                            </IconButton>
                            <Menu
                              id='long-menu'
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              >
                                  {menuOptions.map( (option) => (
                                    <MenuItem key={option} selected={option === 'Delete'} onClick={() => removeMake(car.MakeId)}>{option}</MenuItem>
                                  ) )}
                              </Menu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default Import