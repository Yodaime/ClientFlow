import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CtaFinal.css';

export default function CtaFinal() {
    return (
        <section className="cta-final" id="cta-final">
            <div className="cta-final__bg" aria-hidden="true">
                <div className="cta-final__blob cta-final__blob--1" />
                <div className="cta-final__blob cta-final__blob--2" />
            </div>
            <div className="container">
                <motion.div
                    className="cta-final__content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Sparkles size={40} className="cta-final__icon" />
                    <h2 className="cta-final__title">
                        Pronto para transformar seu <span className="gradient-text">atendimento?</span>
                    </h2>
                    <p className="cta-final__subtitle">
                        Junte-se a mais de 500 profissionais que já automatizaram seu WhatsApp
                        com IA. Comece grátis, sem cartão de crédito.
                    </p>
                    <a href="#" className="btn btn-primary btn-lg neon-glow cta-final__btn" id="cta-final-action">
                        Começar agora — grátis por 14 dias
                        <ArrowRight size={18} />
                    </a>
                    <p className="cta-final__note">
                        ✓ Sem cartão de crédito &nbsp;&nbsp; ✓ Setup em 5 minutos &nbsp;&nbsp; ✓ Cancele quando quiser
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
