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
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Patient } from "../../src/@types/patient";
import { InfoBox } from "../../src/components/InfoBox";
import { apiEndpoints } from "../../src/config";

interface Props {
  patient: Patient;
}

const PatientLanding: NextPage<Props> = ({ patient }) => {
  const router = useRouter();
  const { name: patientName } = router.query;

  return (
    <>
      <Container padding="20px" bgColor="#ECF1F4" height="100vh">
        <Center mb="-20px" mt={"20px"}>
          <Image
            src="/logo_white.png"
            alt="logo"
            width="150px"
            borderRadius="60%"
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          />
        </Center>
        <Box bgColor="#FFFFFF" borderRadius="12px" p="30px">
          <VStack spacing={10}>
            <InfoBox
              title={"Blood Group"}
              description={patient.blood_group}
              path={`/blood-group/${patientName}`}
            />
            <InfoBox
              title={"Allergy"}
              description={patient.allergy}
              path={`/allergy/${patientName}`}
            />
            <InfoBox
              title={"Current Medications"}
              description={patient.current_medication}
              path={`/current-medication/${patientName}`}
            />
            <InfoBox
              title={"Emergency Contact"}
              description={patient.emergency_contact}
              path={`/emergency-contact/${patientName}`}
            />
          </VStack>
        </Box>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch(`${apiEndpoints}/api/getAllPatient`);
  const patientData = await resp.json();
  const paths = patientData.slug.map((slug: string) => {
    return { params: { name: slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params!;
  if (!name) {
    return {
      notFound: true,
    };
  }

  const resp = await fetch(`${apiEndpoints}/api/getPatient/${name}`);
  const patient = await resp.json();

  return {
    props: {
      patient: patient.data,
    },
  };
};

export default PatientLanding;
