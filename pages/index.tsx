import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Header from '../sections/Header/Header'
import Hero from '../sections/Hero/Hero'
import LaunchingSection from '../sections/LaunchingSection/LaunchingSection'
import DataDriveSection from '../sections/DataDriveSection/DataDriveSection'
import SimplicitySection from '../sections/SimplicitySection/SimplicitySection'
import TransparencySection from '../sections/TransparencySection/TransparencySection'
import FormSection from '../sections/FormSection/FormSection'
import Socials from '../sections/Socials/Socials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Compiify</title>
        <meta name='description' content='Compiify sofrware' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <LaunchingSection />
        <DataDriveSection />
        <SimplicitySection />
        <TransparencySection />
        <FormSection />
        <Socials />
      </ThemeProvider>
    </>
  )
}
