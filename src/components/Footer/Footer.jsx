import { styled } from 'styled-components';
import instagramIcon from '../../img/instagram.svg';
import githubIcon from '../../img/github.svg';
import linkedinIcon from '../../img/linkedin.svg';

const FooterEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
    background: rgb(0, 0, 0);
	padding: 2rem;
	box-sizing: border-box;
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 0.7rem;
	}
`;

const FooterTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

const Icono = styled.img`
	width: 32px;
	height: auto;
`;

function Footer() {
	return (
    	<FooterEstilizado>
        	<IconoContainer>
            	<li>
                	<a href="https://www.instagram.com/alejandra.toloza/">
                    	<Icono src={instagramIcon} alt="Instagram" />
                	</a>
            	</li>
                <li>
                	<a href="https://github.com/AlejitaToloza">
                    	<Icono src={githubIcon} alt="GitHub" />
                	</a>
            	</li>
            	<li>
                	<a href="https://www.linkedin.com/in/judy-toloza-ortiz/">
                    	<Icono src={linkedinIcon} alt="LinkedIn" />
                	</a>
            	</li>
        	</IconoContainer>
        	<FooterTexto>Desarrollado por Alejandra Toloza</FooterTexto>
    	</FooterEstilizado>
	);
}

export default Footer;
