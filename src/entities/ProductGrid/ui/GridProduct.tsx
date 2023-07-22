'use client';

import { ShoppingCartItem } from '@/shared/types/Product';
import { useParams, useRouter } from 'next/navigation';
import { Pagination } from '@/entities/Pagination';
import React, { useState, useMemo } from 'react';
import { Product } from '@/entities/Product';
import ReactPaginate from 'react-paginate';

export function GridProduct({ paginateItems, searchParams }) {
    const router = useRouter();

    const isValidOffset = +searchParams.offset && !isNaN(+searchParams.offset) && +searchParams.offset > 0;

    // Current page
    const [currentPage, setCurrentPage] = useState(isValidOffset ? +searchParams.offset - 1 : 0);

    // Counts of pages for pagination
    const pageCounts = Math.ceil(paginateItems.count / 16);

    console.log(paginateItems);
    console.log(searchParams.offset);
    const handle = (value) => {
        router.push(`/product?limit=16&offset=${value}`);
        setCurrentPage(value);
    };
    // const handleClick = async () => {
    //     const data = await fetch('http://localhost:4000/computers?limit=16&offset=0');
    //     if (!isValidOffset) {
    //         router.replace({
    //             query: {
    //                 offset: 1,
    //             },
    //         });
    //     }
    //     if (isValidOffset) {
    //         if (+searchParams.offset > Math.ceil(data.count / 20)) {
    //             router.push(
    //                 {
    //                     query: {
    //                         ...query,
    //                         offset: 1,
    //                     },
    //                 },
    //                 undefined,
    //                 { shallow: true },
    //             );
    //             setCurrentPage(0);
    //             return;
    //         }
    //         const offset = +searchParams.offset - 1;
    //         router.push(`/product?limit=16&offset=${offset}`);
    //         setCurrentPage(offset);
    //     }
    // };
    return (
        <section className="border">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
                {
                    paginateItems.rows.map((item:ShoppingCartItem) => (
                        <Product
                            in_stock={item.in_stock}
                            images={item.images}
                            price={item.price}
                            name={item.name}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <ReactPaginate
                previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                nextClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                breakLinkClassName="relative inline-flex cursor-default items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 "
                className="flex items-center  border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                onPageChange={(e) => handle(e.selected)}
                activeClassName="bg-indigo-600"
                forcePage={currentPage}
                pageCount={pageCounts}
                breakLabel="..."
            />
        </section>
    );
}
