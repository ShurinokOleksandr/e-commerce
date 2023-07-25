'use client';

import { MinusIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { BreadCrumbs } from '@/entities/Breadcrumbs';
import { useCartStore } from '@/entities/Product';
import Button from '@/shared/ui/Button/Button';
import React, { useEffect } from 'react';
import Image from 'next/image';

function Page() {
    const cartStore = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeFromCart);
    const incrementItem = useCartStore((state) => state.incrementItem);
    const decrementItem = useCartStore((state) => state.decrementItem);
    const sumAllItems = useCartStore((state) => state.sumAllItems);
    const sum = useCartStore((state) => state.sum);
    const removeAll = useCartStore((state) => state.removeAll);

    useEffect(() => {
        sumAllItems();
    }, [cartStore]);
    return (
        <div className="">
            <BreadCrumbs name="cart" />
            <div className="flex  items-center gap-12">
                <div className="w-4/5  ">
                    <table>
                        <thead className="border-b">
                            <tr>
                                <td className="w-1/6 p-5 text-primary font-semibold">&nbsp;</td>
                                <td className="w-3/6 p-5 text-primary font-semibold">Product</td>
                                <td className="w-1/6 p-5 text-primary font-semibold">Price</td>
                                <td className="w-2/6 p-5 text-primary font-semibold">Quantity</td>
                                <td className="w-2/6 p-5 text-primary font-semibold">Subtotal</td>
                                <td className="w-1/6 p-5 text-primary font-semibold">&nbsp;</td>

                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                cartStore.map((item) => (
                                    <tr className="border-b">
                                        <td className="w-1/6  ">
                                            <Image
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbOzSQ8dVKUHm__OTVgnNXB6qFNAb7wMR3g&usqp=CAU"
                                                className=" object-cover"
                                                height={60}
                                                width={60}
                                                alt="asi"
                                            />
                                        </td>
                                        <td className="w-3/6 p-5">{item.name}</td>
                                        <td className="w-1/6 p-5">
                                            {`${item.price} $`}
                                        </td>
                                        <td className="w-3/6 p-5 flex gap-3">
                                            <Button onClick={() => incrementItem(item.id)} icon={<PlusIcon width={10} />} variant="quantity" size="rounded" position />
                                            <Typography text={item.count} size="sm" />
                                            <Button onClick={() => decrementItem(item.id)} icon={<MinusIcon width={10} />} disabled={item.count === 1} variant="quantity" size="rounded" position />
                                        </td>
                                        <td className="w-2/6 p-5">$342</td>
                                        <td className="w-2/6 p-5">
                                            <Button onClick={() => removeItem(item.id)} icon={<XMarkIcon width={15} />} variant="quantity" size="rounded" position />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        cartStore.length === 0 && <Typography text="Товаров нет." position="center" size="lg" />
                    }
                    {
                        cartStore.length !== 0 && <Button onClick={() => removeAll()} name="Удалить всё" className="my-5" variant="third" />
                    }
                </div>
                <div className="w-1/3 border-2 p-5">
                    <Typography className="border-b my-5 font-semibold " text="CART TOTAL" />
                    <div className="flex justify-between border-b my-5">
                        <Typography className="border-b" text="Subtotal" size="sm" />
                        <Typography className="border-b" text={`${sum} $`} size="sm" />
                    </div>
                    <Button name="Оформить заказ" variant="addCart" size="full" />
                </div>
            </div>
        </div>
    );
}

export default Page;
