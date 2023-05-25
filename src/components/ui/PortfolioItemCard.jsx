import { Card, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'



export const PortfolioItemCard = ({ item, clickFn }) => {
    return (
        <Card maxW='sm' onClick={() => clickFn(item)}>

            <CardBody >
                <Center>
                    <Image
                        h={64}
                        w={64}
                        src={item.imageUrl}
                        alt={item.title}
                        borderRadius='lg'
                    />
                </Center>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.title}</Heading>
                    <Text>{item.description}</Text>
                </Stack>
            </CardBody>
            <Center >
                <CardFooter >
                    <Flex gap={2}>
                        {/* <Tag colorScheme='blue' >{item.skills}</Tag> */}
                        {item.skills.map((skill) => (
                            <Tag colorScheme='blue' key={skill}>{skill}</Tag>))}
                    </Flex>
                </CardFooter>
            </Center>

        </Card >

    )


}
