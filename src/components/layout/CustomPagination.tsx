"use client";

import React from "react";
import Pagination from "react-js-pagination";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  resPerPage: number;
  filteredRoomsCount: number;
}

export default function CustomPagination( { 
  resPerPage, 
  filteredRoomsCount
}: Props ) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }

      const path = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(path);
    }
  };

  return (
    <div>
      {resPerPage < filteredRoomsCount && (
        <div className="flex justify-center mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={filteredRoomsCount}
            onChange={handlePageChange}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="btn mx-1"
            linkClass="link-primary link-hover"

          />
        </div>
      )}
    </div>
  );
}
