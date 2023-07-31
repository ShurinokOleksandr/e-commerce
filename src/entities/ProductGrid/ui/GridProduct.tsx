'use client';

import { ProductResponse } from '@/entities/ProductGrid/types/PaginateType';
import { SearchParams } from '@/shared/types/SearchParams';
import { Pagination } from '@/entities/Pagination';
import React, { useState, memo } from 'react';
import { Product } from '@/entities/Product';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';

interface GridProductProps {
    searchParams:SearchParams
    paginateItems: ProductResponse
}

export function GridProduct({ paginateItems, searchParams }:GridProductProps) {
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(0);
    // Counts of pages for pagination
    const pageCounts = Math.ceil(paginateItems.count / 20);

    const handleClickPaginate = (value: number) => {
        router.push(`/product?limit=20&offset=${value}`);
        setCurrentPage(value);
    };
    return (
        <section className="border">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
                {
                    paginateItems.rows.map((item) => (
                        <Product
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
            {/* <Pagination /> */}
            <ReactPaginate
                previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                nextClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                breakLinkClassName="relative inline-flex cursor-default items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 "
                className="flex items-center  border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                onPageChange={(e) => handleClickPaginate(e.selected)}
                activeClassName="bg-indigo-600"
                forcePage={currentPage}
                pageCount={pageCounts}
                breakLabel="..."
            />
        </section>
    );
}
