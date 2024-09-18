import age from '@/utils'

export const AboutMe = () => {
  return (
    <section className='p-4 max-w-[325px] lg:max-w-lg md:max-w-md rounded-lg shadow-lg dark:bg-[#1E1E1E] bg-[#F5F5F5]'>
      <h2 className='text-3xl font-bold mb-4 text-[3rem] dark:text-[#A3A3A3] text-[#666666]'>
        about me
      </h2>
      <p className='text-base leading-relaxed text-[1.15rem]'>
        I’m a{' '}
        <span className='font-semibold text-blue-400'>{age()}-year-old</span>,{' '}
        studying{' '}
        <span className='font-medium text-orange-400'>
          Computer Science Operational Engineering
        </span>{' '}
        at <span className='font-medium text-green-400'>Óbuda University</span>{' '}
        in Hungary. I’m passionate about{' '}
        <span className='text-red-400'>systems engineering</span>, working on my{' '}
        <span className='italic text-teal-300'>homelab</span>, and coding in{' '}
        <span className='font-medium text-purple-400'>TypeScript</span> and{' '}
        <span className='font-medium text-purple-400'>Go</span>.
      </p>
    </section>
  )
}
