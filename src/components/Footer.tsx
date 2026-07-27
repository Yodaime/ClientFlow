import { Sparkles } from 'lucide-react';
import './Footer.css';

const footerLinks = {
    Produto: ['Recursos', 'Preços', 'Integrações', 'Atualizações'],
    Empresa: ['Sobre nós', 'Blog', 'Carreiras', 'Parceiros'],
    Legal: ['Termos de uso', 'Privacidade', 'Cookies', 'LGPD'],
    Contato: ['suporte@clientflow.ai', 'WhatsApp', 'Central de ajuda'],
};

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <a href="#hero" className="footer__logo" aria-label="ClientFlow AI - Início">
                            <span className="footer__logo-icon">
                                <Sparkles size={18} />
                            </span>
                            <span className="footer__logo-text">ClientFlow AI</span>
                        </a>
                        <p className="footer__desc">
                            CRM inteligente com agentes de IA integrados ao WhatsApp. Automatize
                            seu atendimento e escale seu negócio.
                        </p>
                        <div className="footer__socials">
                            {['LinkedIn', 'Instagram', 'YouTube', 'Twitter'].map((s) => (
                                <a key={s} href="#" className="footer__social-link" aria-label={`Siga no ${s}`}>
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="footer__column">
                            <h4 className="footer__column-title">{category}</h4>
                            <ul className="footer__list">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} ClientFlow AI. Todos os direitos reservados.</p>
                    <p className="footer__bottom-sub">
                        Feito com 💙 no Brasil
                    </p>
                </div>
            </div>
        </footer>
    );
}
