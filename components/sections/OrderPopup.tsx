'use client'

import { useEffect, useCallback } from 'react'
import { X, MessageCircle, Send, Phone } from 'lucide-react'
import { CONTACTS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

interface OrderPopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function OrderPopup({ isOpen, onClose }: OrderPopupProps) {
    // Close on Escape key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, handleKeyDown])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className="relative w-full max-w-md bg-white rounded-3xl shadow-deep p-8 animate-fade-in-up"
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
            >
                {/* Close button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full"
                    aria-label="Закрыть"
                >
                    <X className="w-6 h-6 text-text-secondary" />
                </Button>

                {/* Content */}
                <div className="text-center">
                    <h2 id="popup-title" className="font-playfair text-2xl font-semibold text-text-primary mb-4">
                        Для заказа свяжитесь со мной
                    </h2>

                    <p className="text-text-secondary mb-8">
                        Напишите или позвоните — расскажу про наличие, сроки и помогу подобрать идеальный букет под ваш повод.
                    </p>

                    {/* Contact buttons */}
                    <div className="flex flex-col gap-3">
                        <Button asChild className="w-full h-auto py-3 gap-2 text-base shadow-md">
                            <a
                                href={CONTACTS.vk}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                Написать в ВК
                            </a>
                        </Button>

                        <Button asChild variant="outline" className="w-full h-auto py-3 gap-2 text-base">
                            <a
                                href={CONTACTS.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Send className="w-5 h-5" aria-hidden="true" />
                                Написать в Telegram
                            </a>
                        </Button>

                        <Button asChild variant="outline" className="w-full h-auto py-3 gap-2 text-base">
                            <a
                                href={`tel:${CONTACTS.phone}`}
                            >
                                <Phone className="w-5 h-5" aria-hidden="true" />
                                Позвонить: {CONTACTS.phoneDisplay}
                            </a>
                        </Button>
                    </div>

                    {/* Working hours */}
                    <p className="mt-6 text-sm text-text-muted">
                        Отвечаю ежедневно с {CONTACTS.workingHours}
                    </p>
                </div>
            </div>
        </div>
    )
}
