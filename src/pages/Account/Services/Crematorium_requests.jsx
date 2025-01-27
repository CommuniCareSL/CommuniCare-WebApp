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
} from '@chakra-ui/react';

const CrematoriumRequests = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onClose: onRejectClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([
        {
            id: 1,
            user: 'John Doe',
            crematorium: 'Peaceful Rest Crematorium',
            funeralDate: '2025-01-25',
            timeSlot: '10:00 AM - 12:00 PM',
            payment: 'Paid',
            paymentAmount: 15000,
            status: 'Confirmed',
            deceasedName: 'Jane Doe',
            deceasedAddress: '123 Main St, City, Country',
            dateOfDeath: '2025-01-20',
            notifierName: 'John Doe',
            notifierAddress: '123 Main St, City, Country',
            notifierRelationship: 'Spouse',
        },
        {
            id: 2,
            user: 'Jane Smith',
            crematorium: 'Eternal Light Crematorium',
            funeralDate: '2025-01-26',
            timeSlot: '02:00 PM - 04:00 PM',
            payment: 'Unpaid',
            paymentAmount: 20000,
            status: 'Pending',
            deceasedName: 'John Smith',
            deceasedAddress: '456 Elm St, City, Country',
            dateOfDeath: '2025-01-21',
            notifierName: 'Jane Smith',
            notifierAddress: '456 Elm St, City, Country',
            notifierRelationship: 'Daughter',
        },
        {
            id: 3,
            user: 'David Brown',
            crematorium: 'Serenity Gardens Crematorium',
            funeralDate: '2025-01-27',
            timeSlot: '09:00 AM - 11:00 AM',
            payment: 'Paid',
            paymentAmount: 18000,
            status: 'Rejected',
            deceasedName: 'Mary Brown',
            deceasedAddress: '789 Oak St, City, Country',
            dateOfDeath: '2025-01-22',
            notifierName: 'David Brown',
            notifierAddress: '789 Oak St, City, Country',
            notifierRelationship: 'Son',
        },
    ]);

    const [filters, setFilters] = useState({
        crematorium: '',
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
              reservation.crematorium.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.funeralDate.includes(searchQuery)
            : true;

        return (
            matchesSearch &&
            (!filters.crematorium || reservation.crematorium === filters.crematorium) &&
            (!filters.status || reservation.status === filters.status)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.funeralDate) - new Date(a.funeralDate);
        if (filters.date === 'oldest') return new Date(a.funeralDate) - new Date(b.funeralDate);
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
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Crematorium Reservation</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">Requests</BreadcrumbLink>
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
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Cancelled">Cancelled</option>
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
                                            disabled={reservation.status === 'Cancelled' || reservation.status === 'Rejected'}
                                        />
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.crematorium}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.funeralDate}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.timeSlot}</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.paymentAmount}</td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <Flex align="center">
                                            <span
                                                className={`px-2 py-1 rounded text-sm ${
                                                    reservation.status === 'Confirmed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : reservation.status === 'Pending'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : reservation.status === 'Rejected'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-gray-100 text-gray-800'
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
                                            selectedReservation.status === 'Confirmed'
                                                ? 'bg-green-100 text-green-800'
                                                : selectedReservation.status === 'Pending'
                                                ? 'bg-blue-100 text-blue-800'
                                                : selectedReservation.status === 'Rejected'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-gray-100 text-gray-800'
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

export default CrematoriumRequests