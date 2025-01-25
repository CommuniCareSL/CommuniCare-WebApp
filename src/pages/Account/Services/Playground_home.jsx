import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const PlaygroundPage = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-4 items-stretch">
      
      <div className="w-2/3 pr-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-blue-600">What Can You Do Here...</h1>
        </div>

        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-700">Playground Management</h3>
              <Link to="/Playground_home/ManagePlaygroundAcc">
              <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                Manage
              </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => handleAccordionToggle(0)}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      View Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-gray-700 text-base">
                  Here you can manage details about your playgrounds, including adding, updating, or deleting them.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-700">Reservation Requests</h3>
              <Link to="/Playground_home/PlaygroundRequestsAcc">
              <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                Review Requests
              </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => handleAccordionToggle(1)}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      View Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-gray-700 text-base">
                  Manage all reservation requests, approve or decline them, and view details of each request.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-700">Past Reservations</h3>
              <Link to="/Playground_home/PlaygroundHistoryAcc">
              <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                View History
              </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => handleAccordionToggle(2)}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      View Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-gray-700 text-base">
                  Review past reservations, see customer feedback, and analyze reservation history.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>

      {/* Right Section */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-4 h-2/3">
        
        <Heading size="md" className="text-blue-600 mb-4">
          Latest Activity
        </Heading>
        <Stack divider={<StackDivider />} spacing="6">
          <Box>
          <Divider mb={4} />
            <Heading size="xs" textTransform="uppercase">
              New Reservations
            </Heading>
            <Text pt="2" fontSize="sm" textColor="gray.700">
              You have 5 new reservation requests pending approval.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Customer Feedback
            </Heading>
            <Text pt="2" fontSize="sm" textColor="gray.700">
              View feedback from 3 recent reservations.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Playground Added
            </Heading>
            <Text pt="2" fontSize="sm" textColor="gray.700">
              A new playground information was inserted successfully.
            </Text>
            
          </Box>
          <Divider mb={4} />
        </Stack>
      </div>
    </div>
  );
};

export default PlaygroundPage;
  