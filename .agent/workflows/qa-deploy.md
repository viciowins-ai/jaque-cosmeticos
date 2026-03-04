---
description: Fluxo de QA e Preparação de Deploy para Jaque Cosméticos
---
# Fluxo de Trabalho: QA e Deploy - Jaque Cosméticos

Este fluxo de trabalho tem como objetivo garantir que a aplicação não apresente regressões na construção (build) ou erros de Typescript antes de o código ser enviado (pushed) e o deploy de produção ser disparado (seja na Vercel ou outras plataformas).

## Passos

1. **Verificação de Lint e Typings:**
   - Execute o script de lint embutido no Next.js do diretório do projeto: `npm run lint` ou `npx next lint`.
   - Caso encontre erros em componentes, páginas ou tipagens Typescript, o agente deve tentar corrigir todos utilizando o contexto em tela.

2. **Simulação de Build (QA Real):**
   - Execute a compilação completa do Next.js: `npm run build`
   // turbo
   - Analise profundamente o console gerado por erros cruciais: *Type Errors* no roteamento (`app/`), referências perdidas (ex: falta de imagens no `public/`) ou variáveis não mapeadas.
   - O processo precisa rodar até o final, informando `✓ Compiled successfully`.

3. **Status de Desempenho (Opcional, se o build ocorrer com sucesso):**
   - Avise o usuário sobre avisos não-fatais, se existirem (ex: *Large Page Size*), para possíveis futuras correções de otimização de imagens.

4. **Confirmação e Commit de Fix:**
   - Caso correções sejam aplicadas devido a falhas nos passos anteriores, realize um commit isolado `fix(build): corrige tipos e linting para deploy`.

5. **Aprovação do Push:**
   - Após passar pelos passos, instrua ou execute o push da branch atual: `git push origin main`.
