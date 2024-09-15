import age from '@/utils/age';

export const AboutMe = () => {
  return (
    <section className='p-6 max-w-lg rounded-lg shadow-lg mt-2'>
      <h2 className='text-3xl font-bold mb-4'>About Me</h2>
      <p className='text-base leading-relaxed'>
        I’m <span className='font-semibold text-blue-400'>{age()} years old</span>,{' '}
        studying <span className='font-medium text-orange-400'>Computer Science Operational Engineering</span>{' '}
        at the <span className='font-medium text-green-400'>University of Óbuda</span> in Hungary.{' '}
        I’m passionate about <span className='text-red-400'>systems engineering</span>,{' '}
        working on my <span className='italic text-teal-300'>homelab</span>,{' '}
        and coding in <span className='font-medium text-purple-400'>TypeScript</span>{' '}
        and <span className='font-medium text-purple-400'>Go</span>.
      </p>
    </section>
  );
};
