import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TecList = [
  {
    Png: require('@site/static/img/figma.png').default, 
    description: (
      <>
        <strong>Figma</strong>
      </>
    ),
  },
  {
    Png: require('@site/static/img/spline.png').default,
    description: (
      <>Spline</>
    ),
  },
  {
    Png: require('@site/static/img/Three.js.png').default, 
    description: (
      <>Three.js</>
    ),
  },
  {
    Png: require('@site/static/img/Angular.png').default, 
    description: (
      <>Angular</>
    ),
  },
  {
    Png: require('@site/static/img/sql.png').default,
    description: (
      <>MySQL</>
    ),
  },
  {
    Png: require('@site/static/img/SSO.png').default, 
    description: (
      <>Single sign-on</>
    ),
  },
  {
    Png: require('@site/static/img/Spring.png').default,
    description: (
      <>Spring Boot</>
    ),
  },
  {
    Png: require('@site/static/img/Docker.png').default, 
    description: (
      <>Docker</>
    ),
  },
];

function Feature({ Png, description }) {
  return (
    <div className={clsx('col col--3', styles.featureItem)}>
      <div className="text--center">
        {}
        <img src={Png} className={styles.featureSvg} style={{ height: '100px', width: '100px' }} alt="Technology" />
      </div>
      <div className="text--center padding-horiz--md">
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageTec() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className={clsx('text--left', styles.gradientTitle)}>
          Tecnologias
        </Heading>
        <br />
        <div className="row">
          {TecList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
