import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'

export default function test(){
    return (
        <Layout>
            <Meta title="Post de prueba" description="Una descripcion para la pagina, que simplemente esta para ser probada." />
            <main>
                <h1>First Post</h1>
            </main>
        </Layout>
    )
}