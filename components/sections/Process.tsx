import { Clock } from 'lucide-react'

const processKeywords = [
    'красивым',
    'вкусным',
    'аккуратно упакованным',
    'наполненным заботой',
]

export default function Process() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="section-title mb-6">
                            Как я создаю букеты
                        </h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            Я готовлю зефир вручную, небольшими партиями. Каждый лепесток формирую отдельно и собираю с вниманием к деталям.
                        </p>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {processKeywords.map((keyword, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 rounded-2xl bg-gradient-to-br from-pink-soft/50 to-bg-accent 
                           text-pink-deep font-semibold text-sm
                           border border-pink-medium/30"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>

                    {/* Notice */}
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-gold/10 to-gold-muted/10 border border-gold/30">
                        <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-text-primary">
                            <strong>Срок изготовления — от 2 дней.</strong> Рекомендую оформлять заказ заранее, особенно перед праздниками.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
