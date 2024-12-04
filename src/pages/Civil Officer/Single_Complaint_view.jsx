import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, Select, Textarea, Button, Alert, AlertIcon, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react';
import MapComponent from './MapComponent'; 

const SingleComplaint = () => {
  const { id } = useParams();

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');
  const [status, setStatus] = useState("PENDING");
  const [newStatus, setNewStatus] = useState("");
  const [remark, setRemark] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [submittedRemark, setSubmittedRemark] = useState("");
  const [submittedRejectReason, setSubmittedRejectReason] = useState("");

  // Sample latitude and longitude for demonstration
  const latitude = 6.9022;
  const longitude = 79.8607;

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleRejectReasonChange = (event) => {
    setRejectReason(event.target.value);
    if (event.target.value === "Other") {
      setOtherReason(""); // Clear other reason if not "Other"
    } else {
      setOtherReason(""); // Clear other reason if not "Other"
    }
  };

  const handleConfirmStatusChange = () => {
    setAlertOpen(true); // Show alert before confirming status change
  };

  const handleSubmitStatusChange = () => {
    setStatus(newStatus);
    setNewStatus("");
    setAlertOpen(false);
  };

  const handleCancelStatusChange = () => {
    setAlertOpen(false);
    setNewStatus(""); 
  };

  const handleSubmitRemark = () => {
    setSubmittedRemark(remark); 
    setRemark(""); 
  };

  const handleSubmitRejectReason = () => {
    setSubmittedRejectReason(rejectReason === "Other" ? otherReason : rejectReason);
    setRejectReason(""); 
    setOtherReason(""); 
    setStatus("REJECTED");
    setIsRejected(true);
  };

  useEffect(() => {
    
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');
    const handleResize = () => {
      const leftHeight = leftColumn ? leftColumn.clientHeight : 0;
      const rightHeight = rightColumn ? rightColumn.clientHeight : 0;
      const maxHeight = Math.max(leftHeight, rightHeight);
      if (leftColumn) leftColumn.style.height = `${maxHeight}px`;
      if (rightColumn) rightColumn.style.height = `${maxHeight}px`;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [status, isRejected, alertOpen]);

  return (
    <div className='bg-slate-200 flex h-screen overflow-y-auto'>
      {/* Left Column: Complaint Details */}
      <div className='left-column bg-white h-full overflow-y-auto m-5 w-2/3 ml-10 shadow-md rounded-md'>
        <p className='font-semibold text-lg m-5'>
          <span className='text-blue-700'>Status : </span>  
          {status}
        </p>

        <Box p={5}>
          <SimpleGrid columns={[2, null, 2]} spacing="40px">
            {images.map((image, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                onClick={() => handleImageClick(image)}
                cursor="pointer"
              >
                <Image src={image} alt={`image-${index}`} />
              </Box>
            ))}
          </SimpleGrid>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent maxW="90vw" maxH="90vh">
              <ModalBody p={0}>
                <Image src={selectedImage} alt="Selected" maxH="90vh" />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <p className='m-5'>
          <span className='text-blue-700 text-lg'>Description : </span>
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <p className='m-5'>
          <span className='text-blue-700 text-lg'>Complaint Submittee : </span><br />
          Dasun Karunathilake
        </p>

        <p className='m-5'>
          <span className='text-blue-700 text-lg'>Date Submitted : </span><br />
          12/4/2021
        </p>

        {/* Display Submitted Remark */}
        {submittedRemark && (
          <p className='m-5'>
            <span className='text-blue-700 text-lg'>Remark : </span><br />
            {submittedRemark}
          </p>
        )}

        {submittedRejectReason && (
          <p className='m-5'>
            <span className='text-blue-700 text-lg'>Reject Reason : </span><br />
            {submittedRejectReason}
          </p>
        )}

        {/* Map Component */}
        <div className="m-5 h-96">
          <MapComponent latitude={latitude} longitude={longitude} />
        </div>
      </div>

      {/* Right Column: Action Form */}
      <div className={`right-column bg-white h-full m-5 w-1/3 mr-10 shadow-md rounded-md ${isRejected ? 'pointer-events-none' : ''}`}>
        <div className='p-5'>
          <FormControl mb={4}>
            <FormLabel>Change Status</FormLabel>
            <Select value={newStatus} onChange={handleStatusChange} placeholder="Select new status">
              <option value="PENDING">PENDING</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="RESOLVED">RESOLVED</option>
              <option value="REJECTED">REJECTED</option>
            </Select>
            <Button colorScheme="blue" size="sm" mt={2} onClick={handleConfirmStatusChange}>
              Change Status
            </Button>
          </FormControl>

          {/* Alert for Confirming Status Change */}
          {alertOpen && (
            <Alert status="warning">
              <AlertIcon />
              <div>
                <p>Are you sure you want to change the status?</p>
                <Button colorScheme="blue" size="sm" mt={2} onClick={handleSubmitStatusChange}>
                  Confirm
                </Button>
                <Button colorScheme="red" size="sm" mt={2} ml={2} onClick={handleCancelStatusChange}>
                  Cancel
                </Button>
              </div>
            </Alert>
          )}

          <FormControl mb={4}>
            <FormLabel>Add Remark</FormLabel>
            <Textarea
              value={remark}
              onChange={handleRemarkChange}
              placeholder="Add a remark"
              maxLength={200}
            />
            <Button colorScheme="blue" size="sm" mt={2} onClick={handleSubmitRemark}>
              Submit Remark
            </Button>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Reject Reason</FormLabel>
            <Select value={rejectReason} onChange={handleRejectReasonChange} placeholder="Select reject reason">
              <option value="Invalid Complaint">Invalid Complaint</option>
              <option value="Insufficient Information">Insufficient Information</option>
              <option value="Other">Other</option>
            </Select>
            {rejectReason === 'Other' && (
              <FormControl mb={4}>
                <Textarea
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  placeholder="Provide your reason"
                  maxLength={200}
                />
              </FormControl>
            )}
            <Button colorScheme="red" size="sm" mt={2} onClick={handleSubmitRejectReason}>
              Submit Reject Reason
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SingleComplaint;
