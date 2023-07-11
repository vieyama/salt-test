import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const slider = React.useRef(null);

  return (
    <Box p="35px" bg="#509FDD">
      <Box bg="white" p={40}>
        <Text fontSize="35px" fontWeight="500" color="#029FE4">
          OUR SPECIALITY
        </Text>

        <Text color="#777777" m={0} fontSize="14px" lineHeight="24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </Text>
        <Divider my={20} />
        <Slider {...settings} ref={slider}>
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <VStack>
                <Image src={`/assets/slide-${item}.png`} />
                <Text color="#A7A7A7" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </Text>
              </VStack>
            </div>
          ))}
        </Slider>
        <Flex justifyContent="space-between">
          <Button
            border="none"
            bg="transparent"
            cursor="pointer"
            onClick={() => slider?.current?.slickPrev()}
          >
            <ArrowBackIcon w={20} h={20} />
          </Button>
          <Button
            border="none"
            bg="transparent"
            cursor="pointer"
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowForwardIcon w={20} h={20} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionThree;
