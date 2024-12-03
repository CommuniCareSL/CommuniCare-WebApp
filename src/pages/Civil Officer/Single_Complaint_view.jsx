import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, Select, Textarea, Button, Alert, AlertIcon, useDisclosure, FormControl, FormLabel } from '@chakra-ui/react';

const SingleComplaint = () => {
  const { id } = useParams();

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    // Add more image URLs as needed
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');
  const [status, setStatus] = useState("PENDING");
  const [remark, setRemark] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleRejectReasonChange = (event) => {
    setRejectReason(event.target.value);
    if (event.target.value !== "Other") {
      setOtherReason(""); // Clear other reason if not "Other"
    }
  };

  const handleConfirmStatusChange = () => {
    if (status === "REJECTED") {
      setRemark(rejectReason === "Other" ? otherReason : rejectReason);
      setIsRejected(true);
    }
    setAlertOpen(true); // Show alert before confirming status change
  };

  const handleConfirmReject = () => {
    setRemark(rejectReason === "Other" ? otherReason : rejectReason);
    setStatus("REJECTED");
    setAlertOpen(true);
  };

  const handleSubmitRemark = () => {
    // Logic to handle remark submission
  };

  useEffect(() => {
    // Equalize the height of left and right columns
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
          <span className='text-blue-700 text-lg'>Date/Time Submitted : </span><br />
          mm/dd/yyyy 21:00 pm 
        </p>

        {status === "REJECTED" || status === "CLOSED" ? (
          <p className='m-5'>
            <span className='text-blue-700 text-lg'>Remark : </span><br />
            {remark}
          </p>
        ) : null}
      </div>

      {/* Right Column: Actions */}
      {status !== "REJECTED" && status !== "CLOSED" && (
        <div className='right-column bg-slate-200 h-full m-5 w-1/3 mr-10 rounded-md flex flex-col space-y-5'>
          {/* Change Status */}
          <div className='bg-white shadow-md rounded-md p-5'>
            <p className='font-semibold mb-2'>Change Status</p>
            <FormControl mb={4}>
              {/* <FormLabel>Select Status</FormLabel> */}
              <Select
                value={status}
                onChange={handleStatusChange}
                placeholder="Select Status"
              >
                {['INPROGRESS', 'RESOLVED', 'CLOSED'].map((option) => 
                  option !== status && <option key={option} value={option}>{option}</option>
                )}
              </Select>
            </FormControl>
            <Button colorScheme="blue" onClick={handleConfirmStatusChange} w="full">Change Status</Button>

            {/* Status change alert */}
            {alertOpen && (
              <Alert status="warning" variant="left-accent" mt={4}>
                <AlertIcon />
                Are you sure you want to change the status to <strong>{status}</strong>?
                <Button colorScheme="green" size="sm" ml={2}  onClick={() => setAlertOpen(false)}>
                  Confirm
                </Button>
                <Button colorScheme="red" size="sm" ml={2} onClick={() => setAlertOpen(false)}>
                  Cancel
                </Button>
              </Alert>
            )}
          </div>

          {/* Add Remark */}
          <div className='bg-white shadow-md rounded-md p-5'>
            <p className='font-semibold'>Add Remark</p>
            <FormControl mb={4}>
              <FormLabel>Remark</FormLabel>
              <Textarea
                value={remark}
                onChange={handleRemarkChange}
                placeholder="Enter your remark"
                maxLength={200}
                resize="vertical"
              />
              <p className="text-sm text-gray-500">Word Limit: {remark.length}/200</p>
              <Button colorScheme="blue" size="sm" mt={2} onClick={handleSubmitRemark}>
                Submit Remark
              </Button>
            </FormControl>
          </div>

          {/* Reject Reason */}
          <div className='bg-white shadow-md rounded-md p-5'>
            <p className='font-semibold mb-2'>Reject This Complaint ?</p>
            <FormControl mb={4}>
              {/* <FormLabel>Reject Complaint</FormLabel> */}
              <Button colorScheme="red" onClick={() => setIsRejected(true)} w="full">Reject Complaint</Button>
            </FormControl>

            {isRejected && (
              <>
                <FormControl mb={4}>
                  <FormLabel>Reason for Rejection</FormLabel>
                  <Select
                    value={rejectReason}
                    onChange={handleRejectReasonChange}
                    placeholder="Select a reason"
                  >
                    <option value="Invalid Request">Invalid Request</option>
                    <option value="Duplicate Complaint">Duplicate Complaint</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>

                {rejectReason === 'Other' && (
                  <FormControl mb={4}>
                    <FormLabel>Please specify reason</FormLabel>
                    <Textarea
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      placeholder="Enter brief reason"
                      resize="vertical"
                    />
                    <p className="text-sm text-gray-500">Word Limit: {otherReason.length}/200</p>
                  </FormControl>
                )}
                <Button colorScheme="green" onClick={handleConfirmReject} w="full">Confirm Rejection</Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleComplaint;
