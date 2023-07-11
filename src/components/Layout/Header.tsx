import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BannerStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" p="15px 20px">
        <Image src="/assets/logo.svg" alt="salt test" cursor="pointer" />
        <Image src="/assets/burger.svg" alt="salt test" cursor="pointer" />
      </Flex>
      <BannerStyled>
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <Box className="content" p="10px 30px">
          <Text
            fontSize="36px"
            fontFamily="Rubik"
            color="white"
            fontWeight="500"
            margin={0}
          >
            Discover Your Wonder
          </Text>
          <Text
            fontSize="16px"
            color="white"
            fontFamily="Rubik"
            lineHeight="24px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </Box>
        <div className="scroll">
          <Image src="/assets/scroll.svg" w="25px" alt="salt test" />
        </div>
      </BannerStyled>
    </>
  );
};

export default Header;
