import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Dynamic Integrations",
    Svg: require("@site/static/img/neuron.svg").default,
    description: (
      <>
        neuropacs™ integrations enable any desired workflow. Mix and match our
        available options to best suit your needs.
      </>
    )
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/radiologist_transparent.svg").default,
    description: (
      <>
        Through our streamlined integration and onboarding process, you can
        focus on improving patient care without the hassle of complex technical
        challenges.
      </>
    )
  },
  {
    title: "Powered by AWS",
    Svg: require("@site/static/img/Amazon_Web_Services_Logo.svg").default,
    description: (
      <>
        We utilize the power of AWS to drive our leading edge product, ensuring
        high availabilty, scalability, and adaptability.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures() {
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
