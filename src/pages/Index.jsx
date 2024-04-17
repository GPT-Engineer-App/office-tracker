import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaBuilding, FaHome } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Placeholder data for team members
  const teamMembers = [
    { id: 1, name: "Alice Johnson", status: "Remote", city: "New York" },
    { id: 2, name: "Bob Smith", status: "In Office", city: "San Francisco" },
    { id: 3, name: "Charlie Davis", status: "Remote", city: "Chicago" },
    { id: 4, name: "Dana Lee", status: "In Office", city: "Los Angeles" },
  ];

  // Function to update status
  const updateStatus = (id, newStatus) => {
    // This would typically involve updating the state and possibly sending data to a backend
    toast({
      title: "Status Updated",
      description: `Your status has been updated to ${newStatus}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Image src="https://via.placeholder.com/1200x300?text=Office" alt="Office" mb={4} borderRadius="md" />
      <Heading mb={4}>Team Attendance Tracker</Heading>
      <Stack spacing={4}>
        {teamMembers.map((member) => (
          <Flex key={member.id} align="center" justify="space-between" p={3} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">{member.name}</Text>
            <Text>
              {member.status} - {member.city}
            </Text>
            <Button leftIcon={member.status === "In Office" ? <FaHome /> : <FaBuilding />} colorScheme={member.status === "In Office" ? "red" : "green"} onClick={() => updateStatus(member.id, member.status === "In Office" ? "Remote" : "In Office")}>
              Mark as {member.status === "In Office" ? "Remote" : "In Office"}
            </Button>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
