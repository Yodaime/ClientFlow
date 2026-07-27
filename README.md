# LP Comercial Zenith (ClientFlow AI)

Landing page comercial em React + TypeScript + Vite para o produto **ClientFlow AI** — CRM com agentes de IA integrados ao WhatsApp, voltado a profissionais liberais.

## Stack

- React 19, TypeScript, Vite 8
- Framer Motion (animações)
- Lucide React (ícones)
- CSS com design tokens (tema escuro, glassmorphism)

## Seções da página

Hero → logos parceiros → problemas → recursos → como funciona → demo → depoimentos → preços → FAQ → CTA final → rodapé

## Comandos

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build de produção
npm run preview  # preview do build
npm run lint     # oxlint
```

## Estrutura

```
src/
  App.tsx           # composição das seções
  index.css         # tokens e utilitários globais
  components/       # uma seção por componente + CSS co-locado
```

## Próximos passos (opcional)

- Substituir links `#` de “Entrar” e redes sociais por URLs reais
- Conectar CTAs a formulário, checkout ou app de cadastro
- Ajustar copy e marca se o produto comercial for **Zenith** em vez de ClientFlow AI
