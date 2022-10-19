import { Flex, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
  title: string;
  description: string;
  path: string;
}

export const InfoBox: React.FC<Props> = ({ title, description, path }) => {
  const router = useRouter();
  return (
    <Box
      w="100%"
      cursor="pointer"
      onClick={() => router.push(path)}
      p="20px"
      borderRadius="12px"
      bgColor="#F2F3F4"
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="lg" fontWeight="700">
            {" "}
            {title}
          </Text>
          <Text fontSize="md" ml="30px">
            {description}
          </Text>
        </Box>

        <IoMdAddCircleOutline color="#f85151" fontSize="50px" />
      </Flex>
    </Box>
  );
};
