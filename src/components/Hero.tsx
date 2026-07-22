import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero section-padding">
            {/* Background blobs */}
            <div className="hero__blobs" aria-hidden="true">
                <div className="hero__blob hero__blob--1" />
                <div className="hero__blob hero__blob--2" />
                <div className="hero__blob hero__blob--3" />
            </div>

            <div className="container hero__grid">
                {/* Left column */}
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="hero__badge glass">
                        <span className="hero__badge-dot" />
                        Novo: Agentes de IA com memória de contexto
                    </span>

                    <h1 className="hero__title">
                        Seu CRM com IA que atende clientes no{' '}
                        <span className="gradient-text">WhatsApp 24/7</span>
                    </h1>

                    <p className="hero__subtitle">
                        Automatize agendamentos, responda clientes instantaneamente e organize
                        tudo em um único painel — feito sob medida para profissionais liberais.
                    </p>

                    <div className="hero__ctas">
                        <a href="#precos" className="btn btn-primary btn-lg neon-glow" id="cta-hero-trial">
                            Testar grátis por 14 dias
                            <ArrowRight size={18} />
                        </a>

                    </div>

                    <div className="hero__social-proof">
                        <div className="hero__avatars">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="hero__avatar" style={{
                                    background: `linear-gradient(135deg, hsl(${200 + i * 30}, 70%, 50%), hsl(${220 + i * 30}, 80%, 60%))`,
                                }}>
                                    <span>{String.fromCharCode(64 + i)}</span>
                                </div>
                            ))}
                        </div>
                        <p className="hero__social-text">
                            <strong>500+</strong> profissionais já usam
                        </p>
                    </div>
                </motion.div>

                {/* Right column — Dashboard mockup */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                >
                    <div className="hero__mockup glass">
                        <div className="hero__mockup-header">
                            <div className="hero__mockup-dots">
                                <span /><span /><span />
                            </div>
                            <span className="hero__mockup-title">Dashboard — ClientFlow AI</span>
                        </div>
                        <div className="hero__mockup-body">
                            <div className="hero__metrics">
                                <div className="hero__metric glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <span className="hero__metric-label" style={{ zIndex: 1, position: 'relative' }}>Atendimentos hoje</span>
                                    <span className="hero__metric-value gradient-text" style={{ zIndex: 1, position: 'relative' }}>147</span>
                                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '60%', opacity: 0.5 }}>
                                        <path d="M0,25 C20,15 30,25 50,10 C70,20 80,5 100,2" fill="none" stroke="var(--primary)" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="hero__metric glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <span className="hero__metric-label" style={{ zIndex: 1, position: 'relative' }}>Taxa de resposta</span>
                                    <span className="hero__metric-value gradient-text" style={{ zIndex: 1, position: 'relative' }}>98%</span>
                                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '60%', opacity: 0.5 }}>
                                        <path d="M0,20 C20,10 40,30 60,15 C80,25 90,5 100,5" fill="none" stroke="var(--cyan)" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="hero__metric glass-card">
                                    <span className="hero__metric-label">Agendamentos</span>
                                    <span className="hero__metric-value gradient-text">32</span>
                                </div>
                            </div>
                            {/* Chat bubble animation */}
                            <motion.div
                                className="hero__chat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <div className="hero__chat-bubble hero__chat-bubble--client">
                                    <span className="hero__chat-name">Cliente</span>
                                    Olá, gostaria de agendar uma consulta para amanhã às 14h.
                                </div>
                                <motion.div
                                    className="hero__chat-bubble hero__chat-bubble--ai"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2, duration: 0.5 }}
                                >
                                    <span className="hero__chat-name">🤖 IA ClientFlow</span>
                                    Perfeito! Confirmei sua consulta para amanhã, 14h. Enviei um lembrete para seu WhatsApp. 😊
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
