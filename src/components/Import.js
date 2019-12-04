import React from 'react'
import {
    Container,
    Table,
    Button,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core'

const Import = (props) => {
    // fill out this component

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
                        <TableCell>Action</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default Import