import React, { useState, useRef } from 'react';
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
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Select,
    Input,
    Flex,
    Box,
} from '@chakra-ui/react';

const PlaygroundRequests = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onClose: onRejectClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        { id: 1, user: 'John Doe', event: 'Football Match', description: 'Quarter-finals', ground: 'Ground 1', date: '2025-01-25', payment: 'Paid', paymentAmount: 5000, status: 'Confirmed' },
        { id: 2, user: 'Jane Smith', event: 'Cricket Match', description: 'Semi-finals', ground: 'Ground 2', date: '2025-01-26', payment: 'Unpaid', paymentAmount: 3000, status: 'Pending' },
        { id: 3, user: 'David Brown', event: 'Tennis Match', description: 'Finals', ground: 'Ground 1', date: '2025-01-27', payment: 'Paid', paymentAmount: 7000, status: 'Rejected' },
    ]);

    const [filters, setFilters] = useState({
        ground: '',
        date: '',
        status: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const cancelRef = useRef();

    // Handle filters
    const filteredReservations = reservations.filter((reservation) => {
        const matchesSearch = searchQuery
            ? reservation.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.ground.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.date.includes(searchQuery)
            : true;

        return (
            matchesSearch &&
            (!filters.ground || reservation.ground === filters.ground) &&
            (!filters.status || reservation.status === filters.status)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.date) - new Date(a.date);
        if (filters.date === 'oldest') return new Date(a.date) - new Date(b.date);
        return 0;
    });

    // Handle row selection
    const handleRowSelect = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    // Handle confirm reservation
    const handleConfirmReservation = () => {
        setReservations((prev) =>
            prev.map((res) =>
                selectedRows.includes(res.id) ? { ...res, status: 'Confirmed' } : res
            )
        );
        setSelectedRows([]);
    };

    // Handle reject reservation
    const handleRejectReservation = () => {
        setReservations((prev) =>
            prev.map((res) =>
                selectedRows.includes(res.id) ? { ...res, status: 'Rejected' } : res
            )
        );
        setSelectedRows([]);
        onRejectClose();
    };

    // Handle cancel selection
    const handleCancelSelection = () => {
        setSelectedRows([]);
    };

    // Handle view reservation
    const handleViewReservation = (reservation, e) => {
        if (!e.target.classList.contains('checkbox')) {
            setSelectedReservation(reservation);
            onViewOpen();
        }
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
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Playground Reservation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">Requests</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Search Bar and Filters */}
                <Flex gap={4} mb={6} alignItems="center">
                    <Input
                        placeholder="Search by user, ground, or date..."
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
                        placeholder="Filter by Ground"
                        value={filters.ground}
                        onChange={(e) => setFilters({ ...filters, ground: e.target.value })}
                        width="200px"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: 'blue.300' }}
                        _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
                        fontSize="sm"
                    >
                        <option value="Ground 1">Ground 1</option>
                        <option value="Ground 2">Ground 2</option>
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
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </Select>
                </Flex>

                {/* Action Buttons */}
                {selectedRows.length > 0 && (
                    <Flex gap={4} mb={6}>
                        <Button
                            colorScheme="blue"
                            onClick={handleConfirmReservation}
                            size="sm"
                        >
                            Confirm Reservation
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={onRejectOpen}
                            size="sm"
                        >
                            Reject Reservation
                        </Button>
                        <Button
                            colorScheme="green"
                            onClick={handleCancelSelection}
                            size="sm"
                        >
                            Cancel Selection
                        </Button>
                    </Flex>
                )}

                {/* Table */}
                <Box overflowX="auto" bg="white" shadow="sm" borderRadius="lg" border="1px" borderColor="gray.200">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b border-gray-200"></th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">ID</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">User</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Event</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Description</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Ground</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Reservation Date</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Payment (LKR)</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservations.map((reservation) => (
                                <tr
                                    key={reservation.id}
                                    className={`hover:bg-gray-50 transition-colors ${
                                        selectedRows.includes(reservation.id) ? 'bg-blue-50' : ''
                                    }`}
                                    onClick={(e) => handleViewReservation(reservation, e)}
                                >
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={selectedRows.includes(reservation.id)}
                                            onChange={() => handleRowSelect(reservation.id)}
                                            disabled={reservation.status === 'Rejected'}
                                        />
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.event}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.description}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.ground}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.date}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.paymentAmount}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                reservation.status === 'Confirmed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : reservation.status === 'Pending'
                                                    ? 'bg-blue-100 text-blue-800'
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
                                    <strong>ID:</strong> {selectedReservation.id}
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
                                    <strong>Ground:</strong> {selectedReservation.ground}
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
                                            selectedReservation.status === 'Confirmed'
                                                ? 'bg-green-100 text-green-800'
                                                : selectedReservation.status === 'Pending'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {selectedReservation.status}
                                    </span>
                                </Box>
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Reject Reservation Alert */}
            <AlertDialog isOpen={isRejectOpen} onClose={onRejectClose} leastDestructiveRef={cancelRef}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Reject Reservation
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to reject the selected reservations?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onRejectClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={handleRejectReservation} ml={3}>
                            Reject
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default PlaygroundRequests;