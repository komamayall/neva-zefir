import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair',
    display: 'swap',
})

const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Зефирные букеты на заказ в СПб — Нева.Зефир',
    description: 'Букеты из натурального домашнего зефира ручной работы. Необычный и вкусный подарок с доставкой по Санкт-Петербургу. Изготовление от 2 дней.',
    keywords: 'зефирные букеты, зефирная флористика, зефир на заказ, подарок СПб, зефир ручной работы',
    openGraph: {
        title: 'Зефирные букеты на заказ в СПб — Нева.Зефир',
        description: 'Букеты из натурального домашнего зефира ручной работы. Необычный и вкусный подарок с доставкой по Санкт-Петербургу.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Нева.Зефир',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Зефирные букеты на заказ в СПб — Нева.Зефир',
        description: 'Букеты из натурального домашнего зефира ручной работы.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

import { AnimatedGradientHero } from '@/components/ui/animated-gradient'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
            <body className="relative">
                <AnimatedGradientHero />
                {children}
            </body>
        </html>
    )
}
