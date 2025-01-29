import React, { useState, useRef } from 'react';
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
    Divider,
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
} from '@chakra-ui/react';
import MapComponent from '../../Civil Officer/MapComponent';

const GullyBowser_service = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const { isOpen: isCancelOpen, onOpen: onCancelOpen, onClose: onCancelClose } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onClose: onRejectClose } = useDisclosure();
    const { isOpen: isMapOpen, onOpen: onMapOpen, onClose: onMapClose } = useDisclosure();
    const [selectedLocation, setSelectedLocation] = useState({ latitude: 0, longitude: 0 });
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        {
            id: 1,
            user: 'John Doe',
            contactNumber: '0771234567',
            frequency: 1, // Daily
            reservationDate: '2025-01-25',
            payment: 'Paid',
            paymentAmount: 15000,
            status: 'Booked',
            cancellationReason: '',
            location: '6.9271, 79.8612', // Example location (latitude, longitude)
        },
        {
            id: 2,
            user: 'Jane Smith',
            contactNumber: '0777654321',
            frequency: 7, // Weekly
            reservationDate: '2025-01-31',
            payment: 'Unpaid',
            paymentAmount: 20000,
            status: 'Booked',
            cancellationReason: '',
            location: '6.9271, 79.8612', // Example location (latitude, longitude)
        },
        {
            id: 3,
            user: 'David Brown',
            contactNumber: '0771122334',
            frequency: 30, // Monthly
            reservationDate: '2025-01-27',
            payment: 'Paid',
            paymentAmount: 18000,
            status: 'Cancelled',
            cancellationReason: 'Change of plans',
            location: '6.9271, 79.8612', // Example location (latitude, longitude)
        },
        {
            id: 4,
            user: 'Alice Johnson',
            contactNumber: '0779988776',
            frequency: 1, // Daily
            reservationDate: '2023-10-30', // This date is within 2 days, so it can't be cancelled
            payment: 'Paid',
            paymentAmount: 15000,
            status: 'Booked',
            cancellationReason: '',
            location: '6.9271, 79.8612', // Example location (latitude, longitude)
        },
    ]);
    const [filters, setFilters] = useState({
        date: '',
        status: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [cancellationReason, setCancellationReason] = useState('');
    const cancelRef = useRef();

    // Handle filters
    const filteredReservations = reservations.filter((reservation) => {
        const matchesSearch = searchQuery
            ? reservation.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.contactNumber.includes(searchQuery)
            : true;

        return (
            matchesSearch &&
            (!filters.status || reservation.status === filters.status)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.reservationDate) - new Date(a.reservationDate);
        if (filters.date === 'oldest') return new Date(a.reservationDate) - new Date(b.reservationDate);
        return 0;
    });


    // Handle cancel reservation
    const handleCancelReservation = () => {
        setReservations((prev) =>
            prev.map((res) =>
                res.id === selectedReservation.id ? { ...res, status: 'Cancelled', cancellationReason } : res
            )
        );
        setCancellationReason('');
        onCancelClose();
    };

    // Handle reject reservation
    const handleRejectReservation = () => {
        setReservations((prev) =>
            prev.map((res) =>
                res.id === selectedReservation.id ? { ...res, status: 'Cancelled', cancellationReason } : res
            )
        );
        setCancellationReason('');
        onRejectClose();
    };

    // Handle view reservation
    // const handleViewReservation = (reservation) => {
    //     setSelectedReservation(reservation);
    //     onViewOpen();
    // };

    // Check if reservation can be cancelled
    const canCancelReservation = (reservationDate) => {
        const reservationDateTime = new Date(reservationDate);
        const currentDateTime = new Date();
        const differenceInTime = reservationDateTime.getTime() - currentDateTime.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays > 2;
    };

    const handleViewReservation = (reservation) => {
        setSelectedReservation(reservation);
        // Assuming the location is stored in the reservation object as "location"
        const [latitude, longitude] = reservation.location.split(',').map(Number);
        setSelectedLocation({ latitude, longitude });
        onViewOpen();
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
                {/* Breadcrumb */}
                <Breadcrumb spacing="8px" separator={<HiChevronRight />} mb={6}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Gully Bowser Reservation</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Search Bar and Filters */}
                <Flex gap={4} mb={6} alignItems="center">
                    <Input
                        placeholder="Search by user or contact number..."
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

                {/* Table */}
                <Box overflowX="auto" bg="white" shadow="sm" borderRadius="lg" border="1px" borderColor="gray.200">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Reservation ID</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">User</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Contact Number</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Frequency (Days)</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Reservation Date</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Payment (LKR)</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Status</th>
                                <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservations.map((reservation) => (
                                <tr
                                    key={reservation.id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.contactNumber}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.frequency}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.reservationDate}</td>
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
                                                        />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <PopoverArrow />
                                                        <PopoverCloseButton />
                                                        <PopoverHeader>Cancellation Reason</PopoverHeader>
                                                        <PopoverBody>{reservation.cancellationReason}</PopoverBody>
                                                    </PopoverContent>
                                                </Popover>
                                            )}
                                        </Flex>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <Flex gap={2}>
                                            <Button
                                                size="sm"
                                                colorScheme="blue"
                                                onClick={() => handleViewReservation(reservation)}
                                            >
                                                Location
                                            </Button>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                onClick={() => {
                                                    if (!canCancelReservation(reservation.reservationDate)) {
                                                        onAlertOpen();
                                                        return;
                                                    }
                                                    setSelectedReservation(reservation);
                                                    onCancelOpen();
                                                }}
                                                isDisabled={reservation.status === 'Cancelled'}
                                            >
                                                Cancel
                                            </Button>
                                        </Flex>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </div>

            {/* View Reservation Modal */}
            {/* <Modal isOpen={isViewOpen} onClose={onViewClose} size="lg">
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
                                    <strong>Contact Number:</strong> {selectedReservation.contactNumber}
                                </Box>
                                <Box mb={4}>
                                    <strong>Frequency (Days):</strong> {selectedReservation.frequency}
                                </Box>
                                <Box mb={4}>
                                    <strong>Reservation Date:</strong> {selectedReservation.reservationDate}
                                </Box>
                                <Box mb={4}>
                                    <strong>Payment:</strong> {selectedReservation.payment} (LKR {selectedReservation.paymentAmount})
                                </Box>
                                <Box mb={4}>
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
                                {selectedReservation.status === 'Cancelled' && (
                                    <Box mb={4}>
                                        <strong>Cancellation Reason:</strong> {selectedReservation.cancellationReason}
                                    </Box>
                                )}
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal> */}

<Modal isOpen={isViewOpen} onClose={onViewClose} size="lg">
    <ModalOverlay />
    <ModalContent>
        <ModalHeader fontSize="xl" fontWeight="bold" borderBottom="1px" borderColor="gray.200" pb={4}>
            Reservation Location
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6}>
            {selectedReservation && (
                <Box>               
                    <Box mb={4}>
                        <strong>Location:</strong>
                        <Box height="300px" mt={4}>
                            <MapComponent latitude={selectedLocation.latitude} longitude={selectedLocation.longitude} />
                        </Box>
                    </Box>
                </Box>
            )}
        </ModalBody>
    </ModalContent>
</Modal>

            {/* Cancel Reservation Alert */}
            <AlertDialog isOpen={isCancelOpen} onClose={onCancelClose} leastDestructiveRef={cancelRef}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Cancel Reservation
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <Textarea
                            placeholder="Enter cancellation reason..."
                            value={cancellationReason}
                            onChange={(e) => setCancellationReason(e.target.value)}
                            mb={4}
                        />
                        Are you sure you want to cancel this reservation?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onCancelClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={handleCancelReservation} ml={3}>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Reject Reservation Alert */}
            <AlertDialog isOpen={isRejectOpen} onClose={onRejectClose} leastDestructiveRef={cancelRef}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Reject Reservation
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <Textarea
                            placeholder="Enter rejection reason..."
                            value={cancellationReason}
                            onChange={(e) => setCancellationReason(e.target.value)}
                            mb={4}
                        />
                        Are you sure you want to reject this reservation?
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

            {/* Alert for Reservation Cannot Be Cancelled */}
            <AlertDialog isOpen={isAlertOpen} onClose={onAlertClose} leastDestructiveRef={cancelRef}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Cannot Cancel Reservation
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Reservation can only be cancelled two days before the reservation date.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onAlertClose}>
                            Close
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default GullyBowser_service;