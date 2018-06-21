/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          <Button href={docUrl('intro_dapps.html', language)}>Build DApps</Button>
            <Button href={docUrl('introduction.html', language)}>Introduction</Button>
            <Button href={docUrl('build_status_osx.html', language)}>Build Status</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Mobile first. Made for web3',
        image: imgUrl('status_logo_white_blue.svg'),
        imageAlign: 'top',
        title: '[DApps](intro_dapps.md)',
      },
      {
        content: 'Build the future of a new web',
        image: imgUrl('status_logo_blue.svg'),
        imageAlign: 'top',
        title: '[Status](build_status_osx.md)',
      },
      {
        content: 'Learn what web3 is really all about',
        image: imgUrl('status_logo_purple.svg'),
        imageAlign: 'top',
        title: 'Web3',
      },
    ]}
  </Block>
);

const DAppsHero = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>DApps for the Brave and True</h2>
    <MarkdownBlock>Deep down, you've always known you were destined for a decentralised web. Now it's time to depart into the mystical Ether.</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'If you\'re new to all this and want to learn how to build a DApp, start with [Embark by Status]().',
        image: imgUrl('devtools.png'),
        imageAlign: 'right',
        title: 'Embark on The Journey',
      },
      {
        content: 'So, you want to optimize your DApp and extend Status\' mobile first, native features? [These docs](docs/intro_dapps.html) are the best place to start.',
        image: imgUrl('devtools.png'),
        imageAlign: 'right',
        title: 'A Mobile Life For Us',
      },
    ]}
  </Block>
);

const StatusHero = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Building a Better Web</h2>
    <MarkdownBlock>Come and explore the far reaches of decentralised technologies with us, so we can build together the kind of world we all want to live in.</MarkdownBlock>
  </div>
);

const TryOut = props => (
  <Block id="try" background="light">
    {[
      {
        content: 'Building Status is a little like hitchhiking across the universe due to all the different possible mobile development setups. Luckily, you\'ve just found the best guide.',
        image: imgUrl('future.png'),
        imageAlign: 'left',
        title: '"Don\'t Panic"',
      },
      {
        content: '[Hunt bounties](https://openbounty.status.im) for pay, work with some of the most talented OSS engineers out there, and generally take your dev skillz to the next level.',
        image: imgUrl('future.png'),
        imageAlign: 'left',
        title: 'Write Code',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'Every time you cried out in anguish over an incomprehensible error; every time you lay awake at night, disturbing your loved ones with sobs over a gas fee induced heisenbug; some secret part of you has known that there has to be a better way. The Status Technikon has the material you need to be united forevermore with the delights of decentralisation.',
        image: imgUrl('browse_icon.png'),
        imageAlign: 'right',
        title: 'Welcome to #TheStateOfUs',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Optimised For Status"}</h2>
      <p>These awesome DApps all work well in Status</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <DAppsHero />
          <LearnHow />
          <StatusHero />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
