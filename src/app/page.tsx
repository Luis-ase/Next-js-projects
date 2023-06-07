import Image from 'next/image'
import Link from 'next/link'
import { ModelsCss } from './Css/css'
export default function HomePage() {
  return (
    <main className={``}>
      <div className={`${ModelsCss.display}`}>

      <h2>this is home page</h2>
      <Link href="/landing">ir a la landign</Link>
      </div>
    </main>
  )
}
