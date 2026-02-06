import { Star, Gift, MapPin, Clock } from 'lucide-react'
import { TRUST_BADGES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Swirls } from '@/components/ui/hero-section-7'

const heroImages = [
    {
        src: '/img/plate_sm.webp',
        alt: 'Тарелка с зефиром',
        // Top-Left: Desktop lowered slightly (lg:top-[4%]).
        wrapperClass: 'absolute top-[5%] left-[2%] sm:top-[5%] sm:left-[5%] lg:left-[2%] xl:left-[5%] 2xl:left-[18%] lg:top-[4%] rotate-[35deg] z-10',
        imgClass: 'w-16 sm:w-28 md:w-36 lg:w-40 animate-float drop-shadow-2xl object-contain transition-opacity',
        delay: 0
    },
    {
        src: '/img/circlebox_sm.webp',
        alt: 'Коробка сладостей',
        // Top-Right: Desktop lowered slightly (lg:top-[6%]).
        wrapperClass: 'absolute top-[8%] right-[2%] sm:top-[5%] sm:right-[5%] lg:right-[2%] xl:right-[5%] 2xl:right-[18%] lg:top-[6%] rotate-[-15deg] z-10',
        imgClass: 'w-16 sm:w-28 md:w-36 lg:w-40 animate-float drop-shadow-2xl object-contain transition-opacity',
        delay: 1500
    },
    {
        src: '/img/buket_sm.webp',
        alt: 'Зефирный букет',
        // Bottom-Right: Mobile raised (bottom-[25%]) to be above buttons.
        wrapperClass: 'absolute bottom-[25%] right-[0%] sm:bottom-[10%] sm:right-[5%] lg:right-[2%] xl:right-[5%] 2xl:right-[18%] lg:bottom-[5%] rotate-[-10deg] z-20',
        imgClass: 'w-20 sm:w-40 md:w-52 lg:w-56 animate-float drop-shadow-2xl object-contain transition-opacity',
        delay: 1000
    },
    {
        src: '/img/giftbox_sm.webp',
        alt: 'Подарочный набор',
        // Bottom-Left: Mobile raised (bottom-[30%]) to be above buttons.
        wrapperClass: 'absolute bottom-[30%] left-[0%] sm:bottom-[15%] sm:left-[5%] lg:left-[2%] xl:left-[5%] 2xl:left-[18%] lg:bottom-[8%] rotate-[8deg] z-10',
        imgClass: 'w-20 sm:w-36 md:w-44 lg:w-52 animate-float drop-shadow-2xl object-contain transition-opacity',
        delay: 2500
    }
]

const iconMap = {
    Star,
    Gift,
    MapPin,
    Clock,
}

interface HeroProps {
    onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
    return (
        <section className="relative w-full flex items-center pt-20 lg:pt-24 pb-10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Swirls />
            </div>

            {/* Flying Images */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={image.wrapperClass}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={image.imgClass}
                            style={{ animationDelay: `${image.delay}ms` }}
                        />
                    </div>
                ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-pink-soft/40 blur-3xl -z-10" aria-hidden="true" />
            <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-bg-accent/60 blur-3xl -z-10" aria-hidden="true" />

            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main heading */}
                    <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight mb-6">
                        Зефирные букеты, которые <span className="text-gradient">удивляют и трогают</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                        Красивые букеты из натурального домашнего зефира. Зефирная флористика — тёплый, вкусный и по-настоящему незабываемый подарок.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button asChild size="lg" className="rounded-full h-auto py-4 px-8 text-base shadow-lg hover:shadow-xl">
                            <a href="#catalog">
                                Посмотреть букеты
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={onOrderClick}
                            className="rounded-full h-auto py-4 px-8 text-base"
                        >
                            Заказать индивидуальный букет
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {TRUST_BADGES.map((badge, index) => {
                            const Icon = iconMap[badge.icon as keyof typeof iconMap]
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 justify-center p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-pink-soft/30"
                                >
                                    <Icon className="w-5 h-5 text-pink-accent flex-shrink-0" aria-hidden="true" />
                                    <span className="text-sm text-text-secondary">{badge.text}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
