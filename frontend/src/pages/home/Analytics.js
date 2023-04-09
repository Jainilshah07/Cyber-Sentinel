import React from 'react'
import Card from './Card'
import Analysis1 from '../../assets/Analysis1.svg'
import Analysis2 from '../../assets/Analysis2.svg'
import Analysis3 from '../../assets/Analysis3.svg'

const Analytics = () => {
  return (
    <div>
      <div className="grid col-span-1 md:grid-cols-3">
        <Card number="670" image={Analysis1} content="Websites data we detect "  />
        <Card number="500+" image={Analysis2} content="Threaths Reduced "  />
        <Card number="102+" image={Analysis3} content="Cases Resolved "  />
      </div>
    </div>
  )
}

export default Analytics
