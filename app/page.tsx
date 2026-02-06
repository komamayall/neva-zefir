'use client'

import { useState } from 'react'
import {
    Header,
    Hero,
    AboutProduct,
    Catalog,
    Advantages,
    ProcessAndIngredients,
    AboutAndOrder,
    TestimonialsSection,
    Delivery,
    FAQ,
    Footer,
    OrderPopup,
} from '@/components'

export default function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => setIsPopupOpen(true)
    const closePopup = () => setIsPopupOpen(false)

    return (
        <>
            <Header onOrderClick={openPopup} />

            <main>
                {/* 1. Hero */}
                <Hero onOrderClick={openPopup} />

                {/* 2. Что такое зефирная флористика */}
                <AboutProduct />

                {/* 3. Мои букеты */}
                <Catalog onOrderClick={openPopup} />

                {/* 4. Почему выбирают «Нева.Зефир» */}
                <Advantages />

                {/* 5. Процесс + Состав (2 колонки) */}
                <ProcessAndIngredients />

                {/* 6. О мастере + Индивидуальный заказ */}
                <AboutAndOrder />

                {/* 7. Отзывы */}
                <TestimonialsSection />

                {/* 8. Доставка */}
                <Delivery />

                {/* 9. Частые вопросы */}
                <FAQ />
            </main>

            {/* 10. Footer */}
            <Footer />

            <OrderPopup isOpen={isPopupOpen} onClose={closePopup} />
        </>
    )
}
