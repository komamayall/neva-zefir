import { Send, Phone } from 'lucide-react'
import { Icons } from '@/components/ui/Icons'
import { CONTACTS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

interface AboutAndOrderProps {
    onOrderClick?: () => void
}

export default function AboutAndOrder({ onOrderClick }: AboutAndOrderProps) {
    return (
        <section className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                    {/* About master part */}
                    <div className="text-center mb-12">
                        <h2 className="section-title mb-6">
                            Нева.Зефир — про тепло и заботу
                        </h2>

                        <p className="section-subtitle leading-relaxed mb-8">
                            Я делаю зефирные букеты, потому что люблю дарить эмоции. Для меня подарок — это не просто вещь. Это внимание, тепло и желание порадовать. Я верю, что именно такие подарки запоминаются надолго.
                        </p>
                    </div>

                    {/* Custom order part */}
                    <div className="bg-white/70 backdrop-blur-md shadow-lg border border-white/50 rounded-3xl p-8 lg:p-12 text-center">
                        <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-text-primary mb-4">
                            Индивидуальный букет под ваш повод
                        </h3>

                        <p className="text-text-secondary mb-8">
                            Хотите букет, которого больше ни у кого не будет? Я с радостью создам его для вас. Напишите или позвоните — обсудим детали.
                        </p>

                        {/* Contact buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild variant="outline" className="rounded-full h-auto py-3 px-6 gap-2">
                                <a
                                    href={CONTACTS.vk}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icons.VK className="w-5 h-5" aria-hidden="true" />
                                    Написать в ВК
                                </a>
                            </Button>

                            <Button asChild variant="outline" className="rounded-full h-auto py-3 px-6 gap-2">
                                <a
                                    href={CONTACTS.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Send className="w-5 h-5" aria-hidden="true" />
                                    Написать в Telegram
                                </a>
                            </Button>

                            <Button asChild variant="outline" className="rounded-full h-auto py-3 px-6 gap-2">
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
            </div>
        </section>
    )
}
