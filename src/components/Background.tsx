export const Background = () => {
  return (
    <div className='gradient-bg'>
      <svg
        viewBox='0 0 100vw 100vw'
        xmlns='http://www.w3.org/2000/svg'
        className='noiseBg'
      >
        <filter id='noiseFilterBg'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.6'
            stitchTiles='stitch'
          />
        </filter>

        <rect
          width='100%'
          height='100%'
          preserveAspectRatio='xMidYMid meet'
          filter='url(#noiseFilterBg)'
        />
      </svg>

      <div className='gradients-container'>
        <div className='g1'></div>
        <div className='g2'></div>
        <div className='g3'></div>
        <div className='g4'></div>
        <div className='g5'></div>
      </div>
    </div>
  )
}
