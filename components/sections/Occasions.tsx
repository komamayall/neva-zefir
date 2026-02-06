import { OCCASIONS } from '@/lib/constants'

export default function Occasions() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <h2 className="section-title mb-4">
                        Букеты по поводам
                    </h2>
                    <p className="section-subtitle max-w-xl mx-auto">
                        Я создаю букеты под конкретные события и людей.
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {OCCASIONS.map((occasion, index) => (
                        <span
                            key={index}
                            className="px-5 py-2.5 rounded-full bg-gradient-to-br from-bg-accent to-pink-soft 
                         text-text-primary font-medium text-sm
                         border border-pink-medium/20
                         transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-default"
                        >
                            {occasion}
                        </span>
                    ))}
                </div>

                {/* Accent phrase */}
                <p className="text-center text-text-secondary italic max-w-lg mx-auto">
                    Иногда повод не нужен — достаточно желания порадовать.
                </p>
            </div>
        </section>
    )
}
