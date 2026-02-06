'use client'

import { useState, useEffect, useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { REVIEWS, CONTACTS } from '@/lib/constants'
import Image from 'next/image'

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Show 4 reviews at a time on desktop, 2 on tablet, 1 on mobile
    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 4
        if (window.innerWidth < 640) return 1
        if (window.innerWidth < 1024) return 2
        return 4
    }

    const [visibleCount, setVisibleCount] = useState(4)

    useEffect(() => {
        const handleResize = () => setVisibleCount(getVisibleCount())
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const maxIndex = Math.max(0, REVIEWS.length - visibleCount)

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
    }, [maxIndex])

    const prevSlide = () => {
        setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
    }

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + visibleCount)

    return (
        <section id="reviews" className="py-16 lg:py-24 bg-gradient-to-b from-bg-secondary to-pink-soft/30">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">
                        Отзывы
                    </h2>
                    <p className="section-subtitle">
                        Я бережно храню каждое тёплое слово.
                    </p>
                </div>

                {/* Carousel container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-soft transition-colors"
                        aria-label="Предыдущий отзыв"
                    >
                        <ChevronLeft className="w-5 h-5 text-text-primary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-soft transition-colors"
                        aria-label="Следующий отзыв"
                    >
                        <ChevronRight className="w-5 h-5 text-text-primary" />
                    </button>

                    {/* Reviews grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {visibleReviews.map((review) => (
                            <article
                                key={review.id}
                                className="relative p-6 rounded-3xl bg-white shadow-soft flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Quote icon */}
                                <Quote
                                    className="absolute top-4 right-4 w-8 h-8 text-pink-soft opacity-60"
                                    aria-hidden="true"
                                />

                                {/* Review text */}
                                <blockquote className="mb-auto flex-1">
                                    <p className="text-text-primary text-sm leading-relaxed italic line-clamp-6">
                                        «{review.text}»
                                    </p>
                                </blockquote>

                                {/* Author */}
                                <footer className="flex items-center gap-3 mt-4 pt-4 border-t border-pink-soft/30">
                                    {review.avatar ? (
                                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                            <Image
                                                src={review.avatar}
                                                alt={review.author}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-medium to-pink-accent flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-semibold text-sm">
                                                {review.author[0]}
                                            </span>
                                        </div>
                                    )}
                                    <cite className="not-italic font-medium text-text-secondary text-sm">
                                        {review.author}
                                    </cite>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(REVIEWS.length / visibleCount) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx * visibleCount)}
                            className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentIndex / visibleCount) === idx
                                ? 'bg-pink-accent w-6'
                                : 'bg-pink-soft hover:bg-pink-medium'
                                }`}
                            aria-label={`Перейти к странице ${idx + 1}`}
                        />
                    ))}
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
            </div>
        </section>
    )
}
