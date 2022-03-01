import { NextPage } from 'next'

import Head from 'next/head'
import { Section } from 'src/layouts/Section'
import { TableServices } from 'src/components/TableServices'

const Services: NextPage = () => (
  <>
    <Head>
      <title>Services | Challenge Skydrops</title>
    </Head>
    <Section>
      <TableServices />
    </Section>
  </>
)

export default Services
