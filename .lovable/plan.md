## Plano de Implementação

### Pré-requisito: Ativar Lovable Cloud
- Banco de dados PostgreSQL para armazenar orçamentos e leads
- Autenticação para o painel admin
- Edge Functions para envio de e-mails
- Sistema de e-mail integrado

### Fase 1 — Banco de Dados
**Tabelas:**
- `quotes` — orçamentos completos (nome, telefone, email, cidade/estado, valor total, status, data)
- `quote_items` — itens de cada orçamento (equipamento, linha, imagem)
- `abandoned_carts` — carrinhos abandonados (email, itens, progresso, data)
- `user_roles` — controle de acesso admin

**Status do orçamento:** Novo → Em contato → Negociação → Fechado → Perdido

### Fase 2 — Formulário de Orçamento Atualizado
- Salvar no banco de dados ao enviar (além do WhatsApp)
- Continuar enviando via WhatsApp como já funciona
- Salvar progresso parcial quando o usuário informar o e-mail

### Fase 3 — Painel Administrativo
- Página `/admin` protegida por login
- Lista de orçamentos com filtros (nome, telefone, e-mail)
- Visualização completa do orçamento
- Alteração de status do lead
- Exportação em CSV

### Fase 4 — Notificações por E-mail
- E-mail para o admin quando novo orçamento chegar
- E-mail de confirmação para o cliente
- Configuração de domínio de e-mail

### Fase 5 — Recuperação de Abandono
- Detectar quando o usuário informa e-mail mas não finaliza
- Salvar carrinho parcial no banco
- Edge Function com pg_cron para enviar lembrete após algumas horas
- E-mail personalizado com link para retomar o orçamento

### Observações
- Cada fase será implementada sequencialmente
- O sistema atual de WhatsApp será mantido como canal adicional
- A autenticação admin será por e-mail/senha
