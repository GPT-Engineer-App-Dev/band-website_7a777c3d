import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaSpotify, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const tourDates = [
    { date: "June 15", city: "New York, NY", venue: "Madison Square Garden" },
    { date: "June 20", city: "Los Angeles, CA", venue: "Staples Center" },
    { date: "June 25", city: "Chicago, IL", venue: "United Center" },
    { date: "June 30", city: "Houston, TX", venue: "Toyota Center" },
  ];

  return (
    <Box>
      <Box backgroundImage="https://images.unsplash.com/photo-1530352865347-3c2e277abefe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2V0aWMlMjBjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzA5NzM5MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="4xl" color="white" mb={4}>
            The Rocking Band
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Catch us live on our upcoming world tour!
          </Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="blue" as={Link} href="#tour-dates">
            Get Tickets
          </Button>
        </Container>
      </Box>

      <Box py={20} id="tour-dates">
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={10}>
            Tour Dates
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {tourDates.map((date, index) => (
              <Box key={index} p={6} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg" mb={2}>
                  {date.city}
                </Heading>
                <Text fontSize="xl" mb={2}>
                  {date.venue}
                </Text>
                <Text fontSize="lg" color="gray.500">
                  {date.date}
                </Text>
                <Button mt={4} colorScheme="blue" as={Link} href="#">
                  Buy Tickets
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg" centerContent>
          <Heading as="h2" size="xl" mb={6}>
            Connect with Us
          </Heading>
          <Stack direction="row" spacing={6}>
            <Link href="#" isExternal>
              <FaSpotify size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter size={32} />
            </Link>
            <Link href="#" isExternal>
              <FaFacebook size={32} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
