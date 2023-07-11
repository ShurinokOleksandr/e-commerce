import React from 'react';
import Button from '@/shared/ui/Button/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { ProductCart } from '@/entities/ProductCart';

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </div>
                </section>
            </section>

        </section>
    );
}
