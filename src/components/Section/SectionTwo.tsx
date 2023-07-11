import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useMemo } from "react";

const SectionTwo = () => {
  const dataDisplay = [
    {
      title: "Dedication",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      title: "Intellectual Honesty",
      desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
    },
    {
      title: "Curiosity",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
  ];

  const [isLargerThan580] = useMediaQuery("(min-width: 580px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [isLargerThan960] = useMediaQuery("(min-width: 960px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const boxHeight = useMemo(() => {
    let height = "90vh";
    if (isLargerThan580) {
      height = "80vh";
    }
    if (isLargerThan960) {
      height = "75vh";
    }

    return height;
  }, [isLargerThan580, isLargerThan960]);

  return (
    <Box
      p="35px"
      bg="#F8F8F8"
      height={boxHeight}
      background="url(/assets/CoreValuesIllustration.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      style={{ backgroundPositionX: "right" }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap={20}
      >
        <Text fontSize="35px" fontWeight="500" color="#029FE4" m={0}>
          Our Core Values
        </Text>

        <Text color="#777777" m={0} fontSize="14px" lineHeight="24px">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam. Montes,
          vitae, nec amet enim.
        </Text>

        {dataDisplay.map((item, key) => (
          <Box key={key} w={"80vw"}>
            <Flex alignItems="center" columnGap={14}>
              <div className="strip" />
              <Text m={0} fontSize="24px">
                {item.title}
              </Text>
            </Flex>
            <Text
              marginLeft={38}
              fontSize="16px"
              lineHeight="24px"
              color="#777777"
            >
              {item.desc}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SectionTwo;
