import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
const SectionOne = () => {
  const dataDisplay = [
    {
      title: "Who we are",
      subTitle: "Technology Company",
      desc: " Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "What we do",
      subTitle: "Professional Brand Management",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "How we do",
      subTitle: "Strategize, Design, Collaborate",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
    },
  ];

  const [selectedDisplay, setSelectedDisplay] = useState(0);

  const handleClickNav = (type: "prev" | "next") => {
    switch (type) {
      case "prev":
        setSelectedDisplay(selectedDisplay - 1);
        break;
      case "next":
        setSelectedDisplay(selectedDisplay + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Box p="35px">
      <Box height={270}>
        <Text fontSize="35px" fontWeight="500" color="#029FE4" m={0}>
          {dataDisplay[selectedDisplay].title}
        </Text>
        <Text fontSize="18px" mt={10} mb={6}>
          {dataDisplay[selectedDisplay].subTitle}
        </Text>
        <Text color="#777777" m={0} fontSize="14px" lineHeight="24px">
          {dataDisplay[selectedDisplay].desc}
        </Text>
      </Box>
      <Box justifyContent="space-between" display="flex" alignItems="center">
        <Flex>
          <Text color="#303030" fontSize="24px" pr={5}>
            0{selectedDisplay + 1}
          </Text>
          <Text color="#C0C0C0" fontSize="24px" pr={5}>
            /
          </Text>
          <Text color="#C0C0C0" fontSize="16px" lineHeight="46px">
            0{dataDisplay.length}
          </Text>
        </Flex>
        <Flex>
          <ArrowBackIcon
            color="#B6B6B6"
            w={60}
            h={30}
            bg="#F1F1F1"
            p={5}
            onClick={() => {
              if (selectedDisplay > 0) {
                handleClickNav("prev");
              }
            }}
            cursor={selectedDisplay < 1 ? "not-allowed" : "pointer"}
          />
          <ArrowForwardIcon
            color="white"
            w={60}
            h={30}
            bg="#1BA0E1"
            p={5}
            onClick={() => {
              if (selectedDisplay < dataDisplay.length - 1)
                handleClickNav("next");
            }}
            cursor={
              selectedDisplay === dataDisplay.length - 1
                ? "not-allowed"
                : "pointer"
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionOne;
