import partnerOne from '../../assets/figma/partner-1.svg'
import partnerTwo from '../../assets/figma/partner-2.svg'
import partnerThree from '../../assets/figma/partner-3.svg'
import partnerFour from '../../assets/figma/partner-4.svg'
import partnerFive from '../../assets/figma/partner-5.svg'

const partners = [partnerOne, partnerTwo, partnerThree, partnerFour, partnerFive]

export function PartnerStrip() {
  return (
    <section className="partner-strip" aria-label="Learning platform partners">
      <div className="partner-strip__inner">
        {partners.map((partner) => <img src={partner} alt="" key={partner} />)}
      </div>
    </section>
  )
}