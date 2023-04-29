import classes from './HeroSection.module.css';

function HeroSection() {
  return <div className={classes.heroSection}>
  <div className={classes.heroContent}>
    <div className={classes.mainHeroHeading}>
      Unceasing innovation. Preserving the natural world.
    </div>
    <div className={classes.mainIntro}>
      Redsand Ventures is unlocking frontier markets through responsible capital. We work with industry players and funders to build bold projects where the innovation proves out both the return on investment and impact.
    </div>
    <div className={classes.whatWeDo}>
      What We Do
    </div>
  </div>
  <div className={classes.parallexEffectText}>
    <div style={{position: 'absolute', right: '220px', bottom: '-54px', textAlign: '-webkit-right'}}>
      <div style={{fontSize: '200px', fontWeight: 700, letterSpacing: '18px', transform: 'rotate(90deg)',
    width: 'min-content',
    height: 'min-content',
    webkitBackgroundClip: 'text',
    backgroundClip: 'text',
    /* color: transparent; */
    // position: 'absolute',
    right: '-170px',
    bottom: '210px',
    }}>RE</div>
      <div style={{fontSize: '200px', fontWeight: 700, letterSpacing: '18px',
    width: 'min-content',
    height: 'min-content',
    webkitBackgroundClip: 'text',
    backgroundClip: 'text',
    /* color: transparent; */
    // position: 'absolute',
    right: '-170px',
    bottom: '210px',
    }}>SAND</div>
    </div>
    <div style={{fontSize: '80px', fontWeight: 700, letterSpacing: '18px', transform: 'rotate(270deg)',
    width: 'min-content',
    height: 'min-content',
    webkitBackgroundClip: 'text',
    backgroundClip: 'text',
    /* color: transparent; */
    position: 'absolute',
    right: '-170px',
    bottom: '210px',
    }}>VENTURES</div>
  </div>
  </div>
}

export default HeroSection;