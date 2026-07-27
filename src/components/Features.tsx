import { motion } from 'framer-motion';
import {
    Bot,
    MessageSquare,
    CalendarDays,
    Users,
    BarChart3,
    Plug,
} from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: Bot,
        title: 'Agentes de IA no WhatsApp',
        desc: 'Múltiplos agentes inteligentes: atendente, agendador e vendedor trabalhando 24/7 para você.',
        accent: 'primary',
    },
    {
        icon: MessageSquare,
        title: 'Atendimento automatizado 24/7',
        desc: 'Respostas personalizadas com instruções que você define. Sua IA fala com a cara do seu negócio.',
        accent: 'cyan',
    },
    {
        icon: CalendarDays,
        title: 'Agenda inteligente',
        desc: 'Drag-and-drop, confirmações automáticas e lembretes por WhatsApp. Nunca mais perca um horário.',
        accent: 'accent',
    },
    {
        icon: Users,
        title: 'CRM com tags, funil e histórico',
        desc: 'Organize contatos, acompanhe o funil de vendas e tenha todo o histórico na palma da mão.',
        accent: 'primary',
    },
    {
        icon: BarChart3,
        title: 'Dashboard em tempo real',
        desc: 'Métricas de atendimento, agendamentos e conversões. Tudo atualizado ao vivo no seu painel.',
        accent: 'cyan',
    },
    {
        icon: Plug,
        title: 'Integração via QR Code + Widget',
        desc: 'Conecte seu WhatsApp em segundos via QR Code e adicione um widget de chat no seu site.',
        accent: 'accent',
    },
];

const accentColors: Record<string, string> = {
    primary: 'var(--primary)',
    accent: 'var(--accent)',
    cyan: 'var(--cyan)',
};

const accentBg: Record<string, string> = {
    primary: 'hsla(217, 91%, 60%, 0.12)',
    accent: 'hsla(258, 90%, 66%, 0.12)',
    cyan: 'hsla(186, 79%, 53%, 0.12)',
};

const accentBorder: Record<string, string> = {
    primary: 'hsla(217, 91%, 60%, 0.2)',
    accent: 'hsla(258, 90%, 66%, 0.2)',
    cyan: 'hsla(186, 79%, 53%, 0.2)',
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Features() {
    return (
        <section className="features section-padding" id="recursos">
            <div className="container">
                <div className="features__header">
                    <span className="section-label">Recursos</span>
                    <h2 className="section-title">
                        Tudo o que você precisa em <span className="gradient-text">um só lugar</span>
                    </h2>
                    <p className="section-subtitle">
                        Ferramentas poderosas integradas para automatizar, organizar e escalar
                        seu atendimento.
                    </p>
                </div>

                <motion.div
                    className="features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {features.map((f, i) => (
                        <motion.div key={i} className="features__card glass-card" variants={cardVariants}>
                            <div
                                className="features__icon"
                                style={{
                                    background: accentBg[f.accent],
                                    border: `1px solid ${accentBorder[f.accent]}`,
                                    color: accentColors[f.accent],
                                }}
                            >
                                <f.icon size={24} />
                            </div>
                            <h3 className="features__card-title">{f.title}</h3>
                            <p className="features__card-desc">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
