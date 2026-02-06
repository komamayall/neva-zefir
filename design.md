# Дизайн-инструкции для AI (Cursor / Antigravity)

## 🎨 Общая эстетика: "Soft Feminine Luxury"

Стиль объединяет элементы мягкой женственности, современного минимализма и премиальной эстетики. Дизайн должен вызывать ощущение уюта, заботы и профессионализма одновременно.

---

## 📋 Цветовая палитра

### Основные цвета
```css
:root {
  /* Backgrounds */
  --bg-primary: #FFFBF8;        /* Тёплый молочный */
  --bg-secondary: #FFF5F0;      /* Персиковый туман */
  --bg-accent: #FFE8E0;         /* Лёгкий розовый */
  
  /* Pink spectrum */
  --pink-soft: #FADADD;         /* Нежно-розовый */
  --pink-medium: #F8B4C0;       /* Средний розовый */
  --pink-accent: #E8899E;       /* Акцентный розовый */
  --pink-deep: #D4728C;         /* Глубокий розовый */
  
  /* Neutrals */
  --cream: #F5EDE8;             /* Кремовый */
  --beige: #E8DCD5;             /* Бежевый */
  --brown-light: #C9B8AC;       /* Светло-коричневый */
  --brown-text: #5C4A42;        /* Тёмно-коричневый для текста */
  
  /* Gold accents */
  --gold-light: #D4AF37;        /* Золотой */
  --gold-muted: #C9A962;        /* Приглушённое золото */
  
  /* Text */
  --text-primary: #3D2C29;      /* Основной текст */
  --text-secondary: #6B5550;    /* Вторичный текст */
  --text-muted: #9B8A85;        /* Приглушённый текст */
}
```

### Градиенты
```css
/* Основной градиент фона */
background: linear-gradient(180deg, #FFFBF8 0%, #FFE8E0 50%, #FADADD 100%);

/* Акцентный градиент для карточек */
background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F0 100%);

/* Золотой градиент для кнопок */
background: linear-gradient(90deg, #D4AF37 0%, #E8C967 50%, #D4AF37 100%);
```

---

## 🔤 Типографика

### Шрифтовые пары

**Вариант 1 (Кондитерская/Уют):**
```css
/* Заголовки - округлый, дружелюбный */
font-family: 'Nunito', 'Quicksand', 'Comfortaa', sans-serif;

/* Акценты - рукописный */
font-family: 'Dancing Script', 'Pacifico', 'Satisfy', cursive;

/* Основной текст */
font-family: 'Lato', 'Open Sans', sans-serif;
```

**Вариант 2 (Бьюти/Премиум):**
```css
/* Заголовки - элегантный serif */
font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', serif;

/* Подзаголовки - современный sans-serif */
font-family: 'Montserrat', 'Poppins', 'Raleway', sans-serif;

/* Основной текст */
font-family: 'Source Sans Pro', 'Nunito Sans', sans-serif;
```

**Вариант 3 (Люкс/Парфюмерия):**
```css
/* Заголовки - изысканный с засечками */
font-family: 'Cormorant', 'Didot', 'Bodoni Moda', serif;

/* Акценты */
font-family: 'Great Vibes', 'Allura', cursive;

/* Основной текст */
font-family: 'Lora', 'Crimson Text', serif;
```

### Размеры и иерархия
```css
/* Hero заголовок */
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Секционные заголовки */
.section-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
}

/* Подзаголовки */
.subtitle {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Основной текст */
.body-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-primary);
}
```

---

## 📐 Структура и Layout

### Сетка
```css
/* Контейнер */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 4rem);
}

/* Основная сетка */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* 3-колоночная сетка для карточек */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```

### Секции страницы (тут рекомендации, структура задана строго в другом файле)

1. **Hero секция**
   - Высота: 80-100vh
   - Крупное изображение справа (60% ширины)
   - Текст слева с градиентным фоном
   - CTA кнопка с мягкой тенью

2. **Преимущества/Фичи**
   - 3-4 колонки с иконками
   - Мягкие карточки с тенями
   - Иконки в кружках с градиентом

3. **Продукты/Услуги**
   - Карточки с изображениями
   - Hover-эффект с поднятием
   - Розовые акценты на кнопках

4. **О нас/Автор**
   - Асимметричный layout
   - Фото с декоративной рамкой
   - Лента/ribbon элементы

5. **Отзывы**
   - Карусель или сетка
   - Фото клиентов в кружках
   - Кавычки как декор

6. **Форма записи/Контакты**
   - Центрированная форма
   - Поля с мягкими границами
   - Золотая/розовая кнопка отправки

7. **Footer**
   - Тёмный фон (#2D2D2D или #1A1A1A)
   - Золотые акценты
   - Контрастный логотип

---

## 🧩 UI Компоненты

### Кнопки
```css
/* Основная кнопка */
.btn-primary {
  background: linear-gradient(135deg, var(--pink-medium) 0%, var(--pink-accent) 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(232, 137, 158, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 137, 158, 0.4);
}

/* Золотая кнопка (премиум) */
.btn-gold {
  background: linear-gradient(90deg, #D4AF37 0%, #E8C967 50%, #D4AF37 100%);
  color: #1A1A1A;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Outline кнопка */
.btn-outline {
  background: transparent;
  border: 2px solid var(--pink-accent);
  color: var(--pink-accent);
  padding: 0.875rem 2.25rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--pink-accent);
  color: white;
}
```

### Карточки
```css
/* Продуктовая карточка */
.product-card {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 40px rgba(92, 74, 66, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(92, 74, 66, 0.15);
}

/* Карточка с розовым фоном */
.card-pink {
  background: linear-gradient(145deg, #FFE8E0 0%, #FADADD 100%);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
}

/* Карточка преимущества */
.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(248, 180, 192, 0.2);
}
```

### Формы
```css
/* Поле ввода */
.input-field {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid var(--beige);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--pink-medium);
  box-shadow: 0 0 0 4px rgba(248, 180, 192, 0.2);
}

/* Select/Dropdown */
.select-field {
  appearance: none;
  background: white url("data:image/svg+xml,...") no-repeat right 1rem center;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 1px solid var(--beige);
  border-radius: 12px;
}
```

---

## ✨ Декоративные элементы

### Волнистые разделители секций
```css
/* SVG волна */
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
}

/* Можно использовать clip-path */
.wavy-section {
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
}
```

### Декоративные точки/конфетти
```css
.confetti-dots {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pink-medium);
  opacity: 0.6;
}

/* Разбросать несколько с разными позициями и размерами */
```

### Ленты (Ribbons)
```css
.ribbon {
  position: relative;
  display: inline-block;
}

.ribbon::before,
.ribbon::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 100px;
  background: linear-gradient(135deg, var(--pink-soft) 0%, var(--pink-medium) 100%);
  border-radius: 50px;
  opacity: 0.3;
}
```

### Цветочные элементы
```
- Использовать PNG с прозрачным фоном
- Пионы, розы в приглушённых тонах
- Размещать на фоне с низкой opacity (0.1-0.3)
- Позиционировать по углам секций
```

### Тени
```css
/* Мягкая тень */
box-shadow: 0 10px 40px rgba(92, 74, 66, 0.08);

/* Средняя тень */
box-shadow: 0 15px 50px rgba(92, 74, 66, 0.12);

/* Глубокая тень для hover */
box-shadow: 0 25px 80px rgba(92, 74, 66, 0.18);

/* Цветная тень (розовая) */
box-shadow: 0 10px 30px rgba(232, 137, 158, 0.25);
```

---

## 🎬 Анимации

### Базовые transitions
```css
/* Плавные переходы */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Упругий эффект */
transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Появление элементов
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Hover-эффекты
```css
/* Поднятие карточки */
.card:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Свечение кнопки */
.btn:hover {
  box-shadow: 0 0 30px rgba(248, 180, 192, 0.5);
}

/* Zoom изображения */
.image-container:hover img {
  transform: scale(1.05);
}
```

---

## 📸 Работа с изображениями

### Стили изображений
```css
/* Округлённое изображение в круге */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Изображение с рамкой */
.framed-image {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(92, 74, 66, 0.15);
}

/* Изображение с декоративным элементом */
.decorated-image {
  position: relative;
}

.decorated-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 15px;
  left: 15px;
  background: var(--pink-soft);
  border-radius: 24px;
  z-index: -1;
}
```

---

## 📱 Адаптивность

```css
/* Брейкпоинты */
@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .hero { flex-direction: column; }
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2rem; }
  .section { padding: 3rem 1rem; }
}

@media (max-width: 480px) {
  .btn { width: 100%; }
  .cards-grid { gap: 1rem; }
}
```

---

## 🚫 Чего избегать

1. **Цвета:** Яркие кислотные оттенки, чистый чёрный (#000), холодные синие тона
2. **Шрифты:** Arial, Times New Roman, Comic Sans, системные шрифты
3. **Layout:** Строгие прямоугольные блоки без скруглений, симметричные "скучные" сетки
4. **Тени:** Резкие чёрные тени, отсутствие теней вообще
5. **Общее:** Корпоративный "безликий" стиль, слишком минималистичный дизайн

---

## ✅ Ключевые принципы

1. **Мягкость:** Все углы скруглены (16-24px минимум), тени размытые
2. **Теплота:** Цветовая палитра всегда тёплая, с розовыми и кремовыми оттенками
3. **Элегантность:** Много воздуха, не перегружать элементами
4. **Женственность:** Плавные линии, цветочные мотивы, мягкие градиенты
5. **Премиальность:** Качественная типографика, золотые акценты, внимание к деталям

---

## 💡 Промпт-шаблон для AI

```
Создай [тип страницы] в стиле "Soft Feminine Luxury":

ЦВЕТА:
- Фон: тёплый молочно-розовый градиент (#FFFBF8 → #FFE8E0)
- Акценты: мягкий розовый (#F8B4C0) и золотой (#D4AF37)
- Текст: тёплый коричневый (#3D2C29)

ТИПОГРАФИКА:
- Заголовки: [Playfair Display / Nunito] - крупные, выразительные
- Текст: [Lato / Source Sans Pro] - читаемый, нейтральный

ЭЛЕМЕНТЫ:
- Скруглённые углы везде (20-24px)
- Мягкие тени (0 10px 40px rgba(92, 74, 66, 0.08))
- Декоративные точки и волнистые разделители
- Карточки с hover-эффектом поднятия

СТИЛЬ:
- Женственный, уютный, премиальный
- Много воздуха и белого пространства
- Плавные анимации при взаимодействии
```
