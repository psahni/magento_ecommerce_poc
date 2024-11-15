import React from "react";
import ReactPaginate from "react-paginate";
import { PER_PAGE } from "@/constants";
import { Flex } from "@radix-ui/themes";
import { useProductStore } from "@/store/provider";

export const PaginateProductList = React.memo(function PaginateProductList({
  handlePageClick,
}: {
  handlePageClick: ({ selected }: { selected: number }) => void;
}) {
  const { currentPage, totalProducts } = useProductStore((state) => state);
  const pageCount = Math.ceil(totalProducts / PER_PAGE);

  return totalProducts > 0 ? (
    <Flex
      flexShrink="0"
      gap="20"
      wrap="wrap"
      direction="row"
      width="100%"
      justify="center"
      mb="3em"
    >
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-link block w-8 h-8 text-center border border-gray-100 rounded leading-8"
        pageLinkClassName="text-blue-600"
        previousClassName="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
        previousLinkClassName="page-link"
        nextClassName="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
        nextLinkClassName="page-link text-red-800"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex justify-center text-xs font-medium space-x-1"
        activeClassName="active"
        renderOnZeroPageCount={undefined}
        initialPage={currentPage}
        disableInitialCallback={true}
      />
    </Flex>
  ) : (
    <></>
  );
});
