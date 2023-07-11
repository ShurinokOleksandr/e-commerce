import React from 'react';
import { Header } from '@/widgets/Header';
import { MainSection } from '@/widgets/MainSection';
import { Footer } from '@/widgets/Footer';

export default function Home() {
    return (
        <main className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto pt-10">
            <Header />
            <MainSection className=" " />
            <Footer />
        </main>
    );
}
