import {
  Center,
  Container,
  Image,
  Box,
  VStack,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { IoMdAddCircleOutline } from "react-icons/io";
import { InfoBox } from "../../src/components/InfoBox";

const PatientLanding: NextPage = () => {
  const router = useRouter();
  const patientName = router.query.name;

  return (
    <>
      <Container padding="20px" bgColor="#ECF1F4" height="100vh">
        <Center mb="-20px" mt={"20px"}>
          <Image
            src="/logo.png"
            alt="logo"
            width="120px"
            borderRadius="60%"
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          />
        </Center>
        <Box bgColor="#FFFFFF" borderRadius="12px" p="30px" minH="70vh">
          <Text fontSize="lg" fontWeight={700}>
            {" "}
            Current Medication{" "}
          </Text>
          <Box mt="10px" ml="15px" fontSize="lg">
            <Text> 15/08/2022: </Text>
            <Text ml="10px"> Metformin 500 mg</Text>
          </Box>
          <Box mt="10px" ml="15px" fontSize="lg">
            <Text> 12/07/2022: </Text>
            <Text ml="10px"> Aspirin 300 mg</Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PatientLanding;
