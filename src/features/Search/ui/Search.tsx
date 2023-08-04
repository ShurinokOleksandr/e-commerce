import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useElementClick } from '@/shared/hooks/useElementClick';
import { useSearchStore } from '@/features/Search/model/store';
import Typography from '@/shared/ui/Typography/ui/Typography';
import React, { useEffect, useState, useRef } from 'react';
import { Input } from '@/shared/ui/Input/Input';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import fetch from 'node-fetch';
import Image from 'next/image';

export function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const dataSearch = useSearchStore((state) => state.searchItems);
    const inputValue = useSearchStore((state) => state.searchInput);
    const setSearchInput = useSearchStore((state) => state.setSearchInput);
    const setDataSearch = useSearchStore((state) => state.setSearchItems);
    const router = useRouter();
    const clearSearch = () => {
        setIsOpen(false);
        setDataSearch([]);
        setSearchInput('');
    };
    const ref = useElementClick([clearSearch]);

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

    const redirectToProduct = (id:number) => {
        router.push(`/product/${id}`);
        clearSearch();
    };

    const redirectToCatalog = (name:string) => {
        router.push(`/product/search?name=${name}`);
        setIsOpen(false);
    };
    return (
        <div className="w-3/5 mx-5 relative" ref={ref}>

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
            <div className=" absolute z-50 w-full">
                {
                    !isOpen ? <></>
                        : (
                            <div className=" bg-white border rounded-2xl animate-fade">
                                {
                                    dataSearch.map((item) => (
                                        <div
                                            className="flex px-5 py-2 hover:bg-light-primary justify-between m-1"
                                            onClick={() => redirectToProduct(item.id)}
                                            key={item.id}
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
                                        </div>
                                    ))
                                }
                                <Button
                                    onClick={() => redirectToCatalog(inputValue)}
                                    name="Посмотреть все..."
                                    variant="third"
                                    size="full"
                                />
                            </div>
                        )
                }
            </div>
        </div>

    );
}
