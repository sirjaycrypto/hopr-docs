import React from 'react';
import clsx from 'clsx';
import styles from './HOPRfrontPage.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 *<img src={require('@site/static/img/front_icons/shield.png').default} />
 * **/

const FeatureList = [
{
    title: 'Run a hoprd node',
    Svg: <img class="svg_icon" src={'/img/front_icons/ship.svg'}/>,
    description: (
      <>
        Earn HOPR tokens by relaying data.
      </>
    ),
	docName: ('node/start-here'),
  },
{
    title: 'Cover Traffic',
    Svg: <img class="svg_icon" src={'/img/front_icons/ship.svg'}/>,
    description: (
      <>
        Whats is a Cover Traffic? And why it is important.
      </>
    ),
	docName: ('#'),
  },
	{
    title: 'FAQ',
    Svg: <img class="svg_icon" src={'/img/front_icons/ship.svg'}/>,
    description: (
      <>
        Frequently asked questions related to HOPR.
      </>
    ),
        docName: ('#'),
  },
];

function Feature({Svg, title, description, docName}) {
  return (
    <a
        href={docName}
        className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5"
      >
        <div className="highlightPanel">
          <div className="d-flex flex-row align-items-center mb-2">
            <span className="icon" aria-label="icon">
	  {Svg}
            </span>
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
        </div>
      </a>
  );
}

export default function HOPRfrontPage() {
  return (
	  <div className="mainContainer landing-page">
        <meta property="og:image" content="/img/share.jpg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center title-container mt-5 mt-lg-0">
              <h1 className="m-0 font-montserrat">
                Welcome to the HOPR docs!
                <br />
              </h1>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          </div>
        </div>
      </div>
  );
}
