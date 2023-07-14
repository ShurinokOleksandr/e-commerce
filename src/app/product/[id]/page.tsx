import Typography from '@/shared/ui/Typography/ui/Typography';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    // const data = await getLol(params.id);
    const tex = 'Lenovo';
    return (
        <main className=" shadow">
            <div className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto pt-10">
                <div className="h-16 bg-green-50">крошки хлебные</div>
                <section className="bg-white">
                    <div>
                        <div>
                            <Typography text="Name product" />
                            <div className="flex gap-2 divide-x-2">
                                <Typography text={`Name brand: ${tex}`} size="xs" />
                                <div className="flex px-2">
                                    <Typography className="font-semibold" text="Articular code:" size="xs" />
                                    <Typography text={tex} size="xs" />
                                </div>

                            </div>
                        </div>
                        <div />
                    </div>
                </section>
            </div>
        </main>
    );
}
