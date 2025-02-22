# Limites e Continuidade

## Limites

### Definição Intuitiva do Limite (L)
- Sendo $ f \text{ uma funcão } f(x) = y $.
  - $ f $ uma função.
  - $ y $ a variável dependente desta função.
  - $ x $ a variável independente desta função.
  - $ D(x) $ o conjunto domínio da função $ f $.
  - $ Im(f) $ o conjunto imagem da função $ f $.
  - $ CD(f) $ o conjunto contra-domínio da função $ f $s.
- O Limite (L) representa:
  - Um valor pertencente ao Contra-Domínio da função.
    - Não necessariamente o $ L $ pertence ao conjunto imagem da função. 
    - Se a função não for contínua no ponto $ L $, o valor da abscissa de $ L $ não pertencerá ao conjunto Imagem da função.
  - Um valor numérico que pode se localizar no infinito ou em um conjunto finito.
- O Limite (L) pode ser descrito matematicamente como:
  - $ \exists L \in CD(f) $ 
- O limite de uma função indica o valor pertencente ao Contra-Domínio da função que se tende a obter à medida que a variável independente $ x $ se aproxima de um determinado valor, tanto pela esquerda quanto pela direita.
- Matematicamente, definimos o Limite com a expressão:
$$
\lim_{{x \to a}} f(x) = L
$$

### Processo para Encontrar o Limite L
1. Representar matematicamente o símbolo do limite:
$$
\lim_{{x \to a}} f(x) = L
$$
2. Tentar substituir o valor de x por a, em f(x).
  - Se um valor for encontrado, este será o Limite da função.
  - Se um valor não for encontrado, devido indeterminação matemática, deve-se verificar se a função pode ser manipulada, para não ter descontinuidade e para não gerar indeterminação matemática.
    - Técnica de Briot-Ruffini pode ser usada para se excluir fator polinomial que gera indeterminação matemática.
    - Técnica de Multiplicação pelo Conjugado pode ser usada para se alterar os fatores dos polinômios, com o objeitvo de se excluir o fator que gera indeterminação matemática.
    - Depois da exclusão, deve-se substituir o valor de x por a e encontrar o limite L da função.
3. Os limites laterais pela esquerda e pela direita devem ser iguais a L.
  - Se sim, L é o valor do Limite da Função, quando x tende para a.

#### Definição Formal de Limites
- A definição mais precisa de limites é dada em termos de $ \epsilon $ (épsilon) e $ \delta $ (delta):

$$
\lim_{{x \to a}} f(x) = L \quad \text{se, para todo } \epsilon > 0, \text{ existe um } \delta > 0 \text{ tal que se } 0 < |x - a| < \delta, \text{ então } |f(x) - L| < \epsilon.
$$

<!-- 
#### Propriedades dos Limites
- **Limite de uma Constante:** \( \lim_{{x \to a}} c = c \)
- **Limite da Soma:** \( \lim_{{x \to a}} [f(x) + g(x)] = \lim_{{x \to a}} f(x) + \lim_{{x \to a}} g(x) \)
- **Limite do Produto:** \( \lim_{{x \to a}} [f(x) \cdot g(x)] = \lim_{{x \to a}} f(x) \cdot \lim_{{x \to a}} g(x) \)
- **Limite do Quociente:** \( \lim_{{x \to a}} \frac{f(x)}{g(x)} = \frac{\lim_{{x \to a}} f(x)}{\lim_{{x \to a}} g(x)} \), desde que \( \lim_{{x \to a}} g(x) \neq 0 \)

#### Limites Laterais
- **Limite à Direita:** \( \lim_{{x \to a^+}} f(x) \) é o valor que \( f(x) \) se aproxima quando \( x \) se aproxima de \( a \) por valores maiores que \( a \).
- **Limite à Esquerda:** \( \lim_{{x \to a^-}} f(x) \) é o valor que \( f(x) \) se aproxima quando \( x \) se aproxima de \( a \) por valores menores que \( a \).

Para que o limite \( \lim_{{x \to a}} f(x) \) exista, os limites laterais devem ser iguais:

\[
\lim_{{x \to a^+}} f(x) = \lim_{{x \to a^-}} f(x) = L
\]

#### Limites no Infinito e Limites Infinitos
- **Limites no Infinito:** Descrevem o comportamento de \( f(x) \) quando \( x \) cresce ou decresce indefinidamente.
  - \( \lim_{{x \to \infty}} f(x) = L \)
  - \( \lim_{{x \to -\infty}} f(x) = L \)
- **Limites Infinitos:** Descrevem o comportamento de \( f(x) \) quando \( x \) se aproxima de um valor \( a \) e \( f(x) \) cresce ou decresce indefinidamente.
  - \( \lim_{{x \to a}} f(x) = \infty \)
  - \( \lim_{{x \to a}} f(x) = -\infty \)

### 2. **Continuidade**

#### Definição
Uma função \( f(x) \) é contínua em um ponto \( a \) se as seguintes condições forem satisfeitas:
1. \( f(a) \) está definida.
2. \( \lim_{{x \to a}} f(x) \) existe.
3. \( \lim_{{x \to a}} f(x) = f(a) \).

Se qualquer uma dessas condições não for atendida, a função é descontínua em \( a \).

#### Tipos de Descontinuidades
- **Descontinuidade Removível:** O limite \( \lim_{{x \to a}} f(x) \) existe, mas \( f(a) \) não está definida ou \( \lim_{{x \to a}} f(x) \neq f(a) \).
- **Descontinuidade de Salto:** Os limites laterais \( \lim_{{x \to a^+}} f(x) \) e \( \lim_{{x \to a^-}} f(x) \) existem, mas são diferentes.
- **Descontinuidade Infinita:** Um dos limites laterais é infinito.

#### Teoremas sobre Continuidade
- **Teorema do Valor Intermediário:** Se \( f \) é contínua em um intervalo \([a, b]\) e \( k \) é um valor entre \( f(a) \) e \( f(b) \), então existe pelo menos um \( c \) em \([a, b]\) tal que \( f(c) = k \).
- **Teorema de Weierstrass:** Se \( f \) é contínua em um intervalo fechado \([a, b]\), então \( f \) atinge seus valores máximo e mínimo nesse intervalo.

### 3. **Aplicações de Limites e Continuidade**
- **Análise de Comportamento de Funções:** Limites ajudam a entender o comportamento de funções em pontos críticos e no infinito.
- **Cálculo de Derivadas:** A definição de derivada é baseada no conceito de limite.
- **Modelagem de Fenômenos Físicos:** Limites e continuidade são usados para modelar situações reais onde mudanças suaves e abruptas ocorrem.

### Exemplos Práticos
1. **Cálculo de Limites:**
   - \( \lim_{{x \to 2}} (3x + 4) = 10 \)
   - \( \lim_{{x \to 0}} \frac{\sin(x)}{x} = 1 \)

2. **Verificação de Continuidade:**
   - A função \( f(x) = x^2 \) é contínua em todos os pontos.
   - A função \( f(x) = \frac{1}{x} \) é descontínua em \( x = 0 \).

### Conclusão
O estudo de limites e continuidade é essencial para o cálculo diferencial e integral, fornecendo as ferramentas necessárias para analisar o comportamento de funções e entender conceitos mais avançados. Dominar esses tópicos é crucial para o sucesso em cursos de cálculo e suas aplicações em diversas áreas da ciência e engenharia. -->