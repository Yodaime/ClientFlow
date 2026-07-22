import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Dra. Camila Rodrigues',
        role: 'Dermatologista',
        avatar: 'CR',
        color: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        quote: 'Minha clínica teve um aumento de 40% nos agendamentos. A IA pode responder os pacientes mesmo de madrugada!',
        result: '+40% agendamentos',
    },
    {
        name: 'Dr. Rafael Santos',
        role: 'Fisioterapeuta',
        avatar: 'RS',
        color: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
        quote: 'Eu perdia horas respondendo WhatsApp. Agora o agente de IA pode fazer isso perfeitamente, com o meu tom de voz. Meus pacientes adoram.',
        result: '5h podem ser economizadas/dia',
    },
    {
        name: 'Ana Paula Mendes',
        role: 'Psicóloga clínica',
        avatar: 'AM',
        color: 'linear-gradient(135deg, #22D3EE, #3B82F6)',
        quote: 'O CRM com funil ajuda muito a organizar todos os meus pacientes. Antes era planilhas e perdia informações. Agora tudo está centralizado.',
        result: '0 pacientes perdidos',
    },
    {
        name: 'Dr. Thiago Oliveira',
        role: 'Dentista',
        avatar: 'TO',
        color: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
        quote: 'A integração via QR Code foi instantânea. Em 5 minutos eu já tinha o agente de IA atendendo no WhatsApp do consultório. Impressionante.',
        result: 'Setup em 5 minutos',
    },
    {
        name: 'Maria Clara Silva',
        role: 'Consultora de negócios',
        avatar: 'MS',
        color: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
        quote: 'Recomendo o ClientFlow AI para todos os meus clientes. É a ferramenta que faltava para profissionais liberais competirem com grandes empresas.',
        result: '30+ clientes usando',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const visibleCount = 3;

    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    const getVisible = () => {
        const items = [];
        for (let i = 0; i < visibleCount; i++) {
            items.push(testimonials[(current + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <section className="testimonials section-padding" id="depoimentos">
            <div className="container">
                <div className="testimonials__header">
                    <span className="section-label">Depoimentos</span>
                    <h2 className="section-title">
                        A visão de pessoas que sabem, <span className="gradient-text">quando devem mudar</span>
                    </h2>
                    <p className="section-subtitle">
                        Veja o que profissionais de saúde e consultores dizem.
                    </p>
                </div>

                <div className="testimonials__carousel">
                    <button
                        className="testimonials__arrow testimonials__arrow--prev"
                        onClick={prev}
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonials__grid"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                        >
                            {getVisible().map((t, i) => (
                                <div key={i} className="testimonials__card glass-card">
                                    <div className="testimonials__stars">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={14} fill="var(--cyan)" color="var(--cyan)" />
                                        ))}
                                    </div>
                                    <p className="testimonials__quote">"{t.quote}"</p>
                                    <div className="testimonials__footer">
                                        <div className="testimonials__avatar" style={{ background: t.color }}>
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <div className="testimonials__name">{t.name}</div>
                                            <div className="testimonials__role">{t.role}</div>
                                        </div>
                                    </div>
                                    <div className="testimonials__result">{t.result}</div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <button
                        className="testimonials__arrow testimonials__arrow--next"
                        onClick={next}
                        aria-label="Próximo depoimento"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="testimonials__dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Ir para depoimento ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
