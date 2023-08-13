'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { Resolver, useForm } from 'react-hook-form';
import { Simulate } from 'react-dom/test-utils';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

type FormValues = {
    firstName: string;
    lastName: string;
};
const resolver: Resolver<FormValues> = async (values) => ({
    errors: !values.firstName
        ? {
            firstName: {
                message: 'This is required.',
                type: 'required',
            },
        }
        : {},
    values: values.firstName ? values : {},
});
export default function Home() {
    const { formState: { errors }, handleSubmit, register } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit((data) => console.log(data));
    return (
        <main className="">
            <div className=" flex flex-col gap-y-10 w-1/3 border mx-auto p-20 m-14">
                <div className="flex gap-5">
                    <Button variant="third" name="Sign up" />
                    <Button variant="third" name="Sign in" />
                </div>
                <div>
                    <form className="flex flex-col gap-y-5" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="username">
                                <Typography variant="semibold" text="Username *" />
                                <input {...register('firstName')} className="px-5 py-3 rounded bg-light-primary w-full" placeholder="Username..." />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                <Typography variant="semibold" text="Password *" />
                                <input className="px-5 py-3 rounded bg-light-primary w-full" placeholder="Password..." {...register('firstName')} name="password" id="password" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <Typography variant="semibold" text="Email *" />
                                <input className="px-5 py-3 rounded bg-light-primary w-full" value="email" name="email" id="email" />
                            </label>
                        </div>
                        <Button variant="submit" type="submit" name="Submit" size="full" />
                    </form>
                </div>
            </div>
        </main>
    );
}
