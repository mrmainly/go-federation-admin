import * as React from 'react';

import { Tabs, Tab, Typography, Box } from '@mui/material'

import { CreateTournamentsTable } from '..'
import { AccessScreen, Editor, Applications, RegisterForm } from '../../createTournamentsScreen'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MenuTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example" scrollButtons="auto" variant="scrollable">
                    <Tab label="Редактор" {...a11yProps(0)} />
                    <Tab label="Доступ" {...a11yProps(1)} />
                    <Tab label="Форма регистрации" {...a11yProps(2)} />
                    <Tab label="Заявки" {...a11yProps(3)} />
                    <Tab label="Таблица" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Editor />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AccessScreen />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <RegisterForm />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Applications />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <CreateTournamentsTable />
            </TabPanel>
        </Box>
    );
}