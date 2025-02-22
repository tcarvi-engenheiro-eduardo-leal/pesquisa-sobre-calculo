import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Limites, Derivadas e Técnicas de Derivação',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Limites e Continuidade; Definição de Derivada; Técnicas de Derivação; Aplicações: Cálulo de Taxas de Variação, Cálculo de Máximos e Mínimos (otimização); Cálculos de Concavidade e Pontos de Inflexão para Esboço de Gráficos; Teorema do Valor Médio; Aproximações Lineares e Diferenciais; Regra de L'Hôpital; Séries de Taylor e Maclaurin; Análise de Comportamento de Funções; Derivadas Parciais; Gradiente e Derivada Direcional.
      </>
    ),
  },
  {
    title: 'Integrais e Técnicas de Integração',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Definição de Antiderivadas e Integrais Indefinidas; Definição de Integral Definida; Teorema Fundamental do Cálculo; Técnicas de Integração: Integração por Substituição, Integração por Partes; Aplicações da Integração. 
      </>
    ),
  },
  {
    title: 'Equações Diferenciais',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Equações Diferenciais Ordinárias; Solução de Equações Diferenciais Simples.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
