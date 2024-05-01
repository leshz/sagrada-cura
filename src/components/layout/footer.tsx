import { Footer } from '@/components/footer'

const FooterLayout = ({ data }) => {
  const { footer } = data
  const { news_letter: letter , columns} = footer

  return (
    <Footer.Root>
      <Footer.Columns>
        <Footer.NewsLetter data={letter} />
        <Footer.Column data={columns[0]}/>
        <Footer.Column data={columns[0]}/>
        <Footer.Column data={columns[2]}/>
        <Footer.LastItem />
      </Footer.Columns>
      <Footer.Bottom data={data} />
    </Footer.Root>
  )
}

export { FooterLayout }
