import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
    className?:string
}
export function Logo({ className }:LogoProps) {
    return (
        <section className={twMerge(className)}>
            <Image
                width={165}
                height={43}
                src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                alt="logo"
                className="hidden xl:block w-full"
            />
            <Image
                width={165}
                height={43}
                src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png"
                alt="logo"
                className="block xl:hidden w-full"
            />
            <span className="block w-max text-primary text-[0.66rem]">Online Grocery Shopping Center</span>
        </section>
    );
}
