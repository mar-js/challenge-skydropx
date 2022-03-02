import { NextPage } from 'next'

import { InterfaceServicePageProps } from 'src/assets/tools/interface'

import Head from 'next/head'
import { Section } from 'src/layouts/Section'
import { CardService } from 'src/components/CardService'

const Service: NextPage<InterfaceServicePageProps> = ({ id }) => (
  <>
    <Head>
      <title>Service | Challenge Skydrops</title>
    </Head>
    <Section>
      <CardService idService={ id } />
    </Section>
  </>
)

Service.getInitialProps = ({ query: { id } }) => ({ id })

export default Service
