'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <h2 className="section-title text-center mb-10">
                        Частые вопросы
                    </h2>

                    <div className="space-y-4">
                        {FAQ_ITEMS.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white shadow-soft overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer
                             hover:bg-bg-secondary/50 transition-colors duration-200
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent focus-visible:ring-inset"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="font-playfair text-lg font-semibold text-text-primary">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-pink-accent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        aria-hidden="true"
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-text-secondary leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
