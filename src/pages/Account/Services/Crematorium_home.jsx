import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling for the calendar
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

// Custom CSS to override weekend styling
const customCalendarStyles = `
  .react-calendar__month-view__days__day--weekend {
    color: inherit; /* Reset weekend color to default */
  }
`;

const CrematoriumHome = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open
  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date in the calendar

  // Mock data: Days with reservations
  const reservationDates = [
    new Date(2024, 4, 5), // May 5, 2024
    new Date(2024, 4, 10), // May 10, 2024
    new Date(2024, 4, 15), // May 15, 2024
    new Date(2024, 4, 20), // May 20, 2024
  ];

  // Function to check if a date has a reservation
  const hasReservation = (date) => {
    return reservationDates.some(
      (reservationDate) =>
        date.getFullYear() === reservationDate.getFullYear() &&
        date.getMonth() === reservationDate.getMonth() &&
        date.getDate() === reservationDate.getDate()
    );
  };

  // Custom tile content to highlight days with reservations
  const tileContent = ({ date, view }) => {
    if (view === 'month' && hasReservation(date)) {
      return <div className="reservation-dot" style={{ color: 'red', fontSize: '8px', marginTop: '2px' }}>●</div>;
    }
    return null;
  };

  // Function to limit the calendar to three months (previous, current, next)
  const minDate = new Date();
  minDate.setMonth(minDate.getMonth() - 1); // One month before
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1); // One month after

  return (
    <div className="flex h-screen bg-gray-100 p-4 items-stretch">
      {/* Inject custom CSS */}
      <style>{customCalendarStyles}</style>

      {/* Left Section */}
      <div className="w-2/3 pr-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-blue-600">What Can You Do Here...</h1>
        </div>

        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-700">Crematorium Management</h3>
              <Link to="/Crematorium_home/ManageCrematoriumAcc">
                <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                  Manage
                </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => setOpenIndex(0)}>
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
                  Here you can manage details about your crematoriums, including adding, updating, or deleting them.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-700">Reservation Requests</h3>
              <Link to="/Crematorium_home/CrematoriumRequestsAcc">
                <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                  Review Requests
                </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => setOpenIndex(1)}>
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
              <Link to="/Crematorium_home/CrematoriumHistoryAcc">
                <Button variant="outline" colorScheme="teal" size="sm" className="mb-2">
                  View History
                </Button>
              </Link>
            </div>
            <Accordion allowToggle onChange={() => setOpenIndex(2)}>
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
      </div>

      {/* Right Section */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-4 h-2/3">
        <Heading size="md" className="text-blue-600 mb-4">
          Reservation Calendar
        </Heading>
        <Divider mb={4} />
        <Calendar
          onChange={setSelectedDate} // Update selected date
          value={selectedDate} // Current selected date
          tileContent={tileContent} // Custom content for tiles
          className="react-calendar" // Custom class for styling
          minDate={minDate} // Limit to one month before
          maxDate={maxDate} // Limit to one month after
          prev2Label={null} // Hide double previous arrow
          next2Label={null} // Hide double next arrow
        />
        <Box mt={4}>
          <Text fontSize="sm" color="gray.600">
            <span style={{ color: 'red' }}>●</span> Days with reservations
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default CrematoriumHome;