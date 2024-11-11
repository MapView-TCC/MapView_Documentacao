import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Otimização',
    Svg: require('@site/static/img/3D.svg').default,
    description: (
      <>
        Facilite gerenciamento dos notebooks utilizando ambientação 3D.
      </>
    ),
  },
  {
    title: 'Centralização',
    Svg: require('@site/static/img/MapView.svg').default,
    description: (
      <>
        Cadastre e armazene todas as informações em uma só plataforma.
      </>
    ),
  },
  {
    title: 'Monitoramento',
    Svg: require('@site/static/img/RFID.svg').default,
    description: (
      <>
       Monitore seus equipamentos através de tecnologia RFID
      </>
    ),
  },
];

function Feature({ Svg, title, description, underlineColor }) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div
          className={styles.titleUnderline}
          style={{ backgroundColor: underlineColor }}
        ></div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className={clsx('text--left', styles.gradientTitle)}>
          Solução
        </Heading>
        <br />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
