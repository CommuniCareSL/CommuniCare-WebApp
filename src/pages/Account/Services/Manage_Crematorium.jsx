import React, { useState } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight, HiPlus } from 'react-icons/hi';
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
} from '@chakra-ui/react';

const Manage_Crematorium = () => {
  const [crematoriums, setCrematoriums] = useState([
    {
      id: 1,
      name: 'Peaceful Rest Crematorium',
      area: '123 Main St, Springfield',
      rentalFee: 15000,
      description: 'Serene and well-maintained',
      terms: ['No flowers allowed', 'No photography'],
    },
    {
      id: 2,
      name: 'Eternal Light Crematorium',
      area: '456 Elm St, Shelbyville',
      rentalFee: 25000,
      description: 'Ideal for large gatherings',
      terms: ['Advance booking required', 'No outside food allowed'],
    },
  ]);

  const [currentCrematorium, setCurrentCrematorium] = useState(null);
  const [selectedCrematorium, setSelectedCrematorium] = useState(null);
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

  const handleAddOrEdit = (crematorium) => {
    if (currentCrematorium) {
      setCrematoriums((prev) =>
        prev.map((c) => (c.id === currentCrematorium.id ? crematorium : c))
      );
    } else {
      setCrematoriums((prev) => [...prev, { ...crematorium, id: Date.now() }]);
    }
    setCurrentCrematorium(null);
    onClose();
  };

  const handleDelete = (id) => {
    setCrematoriums((prev) => prev.filter((c) => c.id !== id));
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
            <BreadcrumbLink href="#">Crematorium Reservation</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Management</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Add Crematorium Button */}
        <Box className="flex justify-end mb-5">
          <Button
            leftIcon={<HiPlus />}
            colorScheme="blue"
            onClick={() => {
              setCurrentCrematorium(null);
              onOpen();
            }}
          >
            Add Crematorium
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
            Crematoriums
          </Box>
          <TableContainer>
            <Table variant="striped" colorScheme="teal" size="sm">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" color="teal.700">
                    Name
                  </Th>
                  <Th fontWeight="bold" color="teal.700">
                    Area
                  </Th>
                  <Th fontWeight="bold" color="teal.700">
                    Rental Fee
                  </Th>
                  <Th isNumeric fontWeight="bold" color="teal.700">
                    Options
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {crematoriums.map((crematorium) => (
                  <Tr key={crematorium.id} _hover={{ bg: 'gray.50' }}>
                    <Td py={4}>{crematorium.name}</Td>
                    <Td py={4}>{crematorium.area}</Td>
                    <Td py={4}>LKR {crematorium.rentalFee}</Td>
                    <Td py={4} isNumeric>
                      <Button
                        size="sm"
                        colorScheme="teal"
                        variant="outline"
                        mr={2}
                        onClick={() => {
                          setSelectedCrematorium(crematorium);
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
                          setCurrentCrematorium(crematorium);
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
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Delete Crematorium
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
                                onClick={() => handleDelete(crematorium.id)}
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
                  <Th>Area</Th>
                  <Th>Rental Fee</Th>
                  <Th isNumeric>Options</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>

        {/* Drawer for Add/Edit Crematorium */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {currentCrematorium ? 'Edit Crematorium' : 'Add Crematorium'}
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="Enter crematorium name"
                    defaultValue={currentCrematorium?.name || ''}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="area">Area</FormLabel>
                  <Input
                    id="area"
                    placeholder="Enter area (address)"
                    defaultValue={currentCrematorium?.area || ''}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="rentalFee">Rental Fee</FormLabel>
                  <Input
                    id="rentalFee"
                    placeholder="Enter rental fee"
                    type="number"
                    defaultValue={currentCrematorium?.rentalFee || ''}
                    onInput={(e) => {
                      const value = parseInt(e.target.value, 10);
                      if (value < 0) e.target.value = '';
                    }}
                  />
                </Box>

                {/* Terms Section */}
                <Box>
                  <FormLabel>Terms & Conditions</FormLabel>
                  <Stack spacing={2}>
                    {currentCrematorium?.terms?.map((term, index) => (
                      <Input
                        key={index}
                        defaultValue={term}
                        id={`term-${index}`}
                      />
                    ))}
                    {/* Predefined Suggestions */}
                    <Box fontSize="sm" color="gray.500">
                      Suggestions:{' '}
                      <i>
                        "No flowers allowed", "No photography", "Advance booking required"
                      </i>
                    </Box>

                    <Button
                      leftIcon={<HiPlus />}
                      colorScheme="teal"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCurrentCrematorium((prev) => ({
                          ...prev,
                          terms: [...(prev?.terms || []), ''],
                        }))
                      }
                    >
                      Add Condition
                    </Button>
                  </Stack>
                </Box>

                <Box>
                  <FormLabel htmlFor="description">Description (If any)</FormLabel>
                  <Textarea
                    id="description"
                    defaultValue={currentCrematorium?.description || ''}
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
                    id: currentCrematorium?.id,
                    name: document.getElementById('name').value,
                    area: document.getElementById('area').value,
                    rentalFee: document.getElementById('rentalFee').value,
                    description: document.getElementById('description').value,
                    terms: currentCrematorium?.terms || [],
                  })
                }
              >
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* View Crematorium Modal */}
        <Modal isOpen={isViewOpen} onClose={onViewClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crematorium Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedCrematorium && (
                <Stack spacing={4}>
                  <Box>
                    <strong>Name:</strong> {selectedCrematorium.name}
                  </Box>
                  <Box>
                    <strong>Area:</strong> {selectedCrematorium.area}
                  </Box>
                  <Box>
                    <strong>Rental Fee:</strong> LKR {selectedCrematorium.rentalFee}
                  </Box>
                  <Box>
                    <strong>Description:</strong> {selectedCrematorium.description}
                  </Box>
                  <Box>
                    <strong>Terms & Conditions:</strong>
                    <ul>
                      {selectedCrematorium.terms.map((term, index) => (
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

export default Manage_Crematorium;