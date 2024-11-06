import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageTeam from '../components/HomepageTeam';
import HomepageTec from '../components/HomepageTec';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<header className={clsx('hero hero--teste', styles.heroBanner)}>
  <div className="container">
    <div className="hero__title">
      <img src="img/logo.svg" alt="MapView" className="hero__image" />
    </div>
    <p className="hero__subtitle">{siteConfig.tagline}</p>
    <div className={styles.buttons}>
      <div className="button-border">
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro"
        >
          Documentação
        </Link>
      </div>
    </div>
  </div>
</header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageTec />
        <HomepageTeam />
      </main>
    </Layout>
  );
}
