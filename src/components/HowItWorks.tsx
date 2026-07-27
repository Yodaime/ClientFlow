import { motion } from 'framer-motion';
import { QrCode, Settings, Zap } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        icon: QrCode,
        number: '01',
        title: 'Conecte seu WhatsApp',
        desc: 'Escaneie o QR Code e seu WhatsApp Business estará integrado em menos de 1 minuto.',
    },
    {
        icon: Settings,
        number: '02',
        title: 'Configure seu agente de IA',
        desc: 'Defina o tom de voz, instruções personalizadas e gatilhos para cada tipo de conversa.',
    },
    {
        icon: Zap,
        number: '03',
        title: 'Deixe a IA trabalhar por você',
        desc: 'Sua IA atende, agenda e qualifica leads enquanto você foca no que realmente importa.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HowItWorks() {
    return (
        <section className="how section-padding" id="como-funciona">
            <div className="container">
                <div className="how__header">
                    <span className="section-label">Como Funciona</span>
                    <h2 className="section-title">
                        Comece em <span className="gradient-text">3 passos simples</span>
                    </h2>
                    <p className="section-subtitle">
                        Sem complicação, sem código. Configure tudo em minutos e veja os
                        resultados desde o primeiro dia.
                    </p>
                </div>

                <motion.div
                    className="how__steps"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {steps.map((step, i) => (
                        <motion.div key={i} className="how__step" variants={stepVariants}>
                            <div className="how__step-icon glass">
                                <step.icon size={28} />
                                <span className="how__step-number">{step.number}</span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="how__connector" aria-hidden="true" />
                            )}
                            <h3 className="how__step-title">{step.title}</h3>
                            <p className="how__step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
