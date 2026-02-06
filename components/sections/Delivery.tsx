import { Package } from 'lucide-react'

export default function Delivery() {
    return (
        <section id="delivery" className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-soft to-pink-medium flex items-center justify-center">
                                <Package className="w-12 h-12 text-white" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="section-title mb-4">
                                Доставка
                            </h2>

                            <p className="section-subtitle">
                                Я аккуратно упаковываю каждый букет и доставляю его так, чтобы он приехал к вам красивым и свежим. Доступна доставка и самовывоз. Подробности уточняю при оформлении заказа.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
