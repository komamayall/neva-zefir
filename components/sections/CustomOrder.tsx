import { MessageCircle, Send, Phone } from 'lucide-react'
import { CONTACTS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function CustomOrder() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="section-title mb-6">
                        Индивидуальный букет под ваш повод
                    </h2>

                    <p className="section-subtitle mb-10">
                        Хотите букет, которого больше ни у кого не будет? Я с радостью создам его для вас. Напишите или позвоните — обсудим детали.
                    </p>

                    {/* Contact buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full h-auto py-3 px-6 gap-2">
                            <a
                                href={CONTACTS.vk}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                Написать в ВК
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="rounded-full h-auto py-3 px-6 gap-2">
                            <a
                                href={CONTACTS.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Send className="w-5 h-5" aria-hidden="true" />
                                Написать в Telegram
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="rounded-full h-auto py-3 px-6 gap-2">
                            <a
                                href={`tel:${CONTACTS.phone}`}
                            >
                                <Phone className="w-5 h-5" aria-hidden="true" />
                                Позвонить
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
