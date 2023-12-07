import Image from 'next/image'
import styles from './page.module.css'
import LinkPreviewer from './components/LinkPreviewer'

export default function Home() {
  return (
    <main>
      
      <LinkPreviewer url="https://algochurn.com">
        Link Previewer Button XXX</LinkPreviewer>
        <LinkPreviewer url="https://algochurn.com">
          Link Previewer Button XXX 222</LinkPreviewer>
    
    </main>
  )
}
