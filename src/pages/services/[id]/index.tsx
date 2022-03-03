import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'

import Head from 'next/head'
import { Section } from 'src/layouts/Section'
import { CardService } from 'src/components/CardService'

const Service: NextPage = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <title>Service | Challenge Skydropx</title>
    </Head>
    <Section>
      <CardService idService={ id } />
    </Section>
  </>
)

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = await query

  return { props: { id } }
}

export default Service
