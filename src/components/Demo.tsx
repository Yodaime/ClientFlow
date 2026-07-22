import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import './Demo.css';

export default function Demo() {
    return (
        <section className="demo section-padding" id="demo">
            <div className="container">
                <div className="demo__header">
                    <span className="section-label">Demonstração</span>
                    <h2 className="section-title">
                        Painel de <span className="gradient-text">Agentes IA</span>
                    </h2>
                    <p className="section-subtitle">
                        Configure múltiplos agentes, defina instruções personalizadas e
                        monitore atendimentos em tempo real.
                    </p>
                </div>

                <motion.div
                    className="demo__wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="demo__badge">
                        <Radio size={14} />
                        <span>Ao vivo</span>
                    </div>
                    <div className="demo__mockup glass-dashboard">
                        {/* Sidebar */}
                        <div className="demo__sidebar">
                            <div className="demo__logo">
                                <div className="demo__logo-icon">✦</div>
                                ClientFlow
                            </div>
                            <nav className="demo__nav">
                                <div className="demo__nav-item demo__nav-item--active">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
                                    Visão Geral
                                </div>
                                <div className="demo__nav-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                                    Agentes IA
                                </div>
                                <div className="demo__nav-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    Conversas
                                </div>
                                <div className="demo__nav-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    Contatos
                                </div>
                            </nav>
                            <div className="demo__sidebar-bottom">
                                <div className="demo__user">
                                    <img src="https://i.pravatar.cc/150?img=11" alt="User" className="demo__user-avatar" />
                                    <div className="demo__user-info">
                                        <span className="demo__user-name">Dr. Marcos</span>
                                        <span className="demo__user-role">Clínica Vida</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="demo__main">
                            <div className="demo__header-bar">
                                <h3 className="demo__page-title">Dashboard Analítico</h3>
                                <div className="demo__header-right">
                                    <div className="demo__search">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        Buscar...
                                    </div>
                                    <div className="demo__icon-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="demo__metrics-row">
                                <div className="demo__metric-card" style={{ '--card-color': 'var(--primary)' } as any}>
                                    <div className="demo__metric-title">Mensagens Trocadas</div>
                                    <div className="demo__metric-value">12,450</div>
                                    <div className="demo__metric-trend pulse-green">↗ 14.5% vs ontem</div>
                                    <svg className="demo__sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <path d="M0,25 C20,20 30,10 50,15 C70,20 80,5 100,2" fill="none" stroke="var(--primary-light)" strokeWidth="2" />
                                        <path d="M0,25 C20,20 30,10 50,15 C70,20 80,5 100,2 L100,30 L0,30 Z" fill="url(#grad1)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="var(--primary-light)" stopOpacity="1" />
                                                <stop offset="100%" stopColor="var(--bg-card)" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="demo__metric-card" style={{ '--card-color': 'var(--cyan)' } as any}>
                                    <div className="demo__metric-title">Agendamentos I.A.</div>
                                    <div className="demo__metric-value">342</div>
                                    <div className="demo__metric-trend pulse-green">↗ 8.2% vs ontem</div>
                                    <svg className="demo__sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <path d="M0,20 C20,25 40,5 60,15 C80,25 90,10 100,10" fill="none" stroke="var(--cyan-light)" strokeWidth="2" />
                                        <path d="M0,20 C20,25 40,5 60,15 C80,25 90,10 100,10 L100,30 L0,30 Z" fill="url(#grad2)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="var(--cyan-light)" stopOpacity="1" />
                                                <stop offset="100%" stopColor="var(--bg-card)" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="demo__metric-card" style={{ '--card-color': 'var(--accent)' } as any}>
                                    <div className="demo__metric-title">Tempo de Resposta</div>
                                    <div className="demo__metric-value">1.2s</div>
                                    <div className="demo__metric-trend text-blue">⚡ Instântaneo</div>
                                    <svg className="demo__sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <path d="M0,15 C20,15 40,15 60,15 C80,15 100,15 100,15" fill="none" stroke="var(--accent-light)" strokeWidth="2" strokeDasharray="4 2" />
                                    </svg>
                                </div>
                            </div>

                            <div className="demo__charts-row">
                                <div className="demo__main-chart dark-panel">
                                    <div className="demo__panel-header">
                                        <h4>Crescimento de Leads</h4>
                                        <div className="demo__chart-filters">
                                            <span className="active">Mensal</span>
                                            <span>Anual</span>
                                        </div>
                                    </div>
                                    <div className="demo__chart-wrapper">
                                        <svg viewBox="0 0 500 200" preserveAspectRatio="none" className="demo__line-chart-svg">
                                            {/* Grid lines */}
                                            <path d="M0,40 L500,40 M0,80 L500,80 M0,120 L500,120 M0,160 L500,160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                                            <path d="M0,160 C50,140 100,170 150,120 C200,70 250,130 300,90 C350,50 400,80 450,40 L500,20" fill="none" stroke="url(#neonLine)" strokeWidth="4" filter="url(#glow)" />
                                            <path d="M0,160 C50,140 100,170 150,120 C200,70 250,130 300,90 C350,50 400,80 450,40 L500,20 L500,200 L0,200 Z" fill="url(#areaGrad)" opacity="0.4" />

                                            {/* Highlight dot */}
                                            <circle cx="300" cy="90" r="5" fill="#fff" stroke="var(--cyan)" strokeWidth="3" filter="url(#glow)" />
                                            <text x="300" y="70" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">940 Leads</text>

                                            <defs>
                                                <linearGradient id="neonLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--primary)" />
                                                    <stop offset="50%" stopColor="var(--cyan)" />
                                                    <stop offset="100%" stopColor="var(--accent)" />
                                                </linearGradient>
                                                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                                </linearGradient>
                                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                                    <feMerge>
                                                        <feMergeNode in="blur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="demo__side-chart dark-panel">
                                    <div className="demo__panel-header">
                                        <h4>Assuntos Frequentes</h4>
                                    </div>
                                    <div className="demo__donut-wrapper">
                                        <div className="demo__donut-chart">
                                            <div className="demo__donut-inner">
                                                <span className="demo__donut-total">14k</span>
                                            </div>
                                        </div>
                                        <div className="demo__legend">
                                            <div className="demo__legend-item"><span className="dot dot-prim"></span> Agendamento (45%)</div>
                                            <div className="demo__legend-item"><span className="dot dot-cyan"></span> Dúvidas (30%)</div>
                                            <div className="demo__legend-item"><span className="dot dot-acc"></span> Valores (15%)</div>
                                            <div className="demo__legend-item"><span className="dot dot-mut"></span> Outros (10%)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
