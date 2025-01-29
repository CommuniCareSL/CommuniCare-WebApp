import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight, HiPlus } from 'react-icons/hi';
import { getStoredData } from "../../../hooks/localStorage";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, Box, Drawer, DrawerBody, DrawerFooter, 
  DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input, FormLabel, Stack, Textarea, useDisclosure, AlertDialog, AlertDialogBody, 
  AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay
} from '@chakra-ui/react';
import { fetchSavedGrounds, addGround } from "../../../service/reservation/ground/ground"; // Import the addGround function

const Manage_Playground = () => {
  const { sabhaId, departmentId } = getStoredData();
  const [playgrounds, setPlaygrounds] = useState([]);
  const [currentPlayground, setCurrentPlayground] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    const fetchPlaygrounds = async () => {
      try {
        const data = await fetchSavedGrounds(sabhaId);
        setPlaygrounds(data);
      } catch (error) {
        console.error('Error fetching playgrounds:', error);
      }
    };

    fetchPlaygrounds();
  }, [sabhaId]);

  const handleAddOrEdit = async (playground) => {
    try {
      if (currentPlayground) {
        // Handle edit logic here if needed
        setPlaygrounds((prev) =>
          prev.map((pg) => (pg.groundId === currentPlayground.groundId ? playground : pg))
        );
      } else {
        // Add new ground
        const newGround = await addGround({ ...playground, sabhaId });
        setPlaygrounds((prev) => [...prev, newGround]);
      }
      setCurrentPlayground(null);
      onClose();
    } catch (error) {
      console.error('Error adding/editing ground:', error);
    }
  };

  const handleDelete = (groundId) => {
    setPlaygrounds((prev) => prev.filter((pg) => pg.groundId !== groundId));
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
              <BreadcrumbLink href="/ServicesPage">Playground Reservation</BreadcrumbLink>
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
              {/* Playgrounds in Sabha {sabhaId} */}
            </Box>
            <TableContainer>
              <Table variant="striped" colorScheme="blue" size="sm">
                <Thead>
                  <Tr>
                    <Th fontWeight="bold" color="blue.700">
                      Name
                    </Th>
                    <Th fontWeight="bold" color="blue.700">
                      Region
                    </Th>
                    <Th fontWeight="bold" color="blue.700">
                      Price Per Day
                    </Th>
                    <Th fontWeight="bold" color="blue.700">
                      Terms & Conditions
                    </Th>
                    <Th fontWeight="bold" color="blue.700">
                      Description
                    </Th>
                    <Th isNumeric fontWeight="bold" color="blue.700">
                      Options
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {playgrounds.map((pg) => (
                    <Tr key={pg.groundId} _hover={{ bg: 'gray.50' }}>
                      <Td py={4}>{pg.name}</Td>
                      <Td py={4}>{pg.area}</Td>
                      <Td py={4}>{pg.pricePerDay}</Td>
                      <Td py={4}>{pg.terms}</Td>
                      <Td py={4}>{pg.note}</Td>
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
                                  onClick={() => handleDelete(pg.groundId)}
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
              </Table>
            </TableContainer>
          </Box>

          {/* Drawer for Add/Edit Playground */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
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
                    <FormLabel htmlFor="area">Region</FormLabel>
                    <Input
                      id="area"
                      placeholder="Enter region"
                      defaultValue={currentPlayground?.area || ''}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="price">Price Per Day</FormLabel>
                    <Input
                      id="price"
                      placeholder="Enter price per day"
                      type="number"
                      defaultValue={currentPlayground?.pricePerDay || ''}
                      onInput={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (value < 0) e.target.value = '';
                      }}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="terms">Terms & Conditions</FormLabel>
                    <Textarea
                      id="terms"
                      placeholder="Enter terms and conditions"
                      defaultValue={currentPlayground?.terms || ''}
                    />
                  </Box>

                  <Box>
                    <FormLabel htmlFor="note">Description (If any)</FormLabel>
                    <Textarea
                      id="note"
                      placeholder="Enter description"
                      defaultValue={currentPlayground?.note || ''}
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
                      groundId: currentPlayground?.groundId,
                      name: document.getElementById('name').value,
                      area: document.getElementById('area').value,
                      pricePerDay: document.getElementById('price').value,
                      terms: document.getElementById('terms').value,
                      note: document.getElementById('note').value,
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
    </Sidebar>
  );
};

export default Manage_Playground;