'use client'

import React from 'react'
import { MessageCircle, Send, Phone, MapPin, Clock, Heart } from 'lucide-react'
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/HoverFooter'
import { CONTACTS, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const contactInfo = [
        {
            icon: <MessageCircle size={18} className="text-pink-accent" />,
            text: 'Написать в ВК',
            href: CONTACTS.vk,
        },
        {
            icon: <Send size={18} className="text-pink-accent" />,
            text: 'Написать в Telegram',
            href: CONTACTS.telegram,
        },
        {
            icon: <Phone size={18} className="text-pink-accent" />,
            text: CONTACTS.phoneDisplay,
            href: `tel:${CONTACTS.phone}`,
        },
    ]

    const infoLinks = [
        { label: 'О продукте', href: '#about' },
        { label: 'Мои букеты', href: '#catalog' },
        { label: 'Отзывы', href: '#reviews' },
        { label: 'Доставка', href: '#delivery' },
        { label: 'FAQ', href: '#faq' },
    ]

    const aboutLinks = [
        {
            icon: <MapPin size={16} className="text-pink-medium" />,
            text: 'Санкт-Петербург',
        },
        {
            icon: <Clock size={16} className="text-pink-medium" />,
            text: CONTACTS.workingHours,
        },
    ]

    return (
        <footer className="bg-text-primary/95 relative rounded-t-3xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-14 pb-8 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-10">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <Heart className="text-pink-accent w-7 h-7" fill="currentColor" />
                            <span className="text-white text-2xl font-playfair font-bold">
                                Нева.Зефир
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Зефирные букеты ручной работы, которые удивляют и трогают. Необычный и вкусный подарок с доставкой по Санкт-Петербургу.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h4 className="text-white text-base font-semibold mb-5">
                            Навигация
                        </h4>
                        <ul className="space-y-3">
                            {infoLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-pink-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-white text-base font-semibold mb-5">
                            Информация
                        </h4>
                        <ul className="space-y-3">
                            {aboutLinks.map((item, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                    {item.icon}
                                    <span className="text-white/60 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div>
                        <h4 className="text-white text-base font-semibold mb-5">
                            Связаться
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    {item.icon}
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-white/60 hover:text-pink-accent transition-colors text-sm"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-white/10 my-6" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-3 md:space-y-0">
                    {/* Social message */}
                    <p className="text-white/40 text-center md:text-left">
                        Каждый букет — с любовью и заботой 💕
                    </p>

                    {/* Copyright */}
                    <p className="text-white/40">
                        © Нева.Зефир, {currentYear}
                    </p>
                </div>
            </div>

            {/* Text hover effect - desktop only */}
            <div className="lg:flex hidden h-[20rem] mt-4 -mb-24">
                <TextHoverEffect text="НеваЗефир" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    )
}
