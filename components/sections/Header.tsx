'use client'

import React from 'react'
import { Heart, MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeaderProps {
    onOrderClick: () => void
}

export default function Header({ onOrderClick }: HeaderProps) {
    const [open, setOpen] = React.useState(false)

    const links = [
        { label: 'О продукте', href: '#about' },
        { label: 'Букеты', href: '#catalog' },
        { label: 'Отзывы', href: '#reviews' },
        { label: 'Доставка', href: '#delivery' },
        { label: 'FAQ', href: '#faq' },
    ]

    return (
        <header
            className={cn(
                'sticky top-4 z-50',
                'mx-4 lg:mx-auto w-auto lg:max-w-5xl rounded-2xl border border-pink-soft/50 shadow-soft',
                'bg-white/90 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg'
            )}
        >
            <nav className="flex items-center justify-between p-2 lg:p-2.5">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-pink-soft/30 transition-colors"
                >
                    <Heart className="size-5 text-pink-accent" fill="currentColor" />
                    <span className="font-playfair text-lg font-bold text-text-primary">
                        Нева.Зефир
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-2">
                    <Button size="sm" onClick={onOrderClick} className="hidden sm:inline-flex rounded-full px-5">
                        Заказать
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className="lg:hidden"
                            aria-label="Открыть меню"
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                        <SheetContent
                            className="bg-white/95 supports-[backdrop-filter]:bg-white/90 gap-0 backdrop-blur-lg"
                            showClose={true}
                            side="left"
                        >
                            <div className="grid gap-y-1 overflow-y-auto px-4 pt-16 pb-5">
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start text-base',
                                        })}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <SheetFooter>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setOpen(false)
                                        onOrderClick()
                                    }}
                                    className="w-full"
                                >
                                    Написать нам
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOpen(false)
                                        onOrderClick()
                                    }}
                                    className="w-full"
                                >
                                    Заказать букет
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
