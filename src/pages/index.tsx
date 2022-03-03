import { NextPage } from 'next'

import Head from 'next/head'
import { Main } from 'src/layouts/Main'
import { Form } from 'src/components/Form'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | Challenge Skydropx</title>
    </Head>
    <Main>
      <Form />
    </Main>
  </>
)

export default Home
