import React from 'react'

const Map = () => {
  return (
    <div className='w-full h-[400px]'>
        <iframe
          title="Veekites Location"
          src="https://www.google.com/maps?q=House+49,+O.A.U.+Quarters,+Close+D+Kashim+Ibrahim+Wy,+Maitama,+AMAC+904101,+Federal+Capital+Territory&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
    </div>
  )
}

export default Map