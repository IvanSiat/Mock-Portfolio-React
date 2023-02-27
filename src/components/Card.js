import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderWidth="1px" borderRadius="md" overflow="hidden" bg="white">
      <Image src={imageSrc} alt={title} width="100%" height="auto" />
      <VStack alignItems="start" p={4} >
        <Heading size="md" color="black">{title}</Heading>
        <Text fontSize="sm" color="gray.500">
          {description}
        </Text>
        <HStack justifyContent="space-between" w="100%">
          <Text fontSize="sm" color="black">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
          
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
