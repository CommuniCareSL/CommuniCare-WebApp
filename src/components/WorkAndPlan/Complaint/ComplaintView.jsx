import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box, Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, Select, Textarea, Button, Alert, AlertIcon, useDisclosure, FormControl, FormLabel, Tag, TagLabel,
} from "@chakra-ui/react";
import MapComponent from "./MapComponent";
import { fetchComplaintById } from "../../../service/complaint/Complaint"; // Import the service function
import {addNoteToComplaint,updateNoteInComplaint,updateComplaintStatus} from "../../../service/complaint/Complaint"; // Import the new service functions
import {addNoteToComplaint,updateNoteInComplaint,updateComplaintStatus} from "../../../service/complaint/Complaint"; // Import the new service functions
import AlertService from "../../../shared/service/AlertService"; // Import the AlertService class


// Status mapping object
const STATUS_MAP = {
  0: { label: "PENDING", color: "yellow" },
  1: { label: "IN PROGRESS", color: "blue" },
  2: { label: "RESOLVED", color: "green" },
  3: { label: "REJECTED", color: "red" },
};

const ComplaintView = () => {
  const { id } = useParams(); // Get the complaintId from the URL
  const [complaint, setComplaint] = useState(null); // State to store complaint details
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [isSubmittingNote, setIsSubmittingNote] = useState(false); // State to handle note submission loading
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [newStatus, setNewStatus] = useState("");
  const [note, setNote] = useState(""); // State to control the Textarea value
  const [rejectReason, setRejectReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [submittedNote, setSubmittedNote] = useState("");
  const [submittedRejectReason, setSubmittedRejectReason] = useState("");

  // Fetch complaint details when the component mounts
  useEffect(() => {
    const getComplaintDetails = async () => {
      try {
        setIsLoading(true);
        const fetchedComplaint = await fetchComplaintById(id); // Fetch complaint details
        setComplaint(fetchedComplaint); // Set the complaint details in state
        setStatus(fetchedComplaint.status); // Set the initial status
        setNote(fetchedComplaint.note || ""); // Initialize the note state
      } catch (error) {
        console.error("Error fetching complaint details:", error);
        setError("Failed to fetch complaint details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getComplaintDetails();
  }, [id]);

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  // Handle status change
  const handleStatusChange = (event) => {
    setNewStatus(event.target.value);
  };

  // Handle note change
  const handleNoteChange = (event) => {
    setNote(event.target.value); // Update the note state as the user types
  };

  // Handle reject reason change
  const handleRejectReasonChange = (event) => {
    setRejectReason(event.target.value);
    if (event.target.value === "Other") {
      setOtherReason(""); // Clear other reason if not "Other"
    } else {
      setOtherReason(""); // Clear other reason if not "Other"
    }
  };

  // Handle confirm status change
  const handleConfirmStatusChange = () => {
    setAlertOpen(true); // Show alert before confirming status change
  };

  // Handle submit status change
  const handleSubmitStatusChange = async () => {
    try {
      setIsUpdatingStatus(true);
      
      const response = await updateComplaintStatus(id, newStatus);
      console.log('Update response:', response); // Debug log
      
      if (response && response.complaint) {
        setComplaint(prevComplaint => {
          const updatedComplaint = {
            ...prevComplaint,
            ...response.complaint,
            user: prevComplaint.user,
            category: prevComplaint.category,
            sabha: prevComplaint.sabha
          };
          console.log('Updated complaint:', updatedComplaint); // Debug log
          return updatedComplaint;
        });
      }
      
      setNewStatus("");
      setAlertOpen(false);
      AlertService.success(response.message || "Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      AlertService.error("Failed to update status. Please try again.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Handle cancel status change
  const handleCancelStatusChange = () => {
    setAlertOpen(false);
    setNewStatus("");
  };

  // Handle submit note
  const handleSubmitNote = async () => {
    if (!note.trim()) {
      AlertService.error("Note cannot be empty!"); // Validate note input
      return;
    }

    try {
      setIsSubmittingNote(true); // Start loading
      let updatedComplaint;

      if (complaint.note) {
        // If a note already exists, update it
        updatedComplaint = await updateNoteInComplaint(id, note);
        AlertService.success("Note updated successfully!"); // Show success alert
      } else {
        // If no note exists, add a new one
        updatedComplaint = await addNoteToComplaint(id, note);
        AlertService.success("Note added successfully!"); // Show success alert
      }

      // Update the complaint state with the new note
      setComplaint((prevComplaint) => ({
        ...prevComplaint,
        note: updatedComplaint.note, // Assuming the backend returns the updated complaint
      }));

    } catch (error) {
      console.error("Error submitting note:", error);
      AlertService.error("Failed to submit note. Please try again.");
    } finally {
      setIsSubmittingNote(false); // Stop loading
    }
  };

  // Handle submit reject reason
  const handleSubmitRejectReason = () => {
    setSubmittedRejectReason(
      rejectReason === "Other" ? otherReason : rejectReason
    );
    setRejectReason("");
    setOtherReason("");
    setStatus("REJECTED");
    setIsRejected(true);
  };

  // Adjust column heights on resize
  useEffect(() => {
    const leftColumn = document.querySelector(".left-column");
    const rightColumn = document.querySelector(".right-column");
    const handleResize = () => {
      const leftHeight = leftColumn ? leftColumn.clientHeight : 0;
      const rightHeight = rightColumn ? rightColumn.clientHeight : 0;
      const maxHeight = Math.max(leftHeight, rightHeight);
      if (leftColumn) leftColumn.style.height = `${maxHeight}px`;
      if (rightColumn) rightColumn.style.height = `${maxHeight}px`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [status, isRejected, alertOpen]);

  // Show loading or error state
  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!complaint) {
    return <div className="text-center p-4">No complaint found.</div>;
  }

  // Extract latitude and longitude from the location field
  const [latitude, longitude] = complaint.location.split(",").map(Number);

  return (
    <div className="bg-slate-200 flex h-screen overflow-y-auto">
      {/* Left Column: Complaint Details */}
      <div className="left-column bg-white h-full overflow-y-auto m-5 w-2/3 ml-10 shadow-md rounded-md">
      {complaint && (
          <p className="font-semibold text-lg m-5">
            <span className="text-blue-700">Status : </span>
            <Tag colorScheme={STATUS_MAP[complaint.status].color}>
              <TagLabel>{STATUS_MAP[complaint.status].label}</TagLabel>
            </Tag>
          </p>
        )}

        <Box p={5}>
          <SimpleGrid columns={[2, null, 2]} spacing="40px">
            {complaint.proofs.map((proof, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                onClick={() => handleImageClick(proof)}
                cursor="pointer"
              >
                <Image
                  src={`data:image/jpeg;base64,${proof}`}
                  alt={`proof-${index}`}
                />
              </Box>
            ))}
          </SimpleGrid>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent maxW="50vw" maxH="90vh">
              <ModalBody p={0}>
                <Image
                  src={`data:image/jpeg;base64,${selectedImage}`}
                  alt="Selected"
                  maxH="90vh"
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <p className="m-5">
          <span className="text-blue-700 text-lg">Description : </span>
          {complaint.description} {/* Use the fetched description */}
        </p>

        <p className="m-5">
          <span className="text-blue-700 text-lg">Complaint Submittee : </span>
          {complaint.user.fullName} {/* Use the fetched user name */}
        </p>

        <p className="m-5">
          <span className="text-blue-700 text-lg">Date Submitted : </span>
          {new Date(complaint.createdAt).toISOString().split("T")[0]}{" "}
          {/* Format the date */}
        </p>

        <p className="m-5">
          <span className="text-blue-700 text-lg">Remark : </span>
          {complaint.remark} {/* Use the fetched user name */}
        </p>

        <p className="m-5">
          <span className="text-blue-700 text-lg">Remark : </span>
          {complaint.remark} {/* Use the fetched user name */}
        </p>

        <p className='m-5'>
          <span className='text-blue-700 text-lg'>Remark : </span>
          {complaint.remark} {/* Use the fetched user name */}
        </p>

        {/* Display Submitted Note */}
        {/* {complaint.note && (
          <p className="m-5">
            <span className="text-blue-700 text-lg">Note : </span>
            <br />
            {complaint.note}
          </p>
        )} */}

        {submittedRejectReason && (
          <p className="m-5">
            <span className="text-blue-700 text-lg">Reject Reason : </span>
            <br />
            {submittedRejectReason}
          </p>
        )}

        {/* Map Component */}
        <div className="m-5 h-96">
          <MapComponent latitude={latitude} longitude={longitude} />
        </div>
      </div>

      {/* Right Column: Action Form */}
      <div
        className={`right-column bg-white h-full m-5 w-1/3 mr-10 shadow-md rounded-md ${
          isRejected ? "pointer-events-none" : ""
        }`}
      >
        <div className="p-5">
          <FormControl mb={4}>
            <FormLabel>Change Status</FormLabel>
            <Select
              value={newStatus}
              onChange={handleStatusChange}
              placeholder="Select new status"
              isDisabled={isUpdatingStatus}
            >
              <option value={0}>PENDING</option>
              <option value={1}>IN PROGRESS</option>
              <option value={2}>RESOLVED</option>
              <option value={3}>REJECTED</option>
            </Select>
            <Button
              colorScheme="blue"
              size="sm"
              mt={2}
              onClick={handleConfirmStatusChange}
              isLoading={isUpdatingStatus}
              isDisabled={!newStatus}
            >
              Change Status
            </Button>
          </FormControl>

          {/* Alert for Confirming Status Change */}
          {alertOpen && (
            <Alert status="warning">
              <AlertIcon />
              <div>
                <p>Are you sure you want to change the status?</p>
                <Button
                  colorScheme="blue"
                  size="sm"
                  mt={2}
                  onClick={handleSubmitStatusChange}
                  isLoading={isUpdatingStatus}
                >
                  Confirm
                </Button>
                <Button
                  colorScheme="red"
                  size="sm"
                  mt={2}
                  ml={2}
                  onClick={() => {
                    setAlertOpen(false);
                    setNewStatus("");
                  }}
                  isDisabled={isUpdatingStatus}
                >
                  Cancel
                </Button>
              </div>
            </Alert>
          )}
          <FormControl mb={4}>
            <FormLabel>Add Note</FormLabel>
            <Textarea
              value={note} // Controlled by the note state
              onChange={handleNoteChange}
              placeholder={complaint.note ? "Edit note" : "Add a note"} // Show "Edit note" if note exists
              maxLength={200}
            />
            <Button
              colorScheme="blue"
              size="sm"
              mt={2}
              onClick={handleSubmitNote}
              isLoading={isSubmittingNote} // Show loading spinner when submitting
            >
              {complaint.note ? "Update Note" : "Submit Note"}{" "}
              {/* Change button text based on note existence */}
            </Button>
          </FormControl>

          {/* <FormControl mb={4}>
            <FormLabel>Reject Reason</FormLabel>
            <Select
              value={rejectReason}
              onChange={handleRejectReasonChange}
              placeholder="Select reject reason"
            >
              <option value="Invalid Complaint">Invalid Complaint</option>
              <option value="Insufficient Information">
                Insufficient Information
              </option>
              <option value="Other">Other</option>
            </Select>
            {rejectReason === "Other" && (
              <FormControl mb={4}>
                <Textarea
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  placeholder="Provide your reason"
                  maxLength={200}
                />
              </FormControl>
            )}
            <Button
              colorScheme="red"
              size="sm"
              mt={2}
              onClick={handleSubmitRejectReason}
            >
              Submit Reject Reason
            </Button>
          </FormControl> */}
        </div>
      </div>
    </div>
  );
};

export default ComplaintView;
