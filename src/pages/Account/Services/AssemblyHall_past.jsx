import React, { useState } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight, HiQuestionMarkCircle } from 'react-icons/hi';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Input,
    Flex,
    Box,
    Select,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react';

const AssemblyHallPast = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        { id: 1, user: 'John Doe', event: 'Conference', description: 'Annual Tech Conference', hall: 'Hall A', capacity: 200, date: '2024-01-25', payment: 'Paid', paymentAmount: 10000, status: 'Booked' },
        { id: 2, user: 'Jane Smith', event: 'Seminar', description: 'Leadership Seminar', hall: 'Hall B', capacity: 150, date: '2024-01-26', payment: 'Paid', paymentAmount: 5000, status: 'Booked' },
        { id: 3, user: 'David Brown', event: 'Workshop', description: 'AI Workshop', hall: 'Hall C', capacity: 100, date: '2024-01-27', payment: 'Paid', paymentAmount: 7000, status: 'Cancelled', note: 'I just don\'t want to' },
    ]);

    const [filters, setFilters] = useState({
        hall: '',
        date: '',
        status: '',
    });

    const [searchQuery, setSearchQuery] = useState('');

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Handle filters and search
    const filteredReservations = reservations.filter((reservation) => {
        const matchesSearch = searchQuery
            ? reservation.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.hall.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.date.includes(searchQuery)
            : true;

        const isPastDate = reservation.date < today; // Only include reservations before today

        return (
            matchesSearch &&
            isPastDate &&
            (!filters.hall || reservation.hall === filters.hall) &&
            (!filters.status || (reservation.status === 'Booked' ? 'Completed' : reservation.status) === filters.status)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.date) - new Date(a.date);
        if (filters.date === 'oldest') return new Date(a.date) - new Date(b.date);
        return 0;
    });

    // Handle view reservation
    const handleViewReservation = (reservation) => {
        setSelectedReservation(reservation);
        onViewOpen();
    };

    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
                {/* Breadcrumb */}
                <Breadcrumb spacing="8px" separator={<HiChevronRight />} mb={6}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Assembly Hall Reservation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">Past Reservations</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Search Bar and Filters */}
                <Flex gap={4} mb={6} alignItems="center">
                    <Input
                        placeholder="Search by user, hall, or date..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        width="300px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    />
                    <Select
                        placeholder="Filter by Hall"
                        value={filters.hall}
                        onChange={(e) => setFilters({ ...filters, hall: e.target.value })}
                        width="200px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    >
                        <option value="Hall A">Hall A</option>
                        <option value="Hall B">Hall B</option>
                        <option value="Hall C">Hall C</option>
                    </Select>
                    <Select
                        placeholder="Sort by Date"
                        value={filters.date}
                        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                        width="200px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </Select>
                    <Select
                        placeholder="Filter by Status"
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        width="200px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    >
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </Select>
                </Flex>

                {/* Table */}
                <Box overflowX="auto" bg="white" shadow="sm" borderRadius="lg" border="1px" borderColor="gray.200">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">ID</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Hall</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">User</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Event</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Description</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Reservation Date</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Payment (LKR)</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservations.map((reservation) => (
                                <tr
                                    key={reservation.id}
                                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                                    onClick={() => handleViewReservation(reservation)}
                                >
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.hall}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.event}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.description}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.date}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.paymentAmount}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <Flex align="center">
                                            <span
                                                className={`px-2 py-1 rounded text-sm ${
                                                    reservation.status === 'Booked' || reservation.status === 'Completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {reservation.status === 'Booked' ? 'Completed' : reservation.status}
                                            </span>
                                            {reservation.status === 'Cancelled' && (
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <IconButton
                                                            aria-label="View cancellation reason"
                                                            icon={<HiQuestionMarkCircle />}
                                                            size="xs"
                                                            ml={2}
                                                            variant="ghost"
                                                            onClick={(e) => e.stopPropagation()}
                                                        />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <PopoverArrow />
                                                        <PopoverCloseButton />
                                                        <PopoverHeader>Cancellation Reason</PopoverHeader>
                                                        <PopoverBody>{reservation.note}</PopoverBody>
                                                    </PopoverContent>
                                                </Popover>
                                            )}
                                        </Flex>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </div>

            {/* View Reservation Modal */}
            <Modal isOpen={isViewOpen} onClose={onViewClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="xl" fontWeight="bold" borderBottom="1px" borderColor="gray.200" pb={4}>
                        Reservation Details
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={6}>
                        {selectedReservation && (
                            <Box>
                                <Box mb={4}>
                                    <strong>ID:</strong> {selectedReservation.id}
                                </Box>
                                <Box mb={4}>
                                    <strong>Hall:</strong> {selectedReservation.hall}
                                </Box>
                                <Box mb={4}>
                                    <strong>Capacity:</strong> {selectedReservation.capacity}
                                </Box>
                                <Box mb={4}>
                                    <strong>User:</strong> {selectedReservation.user}
                                </Box>
                                <Box mb={4}>
                                    <strong>Event:</strong> {selectedReservation.event}
                                </Box>
                                <Box mb={4}>
                                    <strong>Description:</strong> {selectedReservation.description}
                                </Box>
                                <Box mb={4}>
                                    <strong>Date:</strong> {selectedReservation.date}
                                </Box>
                                <Box mb={4}>
                                    <strong>Payment:</strong> {selectedReservation.payment} (LKR {selectedReservation.paymentAmount})
                                </Box>
                                <Box>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${
                                            selectedReservation.status === 'Booked' || selectedReservation.status === 'Completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {selectedReservation.status === 'Booked' ? 'Completed' : selectedReservation.status}
                                    </span>
                                </Box>
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AssemblyHallPast;