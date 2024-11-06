import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TeamList = [
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Ana Sutéro</h3>
        DEV FRONT-END
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Bruna Nunes</h3>
        DEV FRONT-END
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Maria Ferreira</h3>
        DEV BACK-END
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>João Borges</h3>
        DEV BACK-END
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Sarah Santos</h3>
        UX/UI
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Sarah Cruz</h3>
        DEV BACK-END
      </>
    ),
  },
  {
    Png: require('@site/static/img/testeaqui.png').default, // Usando PNG
    description: (
      <>
        <h3>Thayná Quinteiro</h3>
        DEV FULL-STACK
      </>
    ),
  },
];

function FeatureWithDescription({ Png, description }) {
  return (
    <div className={clsx('col col--3', styles.featureItem)}>
      <div className="text--center">
        {/* Usando <img> para renderizar PNG */}
        <img src={Png} className={styles.featureSvg} style={{ height: '150px', width: '150px' }} alt="Team member" />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageTeam() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className={clsx('text--left', styles.gradientTitle)}>
          Nosso time
        </Heading>
        <br />
        
        {/* Primeira linha: 3 imagens */}
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {TeamList.slice(0, 3).map((props, idx) => (
            <FeatureWithDescription key={idx} {...props} />
          ))}
        </div>
        
        {/* Segunda linha: 4 imagens */}
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {TeamList.slice(3, 7).map((props, idx) => (
            <FeatureWithDescription key={idx + 3} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
