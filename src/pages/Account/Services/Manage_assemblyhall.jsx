import React, { useState } from "react";
import Sidebar from "../../../components/Account/Sidebar";
import { HiChevronRight, HiPlus } from "react-icons/hi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  FormLabel,
  Stack,
  Textarea,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const Manage_AssemblyHall = () => {
  const [assemblyHalls, setAssemblyHalls] = useState([
    {
      id: 1,
      name: "Grand Hall",
      capacity: 500,
      rentalFee: 20000,
      area: "Colombo",
      description: "Spacious and well-maintained",
      terms: ["No smoking allowed", "No loud music after 10 PM"],
    },
    {
      id: 2,
      name: "Royal Auditorium",
      capacity: 1000,
      rentalFee: 50000,
      area: "Kandy",
      description: "Ideal for large events",
      terms: ["Security deposit required", "No external catering allowed"],
    },
  ]);

  const [currentHall, setCurrentHall] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  const handleAddOrEdit = (hall) => {
    if (currentHall) {
      setAssemblyHalls((prev) =>
        prev.map((h) => (h.id === currentHall.id ? hall : h))
      );
    } else {
      setAssemblyHalls((prev) => [...prev, { ...hall, id: Date.now() }]);
    }
    setCurrentHall(null);
    onClose();
  };

  const handleDelete = (id) => {
    setAssemblyHalls((prev) => prev.filter((h) => h.id !== id));
    onDeleteClose();
  };

  return (
    <Sidebar>
      <div className="flex h-screen">
        <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
          {/* Breadcrumb */}
          <Breadcrumb spacing="8px" separator={<HiChevronRight />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Assembly Hall Reservation
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Management</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Add Assembly Hall Button */}
          <Box className="flex justify-end mb-5">
            <Button
              leftIcon={<HiPlus />}
              colorScheme="blue"
              onClick={() => {
                setCurrentHall(null);
                onOpen();
              }}
            >
              Add Assembly Hall
            </Button>
          </Box>

          {/* Table Section */}
          <Box
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            p={5}
            border="1px solid #E2E8F0"
          >
            <Box mb={4} fontWeight="bold" fontSize="lg" color="gray.700">
              Assembly Halls
            </Box>
            <TableContainer>
              <Table variant="striped" colorScheme="teal" size="sm">
                <Thead>
                  <Tr>
                    <Th fontWeight="bold" color="teal.700">
                      Name
                    </Th>
                    <Th fontWeight="bold" color="teal.700">
                      Capacity
                    </Th>
                    <Th fontWeight="bold" color="teal.700">
                      Rental Fee
                    </Th>
                    <Th fontWeight="bold" color="teal.700">
                      Area
                    </Th>
                    <Th isNumeric fontWeight="bold" color="teal.700">
                      Options
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {assemblyHalls.map((hall) => (
                    <Tr key={hall.id} _hover={{ bg: "gray.50" }}>
                      <Td py={4}>{hall.name}</Td>
                      <Td py={4}>{hall.capacity} people</Td>
                      <Td py={4}>LKR {hall.rentalFee}</Td>
                      <Td py={4}>{hall.area}</Td>
                      <Td py={4} isNumeric>
                        <Button
                          size="sm"
                          colorScheme="teal"
                          variant="outline"
                          mr={2}
                          onClick={() => {
                            setSelectedHall(hall);
                            onViewOpen();
                          }}
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          variant="outline"
                          mr={2}
                          onClick={() => {
                            setCurrentHall(hall);
                            onOpen();
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          variant="outline"
                          onClick={onDeleteOpen}
                        >
                          Delete
                        </Button>

                        {/* Delete Confirmation Dialog */}
                        <AlertDialog
                          isOpen={isDeleteOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onDeleteClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent>
                              <AlertDialogHeader
                                fontSize="lg"
                                fontWeight="bold"
                              >
                                Delete Assembly Hall
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                Are you sure you want to delete this entry?
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onDeleteClose}>
                                  Cancel
                                </Button>
                                <Button
                                  colorScheme="red"
                                  onClick={() => handleDelete(hall.id)}
                                  ml={3}
                                >
                                  Delete
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialogOverlay>
                        </AlertDialog>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Capacity</Th>
                    <Th>Rental Fee</Th>
                    <Th>Area</Th>
                    <Th isNumeric>Options</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>

          {/* Drawer for Add/Edit Assembly Hall */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                {currentHall ? "Edit Assembly Hall" : "Add Assembly Hall"}
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      placeholder="Enter assembly hall name"
                      defaultValue={currentHall?.name || ""}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="capacity">Capacity</FormLabel>
                    <Input
                      id="capacity"
                      placeholder="Enter capacity"
                      type="number"
                      defaultValue={currentHall?.capacity || ""}
                      onInput={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (value < 0) e.target.value = "";
                      }}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="rentalFee">Rental Fee</FormLabel>
                    <Input
                      id="rentalFee"
                      placeholder="Enter rental fee"
                      type="number"
                      defaultValue={currentHall?.rentalFee || ""}
                      onInput={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (value < 0) e.target.value = "";
                      }}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="area">Area</FormLabel>
                    <Input
                      id="area"
                      placeholder="Enter area (e.g., Colombo, Kandy)"
                      defaultValue={currentHall?.area || ""}
                    />
                  </Box>

                  {/* Terms Section */}
                  <Box>
                    <FormLabel>Terms & Conditions</FormLabel>
                    <Stack spacing={2}>
                      {currentHall?.terms?.map((term, index) => (
                        <Input
                          key={index}
                          defaultValue={term}
                          id={`term-${index}`}
                        />
                      ))}
                      {/* Predefined Suggestions */}
                      <Box fontSize="sm" color="gray.500">
                        Suggestions:{" "}
                        <i>
                          "No smoking allowed", "No loud music after 10 PM",
                          "Security deposit required"
                        </i>
                      </Box>

                      <Button
                        leftIcon={<HiPlus />}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentHall((prev) => ({
                            ...prev,
                            terms: [...(prev?.terms || []), ""],
                          }))
                        }
                      >
                        Add Condition
                      </Button>
                    </Stack>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="description">
                      Description (If any)
                    </FormLabel>
                    <Textarea
                      id="description"
                      defaultValue={currentHall?.description || ""}
                    />
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    handleAddOrEdit({
                      id: currentHall?.id,
                      name: document.getElementById("name").value,
                      capacity: document.getElementById("capacity").value,
                      rentalFee: document.getElementById("rentalFee").value,
                      area: document.getElementById("area").value,
                      description: document.getElementById("description").value,
                      terms: currentHall?.terms || [],
                    })
                  }
                >
                  Submit
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* View Assembly Hall Modal */}
          <Modal isOpen={isViewOpen} onClose={onViewClose} size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Assembly Hall Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {selectedHall && (
                  <Stack spacing={4}>
                    <Box>
                      <strong>Name:</strong> {selectedHall.name}
                    </Box>
                    <Box>
                      <strong>Capacity:</strong> {selectedHall.capacity} people
                    </Box>
                    <Box>
                      <strong>Rental Fee:</strong> LKR {selectedHall.rentalFee}
                    </Box>
                    <Box>
                      <strong>Area:</strong> {selectedHall.area}
                    </Box>
                    <Box>
                      <strong>Description:</strong> {selectedHall.description}
                    </Box>
                    <Box>
                      <strong>Terms & Conditions:</strong>
                      <ul>
                        {selectedHall.terms.map((term, index) => (
                          <li key={index}>{term}</li>
                        ))}
                      </ul>
                    </Box>
                  </Stack>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </Sidebar>
  );
};

export default Manage_AssemblyHall;
