import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
}

const plans: Plan[] = [
    {
        name: 'Starter',
        price: 'R$ 97',
        period: '/mês',
        description: '1 agente de IA, ideal para começar.',
        features: [
            '1 agente de IA',
            '500 mensagens/mês',
            'Integração WhatsApp via QR Code',
            'Dashboard básico',
            'Suporte por e-mail',
        ],
        highlighted: false,
        cta: 'Começar agora',
    },
    {
        name: 'Pro',
        price: 'R$ 197',
        period: '/mês',
        description: 'Para profissionais que querem escalar.',
        features: [
            '3 agentes de IA',
            'Mensagens ilimitadas',
            'Agenda inteligente completa',
            'CRM com tags e funil',
            'Dashboard em tempo real',
            'Widget para site',
            'Suporte prioritário',
        ],
        highlighted: true,
        cta: 'Testar grátis por 14 dias',
    },
    {
        name: 'Business',
        price: 'R$ 297',
        period: '/mês',
        description: 'Solução completa para equipes.',
        features: [
            'Agentes ilimitados',
            'Mensagens ilimitadas',
            'Multi-usuário',
            'API e Webhooks',
            'Agenda + CRM completo',
            'Relatórios avançados',
            'Gerente de conta dedicado',
            'Onboarding personalizado',
        ],
        highlighted: false,
        cta: 'Falar com vendas',
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

export default function Pricing() {
    return (
        <section className="pricing section-padding" id="precos">
            <div className="container">
                <div className="pricing__header">
                    <span className="section-label">Planos</span>
                    <h2 className="section-title">
                        Escolha o plano <span className="gradient-text">ideal para você</span>
                    </h2>
                    <p className="section-subtitle">
                        Todos os planos incluem 14 dias grátis. Cancele quando quiser, sem compromisso.
                    </p>
                </div>

                <motion.div
                    className="pricing__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`pricing__card glass-card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}
                            variants={cardVariants}
                        >
                            {plan.highlighted && (
                                <span className="pricing__badge">Mais popular</span>
                            )}
                            <div className="pricing__card-header">
                                <h3 className="pricing__plan-name">{plan.name}</h3>
                                <p className="pricing__plan-desc">{plan.description}</p>
                            </div>
                            <div className="pricing__price">
                                <span className="pricing__price-value">{plan.price}</span>
                                <span className="pricing__price-period">{plan.period}</span>
                            </div>
                            <ul className="pricing__features">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="pricing__feature">
                                        <Check size={16} className="pricing__check" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className={`btn ${plan.highlighted ? 'btn-primary neon-glow' : 'btn-secondary'} pricing__cta`}
                                id={`cta-pricing-${plan.name.toLowerCase()}`}
                            >
                                {plan.cta}
                                <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
