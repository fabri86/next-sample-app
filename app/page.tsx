import ProductCard from '@/app/components/product-card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 ">
      <h1 className="text-2xl text-blue-400">ACME Digital</h1>

      <div className="flex flex-col self-start text-lg">
        <Link href="/users">Our users</Link>
        <Link href="/products">Our products</Link>
      </div>

      <div className="mt-20 w-full">
        <p>Top products of the week</p>
        <ProductCard />
      </div>
    </main>
  )
}
