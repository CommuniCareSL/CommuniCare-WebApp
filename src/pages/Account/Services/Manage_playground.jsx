import React, { useState } from 'react';
// import Sidebar from '../../../components/Civil Officer/Sidebar';
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
} from '@chakra-ui/react';

const Manage_Playground = () => {
  const [playgrounds, setPlaygrounds] = useState([
    {
      id: 1,
      name: 'Greenfield',
      area: 100.5,
      price: 5000,
      description: 'Good condition',
      terms: ['Return the field in clean condition'],
    },
    {
      id: 2,
      name: 'Sunny Park',
      area: 200,
      price: 10000,
      description: 'Suitable for events',
      terms: ['Report damages immediately'],
    },
  ]);

  const [currentPlayground, setCurrentPlayground] = useState(null);
  const [selectedPlayground, setSelectedPlayground] = useState(null);
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
            <BreadcrumbLink href="#">Services</BreadcrumbLink>
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
                    Area / Region 
                  </Th>
                  <Th fontWeight="bold" color="blue.700">
                    Price Per Day
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
                    <Td py={4}>{pg.area}</Td>
                    <Td py={4}>{pg.price}</Td>
                    <Td py={4} isNumeric>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      mr={2}
                      onClick={() => setSelectedPlayground(pg)}
                    >
                      View
                    </Button>
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
                  <Th>Area / Region</Th>
                  <Th>Price Per Day</Th>
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

            {/* <DrawerBody>
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
            </DrawerBody> */}

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
      <FormLabel htmlFor="area">Area (In Sq. m)</FormLabel>
      <Textarea
        id="area"
        placeholder="Enter area"
        defaultValue={currentPlayground?.area || ''}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9.]/g, ''); // Allow decimals
        }}
      />
    </Box>

    <Box>
      <FormLabel htmlFor="price">Price Per Day</FormLabel>
      <Input
        id="price"
        placeholder="Enter price per day"
        type="number"
        defaultValue={currentPlayground?.price || ''}
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
        {currentPlayground?.terms?.map((term, index) => (
          <Input
            key={index}
            defaultValue={term}
            // placeholder={`Term ${index + 1}`}
            id={`term-${index}`}
          />
        ))}
        {/* Predefined Suggestions */}
        <Box fontSize="sm" color="gray.500">
          Suggestions: <i>"Return the field in clean condition", "Any damages must be reported immediately."</i>
        </Box>
        
        <Button
          leftIcon={<HiPlus />}
          colorScheme="teal"
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPlayground((prev) => ({
              ...prev,
              terms: [...(prev?.terms || []), ''],
            }))
          }
        >
          Condition
        </Button>
      </Stack>
    </Box>


    <Box>
      <FormLabel htmlFor="address">Description (If any)</FormLabel>
      <Textarea
        id="address"
        // placeholder="Enter address"
        defaultValue={currentPlayground?.description || ''}
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
