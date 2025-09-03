import React from 'react'

const About = () => {
  return (
    <div>
      <div className="w-full h-[400px] bg-[url('assets/about2.jpg')] bg-cover  bg-bottom relative lg:-top-[5.2rem] sm:top-[20px] flex flex-col justify-center items-center text-center px-4 bg-no-repeat sm:bg-scroll lg:bg-fixed">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white space-y-4">
          <h2 className="text-5xl font-bold">About Us</h2>
          <h3 className="text-4xl font-medium">Shaping the Future with Expertise and Innovation</h3>
          <p className="max-w-2xl mx-auto text-2xl lg:text-base leading-relaxed font-semibold">
            Delivering excellence across civil engineering, oil and gas, and global project management. 
            Our expertise drives innovation, fuels progress, and builds a sustainable future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
