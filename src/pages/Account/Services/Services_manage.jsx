import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, useBreakpointValue } from '@chakra-ui/react';
import Sidebar from '../../../components/Account/Sidebar';
import PlaygroundAcc from './Playground_home';
import AssemblyHallAcc from './AssemblyHall_home';
import CrematoriumAcc from './Crematorium_home';

const Services = () => {
    const tabOrientation = useBreakpointValue({ base: 'vertical', md: 'horizontal' });

    return (
        <Sidebar>
            <div className="w-full min-h-screen bg-gray-100">
                <Box className="p-4">
                    <Tabs 
                        isFitted 
                        variant="enclosed" 
                        orientation={tabOrientation}
                        className="bg-white rounded-lg shadow-sm"
                    >
                        <TabList 
                            mb="1em" 
                            className="flex-wrap"
                            display="flex"
                            flexDirection={{ base: 'column', md: 'row' }}
                        >
                            {[
                                'Playground Reservation',
                                'Allotment of Assembly Hall',
                                'Crematorium Reservation',
                                'Gully Bowser Service Reservation'
                            ].map((title, index) => (
                                <Tab
                                    key={index}
                                    className="flex-1 min-w-[200px]"
                                    border="1px solid"
                                    borderColor="gray.300"
                                    borderRadius="md"
                                    p={3}
                                    _hover={{
                                        bg: "gray.100",
                                    }}
                                    _selected={{
                                        color: "white",
                                        bg: "blue.500",
                                        fontWeight: "bold",
                                        borderColor: "blue.500",
                                        boxShadow: "0 0 5px blue.300",
                                    }}
                                >
                                    {title}
                                </Tab>
                            ))}
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
                            <TabPanel>
                                {/* Add Gully Bowser component when ready */}
                                <div>Gully Bowser Service Component</div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </div>
        </Sidebar>
    );
};

export default Services;