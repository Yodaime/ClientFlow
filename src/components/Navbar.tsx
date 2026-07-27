import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileOpen]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            role="navigation"
            aria-label="Navegação principal"
        >
            <div className="container navbar__inner">
                <a href="#hero" className="navbar__logo" aria-label="ClientFlow AI - Início">
                    <span className="navbar__logo-icon">
                        <Sparkles size={22} />
                    </span>
                    <span className="navbar__logo-text">ClientFlow AI</span>
                </a>

                <div className="navbar__links-desktop">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="navbar__link">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="navbar__actions-desktop">
                    <a href="#" className="navbar__link navbar__link--enter">Entrar</a>
                    <a href="#precos" className="btn btn-primary navbar__cta">
                        Começar Grátis
                    </a>
                </div>

                <button
                    className="navbar__hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile-menu glass"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="navbar__mobile-actions">
                            <a href="#" className="btn btn-secondary" style={{ width: '100%' }}>Entrar</a>
                            <a href="#precos" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>Começar Grátis</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
