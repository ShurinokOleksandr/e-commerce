import Typography from '@/shared/ui/Typography/ui/Typography';
import MyLink from '@/shared/ui/Link/MyLink';
import { Logo } from '@/shared/ui/Logo/Logo';
import React from 'react';

export function Footer() {
    return (
        <footer className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto mt-20 ">
            <div className="grid border-t pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="h-52   p-2"><Logo className="w-1/2" /></div>
                <div className=" p-2">
                    <Typography text="Интернет Магазин" />
                    <div className="grid grid-cols-1">
                        <MyLink href="/catalog" name="Каталог" />
                        <MyLink name="Доставка и оплата" href="" />
                    </div>
                </div>
                <div className=" p-2">
                    <Typography text="Контакты" />
                    <div className="grid grid-cols-1">
                        <MyLink name="О Компании" href="/about" />
                        <MyLink name="Обратная связь" href="" />
                        <MyLink name="Оптовым покупателям" href="" />
                        <MyLink name="Контакты" href="" />
                    </div>
                </div>
                <div className=" p-2">
                    <Typography text="Контакты" />
                    <div className="grid grid-cols-1">
                        <div>
                            <Typography text="Наш адрес:" size="sm" />
                            <Typography text="г. Киев, ул. ... д.... " variant="semibold" />
                        </div>
                        <div>
                            <Typography text="Наш контактный телефон:" size="sm" />
                            <Typography text="+7(8095) 555-55-55" variant="semibold" />
                        </div>
                        <div>
                            <Typography text="E-mail:" size="sm" />
                            <Typography text="info@zapchasti.com.ru" variant="semibold" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
