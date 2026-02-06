import { NextResponse } from 'next/server'
import { loadProductsFromCSV } from '@/lib/products'

function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export async function GET() {
    const products = loadProductsFromCSV()
    return NextResponse.json(shuffle(products))
}
