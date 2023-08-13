'use client';

import { ProductResponse } from '@/entities/ProductGrid/types/PaginateType';
import { useProductStore } from '@/entities/ProductGrid/model/store';
import { useSetPaginate } from '@/shared/hooks/useSetPaginate';
import { useGetParams } from '@/shared/hooks/useGetParams';
import { Product } from '@/entities/Product';
import ReactPaginate from 'react-paginate';
import React from 'react';

interface GridProductProps {
    paginateUrl:string
    paginateItems: ProductResponse
}

export function GridProduct({ paginateItems, paginateUrl }:GridProductProps) {
    const paginate = useProductStore((state) => state.paginate);

    const { parts, sort, pc } = useGetParams();

    const handleClickPaginate = useSetPaginate();
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
                onPageChange={(e) => handleClickPaginate(`${paginateUrl}${e.selected}${pc}${parts}${sort}`, e.selected)}
                className="flex items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                pageCount={Math.ceil(paginateItems.count / 20)}
                activeClassName="bg-indigo-600"
                forcePage={paginate}
                breakLabel="..."
            />
        </section>
    );
}
