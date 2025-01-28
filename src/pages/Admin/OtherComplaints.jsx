import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
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
import '../../styles/pages/Admin/OtherComplaints.css'

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
        setError('Failed to fetch complaints');
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
    setFilteredComplaints(
      status === 'All' 
        ? complaints 
        : complaints.filter(c => STATUS_MAP[c.status] === status)
    );
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    setFilteredComplaints(
      complaints.filter(complaint =>
        complaint.area.toLowerCase().includes(searchValue) ||
        STATUS_MAP[complaint.status].toLowerCase().includes(searchValue) ||
        (complaint.categoryName && complaint.categoryName.toLowerCase().includes(searchValue))
      )
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        Loading complaints...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-5 min-h-screen min-w-auto complaint-page-content bg-[#e8eff9] overflow-y-auto">
        {/* Status Count Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {Object.entries(statusCounts).map(([key, count], idx) => {
            const colorClasses = [
              'border-gray-500 text-slate-700',
              'border-blue-500 text-blue-600', 
              'border-green-500 text-green-500', 
              'border-red-500 text-red-500'
            ];

            return (
              <div 
                key={key} 
                className={`p-4 rounded-lg shadow-md border ${colorClasses[idx]}`}
              >
                <h3 className="text-2xl font-semibold">{count}</h3>
                <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              </div>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between mb-6">
          <InputGroup maxW="600px">
            <Input
              type="search"
              placeholder="Search by area, status, or category"
              value={searchTerm}
              onChange={handleSearch}
              className="border-blue-400 focus:ring-2 focus:ring-blue-500"
            />
            <InputRightElement children={<BsSearch color="blue.500" />} />
          </InputGroup>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<HiChevronDown />}
              variant="outline"
              colorScheme="blue"
            >
              Filter: {selectedStatus}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleFilterChange('All')}>All</MenuItem>
              {Object.values(STATUS_MAP).map(status => (
                <MenuItem 
                  key={status} 
                  onClick={() => handleFilterChange(status)}
                >
                  {status}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>

        {/* Complaints Grid */}
        <SimpleGrid 
          spacing={4} 
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {filteredComplaints.map((complaint) => (
            <Link 
              to={`/ComplaintView/${complaint.complaintId}`} 
              key={complaint.complaintId}
            >
              <Card>
                <CardHeader>
                  <Heading size="md">
                    Category: {complaint.categoryName}
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
                      <Text>
                        Date: {new Date(complaint.createdAt).toLocaleDateString()}
                      </Text>
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
  );
};

export default Complaint;