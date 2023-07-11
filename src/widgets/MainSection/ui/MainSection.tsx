import React from 'react';
import Button from '@/shared/ui/Button/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import Typography from '@/shared/ui/Typography/ui/Typography';
import Image from 'next/image';

interface MainSectionProps {
    className: string
}

export function MainSection({ className }: MainSectionProps) {
    return (
        <section className={twMerge(className, 'my-5')}>
            <section>
                <header>
                    <div className=" w-full  md:flex justify-between ">
                        <div className="my-5">
                            <Typography
                                size="md"
                                text="Лучшие продажи"
                            />
                            <Typography
                                size="xs"
                                text=" Не пропустите актуальные предложения до конца жизни."
                            />
                        </div>
                        <div className="my-5">
                            <Button
                                variant="third"
                                name="View all"
                                position={false}
                                icon={<ArrowRightIcon width={15} />}
                            />
                        </div>
                    </div>
                </header>
                <section className="border">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="flex flex-col items-center px-6 py-2 border">
                            <div>
                                <Image
                                    className=" object-cover"
                                    width={170}
                                    height={170}
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                                    alt="asi"
                                />
                            </div>
                            <div>
                                <Typography size="sm" text="Field Roast Chao Cheese Creamy Original" />
                                <Typography size="xs" variant="stock" text="In Stock" />
                                <Typography size="md" variant="hot" text="$ 43" />
                                <Button name="Добавить" size="small" variant="addCart" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
