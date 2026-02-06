'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { REVIEWS, CONTACTS } from '@/lib/constants'

interface Testimonial {
    text: string
    avatar?: string
    author: string
}

// Use reviews from constants, take first 9 for the animation columns
const testimonials: Testimonial[] = REVIEWS.slice(0, 9)

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

// CSS-based scrolling column - much lighter than framer-motion infinite
const TestimonialsColumn = ({
    className,
    testimonials: items,
    duration = 20,
    isVisible,
}: {
    className?: string
    testimonials: Testimonial[]
    duration?: number
    isVisible: boolean
}) => {
    return (
        <div className={className}>
            <ul
                className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
                style={{
                    animation: `scrollUp ${duration}s linear infinite`,
                    animationPlayState: isVisible ? 'running' : 'paused',
                    willChange: isVisible ? 'transform' : 'auto',
                    transform: 'translateZ(0)', // Force GPU layer
                }}
            >
                {/* Duplicate items for seamless loop */}
                {[...items, ...items].map(({ text, avatar, author }, i) => (
                    <li
                        key={i}
                        className="p-8 rounded-3xl border border-pink-soft/50 shadow-soft max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group hover:shadow-medium hover:-translate-y-1"
                    >
                        <blockquote className="m-0 p-0">
                            <p className="text-text-secondary leading-relaxed font-normal m-0">
                                «{text}»
                            </p>
                            <footer className="flex items-center gap-3 mt-6">
                                {avatar ? (
                                    <img
                                        width={40}
                                        height={40}
                                        src={avatar}
                                        alt={`Аватар ${author}`}
                                        loading="lazy"
                                        className="h-10 w-10 rounded-full object-cover ring-2 ring-pink-soft group-hover:ring-pink-accent/30 transition-all duration-300 ease-in-out"
                                    />
                                ) : (
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-medium to-pink-accent flex items-center justify-center ring-2 ring-pink-soft group-hover:ring-pink-accent/30 transition-all duration-300 ease-in-out">
                                        <span className="text-white font-semibold text-sm">
                                            {author[0]}
                                        </span>
                                    </div>
                                )}
                                <cite className="font-semibold not-italic tracking-tight leading-5 text-text-primary">
                                    {author}
                                </cite>
                            </footer>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Pause animation when section is not visible
                console.log('Reviews section visible:', entry.isIntersecting)
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: 0, // Trigger as soon as any part enters/leaves
                rootMargin: '50px 0px' // Small buffer to start animation slightly before visible
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="reviews"
            aria-labelledby="testimonials-heading"
            className="bg-transparent py-16 lg:py-24 relative overflow-hidden"
        >
            {/* CSS keyframes for scrolling */}
            <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="container-custom z-10"
            >
                <div className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12">
                    <div className="flex justify-center">
                        <div className="border border-pink-medium/30 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-pink-accent bg-pink-soft/30">
                            Отзывы
                        </div>
                    </div>

                    <h2 id="testimonials-heading" className="section-title mt-6 text-center">
                        Что говорят клиенты
                    </h2>
                    <p className="text-center mt-4 section-subtitle max-w-md">
                        Я бережно храню каждое тёплое слово от тех, кто уже получил свой букет.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
                    role="region"
                    aria-label="Отзывы клиентов"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={25} isVisible={isVisible} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        className="hidden md:block"
                        duration={30}
                        isVisible={isVisible}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        className="hidden lg:block"
                        duration={28}
                        isVisible={isVisible}
                    />
                </div>

                {/* VK button */}
                <div className="text-center mt-10">
                    <a
                        href={CONTACTS.vkReviews}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-medium to-pink-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Читать больше отзывов Вконтакте
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
