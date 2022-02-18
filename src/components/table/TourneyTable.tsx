import * as React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

function createData(
    name: string,
    calories: number,
) {
    return { name, calories };
}

const rows: any = [

];

export default function TourneyTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Даты проведения</TableCell>
                        <TableCell>Название</TableCell>
                        <TableCell>Город</TableCell>
                        <TableCell>Эфф.время</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows ? rows.map((row: any) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                        </TableRow>
                    )) : ''}
                </TableBody>
            </Table>
        </TableContainer>
    );
}