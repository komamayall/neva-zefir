'use client'

// Icons removed as they were replaced by images
import { AnimatedFeatureCard } from '@/components/ui/AnimatedFeatureCard'

const advantages = [
    {
        index: '001',
        tag: 'Эстетика',
        title: 'Выглядит как живые цветы, но это зефир',
        icon: <img src="/img/estetik1.png" alt="Эстетика" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'pink' as const,
    },
    {
        index: '002',
        tag: 'Ручная работа',
        title: 'Каждый букет создаётся вручную',
        icon: <img src="/img/handmade.png" alt="Ручная работа" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'rose' as const,
    },
    {
        index: '003',
        tag: 'Натуральность',
        title: 'Натуральный, понятный состав',
        icon: <img src="/img/natural.png" alt="Натуральность" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'peach' as const,
    },
    {
        index: '004',
        tag: 'Подарок',
        title: 'Подарок, который действительно запоминается',
        icon: <img src="/img/memorable.png" alt="Подарок" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'gold' as const,
    },
    {
        index: '005',
        tag: 'Практичность',
        title: 'Не завянет и не испортит настроение — только порадует и накормит',
        icon: <img src="/img/practical.png" alt="Практичность" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'cream' as const,
    },
    {
        index: '006',
        tag: 'Отзывы',
        title: 'Часто слышу: «Это самый нежный подарок, который я дарила»',
        icon: <img src="/img/reviews.png" alt="Отзывы" className="w-40 h-40 object-contain filter drop-shadow-lg" />,
        color: 'blush' as const,
    },
]

export default function Advantages() {
    return (
        <section className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <h2 className="section-title text-center mb-12">
                    Почему выбирают «Нева.Зефир»
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((advantage) => (
                        <AnimatedFeatureCard
                            key={advantage.index}
                            index={advantage.index}
                            tag={advantage.tag}
                            title={advantage.title}
                            icon={advantage.icon}
                            color={advantage.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
