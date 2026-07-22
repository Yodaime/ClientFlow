import { motion } from 'framer-motion';
import './LogoBar.css';

const logos = [
    'Clínica Bem-Estar',
    'Dr. Saúde',
    'FisioVida',
    'PsicoMind',
    'Odonto Plus',
    'ConsultPro',
    'Wellness Center',
    'ClinicaTop',
];

export default function LogoBar() {
    return (
        <section className="logobar" aria-label="Empresas que confiam no ClientFlow AI">
            <div className="container">
                <motion.p
                    className="logobar__label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Confiado por clínicas e consultórios em todo Brasil
                </motion.p>
                <div className="logobar__track">
                    <div className="logobar__slider">
                        {[...logos, ...logos].map((name, i) => (
                            <div key={i} className="logobar__item glass">
                                <span className="logobar__icon">✦</span>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
