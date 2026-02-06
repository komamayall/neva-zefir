'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedFeatureCardProps extends Omit<HTMLMotionProps<'div'>, 'title'> {
    index: string
    tag: string
    title: React.ReactNode
    icon: React.ReactNode
    color: 'pink' | 'rose' | 'peach' | 'gold' | 'cream' | 'blush'
}

const colorVariants = {
    pink: {
        '--feature-color': 'hsl(340, 70%, 55%)',
        '--feature-color-light': 'hsl(340, 80%, 90%)',
        '--feature-color-dark': 'hsl(340, 50%, 97%)',
    },
    rose: {
        '--feature-color': 'hsl(350, 65%, 60%)',
        '--feature-color-light': 'hsl(350, 70%, 88%)',
        '--feature-color-dark': 'hsl(350, 50%, 97%)',
    },
    peach: {
        '--feature-color': 'hsl(20, 80%, 60%)',
        '--feature-color-light': 'hsl(20, 90%, 88%)',
        '--feature-color-dark': 'hsl(20, 60%, 97%)',
    },
    gold: {
        '--feature-color': 'hsl(43, 75%, 50%)',
        '--feature-color-light': 'hsl(43, 80%, 85%)',
        '--feature-color-dark': 'hsl(43, 50%, 97%)',
    },
    cream: {
        '--feature-color': 'hsl(30, 50%, 55%)',
        '--feature-color-light': 'hsl(30, 60%, 90%)',
        '--feature-color-dark': 'hsl(30, 40%, 97%)',
    },
    blush: {
        '--feature-color': 'hsl(0, 60%, 65%)',
        '--feature-color-light': 'hsl(0, 70%, 90%)',
        '--feature-color-dark': 'hsl(0, 50%, 98%)',
    },
}

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
    ({ className, index, tag, title, icon, color, ...props }, ref) => {
        const cardStyle = colorVariants[color] as React.CSSProperties

        return (
            <motion.div
                ref={ref}
                style={cardStyle}
                className={cn(
                    'relative flex h-[320px] w-full flex-col justify-end overflow-hidden rounded-3xl border border-beige/50 bg-white p-6 shadow-soft cursor-pointer',
                    className
                )}
                whileHover="hover"
                initial="initial"
                variants={{
                    initial: { y: 0 },
                    hover: { y: -8 },
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                {...props}
            >
                {/* Background Gradient */}
                <div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{
                        background: `radial-gradient(circle at 50% 30%, var(--feature-color-light) 0%, transparent 70%)`,
                    }}
                />

                {/* Index Number */}
                <div className="absolute top-6 left-6 font-inter text-sm font-bold text-text-muted">
                    {index}
                </div>

                {/* Main Icon - Positioned in top half */}
                <motion.div
                    className="absolute top-0 left-0 right-0 bottom-[120px] z-10 flex items-center justify-center p-4"
                    variants={{
                        initial: { scale: 1, y: 0 },
                        hover: { scale: 1.1, y: -5 },
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        {icon}
                    </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-20 rounded-2xl border border-beige/30 bg-white/90 p-4 backdrop-blur-sm">
                    <span
                        className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                            backgroundColor: 'var(--feature-color-dark)',
                            color: 'var(--feature-color)',
                        }}
                    >
                        {tag}
                    </span>
                    <p className="text-sm text-text-primary leading-relaxed">{title}</p>
                </div>
            </motion.div>
        )
    }
)
AnimatedFeatureCard.displayName = 'AnimatedFeatureCard'

export { AnimatedFeatureCard }
