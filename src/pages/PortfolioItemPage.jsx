import { Center, Container } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'



export const PortfolioItemPage = ({ item, clickFn }) => {
    return (
        <Container borderRadius={50} margin={20} bgGradient="linear(to-l, #fafcfc, #1689c9)" >

            <Heading mb={4}>Title: {item.title}</Heading>
            <Text mb={4}>Description: {item.description}</Text>
            <Center mb={4}><img src={item.imageUrl} width={300} /></Center>
            <Button mb={4} w="fit-content" colorScheme='blue' mt='24px' onClick={() => clickFn()} >
                Back to portfolio overview
            </Button>

        </Container>
    )
}