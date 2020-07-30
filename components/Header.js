import utilStyles from '../styles/utils.module.css';
import headerStyles from './header.module.css'

const name = 'Sebastián Cristi'
const desc = "Developer"
export default function Header(){
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.pinfo}>
                <div className={`${headerStyles.card} ${headerStyles.info}`}>
                    <h3 className={utilStyles.headingLg}>{name}</h3>
                    <h3 className={`${utilStyles.headingMd} ${headerStyles.lessLineSpace}`}>{desc}</h3>
                    <div>
                        <ul className={headerStyles.social_icons}>
                            <li><a href="https://stackoverflow.com/users/7983131/sebastian-cristi-castillo?tab=profile"><i className="fa fa-stack-overflow"></i></a></li>
                            <li><a href="https://github.com/GrayJacketStudios/"><i className="fa fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/scristicastillo/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://twitter.com/SebaCDev"><i className="fa fa-twitter"></i></a></li>
                            
                            
                        </ul>
                    </div>
                </div>
                <img
                    src="/images/perfil.jpeg"
                    className={`${headerStyles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
                
            </div>
        </header>
    )
}