import React, { useState } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight } from 'react-icons/hi';
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
    Divider
} from '@chakra-ui/react';

const CrematoriumPast = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        {
            id: 1,
            user: 'John Doe',
            crematorium: 'Peaceful Rest Crematorium',
            funeralDate: '2024-01-25',
            timeSlot: '10:00 AM - 12:00 PM',
            payment: 'Paid',
            paymentAmount: 15000,
            status: 'Completed',
            deceasedName: 'Jane Doe',
            deceasedAddress: '123 Main St, City, Country',
            dateOfDeath: '2024-01-20',
            notifierName: 'John Doe',
            notifierAddress: '123 Main St, City, Country',
            notifierRelationship: 'Spouse',
        },
        {
            id: 2,
            user: 'Jane Smith',
            crematorium: 'Eternal Light Crematorium',
            funeralDate: '2024-01-26',
            timeSlot: '02:00 PM - 04:00 PM',
            payment: 'Paid',
            paymentAmount: 20000,
            status: 'Completed',
            deceasedName: 'John Smith',
            deceasedAddress: '456 Elm St, City, Country',
            dateOfDeath: '2024-01-21',
            notifierName: 'Jane Smith',
            notifierAddress: '456 Elm St, City, Country',
            notifierRelationship: 'Daughter',
        },
        {
            id: 3,
            user: 'David Brown',
            crematorium: 'Serenity Gardens Crematorium',
            funeralDate: '2024-01-27',
            timeSlot: '09:00 AM - 11:00 AM',
            payment: 'Paid',
            paymentAmount: 18000,
            status: 'Rejected',
            deceasedName: 'Mary Brown',
            deceasedAddress: '789 Oak St, City, Country',
            dateOfDeath: '2024-01-22',
            notifierName: 'David Brown',
            notifierAddress: '789 Oak St, City, Country',
            notifierRelationship: 'Son',
        },
        {
            id: 4,
            user: 'Alice Johnson',
            crematorium: 'Peaceful Rest Crematorium',
            funeralDate: '2024-02-10',
            timeSlot: '01:00 PM - 03:00 PM',
            payment: 'Paid',
            paymentAmount: 17000,
            status: 'Completed',
            deceasedName: 'Robert Johnson',
            deceasedAddress: '321 Pine St, City, Country',
            dateOfDeath: '2024-02-05',
            notifierName: 'Alice Johnson',
            notifierAddress: '321 Pine St, City, Country',
            notifierRelationship: 'Wife',
        },
        {
            id: 5,
            user: 'Bob Williams',
            crematorium: 'Eternal Light Crematorium',
            funeralDate: '2024-02-15',
            timeSlot: '11:00 AM - 01:00 PM',
            payment: 'Paid',
            paymentAmount: 19000,
            status: 'Rejected',
            deceasedName: 'Susan Williams',
            deceasedAddress: '654 Maple St, City, Country',
            dateOfDeath: '2024-02-10',
            notifierName: 'Bob Williams',
            notifierAddress: '654 Maple St, City, Country',
            notifierRelationship: 'Husband',
        },
    ]);

    const [filters, setFilters] = useState({
        crematorium: '',
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
              reservation.crematorium.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.funeralDate.includes(searchQuery)
            : true;

        const isPastDate = reservation.funeralDate < today; // Only include reservations before today

        return (
            matchesSearch &&
            isPastDate &&
            (!filters.crematorium || reservation.crematorium === filters.crematorium) &&
            (!filters.status || reservation.status === filters.status)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.funeralDate) - new Date(a.funeralDate);
        if (filters.date === 'oldest') return new Date(a.funeralDate) - new Date(b.funeralDate);
        return 0;
    });

    // Handle view reservation
    const handleViewReservation = (reservation) => {
        setSelectedReservation(reservation);
        onViewOpen();
    };

    return (
        <Sidebar>
        <div className="flex h-screen">
            

            <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
                {/* Breadcrumb */}
                <Breadcrumb spacing="8px" separator={<HiChevronRight />} mb={6}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Crematorium Reservation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">Past Reservations</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Search Bar and Filters */}
                <Flex gap={4} mb={6} alignItems="center">
                    <Input
                        placeholder="Search by user, crematorium, or funeral date..."
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
                        placeholder="Filter by Crematorium"
                        value={filters.crematorium}
                        onChange={(e) => setFilters({ ...filters, crematorium: e.target.value })}
                        width="200px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    >
                        <option value="Peaceful Rest Crematorium">Peaceful Rest Crematorium</option>
                        <option value="Eternal Light Crematorium">Eternal Light Crematorium</option>
                        <option value="Serenity Gardens Crematorium">Serenity Gardens Crematorium</option>
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
                        <option value="Rejected">Rejected</option>
                    </Select>
                </Flex>

                {/* Table */}
                <Box overflowX="auto" bg="white" shadow="sm" borderRadius="lg" border="1px" borderColor="gray.200">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Reservation ID</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">User</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Crematorium</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Funeral Date</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Time Slot</th>
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
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.crematorium}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.funeralDate}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.timeSlot}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.paymentAmount}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                reservation.status === 'Completed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            {reservation.status}
                                        </span>
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
                                    <strong>Reservation ID:</strong> {selectedReservation.id}
                                </Box>
                                <Box mb={4}>
                                    <strong>User:</strong> {selectedReservation.user}
                                </Box>
                                <Box mb={4}>
                                    <strong>Crematorium:</strong> {selectedReservation.crematorium}
                                </Box>
                                <Box mb={4}>
                                    <strong>Funeral Date:</strong> {selectedReservation.funeralDate}
                                </Box>
                                <Box mb={4}>
                                    <strong>Time Slot:</strong> {selectedReservation.timeSlot}
                                </Box>
                                <Box mb={4}>
                                    <strong>Payment:</strong> {selectedReservation.payment} (LKR {selectedReservation.paymentAmount})
                                </Box>
                                <Box mb={4}>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${
                                            selectedReservation.status === 'Completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {selectedReservation.status}
                                    </span>
                                </Box>
                                <Divider my={4} />
                                <Box mb={4}>
                                    <strong>Deceased Name:</strong> {selectedReservation.deceasedName}
                                </Box>
                                <Box mb={4}>
                                    <strong>Deceased Address:</strong> {selectedReservation.deceasedAddress}
                                </Box>
                                <Box mb={4}>
                                    <strong>Date of Death:</strong> {selectedReservation.dateOfDeath}
                                </Box>
                                <Box mb={4}>
                                    <strong>Notifier Name:</strong> {selectedReservation.notifierName}
                                </Box>
                                <Box mb={4}>
                                    <strong>Notifier Address:</strong> {selectedReservation.notifierAddress}
                                </Box>
                                <Box mb={4}>
                                    <strong>Notifier Relationship:</strong> {selectedReservation.notifierRelationship}
                                </Box>
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
        </Sidebar>
    );
};

export default CrematoriumPast;