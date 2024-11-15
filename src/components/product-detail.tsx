import { IProduct } from "@/types";
import Image from "next/image";
import { Flex, Text, Box, Button } from "@radix-ui/themes";

export function ProductDetail({ productDetail }: { productDetail: IProduct }) {
  return (
    <Flex align="start" direction="row" gap="3" ml="5em">
      <Box mt="5">
        <Image
          src={`${productDetail.image?.url}`}
          width={500}
          height={500}
          alt="Product Image"
        />
      </Box>
      <Flex gap="3" maxWidth="700px" direction="column" pl="5" pt="5">
        <Text weight="bold" color="gray">
          {productDetail.title}
        </Text>
        <Box>{productDetail.description}</Box>
        <Box maxWidth="250px">
          <Button size="2" color="gray" highContrast>
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
