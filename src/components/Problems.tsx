import { motion } from 'framer-motion';
import { Clock, CalendarX, UserMinus } from 'lucide-react';
import './Problems.css';

const problems = [
    {
        icon: Clock,
        title: 'Perde clientes por não responder rápido?',
        description: 'Clientes esperam respostas imediatas. Cada minuto de atraso é uma oportunidade perdida para a concorrência.',
    },
    {
        icon: CalendarX,
        title: 'Agenda bagunçada?',
        description: 'Horários conflitantes, faltas sem aviso e remarcações infinitas consomem seu tempo e prejudicam o fluxo de atendimento.',
    },
    {
        icon: UserMinus,
        title: 'Sem tempo para prospectar?',
        description: 'Você cuida dos clientes que já tem, mas não sobra energia para atrair novos e fazer seu negócio crescer.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Problems() {
    return (
        <section className="problems section-padding" id="problemas">
            <div className="container">
                <div className="problems__header">
                    <span className="section-label">O problema</span>
                    <h2 className="section-title">
                        Esses desafios são <span className="gradient-text">familiares?</span>
                    </h2>
                    <p className="section-subtitle">
                        Profissionais liberais enfrentam os mesmos obstáculos todos os dias.
                        A boa notícia: existe uma solução.
                    </p>
                </div>

                <motion.div
                    className="problems__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {problems.map((problem, i) => (
                        <motion.div key={i} className="problems__card glass-card">
                            <div className="problems__icon-wrapper">
                                <problem.icon size={24} />
                            </div>
                            <h3 className="problems__card-title">{problem.title}</h3>
                            <p className="problems__card-desc">{problem.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
