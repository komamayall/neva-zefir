import fs from 'fs'
import path from 'path'

export interface Product {
    id: string
    name: string
    price: number
    status: 'в наличии' | 'под заказ'
    image: string
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

function findImagePath(imageName: string): string {
    // If already has extension, use as-is
    if (IMAGE_EXTENSIONS.some(ext => imageName.toLowerCase().endsWith(ext))) {
        return `/img/${imageName}`
    }

    // Try to find optimized 600px version first
    const imgDir = path.join(process.cwd(), 'public', 'img')
    const optimizedPath = path.join(imgDir, `${imageName}_600.webp`)
    if (fs.existsSync(optimizedPath)) {
        return `/img/${imageName}_600.webp`
    }

    // Try to find file with any extension
    for (const ext of IMAGE_EXTENSIONS) {
        const fullPath = path.join(imgDir, `${imageName}${ext}`)
        if (fs.existsSync(fullPath)) {
            return `/img/${imageName}${ext}`
        }
    }

    // Default to webp if not found
    return `/img/${imageName}.webp`
}

export function loadProductsFromCSV(): Product[] {
    const csvPath = path.join(process.cwd(), 'products.csv')

    if (!fs.existsSync(csvPath)) {
        return []
    }

    const content = fs.readFileSync(csvPath, 'utf-8')
    const lines = content.trim().split('\n')

    // Skip header
    const dataLines = lines.slice(1)

    return dataLines
        .filter(line => line.trim())
        .map(line => {
            const [id, name, priceStr, status, imageName] = line.split(',')
            return {
                id: id.trim(),
                name: name.trim(),
                price: parseInt(priceStr.trim(), 10),
                status: status.trim() as 'в наличии' | 'под заказ',
                image: findImagePath(imageName.trim()),
            }
        })
}
