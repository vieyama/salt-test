import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box
        bg="#07477A"
        bgImage="url(/assets/footer-bg.svg)"
        bgRepeat="no-repeat"
        bgPosition="bottom"
        bgSize="cover"
        p={40}
        height={500}
      >
        <Image src="/assets/logo-white.svg" />
        <Box bg="white" p={20} mt={50}>
          <select className="footer-select" placeholder="Select option">
            <option value="option1">
              <Text fontWeight="700">TECHNOLOGY DEPARTMENT</Text>
            </option>
          </select>
          <Text w={200} fontSize="18px" color="#25A0D8">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </Text>
        </Box>
        <Divider mt={20} />
        <Flex direction="column">
          <Text color="white">Who We Are</Text>
          <Text color="white">Our Values</Text>
          <Text color="white">The Perks</Text>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
