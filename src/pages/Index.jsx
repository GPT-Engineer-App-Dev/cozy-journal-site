import { useEffect, useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], a passionate writer and tech enthusiast. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </HStack>
        <Button as={RouterLink} to="/add-post" colorScheme="teal">
          Add New Post
        </Button>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%" bg={bg} color={color}>
            <Heading fontSize="xl">{post.title}</Heading>
            {post.image && <Image src={post.image} alt={post.title} borderRadius="md" />}
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;