import { NotFoundItems } from '@/shared/ui/NotFoundItems/ui/NotFoundItems';
import { images } from 'next/dist/build/webpack/config/blocks/images';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchStore } from '@/features/Search/model/store';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { Input } from '@/shared/ui/Input/Input';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import fetch from 'node-fetch';
import Link from 'next/link';

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const dataSearch = useSearchStore((state) => state.searchItems);
    const inputValue = useSearchStore((state) => state.searchInput);
    const setSearchInput = useSearchStore((state) => state.setSearchInput);
    const setDataSearch = useSearchStore((state) => state.setSearchItems);
    const router = useRouter();

    const searchItems = async () => {
        try {
            setIsOpen(true);
            const res = await fetch('http://localhost:4000/computers/search', {
                body: JSON.stringify({
                    name: inputValue,
                    limit: 5,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).then((data) => data.json());
            setDataSearch(res.rows);
        } catch (e) {
            console.log(e);
        }
    };
    console.log(dataSearch);
    const clearSearch = () => {
        setIsOpen(false);
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
            <div className=" absolute z-50 w-full ">

                {
                    !isOpen ? <></>
                        : (
                            <div className="bg-white border rounded-2xl animate-fade">
                                {dataSearch.map((item) => (
                                    <Link
                                        className="block   px-5 py-2 hover:bg-light-primary flex justify-between m-1"
                                        href={`product/${item.id}`}
                                    >
                                        <div className="flex gap-x-2">
                                            <Image
                                                src={JSON.parse(item.images)[0]}
                                                alt="Picture of the author"
                                                className="rounded"
                                                height={50}
                                                width={50}
                                            />
                                            <Typography position="center" text={item.name} />
                                        </div>
                                        <Typography text={`Цена: ${item.price}$`} position="center" />
                                    </Link>
                                ))}
                                <Button name="Посмотреть все..." variant="third" size="full" />
                            </div>
                        )

                }

                {/*  */}
            </div>
        </div>
    );
}
