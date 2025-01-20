import React, { useState } from 'react';
import Sidebar from '../../../components/Civil Officer/Sidebar';
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
} from '@chakra-ui/react';

const Manage_Playground = () => {
  const [playgrounds, setPlaygrounds] = useState([
    { id: 1, name: 'Greenfield', address: 'Main Street, City Center', contact: '1234567890' },
    { id: 2, name: 'Sunny Park', address: 'Oak Avenue, Suburbia', contact: '9876543210' },
    { id: 3, name: 'Sports Arena', address: 'Broadway, Downtown', contact: '5551234567' },
  ]);

  const [currentPlayground, setCurrentPlayground] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  const handleAddOrEdit = (playground) => {
    if (currentPlayground) {
      setPlaygrounds((prev) =>
        prev.map((pg) => (pg.id === currentPlayground.id ? playground : pg))
      );
    } else {
      setPlaygrounds((prev) => [...prev, { ...playground, id: Date.now() }]);
    }
    setCurrentPlayground(null);
    onClose();
  };

  const handleDelete = (id) => {
    setPlaygrounds((prev) => prev.filter((pg) => pg.id !== id));
    onDeleteClose();
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
        {/* Breadcrumb */}
        <Breadcrumb spacing="8px" separator={<HiChevronRight />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Playground Reservation</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Management</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Add Playground Button */}
        <Box className="flex justify-end mb-5">
          <Button
            leftIcon={<HiPlus />}
            colorScheme="blue"
            onClick={() => {
              setCurrentPlayground(null);
              onOpen();
            }}
          >
            Add Playground
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
           
          </Box>
          <TableContainer>
            <Table variant="striped" colorScheme="blue" size="sm">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" color="blue.700">
                    Name
                  </Th>
                  <Th fontWeight="bold" color="blue.700">
                    Region / Address
                  </Th>
                  <Th fontWeight="bold" color="blue.700">
                    Contact Number
                  </Th>
                  <Th isNumeric fontWeight="bold" color="blue.700">
                    Options
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {playgrounds.map((pg) => (
                  <Tr key={pg.id} _hover={{ bg: 'gray.50' }}>
                    <Td py={4}>{pg.name}</Td>
                    <Td py={4}>{pg.address}</Td>
                    <Td py={4}>{pg.contact}</Td>
                    <Td py={4} isNumeric>
                      <Button
                        size="sm"
                        colorScheme="teal"
                        variant="outline"
                        mr={2}
                        onClick={() => {
                          setCurrentPlayground(pg);
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
                              Delete Playground
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
                                onClick={() => handleDelete(pg.id)}
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
                  <Th>Region / Address</Th>
                  <Th>Contact Number</Th>
                  <Th isNumeric>Options</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>

        {/* Drawer for Add/Edit Playground */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {currentPlayground ? 'Edit Playground' : 'Add Playground'}
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="Enter playground name"
                    defaultValue={currentPlayground?.name || ''}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="address">Region / Address</FormLabel>
                  <Textarea
                    id="address"
                    placeholder="Enter address"
                    defaultValue={currentPlayground?.address || ''}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="contact">Contact Number</FormLabel>
                  <Input
                    id="contact"
                    placeholder="Enter contact number"
                    maxLength={10}
                    defaultValue={currentPlayground?.contact || ''}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
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
                    id: currentPlayground?.id,
                    name: document.getElementById('name').value,
                    address: document.getElementById('address').value,
                    contact: document.getElementById('contact').value,
                  })
                }
              >
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Manage_Playground;
