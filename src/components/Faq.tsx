import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

const faqs = [
    {
        q: 'Preciso de conhecimento técnico para usar?',
        a: 'Não! O ClientFlow AI foi feito para ser intuitivo. Você conecta seu WhatsApp via QR Code, configura seu agente com linguagem natural e pronto. Sem código, sem complicação.',
    },
    {
        q: 'Meu WhatsApp fica seguro?',
        a: 'Sim, absolutamente. Utilizamos criptografia de ponta a ponta e nunca armazenamos suas mensagens pessoais. Sua conta permanece 100% sob seu controle.',
    },
    {
        q: 'Posso cancelar quando quiser?',
        a: 'Sim! Não temos fidelidade ou multa. Cancele a qualquer momento direto no painel. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.',
    },
    {
        q: 'Funciona com Evolution API / n8n?',
        a: 'Sim! O plano Business inclui API e Webhooks que se integram perfeitamente com Evolution API, n8n, Make, Zapier e outras plataformas de automação.',
    },
    {
        q: 'Quantos agentes de IA posso criar?',
        a: 'Depende do seu plano: Starter permite 1 agente, Pro permite 3, e Business oferece agentes ilimitados. Cada agente pode ter instruções e comportamentos diferentes.',
    },
    {
        q: 'A IA realmente responde como eu quero?',
        a: 'Sim! Você define o tom de voz, as instruções detalhadas e os gatilhos. A IA segue suas regras e responde com a cara do seu negócio. Você pode ajustar a qualquer momento.',
    },
    {
        q: 'Posso usar no WhatsApp pessoal?',
        a: 'Recomendamos usar com WhatsApp Business para melhor experiência, mas funciona com qualquer tipo de conta WhatsApp. A integração é feita via QR Code.',
    },
    {
        q: 'Tem aplicativo móvel?',
        a: 'O ClientFlow AI é uma plataforma web responsiva que funciona perfeitamente no navegador do celular. Você gerencia tudo de qualquer dispositivo, sem precisar instalar nada.',
    },
];

function FaqItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
    return (
        <div className={`faq__item glass-card ${isOpen ? 'faq__item--open' : ''}`}>
            <button
                className="faq__question"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span>{faq.q}</span>
                <ChevronDown size={20} className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <p>{faq.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="faq section-padding" id="faq">
            <div className="container">
                <div className="faq__header">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">
                        Perguntas <span className="gradient-text">frequentes</span>
                    </h2>
                    <p className="section-subtitle">
                        Tudo o que você precisa saber antes de começar.
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            toggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
