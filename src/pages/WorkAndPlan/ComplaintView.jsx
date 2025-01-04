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
import axios from 'axios';

const ComplaintView = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [statusCounts, setStatusCounts] = useState({ pending: 0, inProgress: 0, resolved: 0, rejected: 0 });
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8080/complaints/department');
        const fetchedComplaints = response.data;

        const statusCounts = {
          pending: fetchedComplaints.filter(c => c.status === 'PENDING').length,
          inProgress: fetchedComplaints.filter(c => c.status === 'IN PROGRESS').length,
          resolved: fetchedComplaints.filter(c => c.status === 'RESOLVED').length,
          rejected: fetchedComplaints.filter(c => c.status === 'REJECTED').length,
        };
        setStatusCounts(statusCounts);

        fetchedComplaints.sort((a, b) => (a.status === 'PENDING' ? -1 : 1));
        setComplaints(fetchedComplaints);
        setFilteredComplaints(fetchedComplaints);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };
    fetchComplaints();
  }, []);

  const handleFilterChange = (status) => {
    setSelectedStatus(status);
    if (status === 'All') {
      setFilteredComplaints(complaints);
    } else {
      setFilteredComplaints(complaints.filter(c => c.status === status));
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchValue = event.target.value.toLowerCase();
    setFilteredComplaints(
      complaints.filter(
        complaint =>
          complaint.userName.toLowerCase().includes(searchValue) ||
          complaint.status.toLowerCase().includes(searchValue) ||
          complaint.categoryName.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
      <Sidebar>
      <div className="overflow-y-auto bg-white flex-1">

        <div className="p-3 pb-6">
          <div className="flex justify-center space-x-4 h-13">
            {Object.entries(statusCounts).map(([key, count], idx) => (
              <div
                key={key}
                style={{ width: '150px' }}
                className={`max-w-xs p-3 rounded-lg shadow-md border ${
                  idx === 0
                    ? 'border-gray-500'
                    : idx === 1
                    ? 'border-blue-500'
                    : idx === 2
                    ? 'border-green-500'
                    : 'border-red-500'
                }`}
              >
                <h3
                  className={`text-left font-semibold text-2xl ${
                    idx === 0
                      ? 'text-slate-700'
                      : idx === 1
                      ? 'text-blue-600'
                      : idx === 2
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {count}
                </h3>
                <p
                  className={`text-left ${
                    idx === 0
                      ? 'text-slate-700'
                      : idx === 1
                      ? 'text-blue-600'
                      : idx === 2
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            <InputGroup maxW="600px">
              <Input
                type="search"
                placeholder="Search by user, status, or category"
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
                <MenuItem onClick={() => handleFilterChange('PENDING')}>Pending</MenuItem>
                <MenuItem onClick={() => handleFilterChange('IN PROGRESS')}>In Progress</MenuItem>
                <MenuItem onClick={() => handleFilterChange('RESOLVED')}>Resolved</MenuItem>
                <MenuItem onClick={() => handleFilterChange('REJECTED')}>Rejected</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <hr className="w-full border-t border-gray-200 my-0.5 ml-5 mr-15 mb-5" />

        <div className="mb-7 ml-14 flex justify-between items-center">
          <SimpleGrid spacing={4} templateColumns="repeat(4, 1fr)">
            {filteredComplaints.map((complaint) => (
              <Link to={`/Single_complaint/${complaint.complaintId}`} key={complaint.complaintId}>
                <Card cursor="pointer">
                  <CardHeader>
                    <Heading size="md">Category: {complaint.categoryName}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack spacing={3}>
                      <Stack direction="row" alignItems="center">
                        <FaUser color="blue" />
                        <Text>Submittee : {complaint.userName}</Text>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <FaCalendarAlt color="green" />
                        <Text>Date : {complaint.createdDate}</Text>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <FaInfoCircle color="red" />
                        <Text>Status : {complaint.status}</Text>
                      </Stack>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button colorScheme="blue" size="sm" mr={1}>
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

export default ComplaintView;
