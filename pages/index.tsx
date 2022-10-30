import { Box, Container, Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Patient } from "../src/@types/patient";
import { apiEndpoints } from "../src/config";
import { getAllPatient } from "../src/utils/fetchPatient";

interface Props {
  patients: Patient[];
  paths: string[];
}

const Home: NextPage<Props> = ({ patients, paths }) => {
  const router = useRouter();
  return (
    <Container mt="20px">
      <Text color="red"> This page is made for pitching purpose only </Text>
      <Box>
        {patients.map((patient, i) => {
          return (
            <Box
              cursor="pointer"
              onClick={() => router.push(`/patient/${paths[i]}`)}
              key={patient.name}
              borderRadius="10px"
              my="10px"
              p="10px"
              style={{ border: "1px solid black" }}
            >
              <Text> Name: {patient.name} </Text>
              <Text> paths: {`/patient/${paths[i]}`} </Text>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const resp = await fetch(`${apiEndpoints}/api/getAllPatient`);
  // const patient = await resp.json();
  const patient = await getAllPatient();

  return {
    props: {
      patients: patient.data,
      paths: patient.slug,
    },
  };
};

export default Home;
