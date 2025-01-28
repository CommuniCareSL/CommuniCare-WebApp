import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight, HiQuestionMarkCircle } from 'react-icons/hi';
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Select, Input, Flex, Box, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Textarea, useToast,
} from '@chakra-ui/react';
import { getStoredData } from "../../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";

const PlaygroundRequests = () => {
    const { isOpen: isViewOpen, onOpen: onViewOpen, onClose: onViewClose } = useDisclosure();
    const { isOpen: isRejectOpen, onOpen: onRejectOpen, onClose: onRejectClose } = useDisclosure();
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [reservations, setReservations] = useState([]);
    const { sabhaId } = getStoredData();
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState({
        ground: '',
        date: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [rejectionReason, setRejectionReason] = useState('');
    const cancelRef = useRef();
    const toast = useToast();

    // Fetch reservations
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}/ground-reservation/active-reservations/${sabhaId}`);
                setReservations(response.data);
            } catch (error) {
                toast({
                    title: 'Error fetching reservations',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, [sabhaId]);

    // Check if a reservation date is within two days
    const isWithinTwoDays = (date) => {
        const reservationDate = new Date(date);
        const currentDate = new Date();
        const timeDifference = reservationDate - currentDate;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference <= 2;
    };

    // Handle reject reservation
    const handleRejectReservation = async () => {
        try {
            const reservationId = selectedRows[0]; // Assuming single selection for now
            const response = await axios.put(`${BASE_URL}/ground-reservation/reject/${reservationId}`, {
                note: rejectionReason
            });

            if (response.status === 200) {
                // Update local state
                setReservations(prev => prev.map(res => 
                    res.groundReservationId === reservationId 
                        ? { ...res, status: 1, note: rejectionReason }
                        : res
                ));

                toast({
                    title: 'Reservation Rejected',
                    description: 'The reservation has been successfully rejected.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });

                setSelectedRows([]);
                setRejectionReason('');
                onRejectClose();
            }
        } catch (error) {
            toast({
                title: 'Error rejecting reservation',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    // Handle filters
    const filteredReservations = reservations.filter((reservation) => {
        const matchesSearch = searchQuery
            ? reservation.user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.ground.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              reservation.reservationDate.includes(searchQuery)
            : true;

        return (
            matchesSearch &&
            (!filters.ground || reservation.ground.name === filters.ground)
        );
    }).sort((a, b) => {
        if (filters.date === 'newest') return new Date(b.reservationDate) - new Date(a.reservationDate);
        if (filters.date === 'oldest') return new Date(a.reservationDate) - new Date(b.reservationDate);
        return 0;
    });

    // Handle row selection
    const handleRowSelect = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
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

    if (loading) {
        return <div>Loading...</div>;
    }

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
                            <BreadcrumbLink href="#" fontSize="sm" color="gray.600">Playground Reservation</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">Requests</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    {/* Search and Filters */}
                    <Flex gap={4} mb={6} alignItems="center">
                        <Input
                            placeholder="Search by user, ground, or date..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            width="300px"
                        />
                        <Select
                            placeholder="Filter by Ground"
                            value={filters.ground}
                            onChange={(e) => setFilters({ ...filters, ground: e.target.value })}
                            width="200px"
                        >
                            {[...new Set(reservations.map(r => r.ground.name))].map(ground => (
                                <option key={ground} value={ground}>{ground}</option>
                            ))}
                        </Select>
                        <Select
                            placeholder="Sort by Date"
                            value={filters.date}
                            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                            width="200px"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
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
                                </tr>
                            </thead>
                            <tbody>
                                {filteredReservations.map((reservation) => (
                                    <tr
                                        key={reservation.groundReservationId}
                                        className={`hover:bg-gray-50 transition-colors ${
                                            selectedRows.includes(reservation.groundReservationId) ? 'bg-blue-50' : ''
                                        }`}
                                        onClick={(e) => handleViewReservation(reservation, e)}
                                    >
                                        <td className="px-6 py-4 border-b border-gray-200">
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={selectedRows.includes(reservation.groundReservationId)}
                                                onChange={() => handleRowSelect(reservation.groundReservationId)}
                                                disabled={reservation.status === 1}
                                            />
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.groundReservationId}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.user.fullName}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.event}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.ground.name}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            {new Date(reservation.reservationDate).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{reservation.payment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </div>

                {/* View Modal */}
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
                                        <strong>ID:</strong> {selectedReservation.groundReservationId}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>User:</strong> {selectedReservation.user.fullName}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>Event:</strong> {selectedReservation.event}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>Description:</strong> {selectedReservation.description}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>Ground:</strong> {selectedReservation.ground.name}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>Date:</strong> {new Date(selectedReservation.reservationDate).toLocaleDateString()}
                                    </Box>
                                    <Box mb={4}>
                                        <strong>Payment:</strong> LKR {selectedReservation.payment}
                                    </Box>
                                    {selectedReservation.note && (
                                        <Box mb={4}>
                                            <strong>Note:</strong> {selectedReservation.note}
                                        </Box>
                                    )}
                                </Box>
                            )}
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* Reject Dialog */}
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
                                isDisabled={!rejectionReason.trim()}
                            >
                                Reject
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </Sidebar>
    );
};

export default PlaygroundRequests;