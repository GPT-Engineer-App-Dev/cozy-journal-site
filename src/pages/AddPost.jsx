import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, Image, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <Box boxSize="sm">
            <Image src={image} alt="Selected" borderRadius="md" />
          </Box>
        )}
        <Button type="submit" colorScheme="blue">
          Add Post
        </Button>
      </VStack>
    </Container>
  );
};

export default AddPost;