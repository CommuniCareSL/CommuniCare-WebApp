import React from 'react';
import { Box, Heading, Text, Badge, Button, SimpleGrid, Flex, Link, Icon } from '@chakra-ui/react';
// import { ExternalLinkIcon, CalendarIcon, DocumentIcon } from '@chakra-ui/icons';
import { FaExternalLinkAlt, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const UserRequests = ({ requests }) => {
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
            {requests.map((request, index) => (
                <Box
                    key={index}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="md"
                    bg="white"
                    p={4}
                    _hover={{ shadow: "lg" }}
                >
                    {/* <Heading size="md">{request.user}</Heading>
                    <Text mt={2}>{request.description}</Text>
                
                    <Text fontSize="sm" color="gray.500">Requested Date: {request.date}</Text>

                    <Text mt={2}>Appointments: 
                        {request.past_app} past
                        {request.upcoming} upcoming

                    </Text>

                    <Text mt={2}>Payments: {request.payment}</Text>

                    <Text mt={2}>Submitted Documents: {request.docs}</Text> */}

                    <Flex alignItems="center">
                        <Heading size="md" mr={2}>{request.user}</Heading>
                        <Link href={`/profile/${request.userId}`} isExternal color="blue.500">
                            <FaExternalLinkAlt />
                        </Link>
                    </Flex>
                    <Text mt={2}>{request.description}</Text>
                    <Text fontSize="sm" color="gray.500">Requested Date: {request.date}</Text>

                    <Flex mt={2} alignItems="center">
                        <Text>Appointments:</Text>
                        <Text ml={1}>{request.past_app} past, {request.upcoming} upcoming</Text>
                        <Link href={`/calendar/${request.userId}`} isExternal ml={2} color="blue.500">
                            <FaCalendarAlt />
                        </Link>
                    </Flex>

                    <Flex mt={2} alignItems="center">
                        <Text>Payments:</Text>
                        <Text ml={1}>{request.payment}</Text>
                    </Flex>

                    <Flex mt={2} alignItems="center">
                        <Text>Submitted Documents:</Text>
                        <Text ml={1}>{request.docs}</Text>
                        <Link href={`/documents/${request.userId}`} isExternal ml={2} color="blue.500">
                            <FaFileAlt />
                        </Link>
                    </Flex>

                    <Badge colorScheme={request.status === 'Approved' ? 'green' : 'red'}>Status: {request.status}</Badge>
                    <Button mt={4} ml={9} size='sm' colorScheme="blue">View Details</Button>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default UserRequests;
