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

export default function CreateTournamentsTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>N</TableCell>
                        <TableCell>Игрок</TableCell>
                        <TableCell>Город</TableCell>
                        <TableCell>Рейтинг</TableCell>
                        <TableCell>MMO</TableCell>
                        <TableCell>Очки</TableCell>
                        <TableCell>Бухг</TableCell>
                        <TableCell>Берг</TableCell>
                        <TableCell>Место</TableCell>
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