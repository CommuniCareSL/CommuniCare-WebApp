import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Account/Sidebar';
import { HiChevronRight, HiPlus } from 'react-icons/hi';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tbody,
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
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import {
  fetchSavedCrematorium,
  addCrematorium,
  editCrematorium,
  deleteCrematorium,
} from '../../../service/reservation/crematorium/crematorium';
import { getStoredData } from "../../../hooks/localStorage";

const Manage_Crematorium = () => {
  const { sabhaId, departmentId } = getStoredData();
  const [crematoriums, setCrematoriums] = useState([]);
  const [currentCrematorium, setCurrentCrematorium] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    price: '',
    note: '',
    terms: '',
  });

  // Fetch crematoriums on component mount
  useEffect(() => {
    const loadCrematoriums = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSavedCrematorium(sabhaId);
        setCrematoriums(data);
      } catch (err) {
        setError('Failed to fetch crematoriums');
      } finally {
        setIsLoading(false);
      }
    };
    loadCrematoriums();
  }, [sabhaId]);

  const handleAddOrEdit = async (crematorium) => {
    try {
      if (currentCrematorium) {
        // Edit existing crematorium
        const updated = await editCrematorium(currentCrematorium.crematoriumId, crematorium);
        setCrematoriums((prev) =>
          prev.map((c) => (c.crematoriumId === updated.crematoriumId ? updated : c))
        );
      } else {
        // Add new crematorium
        const added = await addCrematorium({ ...crematorium, sabhaId });
        setCrematoriums((prev) => [...prev, added]);
      }
      onClose();
    } catch (err) {
      setError('Failed to save crematorium');
    }
  };

  const handleDelete = async (crematoriumId, crematoriumName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${crematoriumName}?`);
    if (confirmDelete) {
      try {
        await deleteCrematorium(crematoriumId);
        setCrematoriums((prev) => prev.filter((c) => c.crematoriumId !== crematoriumId));
      } catch (err) {
        setError(`Failed to delete crematorium: ${crematoriumName}`);
      }
    }
  };

  if (isLoading) {
    return (
      <Sidebar>
        <Box className="flex justify-center items-center h-screen">
          <Spinner size="xl" />
        </Box>
      </Sidebar>
    );
  }

  if (error) {
    return (
      <Sidebar>
        <Box className="flex justify-center items-center h-screen">
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        </Box>
      </Sidebar>
    );
  }

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
                setFormData({
                  name: '',
                  area: '',
                  price: '',
                  note: '',
                  terms: '',
                });
                onOpen();
              }}
            >
              Add Crematorium
            </Button>
          </Box>

          {/* Table Section */}
          <Box bg="white" borderRadius="md" boxShadow="lg" p={5}>
            <Box mb={4} fontWeight="bold" fontSize="lg" color="gray.700">
              Crematoriums
            </Box>
            <TableContainer>
              <Table variant="striped" colorScheme="teal" size="sm">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Area</Th>
                    <Th>Rental Fee</Th>
                    <Th>Description</Th>
                    <Th>Terms</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {crematoriums.map((crematorium) => (
                    <Tr key={crematorium.crematoriumId}>
                      <Td>{crematorium.name}</Td>
                      <Td>{crematorium.area}</Td>
                      <Td>LKR {crematorium.price}</Td>
                      <Td>{crematorium.note}</Td>
                      <Td>{crematorium.terms}</Td>
                      <Td>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          onClick={() => {
                            setCurrentCrematorium(crematorium);
                            setFormData({
                              name: crematorium.name,
                              area: crematorium.area,
                              price: crematorium.price,
                              note: crematorium.note,
                              terms: crematorium.terms,
                            });
                            onOpen();
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          ml={2}
                          onClick={() => handleDelete(crematorium.crematoriumId, crematorium.name)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          {/* Drawer for Add/Edit Crematorium */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                {currentCrematorium ? 'Edit Crematorium' : 'Add Crematorium'}
              </DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Box>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Area</FormLabel>
                    <Input
                      name="area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Rental Fee</FormLabel>
                    <Input
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="note"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Terms</FormLabel>
                    <Input
                      name="terms"
                      value={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
                    />
                  </Box>
                </Stack>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() => handleAddOrEdit(formData)}
                >
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </Sidebar>
  );
};

export default Manage_Crematorium;