import type { CSSProperties } from 'react'
import ctaBackground from '../../assets/figma/cta-frame-background.svg'
import ctaConeLowerLeft from '../../assets/figma/cta-cone-lower-left.png'
import ctaConeLowerLeftMask from '../../assets/figma/cta-cone-lower-left-mask.png'
import ctaConeLowerLeftLarge from '../../assets/figma/cta-cone-lower-left-large.png'
import ctaConeLowerLeftLargeMask from '../../assets/figma/cta-cone-lower-left-large-mask.png'
import ctaConeUpperRight from '../../assets/figma/cta-cone-upper-right.png'
import ctaConeUpperRightMask from '../../assets/figma/cta-cone-upper-right-mask.png'
import ctaConeUpperRightLarge from '../../assets/figma/cta-cone-upper-right-large.png'
import ctaConeUpperRightLargeMask from '../../assets/figma/cta-cone-upper-right-large-mask.png'
import ctaPhoto330 from '../../assets/figma/cta-photo-330.png'
import ctaPhoto330Mask from '../../assets/figma/cta-photo-330-mask.png'
import ctaPhoto385 from '../../assets/figma/cta-photo-385.png'
import ctaPhoto385Mask from '../../assets/figma/cta-photo-385-mask.png'
import ctaPhoto175Mask from '../../assets/figma/cta-photo-175-mask.png'

function ornamentMask(mask: string, color: string): CSSProperties {
  return {
    backgroundColor: color,
    maskImage: `url(${mask})`,
    WebkitMaskImage: `url(${mask})`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  }
}

export function CreatorCtaSection() {
  return (
    <section className="creator-cta" id="creator-cta" aria-labelledby="creator-cta-title">
      <img className="creator-cta__grid" src={ctaBackground} alt="" aria-hidden="true" />
      <div className="creator-cta__ornaments" aria-hidden="true">
        <div className="creator-cta__ornament creator-cta__ornament--cone-top-right">
          <img src={ctaConeUpperRight} alt="" /><span style={ornamentMask(ctaConeUpperRightMask, '#d4fb20')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--photo-right">
          <img src={ctaPhoto330} alt="" /><span style={ornamentMask(ctaPhoto330Mask, '#d4fb20')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--photo-left">
          <img src={ctaPhoto385} alt="" /><span style={ornamentMask(ctaPhoto385Mask, '#d4fb20')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--photo-small">
          <img src={ctaPhoto385} alt="" /><span style={ornamentMask(ctaPhoto175Mask, '#f5f5f6')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--cone-left-small">
          <img src={ctaConeLowerLeft} alt="" /><span style={ornamentMask(ctaConeLowerLeftMask, '#f5f5f6')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--cone-left-large">
          <img src={ctaConeLowerLeftLarge} alt="" /><span style={ornamentMask(ctaConeLowerLeftLargeMask, '#d4fb20')} />
        </div>
        <div className="creator-cta__ornament creator-cta__ornament--cone-right-large">
          <img src={ctaConeUpperRightLarge} alt="" /><span style={ornamentMask(ctaConeUpperRightLargeMask, '#f5f5f6')} />
        </div>
      </div>
      <div className="creator-cta__content">
        <h2 id="creator-cta-title">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <a className="lime-button" href="#newsletter">Join as Creator</a>
      </div>
    </section>
  )
}