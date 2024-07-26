import Sidebar from '../../components/Civil Officer/Sidebar';
// import '../../styles/components/Civil officer/dashboard.css';

import { Card, CardHeader, CardBody, Stack, StackDivider, Box, Heading, Text } from '@chakra-ui/react'
import { RiInboxFill, RiUserAddFill, RiFileTextFill, RiStarFill, RiArrowRightSLine} from 'react-icons/ri';

const calendar_schedule = () => {
    return (
        <div className='dashboard-officer'>
        <div>
        <Sidebar />
        </div>
        

       <div>
       <Card>
  {/* <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader> */}

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
      <RiInboxFill/>
        <Heading size='xs' textTransform='uppercase'>
          Appointments
        </Heading>
      </Box>
      
      <Box>
        <Heading size='s' textTransform='uppercase'>
          46
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
       </div>
        

        
        
        </div>
    );
};

export default calendar_schedule;