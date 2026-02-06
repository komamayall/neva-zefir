import Image from 'next/image'

export default function AboutProduct() {
    return (
        <section id="about" className="py-16 lg:py-24 bg-transparent">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <div className="text-left">
                        <h2 className="section-title mb-6 text-left">
                            Что такое зефирная флористика
                        </h2>

                        <p className="section-subtitle mb-8 text-left mx-0">
                            Зефирная флористика — это необычно, эстетично и очень душевно. Я создаю букеты и цветочные композиции из зефира в красивых подарочных коробках. Каждый лепесток леплю вручную, поэтому точь-в-точь повторить композицию невозможно. Именно в этом её уникальность.
                        </p>

                        {/* Accent box */}
                        <div className="accent-box mx-0">
                            <p className="text-text-primary font-medium italic">
                                На вкус мой зефир — нежное облачко: умеренно сладкое, тающее во рту и вызывающее искреннее «вау».
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/img/creator.jpg"
                            alt="Мастер зефирной флористики"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

