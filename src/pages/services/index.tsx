import { NextPage } from 'next'

import Head from 'next/head'
import { Section } from '@layouts/Section'
import { TableServices } from '@components/TableServices'

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
