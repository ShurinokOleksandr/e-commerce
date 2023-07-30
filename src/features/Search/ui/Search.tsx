import { NotFoundItems } from '@/shared/ui/NotFoundItems/ui/NotFoundItems';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchStore } from '@/features/Search/model/store';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { Input } from '@/shared/ui/Input/Input';
import React, { useState } from 'react';
import fetch from 'node-fetch';
import Link from 'next/link';

export function Search() {
    const dataSearch = useSearchStore((state) => state.searchItems);
    const inputValue = useSearchStore((state) => state.searchInput);
    const setSearchInput = useSearchStore((state) => state.setSearchInput);
    const setDataSearch = useSearchStore((state) => state.setSearchItems);

    const searchItems = async () => {
        const res = await fetch('http://localhost:4000/computers/search', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                search: inputValue,
            }),
            method: 'POST',
        }).then((data) => data.json());
        setDataSearch(res.rows);
    };
    const clearSearch = () => {
        setDataSearch([]);
        setSearchInput('');
    };
    return (
        <div className="w-3/5 mx-5 relative">
            <Input
                searchButton={(
                    <MagnifyingGlassIcon
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:cursor-pointer"
                        onClick={searchItems}
                        width={20}
                    />
                )}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Поиск товаров..."
                searchData={dataSearch}
                onClear={clearSearch}
                value={inputValue}
            />
            <div className="bg-white absolute z-50 w-full">

                {
                    dataSearch.length === 0 ? <></>
                        : dataSearch.map((item) => (
                            <Link
                                className="block border p-2 hover:bg-light-primary"
                                href={`product/${item.id}`}
                            >
                                <Typography position="center" text={item.name} />
                            </Link>
                        ))
                }
                {/* <NotFoundItems /> */}
            </div>
        </div>
    );
}
