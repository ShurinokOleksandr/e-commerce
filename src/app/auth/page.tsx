'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { Resolver, useForm } from 'react-hook-form';
import { useProfileStore } from '@/app/auth/store';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import axios from 'axios';

type FormValues = {
    userName: string;
    password: string;
    email?:string
};

export default function Home() {
    const [isSignUp, setIsSignUp] = useState(true);

    const { formState: { errors }, handleSubmit, register } = useForm<FormValues>();

    const router = useRouter();

    const setProfile = useProfileStore((state) => state.setProfileData);
    const profile = useProfileStore((state) => state.profile);

    const onSubmit = handleSubmit(async (data) => {
        if (isSignUp) {
            axios.post('http://localhost:4000/auth-by-jwt/signup', {
                password: data.password,
                username: data.userName,
                email: data.email,
            })
                .then((response) => {
                    document.cookie = `token=${response.data.token}`;
                    setProfile(response.data);
                    toast.success('УРА');
                })
                .catch((error) => {
                    toast.error('что то не так братуха');
                });
        }
        if (!isSignUp) {
            axios.post('http://localhost:4000/auth-by-jwt/login', {
                password: data.password,
                username: data.userName,
            })
                .then((response) => {
                    document.cookie = `token=${response.data.token}`;
                    setProfile(response.data);
                    toast.success('УРА');
                })
                .catch((error) => {
                    toast.error('что то не так братуха');
                });
        }
        router.back();
    });
    return (
        <main className="">
            <Toaster />
            <div className=" flex flex-col gap-y-10 w-1/3 border mx-auto p-20 m-14">
                <div className="flex gap-5">
                    <Button
                        className={isSignUp ? 'bg-amber-300' : 'none'}
                        onClick={() => setIsSignUp(true)}
                        variant="third"
                        name="Sign up"
                    />
                    <Button
                        className={!isSignUp ? 'bg-amber-300' : 'none'}
                        onClick={() => setIsSignUp(false)}
                        variant="third"
                        name="Sign in"
                    />
                </div>
                <div>
                    <form className="flex flex-col gap-y-5" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="username">
                                <Typography variant="semibold" text="Username *" />
                                <input autoComplete="none" required {...register('userName')} className="px-5 py-3 rounded bg-light-primary w-full" placeholder="Username..." />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                <Typography variant="semibold" text="Password *" />
                                <input className="px-5 py-3 rounded bg-light-primary w-full" placeholder="Password..." required {...register('password')} name="password" id="password" />
                            </label>
                        </div>
                        {
                            isSignUp
                                ? (
                                    <div>
                                        <label htmlFor="email">
                                            <Typography variant="semibold" text="Email *" />
                                            <input className="px-5 py-3 rounded bg-light-primary w-full" placeholder="Email...." required {...register('email')} name="email" id="email" />
                                        </label>
                                    </div>
                                )
                                : <></>
                        }
                        <Button variant="submit" type="submit" name="Submit" size="full" />
                    </form>
                </div>
            </div>
        </main>
    );
}
