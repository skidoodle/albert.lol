import age from '@/utils/age'

export const AboutMe = () => {
  return (
    <section className='p-6 max-w-lg rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold mb-4'>About Me</h2>
      <p className='text-base leading-relaxed'>
        I’m a {age()}-year-old Computer Science student based in Budapest,
        Hungary with a deep passion for systems engineering and technology. I
        enjoy working on my homelab and self-hosting projects, and I’m also
        enthusiastic about coding in TypeScript and Go.
      </p>
      <p className='text-base leading-relaxed mt-4'>
        If you share similar interests or simply want to chat, feel free to
        reach out!
      </p>
    </section>
  )
}
