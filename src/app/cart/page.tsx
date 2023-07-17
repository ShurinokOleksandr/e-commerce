import { MinusIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { BreadCrumbs } from '@/entities/Breadcrumbs';
import Button from '@/shared/ui/Button/Button';
import Image from 'next/image';
import React from 'react';

function Page() {
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
                            <tr className="border-b">
                                <td className="w-1/6  ">
                                    <Image
                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                                        className=" object-cover"
                                        height={60}
                                        width={60}
                                        alt="asi"
                                    />
                                </td>
                                <td className="w-3/6 p-5">LEnovo</td>
                                <td className="w-1/6 p-5">$342</td>
                                <td className="w-3/6 p-5 flex gap-3">
                                    <Button icon={<PlusIcon width={10} />} variant="quantity" size="rounded" position />
                                    <Typography size="sm" text={15} />
                                    <Button icon={<MinusIcon width={10} />} variant="quantity" size="rounded" position />
                                </td>
                                <td className="w-2/6 p-5">$342</td>
                                <td className="w-2/6 p-5">
                                    <Button icon={<XMarkIcon width={15} />} variant="quantity" size="rounded" position />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button name="Удалить всё" className="my-5" variant="third" />
                </div>
                <div className="w-1/3 border-2 p-5">
                    <Typography className="border-b my-5 font-semibold " text="CART TOTAL" />
                    <div className="flex justify-between border-b my-5">
                        <Typography className="border-b  " text="Subtotal" size="sm" />
                        <Typography className="border-b " text="$3432" size="sm" />
                    </div>
                    <Button name="Оформить заказ" variant="addCart" size="full" />
                </div>
            </div>
        </div>
    );
}

export default Page;
