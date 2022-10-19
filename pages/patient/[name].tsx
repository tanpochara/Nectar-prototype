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
        <Box bgColor="#FFFFFF" borderRadius="12px" p="30px">
          <VStack spacing={10}>
            <InfoBox
              title={"Blood Group"}
              description={"O , Rh+"}
              path={`/blood-group/${patientName}`}
            />
            <InfoBox
              title={"Allergy"}
              description={"Pollen"}
              path={`/allergy/${patientName}`}
            />
            <InfoBox
              title={"Current Medications"}
              description={"Metformin"}
              path={`/current-medication/${patientName}`}
            />
            <InfoBox
              title={"Emergency Contact"}
              description={"089-999-9999"}
              path={`/emergency-contact/${patientName}`}
            />
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export default PatientLanding;
