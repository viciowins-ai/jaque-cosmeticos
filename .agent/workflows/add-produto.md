---
description: Fluxo para adicionar novos produtos ao catálogo da loja Jaque Cosméticos
---
# Fluxo de Trabalho: Adicionar Produto - Jaque Cosméticos

Este fluxo de trabalho deve ser utilizado sempre que o usuário solicitar a adição de um novo produto (Natura, Avon ou O Boticário) à loja.

## Passos

1. **Obter Detalhes do Produto:**
   - O agente deve solicitar ou extrair as seguintes informações: Nome do Produto, Marca (Natura, Avon, ou Boticário), Preço Atual, Preço Original (se aplicável), e se é um item promocional.

2. **Gerar ou Procurar Imagens:**
   - Certifique-se de que existem duas imagens para o produto: uma imagem principal (recorte ou fundo claro) e uma imagem de 'hover' (em uso ou ambiente).
   - O tamanho ideal deve seguir a identidade visual (em geral `400x400` com qualidade alta).
   - Utilize fotos coerentes com a estética premium da loja.

3. **Atualizar `src/app/page.tsx`:**
   - Localize o array `shelfItems`.
   - Crie um novo objeto de produto contendo as chaves: `id` (garanta que seja único), `name`, `brand`, `price`, `originalPrice`, `discount` (calcule o percentual se o preço original for fornecido), `isPromo` (baseado na existência de desconto ou pedido do usuário), `image`, `hoverImage`, `bgColor` (uma cor pastel HEX sutil condizente com o produto ou marca) e `height` (entre 140 e 190).
   - Adicione o objeto ao final do array ou na categoria correspondente.

4. **Testar Visualização Local (Opcional, mas Recomendado):**
   - Execute `npm run dev` se já não estiver em execução.
   - Utilize a subagente de navegação para acessar `http://localhost:3000`.
   - Verifique se a renderização não quebrou o *grid* de CSS e se a filtragem da marca (Natura, Avon ou O Boticário) inclui o novo produto perfeitamente.

5. **Aprovação e Commit:**
   - Peça para o usuário avaliar as mudanças feitas.
   - Após a aprovação, realize um commit com a mensagem semântica `feat(catalog): adiciona produto [Nome] da marca [Marca]`.
