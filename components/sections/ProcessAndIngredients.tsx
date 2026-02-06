import { Clock, Check } from 'lucide-react'
import { INGREDIENTS } from '@/lib/constants'

const processKeywords = [
    'красивым',
    'вкусным',
    'аккуратно упакованным',
    'наполненным заботой',
]

export default function ProcessAndIngredients() {
    return (
        <section className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                {/* 2-column grid without cards */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Column 1: Process */}
                    <div>
                        <h2 className="section-title mb-6">
                            Как я создаю букеты
                        </h2>

                        <p className="section-subtitle mb-8">
                            Я готовлю зефир вручную, небольшими партиями. Каждый лепесток формирую отдельно и собираю с вниманием к деталям.
                        </p>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {processKeywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2.5 rounded-full bg-gradient-to-br from-pink-soft/50 to-bg-accent 
                             text-pink-deep font-semibold text-sm
                             border border-pink-medium/30"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>

                        {/* Timing notice */}
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gold/10 to-gold-muted/10 border border-gold/30">
                            <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <p className="text-text-primary text-sm">
                                <strong>Срок изготовления — от 2 дней.</strong> Рекомендую оформлять заказ заранее, особенно перед праздниками.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Ingredients */}
                    <div>
                        <h2 className="section-title mb-6">
                            Простой и честный состав
                        </h2>

                        {/* Ingredients list */}
                        <ul className="space-y-4 mb-8">
                            {INGREDIENTS.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-medium to-pink-accent flex items-center justify-center">
                                        <Check className="w-4 h-4 text-white" aria-hidden="true" />
                                    </span>
                                    <span className="text-text-primary">{ingredient}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Accent text */}
                        <p className="text-text-secondary italic border-l-4 border-pink-accent pl-4">
                            Без сложных ингредиентов и лишней «химии». Только то, что делает зефир вкусным и нежным.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
