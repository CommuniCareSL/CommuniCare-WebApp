import React, { useState, useRef } from 'react';
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
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Textarea,
    useToast,
} from '@chakra-ui/react';

const PlaygroundRequests = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onClose: onRejectClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        { id: 1, user: 'John Doe', event: 'Football Match', description: 'Quarter-finals', ground: 'Ground 1', date: '2025-01-25', payment: 'Paid', paymentAmount: 5000, status: 'Booked' },
        { id: 2, user: 'Jane Smith', event: 'Cricket Match', description: 'Semi-finals', ground: 'Ground 2', date: '2025-01-26', payment: 'Unpaid', paymentAmount: 3000, status: 'Booked' },
        { id: 3, user: 'David Brown', event: 'Tennis Match', description: 'Finals', ground: 'Ground 1', date: '2025-01-27', payment: 'Paid', paymentAmount: 7000, status: 'Cancelled', note: 'Too crampy. Not big enough' },
    ]);

    const [filters, setFilters] = useState({
        ground: '',
        date: '',
        status: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [rejectionReason, setRejectionReason] = useState('');
    const cancelRef = useRef();
    const toast = useToast();

    // Check if a reservation date is within two days
    const isWithinTwoDays = (date) => {
        const reservationDate = new Date(date);
        const currentDate = new Date();
        const timeDifference = reservationDate - currentDate;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference <= 2;
    };

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

    // Handle reject reservation
    const handleRejectReservation = () => {
        const reservationsToReject = reservations.filter((res) => selectedRows.includes(res.id));

        const hasInvalidReservations = reservationsToReject.some((res) => isWithinTwoDays(res.date));

        if (hasInvalidReservations) {
            toast({
                title: 'Cannot Reject Reservation',
                description: 'You cannot reject reservations that are within two days of the reservation date.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setReservations((prev) =>
            prev.map((res) =>
                selectedRows.includes(res.id) ? { ...res, status: 'Cancelled', note: rejectionReason } : res
            )
        );
        setSelectedRows([]);
        setRejectionReason('');
        onRejectClose();

        toast({
            title: 'Reservation Rejected',
            description: 'The selected reservations have been rejected.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
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
                        <option value="Ground 3">Ground 3</option>
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
                        <option value="Booked">Booked</option>
                        <option value="Cancelled">Cancelled</option>
                    </Select>
                </Flex>

                {/* Action Buttons */}
                {selectedRows.length > 0 && (
                    <Flex gap={4} mb={6}>
                        <Button
                            colorScheme="red"
                            onClick={onRejectOpen}
                            size="sm"
                        >
                            Reject Reservation
                        </Button>
                        <Button
                            colorScheme="gray"
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
                                            disabled={reservation.status === 'Cancelled'}
                                        />
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.event}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.ground}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.date}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.paymentAmount}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <Flex align="center">
                                            <span
                                                className={`px-2 py-1 rounded text-sm ${
                                                    reservation.status === 'Booked'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {reservation.status}
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
                                            selectedReservation.status === 'Booked'
                                                ? 'bg-green-100 text-green-800'
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
                        <Box mb={4}>
                            Are you sure you want to reject the selected reservations?
                        </Box>
                        {selectedRows.some((id) => {
                            const reservation = reservations.find((res) => res.id === id);
                            return isWithinTwoDays(reservation.date);
                        }) && (
                            <Box mb={4} color="red.500">
                                Warning: You cannot reject reservations that are within two days of the reservation date.
                            </Box>
                        )}
                        <Textarea
                            placeholder="Enter the reason for rejection..."
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            size="sm"
                            resize="vertical"
                        />
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onRejectClose}>
                            Cancel
                        </Button>
                        <Button 
                            colorScheme="red" 
                            onClick={handleRejectReservation} 
                            ml={3} 
                            isDisabled={
                                !rejectionReason.trim() || 
                                selectedRows.some((id) => {
                                    const reservation = reservations.find((res) => res.id === id);
                                    return isWithinTwoDays(reservation.date);
                                })
                            }
                        >
                            Reject
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default PlaygroundRequests;