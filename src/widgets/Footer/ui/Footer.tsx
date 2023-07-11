import React from 'react';
import { Logo } from '@/shared/ui/Logo/Logo';
import Typography from '@/shared/ui/Typography/ui/Typography';
import MyLink from '@/shared/ui/Link/MyLink';

export function Footer() {
    return (
        <footer className="">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="h-52 border  p-2"><Logo className="w-1/2" /></div>
                <div className="border p-2">
                    <Typography text="Интернет Магазин" />
                    <div className="grid grid-cols-1">
                        <MyLink name="Каталог" href="/catalog" />
                        <MyLink name="Доставка и оплата" href="" />
                    </div>
                </div>
                <div className="border p-2">
                    <Typography text="Контакты" />
                    <div className="grid grid-cols-1">
                        <MyLink name="О Компании" href="/about" />
                        <MyLink name="Обратная связь" href="" />
                        <MyLink name="Оптовым покупателям" href="" />
                        <MyLink name="Контакты" href="" />
                    </div>
                </div>
                <div className="border p-2">
                    <Typography text="Контакты" />
                    <div className="grid grid-cols-1">
                        <div>
                            <Typography size="sm" text="Наш адрес:" />
                            <Typography variant="semibold" text="г. Киев, ул. ... д.... " />
                        </div>
                        <div>
                            <Typography size="sm" text="Наш контактный телефон:" />
                            <Typography variant="semibold" text="+7(8095) 555-55-55" />
                        </div>
                        <div>
                            <Typography size="sm" text="E-mail:" />
                            <Typography variant="semibold" text="info@zapchasti.com.ru" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
