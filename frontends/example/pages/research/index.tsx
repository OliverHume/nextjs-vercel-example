import { GetServerSideProps } from 'next'

const Index = () => <div />

export default Index

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 301,
      destination: `/research/VIC-Altona North`,
    },
  }
}
