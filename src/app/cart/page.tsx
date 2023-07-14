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
                <div className="w-4/5 flex flex-col ">
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
                    <Button className="justify-end" variant="secondary" name="Удалить всё" />
                </div>
                <div className="w-1/3 bg-primary">
                    cart toal
                </div>
            </div>
        </div>
    );
}

export default Page;
