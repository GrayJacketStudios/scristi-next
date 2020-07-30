import Head from 'next/head'

export default function Meta (props) {
    
    return (
        <section>
            <Head>
                <title>{props.title || "Sebastian Cristi | Desarrollador"}</title>
                <link href ="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <meta name="description" content={props.description || "Desarrollador de aplicaciones y sistemas informaticos, analista de cyberseguridad y administrador de sistemas"} />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content={props.title || "Sebastian Cristi | Desarrollador"} />
                <meta name="og:description" property="og:description" content={props.description || "Desarrollador de aplicaciones y sistemas informaticos, analista de cyberseguridad y administrador de sistemas"} />
                <meta property="og:site_name" content="scristi" />
                <meta property="og:url" content={`${props.canonical}`} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:site" content="@SebaCDev" />
                <meta name="twitter:creator" content="@SebaCDev" />
                { props.image &&
                    <meta property="og:image" content={`${props.image}`}/>
                }
                { props.image &&   
                <meta name="twitter:image" content={`${props.image}`} />   
                }
                { props.canonical &&
                <link rel="canonical" href={`${props.canonical}`} />
                }
            </Head>
        </section>
    )
        
}