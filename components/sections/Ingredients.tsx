import { Check } from 'lucide-react'
import { INGREDIENTS } from '@/lib/constants'

export default function Ingredients() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-bg-secondary to-bg-primary">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="section-title mb-4">
                            Состав зефира
                        </h2>
                        <p className="section-subtitle">
                            Я использую простой и честный состав:
                        </p>
                    </div>

                    {/* Ingredients list */}
                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                        {INGREDIENTS.map((ingredient, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-pink-soft/30"
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-medium to-pink-accent flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" aria-hidden="true" />
                                </span>
                                <span className="text-text-primary">{ingredient}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Accent box */}
                    <div className="accent-box text-center">
                        <p className="text-text-primary font-medium">
                            Без сложных ингредиентов и лишней «химии». Только то, что делает зефир вкусным и нежным.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
