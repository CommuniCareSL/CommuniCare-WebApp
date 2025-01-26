import React from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import PlaygroundAcc from './Playground_home';
import AssemblyHallAcc from './AssemblyHall_home';
import CrematoriumAcc from './Crematorium_home';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
const Services = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            
            <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
                <Box flex="1" ml="4">
                    <Tabs isFitted variant="enclosed">
                        <TabList mb="1em">
                            <Tab
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="md"
                                _hover={{
                                    bg: "gray.100",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "blue.500",
                                    fontWeight: "bold",
                                    borderColor: "blue.500", // Change border color for the selected tab
                                    boxShadow: "0 0 5px blue.300", // Subtle glow for the selected tab
                                }}
                            >
                                Playground Reservation
                            </Tab>
                            <Tab
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="md"
                                _hover={{
                                    bg: "gray.100",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "blue.500",
                                    fontWeight: "bold",
                                    borderColor: "blue.500", // Change border color for the selected tab
                                    boxShadow: "0 0 5px blue.300", // Subtle glow for the selected tab
                                }}
                            >
                                Allotment of Assembly Hall
                            </Tab>
                            <Tab
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="md"
                                _hover={{
                                    bg: "gray.100",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "blue.500",
                                    fontWeight: "bold",
                                    borderColor: "blue.500", // Change border color for the selected tab
                                    boxShadow: "0 0 5px blue.300", // Subtle glow for the selected tab
                                }}
                            >
                                Crematorium Reservation
                            </Tab>
                            <Tab
                                border="1px solid"
                                borderColor="gray.300"
                                borderRadius="md"
                                _hover={{
                                    bg: "gray.100",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "blue.500",
                                    fontWeight: "bold",
                                    borderColor: "blue.500", // Change border color for the selected tab
                                    boxShadow: "0 0 5px blue.300", // Subtle glow for the selected tab
                                }}
                            >
                                Gully Bowser Service Reservation
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <PlaygroundAcc />
                            </TabPanel>
                            <TabPanel>
                                <AssemblyHallAcc />
                            </TabPanel>
                            <TabPanel>
                                <CrematoriumAcc />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </div>
        </div>
    );
};

export default Services;
