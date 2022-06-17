import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        bg={"skyblue"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        p={3}
        m="40px 0 15px 0"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Notes
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        bg={"skyblue"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        p={3}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width="50%" bg="white">
              Login
            </Tab>
            <Tab width="50%" bg="white">
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
