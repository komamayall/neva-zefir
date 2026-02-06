import { Clock, Check, Package } from 'lucide-react'
import { INGREDIENTS } from '@/lib/constants'

const processKeywords = [
    'красивым',
    'вкусным',
    'аккуратно упакованным',
    'наполненным заботой',
]

export default function ProcessIngredientsDelivery() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-bg-secondary to-bg-primary">
            <div className="container-custom">
                {/* 3-column grid */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Column 1: Process */}
                    <div className="card h-full flex flex-col">
                        <h2 className="font-playfair text-xl lg:text-2xl font-semibold text-text-primary mb-4">
                            Как я создаю букеты
                        </h2>

                        <p className="text-text-secondary mb-6 flex-grow">
                            Я готовлю зефир вручную, небольшими партиями. Каждый лепесток формирую отдельно и собираю с вниманием к деталям.
                        </p>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-2">
                            {processKeywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 rounded-full bg-gradient-to-br from-pink-soft/50 to-bg-accent 
                             text-pink-deep font-medium text-xs
                             border border-pink-medium/30"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>

                        {/* Timing notice */}
                        <div className="flex items-start gap-3 mt-6 pt-6 border-t border-beige">
                            <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <p className="text-sm text-text-secondary">
                                <strong className="text-text-primary">Срок изготовления — от 2 дней.</strong> Рекомендую оформлять заказ заранее.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Ingredients */}
                    <div className="card h-full flex flex-col">
                        <h2 className="font-playfair text-xl lg:text-2xl font-semibold text-text-primary mb-4">
                            Простой и честный состав
                        </h2>

                        {/* Ingredients list */}
                        <ul className="space-y-3 mb-6 flex-grow">
                            {INGREDIENTS.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-pink-medium to-pink-accent flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" aria-hidden="true" />
                                    </span>
                                    <span className="text-text-primary text-sm">{ingredient}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Accent text */}
                        <p className="text-sm text-text-secondary italic border-t border-beige pt-6">
                            Без сложных ингредиентов и лишней «химии». Только то, что делает зефир вкусным и нежным.
                        </p>
                    </div>

                    {/* Column 3: Delivery */}
                    <div className="card h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-soft to-pink-medium flex items-center justify-center flex-shrink-0">
                                <Package className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <h2 className="font-playfair text-xl lg:text-2xl font-semibold text-text-primary">
                                Доставка
                            </h2>
                        </div>

                        <p className="text-text-secondary flex-grow">
                            Я аккуратно упаковываю каждый букет и доставляю его так, чтобы он приехал к вам красивым и свежим.
                        </p>

                        <div className="mt-6 pt-6 border-t border-beige space-y-3">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-pink-accent flex-shrink-0" aria-hidden="true" />
                                <span className="text-sm text-text-primary">Доставка по СПб и области</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-pink-accent flex-shrink-0" aria-hidden="true" />
                                <span className="text-sm text-text-primary">Самовывоз</span>
                            </div>
                            <p className="text-xs text-text-muted mt-2">
                                Подробности уточняю при оформлении заказа.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
