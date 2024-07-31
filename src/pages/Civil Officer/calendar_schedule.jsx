import Sidebar from '../../components/Civil Officer/Sidebar';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Stack, StackDivider, Box, Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { HiChevronDown, HiPlus } from 'react-icons/hi';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { RiInboxFill } from 'react-icons/ri';

const CalendarSchedule = () => {
  const times = ['Day', 'Week', 'Month'];
  const [selectedButton, setSelectedButton] = useState(2); // default to month
  const [CurrentComponent, setCurrentComponent] = useState(null);

  const handleButtonClick = async (index) => {
    setSelectedButton(index);
    if (index === 0) {
      const { default: AppointmentDay } = await import('./Appointment_today');
      setCurrentComponent(() => AppointmentDay);
    } else if (index === 1) {
      const { default: AppointmentWeek } = await import('./Appointment_week');
      setCurrentComponent(() => AppointmentWeek);
    } else if (index === 2) {
      const { default: AppointmentMonth } = await import('./Appointment_month');
      setCurrentComponent(() => AppointmentMonth);
    }
  };

  useEffect(() => {
    handleButtonClick(selectedButton); // Load the component for the default state
  }, []);

  return (
    <div className='flex h-screen'>
      <Sidebar />

      <div className='flex flex-col m-5 w-screen p-4 overflow-y-auto'>
      {/* <div className='m-5 h-11 w-screen p-4 flex justify-between items-center'> */}
      <div className='h-11 flex justify-between items-center'>
        <Stack direction='row' spacing={4} align='center'>
          {times.map((time, index) => (
            <Button
              key={index}
              colorScheme='blue'
              variant={selectedButton === index ? 'solid' : 'outline'}
              onClick={() => handleButtonClick(index)}
            >
              {time}
            </Button>
          ))}
        </Stack>

        <Menu>
          <MenuButton as={Button} rightIcon={<HiChevronDown />} mr={12}>
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>Completed</MenuItem>
            <MenuItem>Follow Up</MenuItem>
            <MenuItem>New Requests</MenuItem>
          </MenuList>
          
        </Menu>
        <Button colorScheme='blue'>
          <HiPlus/>
          Add Appointment
        </Button>
        
        
      </div>
      <div className='mt-3 flex-1'>
        {CurrentComponent && <CurrentComponent />}
        </div>


{/* 
        <Tabs variant='enclosed'>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs> */}

    </div>
    </div>
  );
};

export default CalendarSchedule;
