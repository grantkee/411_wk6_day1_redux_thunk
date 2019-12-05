import React from 'react'
import {
    Container,
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
    'Like',
    'Delete'
]

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = ( event ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
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
                {props.makes.map( car => (
                    <TableRow key={car.MakeId}>
                        <TableCell>{car['MakeId']}</TableCell>
                        <TableCell>{car['MakeName']}</TableCell>
                        <TableCell>
                            <IconButton area-label='options' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
                                <MoreVert/>
                            </IconButton>
                            <Menu
                              id='long-menu'
                              anchorEl={anchorEl}
                              keepMounted
                              open={open}
                              onClose={handleClose}
                              >
                                  {menuOptions.map( option => (
                                      <MenuItem key={option} selected={option === 'delete'} onClick={handleClose}>{option}</MenuItem>
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