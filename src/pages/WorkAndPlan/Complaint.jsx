import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/WorkAndPlan/Sidebar';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { FaUser, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { getStoredData } from "../../hooks/localStorage";
import { fetchComplaints } from '../../service/complaint/Complaint';

// Status mapping object
const STATUS_MAP = {
  0: 'PENDING',
  1: 'IN PROGRESS',
  2: 'RESOLVED',
  3: 'REJECTED'
};

const Complaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [statusCounts, setStatusCounts] = useState({
    pending: 0,
    inprogress: 0,
    resolved: 0,
    rejected: 0
  });

  const { sabhaId, departmentId } = getStoredData();

  useEffect(() => {
    const getComplaintsData = async () => {
      try {
        setIsLoading(true);
        const fetchedComplaints = await fetchComplaints(sabhaId, departmentId);
        setComplaints(fetchedComplaints);
        setFilteredComplaints(fetchedComplaints);
        updateStatusCounts(fetchedComplaints);
      } catch (error) {
        console.error('Error fetching complaints:', error);
        setError('Failed to fetch complaints. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (sabhaId && departmentId) {
      getComplaintsData();
    }
  }, [sabhaId, departmentId]);

  const updateStatusCounts = (complaintsList) => {
    const counts = complaintsList.reduce((acc, complaint) => {
      const status = STATUS_MAP[complaint.status].toLowerCase().replace(' ', '');
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {
      pending: 0,
      inprogress: 0,
      resolved: 0,
      rejected: 0
    });

    setStatusCounts(counts);
  };

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    if (status === 'All') {
      setFilteredComplaints(complaints);
    } else {
      setFilteredComplaints(complaints.filter(c => STATUS_MAP[c.status] === status));
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    setFilteredComplaints(
      complaints.filter(complaint =>
        complaint.area.toLowerCase().includes(searchValue) || // Search by area
        STATUS_MAP[complaint.status].toLowerCase().includes(searchValue) || // Search by status
        (complaint.categoryName && complaint.categoryName.toLowerCase().includes(searchValue)) // Search by category name
      )
    );
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <Sidebar>
      <div className="overflow-y-auto bg-white flex-1">
        {/* Status count cards */}
        <div className="p-3 pb-6">
          <div className="flex justify-center space-x-4 h-13">
            {Object.entries(statusCounts).map(([key, count], idx) => (
              <div
                key={key}
                className={`max-w-xs p-3 rounded-lg shadow-md border w-[150px] ${
                  idx === 0
                    ? 'border-gray-500'
                    : idx === 1
                    ? 'border-blue-500'
                    : idx === 2
                    ? 'border-green-500'
                    : 'border-red-500'
                }`}
              >
                <h3 className={`text-left font-semibold text-2xl ${
                  idx === 0 ? 'text-slate-700' :
                  idx === 1 ? 'text-blue-600' :
                  idx === 2 ? 'text-green-500' :
                  'text-red-500'
                }`}>
                  {count}
                </h3>
                <p className={`text-left ${
                  idx === 0 ? 'text-slate-700' :
                  idx === 1 ? 'text-blue-600' :
                  idx === 2 ? 'text-green-500' :
                  'text-red-500'
                }`}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex justify-center mt-5">
            <InputGroup maxW="600px">
              <Input
                type="search"
                placeholder="Search by area, status, or category"
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputRightElement children={<BsSearch color="blue.500" />} />
            </InputGroup>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<HiChevronDown />}
                variant="outline"
                size="md"
                mx={2}
                sx={{
                  borderRadius: 'md',
                  padding: '8px 16px',
                  backgroundColor: 'white',
                  color: 'blue.700',
                  _hover: {
                    backgroundColor: 'blue.600',
                    color: 'white',
                  },
                }}
              >
                Filter: {selectedStatus}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleFilterChange('All')}>All</MenuItem>
                {Object.values(STATUS_MAP).map(status => (
                  <MenuItem key={status} onClick={() => handleFilterChange(status)}>
                    {status}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15 mb-5" />

        {/* Complaints Grid */}
        <div className="mb-7 ml-14">
          <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
            {filteredComplaints.map((complaint) => (
              <Link to={`/ComplaintView/${complaint.complaintId}`} key={complaint.complaintId}>
                <Card>
                  <CardHeader>
                    <Heading size="md">
                      Category: {complaint.categoryName} {/* Use categoryName */}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack spacing={3}>
                      <Stack direction="row" alignItems="center">
                        <FaUser color="blue" />
                        <Text>Area: {complaint.area}</Text>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <FaCalendarAlt color="green" />
                        <Text>Date: {new Date(complaint.createdAt).toISOString().split('T')[0]}</Text>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <FaInfoCircle color="red" />
                        <Text>Status: {STATUS_MAP[complaint.status]}</Text>
                      </Stack>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button colorScheme="blue" size="sm">
                      View More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </div>
      </div>
    </Sidebar>
  );
};

export default Complaint;