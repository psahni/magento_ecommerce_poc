import { Flex, Text, Card, Box, Link, Button } from "@radix-ui/themes";
import Image from "next/image";

export function ProductCard({
  title,
  slug,
  imageUrl,
}: {
  title: string;
  slug: string;
  imageUrl: string | undefined;
}) {
  return (
    <Card size="1" className="h-fit" m="3em">
      <Flex mb="2">
        <Image
          src={`${imageUrl}`}
          width={280}
          height={212}
          style={{ borderRadius: "var(--radius-1)" }}
          alt="Product Image"
          priority={true}
        />
      </Flex>
      <Flex align="center" justify="between" gap="3">
        <Box>
          <Link
            href={`/products/${slug}`}
            underline="hover"
            color="gray"
            size="2"
            weight="bold"
            highContrast
            tabIndex={1}
          >
            {title}
          </Link>
          <Text size="2" color="gray" as="p">
            Simple and versatile
          </Text>
        </Box>
        <Box flexShrink="0">
          <Button
            tabIndex={1}
            size="2"
            variant="soft"
            color="gray"
            highContrast
          >
            Shop now
          </Button>
        </Box>
      </Flex>
    </Card>
  );
}
