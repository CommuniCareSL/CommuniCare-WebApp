import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Account/Sidebar";
import { HiChevronRight, HiQuestionMarkCircle } from "react-icons/hi";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Input, Flex, Box, Select, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,
} from "@chakra-ui/react";
import { getStoredData } from "../../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";

const Playground_past = () => {
  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose,
  } = useDisclosure();
  
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [filters, setFilters] = useState({
    ground: "",
    date: "",
    status: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const { sabhaId } = getStoredData();

  // Fetch reservations data
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/ground-reservation/previous-and-canceled-reservations/${sabhaId}`
        );
        
        // Combine and format both types of reservations
        const formattedReservations = [
          ...response.data.previousReservations.map(res => ({
            id: res.groundReservationId,
            user: res.user.fullName,
            event: res.event,
            description: res.description,
            ground: res.ground.name,
            date: new Date(res.reservationDate).toISOString().split('T')[0],
            payment: "Paid",
            paymentAmount: res.payment,
            status: "Completed"  // status 0 maps to Completed
          })),
          ...response.data.canceledReservations.map(res => ({
            id: res.groundReservationId,
            user: res.user.fullName,
            event: res.event,
            description: res.description,
            ground: res.ground.name,
            date: new Date(res.reservationDate).toISOString().split('T')[0],
            payment: "Paid",
            paymentAmount: res.payment,
            status: "Cancelled", // status 1 maps to Cancelled
            note: res.note // Only include note for cancelled reservations
          }))
        ];

        setReservations(formattedReservations);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reservations:', err);
        setError("Failed to fetch reservations");
        setLoading(false);
      }
    };

    fetchReservations();
  }, [sabhaId]);

  // Get all unique grounds for the filter dropdown
  const uniqueGrounds = [...new Set(reservations.map(res => res.ground))];

  // Handle filters and search
  const filteredReservations = reservations
    .filter((reservation) => {
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
    })
    .sort((a, b) => {
      if (filters.date === "newest") return new Date(b.date) - new Date(a.date);
      if (filters.date === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  // Handle view reservation
  const handleViewReservation = (reservation) => {
    setSelectedReservation(reservation);
    onViewOpen();
  };

  if (loading) {
    return <div className="flex-1 p-8">Loading...</div>;
  }

  if (error) {
    return <div className="flex-1 p-8 text-red-600">{error}</div>;
  }

  return (
    <Sidebar>
      <div className="flex h-screen">
        <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          {/* Breadcrumb */}
          <Breadcrumb spacing="8px" separator={<HiChevronRight />} mb={6}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" fontSize="sm" color="gray.600">
                Services
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/ServicesPage" fontSize="sm" color="gray.600">
                Playground Reservation
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize="sm" color="gray.800" fontWeight="medium">
                Past & Canceled Reservations
              </BreadcrumbLink>
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
              _hover={{ borderColor: "blue.300" }}
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
              fontSize="sm"
            />
            <Select
              placeholder="Filter by Ground"
              value={filters.ground}
              onChange={(e) => setFilters({ ...filters, ground: e.target.value })}
              width="200px"
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
              fontSize="sm"
            >
              {uniqueGrounds.map(ground => (
                <option key={ground} value={ground}>{ground}</option>
              ))}
            </Select>
            <Select
              placeholder="Sort by Date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              width="200px"
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "blue.300" }}
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
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
              _hover={{ borderColor: "blue.300" }}
              _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
              fontSize="sm"
            >
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </Select>
          </Flex>

          {/* Table */}
          <Box
            overflowX="auto"
            bg="white"
            shadow="sm"
            borderRadius="lg"
            border="1px"
            borderColor="gray.200"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    ID
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Ground
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    User
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Event
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Description
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Reservation Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Payment (LKR)
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleViewReservation(reservation)}
                  >
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.id}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.ground}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.user}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.event}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.description}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.date}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {reservation.paymentAmount}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      <Flex align="center">
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            reservation.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {reservation.status}
                        </span>
                        {reservation.status === "Cancelled" && reservation.note && (
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
                    <strong>Ground:</strong> {selectedReservation.ground}
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
                  <Box mb={4}>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        selectedReservation.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedReservation.status}
                    </span>
                  </Box>
                  {selectedReservation.status === "Cancelled" && selectedReservation.note && (
                    <Box>
                      <strong>Cancellation Reason:</strong> {selectedReservation.note}
                    </Box>
                  )}
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </Sidebar>
  );
};

export default Playground_past;