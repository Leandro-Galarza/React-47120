import { Link } from 'react-router-dom'
import {Card, CardHeader, Stack, Divider, Heading, Text, Button, Flex, Image,} from '@chakra-ui/react'

const Item = ({ id, name, img, price, stock }) => {

  return (


<Card
  w="200px"
  height="350px"
  maxH="sm"
  display="flex"
  flexDirection="column"
  borderRadius="0"
>
  <Image src={img} w="100%" h="200px" />
  <Stack mt="2">
    <CardHeader>
    <Heading size="md">{name}</Heading>
    </CardHeader>
    <Divider />
    <Flex alignContent="center" alignItems="center">
      <Text color="blue" fontSize="3xl" marginLeft="10px">
        Price: ${price}
      </Text>
      <Text>
        Stock: {stock}
      </Text>
    </Flex>

    <Flex justifyContent="space-around" marginTop="20px" gap="0.2rem">
        <Button bg="red" color="white" fontSize="20px">
      <Link to = {`/item/${id}`} className='Option'>
          Show more
      </Link>
        </Button>

      <Link className="IDT" to={``}>
<Button color="white"fontSize="15px"bg="blue">
    Add to cart
    </Button>
    </Link>

    </Flex>

  </Stack>
</Card>


    )
    }

export default Item