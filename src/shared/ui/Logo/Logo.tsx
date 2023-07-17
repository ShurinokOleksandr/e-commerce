import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
    className?:string
}
export function Logo({ className }:LogoProps) {
    return (
        <Link href="/">
            <section className={twMerge(className)}>
                <Image
                    src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                    className="hidden xl:block w-full"
                    height={43}
                    width={165}
                    alt="logo"
                />
                <Image
                    src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png"
                    className="block xl:hidden w-full"
                    height={43}
                    width={165}
                    alt="logo"
                />
                <span className="block w-max text-primary text-[0.66rem]">Online Grocery Shopping Center</span>
            </section>
        </Link>
    );
}
