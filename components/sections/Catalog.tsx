'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ExternalLink, Sparkles, ChevronDown } from 'lucide-react'
import { CONTACTS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

interface Product {
    id: string
    name: string
    price: number
    status: 'в наличии' | 'под заказ'
    image: string
}

interface CatalogProps {
    onOrderClick: () => void
}

const ITEMS_PER_PAGE = 6

export default function Catalog({ onOrderClick }: CatalogProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const visibleProducts = products.slice(0, visibleCount)
    const hasMore = visibleCount < products.length

    const handleShowMore = () => {
        setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, products.length))
    }

    return (
        <section id="catalog" className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="section-title mb-4">
                        Мои букеты
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Я создаю букеты под конкретные события и людей. Иногда повод не нужен — достаточно желания порадовать!
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block w-8 h-8 border-4 border-pink-accent/30 border-t-pink-accent rounded-full animate-spin"></div>
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-12 text-text-secondary">
                        Товары скоро появятся...
                    </div>
                ) : (
                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                            {visibleProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="card group cursor-pointer"
                                    onClick={onOrderClick}
                                >
                                    {/* Product Image */}
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-soft to-bg-accent mb-4 overflow-hidden relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Status badge */}
                                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${product.status === 'в наличии'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-pink-soft text-pink-deep'
                                        }`}>
                                        {product.status}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-playfair text-lg font-semibold text-text-primary mb-2 group-hover:text-pink-accent transition-colors">
                                        {product.name}
                                    </h3>

                                    {/* Price */}
                                    <p className="text-text-secondary">
                                        от <span className="font-semibold text-text-primary">{product.price.toLocaleString('ru-RU')}</span> ₽
                                    </p>
                                </article>
                            ))}
                        </div>

                        {/* Show More Button */}
                        {hasMore && (
                            <div className="text-center mb-12">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleShowMore}
                                    className="rounded-full h-auto py-3 px-8 text-base border-pink-accent/30 text-pink-accent hover:bg-pink-soft hover:text-pink-deep hover:border-pink-accent/50 transition-all duration-300"
                                >
                                    <ChevronDown className="w-5 h-5 mr-2" />
                                    Показать ещё
                                </Button>
                            </div>
                        )}
                    </>
                )}

                {/* Two CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                        href={CONTACTS.vkMarket}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 rounded-full h-auto py-4 px-8 text-base font-medium border-2 border-pink-accent/40 bg-white/80 backdrop-blur-sm text-text-primary shadow-lg hover:shadow-xl hover:border-pink-accent hover:bg-white transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                        <ExternalLink className="w-5 h-5 text-pink-accent group-hover:scale-110 transition-transform" />
                        Смотреть все работы
                    </a>

                    <Button
                        onClick={onOrderClick}
                        size="lg"
                        className="rounded-full h-auto py-4 px-8 text-base shadow-lg hover:shadow-xl bg-gradient-to-r from-pink-accent to-pink-deep hover:from-pink-deep hover:to-pink-accent transition-all duration-300 w-full sm:w-auto"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Заказать персональный букет
                    </Button>
                </div>
            </div>
        </section>
    )
}


