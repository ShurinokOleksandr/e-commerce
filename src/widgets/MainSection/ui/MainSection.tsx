import Typography from '@/shared/ui/Typography/ui/Typography';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ProductCart } from '@/entities/ProductCart';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import React from 'react';

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
                                text="Лучшие продажи"
                                size="md"
                            />
                            <Typography
                                text=" Не пропустите актуальные предложения до конца жизни."
                                size="xs"
                            />
                        </div>
                        <div className="my-5">
                            <Button
                                icon={<ArrowRightIcon width={15} />}
                                position={false}
                                name="View all"
                                variant="third"
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
