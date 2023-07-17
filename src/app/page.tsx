import { ProductListSwiper } from '@/shared/ui/ProductListSwiper/ui/ProductListSwiper';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getBestsellers } from '@/action/getBestsellers';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export default async function Home() {
    const { rows } = await getBestsellers(10);

    return (
        <main className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto pt-10">
            <section className={twMerge('my-5')}>
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
                        <ProductListSwiper data={rows} />
                    </section>

                </section>

            </section>

        </main>
    );
}
