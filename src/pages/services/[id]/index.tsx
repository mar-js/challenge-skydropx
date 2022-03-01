import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Section } from 'src/layouts/Section'
import { CardService } from 'src/components/CardService'

const Service: NextPage = () => {
  const { query: { id } } = useRouter()

  return (
    <>
      <Head>
        <title>Service | Challenge Skydrops</title>
      </Head>
      <Section>
        <CardService idService={ id } />
      </Section>
    </>
  )
}

export default Service
