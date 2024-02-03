import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            TalkPDF is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Talk with your <span className="text-primary">PDF</span> in seconds
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          TalkPDF allows you to have conversations with any PDF documents. Simply upload your file and start asking questions right away.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/api/auth/login'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/dashboard-preview.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Start chatting in minutes
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Chatting to your PDF files has never been
              easier than with talkPDF.
            </p>
          </div>
        </div>

        {/* steps */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap">
              <div className="xl:w-1/3 lg:w-1/3 lg:text-left text-center md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <span className='text-sm font-medium text-primary'>
                  Step 1
                </span>
                <h2 className="text-lg sm:text-xl text-zinc-600 font-medium title-font mb-2"> Sign up for an account</h2>
                <p className="leading-relaxed text-base mb-4">Either starting out with a free plan or
                  choose our{' '}
                  <Link
                    href='/pricing'
                    className='text-primary underline underline-offset-2'>
                    pro plan
                  </Link>
                  .</p>
                {/* <Link className="text-violet-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link> */}
              </div>
              <div className="xl:w-1/3 lg:w-1/3 lg:text-left text-center md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <span className='text-sm font-medium text-primary'>
                  Step 2
                </span>
                <h2 className="text-lg sm:text-xl text-zinc-600 font-medium title-font mb-2">Upload your PDF file</h2>
                <p className="leading-relaxed text-base mb-4">We&apos;ll process your file and make it ready for you to chat with.</p>
                {/* <Link className="text-violet-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link> */}
              </div>
              <div className="xl:w-1/3 lg:w-1/3 lg:text-left text-center md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <span className='text-sm font-medium text-primary'>
                  Step 3
                </span>
                <h2 className="text-lg sm:text-xl text-zinc-600 font-medium title-font mb-2">Start asking questions</h2>
                <p className="leading-relaxed text-base mb-4">That simple. Try out TalkPDF today - it really takes less than a minute.</p>
                {/* <Link className="text-violet-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" zoomAndPan="magnify" viewBox="0 0 181.5 61.499998" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /><clipPath id="bbbde2923c"><path d="M 72 8.792969 L 167 8.792969 L 167 52.210938 L 72 52.210938 Z M 72 8.792969 " clip-rule="nonzero" /></clipPath><clipPath id="f8b93c37f6"><path d="M 103.824219 8.792969 L 161.042969 8.792969 C 163.175781 8.792969 165.144531 9.9375 166.199219 11.789062 C 167.257812 13.640625 167.238281 15.917969 166.152344 17.753906 L 151.054688 43.25 C 147.761719 48.804688 141.785156 52.210938 135.332031 52.210938 L 78.109375 52.210938 C 75.976562 52.210938 74.007812 51.066406 72.953125 49.214844 C 71.894531 47.363281 71.914062 45.085938 73 43.25 L 88.101562 17.753906 C 91.390625 12.199219 97.367188 8.792969 103.824219 8.792969 Z M 103.824219 8.792969 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#bbbde2923c)"><g clip-path="url(#f8b93c37f6)"><path fill="#000000" d="M 67.695312 8.792969 L 171.457031 8.792969 L 171.457031 52.210938 L 67.695312 52.210938 Z M 67.695312 8.792969 " fill-opacity="1" fill-rule="nonzero" /></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(9.546019, 44.897914)"><g><path d="M 14 -5.453125 L 15.25 -1.0625 C 13.707031 -0.15625 11.953125 0.296875 9.984375 0.296875 C 8.035156 0.296875 6.457031 -0.242188 5.25 -1.328125 C 4.039062 -2.421875 3.4375 -3.960938 3.4375 -5.953125 L 3.4375 -14.65625 L 0.6875 -14.65625 L 0.6875 -18.796875 L 3.4375 -18.796875 L 3.4375 -24.28125 L 9.71875 -24.28125 L 9.71875 -18.828125 L 14.875 -18.828125 L 14.875 -14.65625 L 9.71875 -14.65625 L 9.71875 -6.953125 C 9.71875 -6.191406 9.867188 -5.632812 10.171875 -5.28125 C 10.484375 -4.925781 10.941406 -4.765625 11.546875 -4.796875 C 12.140625 -4.796875 12.957031 -5.015625 14 -5.453125 Z M 14 -5.453125 " /></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(23.367305, 44.897914)"><g><path d="M 11.375 -20 C 14.070312 -20 16.171875 -19.367188 17.671875 -18.109375 C 19.171875 -16.859375 19.9375 -15.113281 19.96875 -12.875 L 19.96875 0 L 13.78125 0 L 13.78125 -2.265625 C 12.488281 -0.554688 10.476562 0.296875 7.75 0.296875 C 5.675781 0.296875 4.03125 -0.273438 2.8125 -1.421875 C 1.59375 -2.566406 0.984375 -4.054688 0.984375 -5.890625 C 0.984375 -7.765625 1.632812 -9.21875 2.9375 -10.25 C 4.25 -11.289062 6.125 -11.820312 8.5625 -11.84375 L 13.75 -11.84375 L 13.75 -12.140625 C 13.75 -13.109375 13.425781 -13.867188 12.78125 -14.421875 C 12.132812 -14.972656 11.175781 -15.25 9.90625 -15.25 C 8.125 -15.25 6.160156 -14.695312 4.015625 -13.59375 L 2.234375 -17.765625 C 5.421875 -19.253906 8.46875 -20 11.375 -20 Z M 9.6875 -3.984375 C 10.6875 -3.984375 11.5625 -4.234375 12.3125 -4.734375 C 13.070312 -5.234375 13.550781 -5.882812 13.75 -6.6875 L 13.75 -8.453125 L 9.765625 -8.453125 C 7.859375 -8.453125 6.90625 -7.742188 6.90625 -6.328125 C 6.90625 -5.597656 7.148438 -5.023438 7.640625 -4.609375 C 8.128906 -4.191406 8.8125 -3.984375 9.6875 -3.984375 Z M 9.6875 -3.984375 " /></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(43.221789, 44.897914)"><g><path d="M 9.03125 0 L 2.703125 0 L 2.703125 -27.125 L 9.03125 -27.125 Z M 9.03125 0 " /></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(52.874693, 44.897914)"><g><path d="M 11.15625 -7.609375 L 9.03125 -5.375 L 9.03125 0 L 2.703125 0 L 2.703125 -27.125 L 9.03125 -27.125 L 9.03125 -12.796875 L 15.53125 -19.703125 L 22.703125 -19.703125 L 15.46875 -12.140625 L 22.921875 0 L 15.421875 0 Z M 11.15625 -7.609375 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(79.492015, 44.903757)"><g><path d="M 2.5625 -25.59375 L 13.703125 -25.59375 C 16.972656 -25.59375 19.507812 -24.816406 21.3125 -23.265625 C 23.113281 -21.722656 24.015625 -19.523438 24.015625 -16.671875 C 24.015625 -13.671875 23.113281 -11.34375 21.3125 -9.6875 C 19.507812 -8.03125 16.972656 -7.203125 13.703125 -7.203125 L 9.0625 -7.203125 L 9.0625 0 L 2.5625 0 Z M 9.0625 -20.46875 L 9.0625 -12.328125 L 13.375 -12.328125 C 14.8125 -12.328125 15.921875 -12.675781 16.703125 -13.375 C 17.484375 -14.082031 17.875 -15.109375 17.875 -16.453125 C 17.875 -17.765625 17.484375 -18.757812 16.703125 -19.4375 C 15.921875 -20.125 14.8125 -20.46875 13.375 -20.46875 Z M 9.0625 -20.46875 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(102.271679, 44.903757)"><g><path d="M 2.5625 -25.59375 L 13.5625 -25.59375 C 17.582031 -25.59375 20.851562 -24.410156 23.375 -22.046875 C 25.90625 -19.679688 27.171875 -16.597656 27.171875 -12.796875 C 27.171875 -9.015625 25.890625 -5.9375 23.328125 -3.5625 C 20.765625 -1.1875 17.425781 0 13.3125 0 L 2.5625 0 Z M 9.0625 -20.40625 L 9.0625 -5.1875 L 13.703125 -5.1875 C 15.703125 -5.1875 17.34375 -5.882812 18.625 -7.28125 C 19.90625 -8.6875 20.546875 -10.507812 20.546875 -12.75 C 20.546875 -15 19.875 -16.835938 18.53125 -18.265625 C 17.195312 -19.691406 15.492188 -20.40625 13.421875 -20.40625 Z M 9.0625 -20.40625 " /></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(128.232483, 44.903757)"><g><path d="M 21.53125 -20.46875 L 9.0625 -20.46875 L 9.0625 -14.546875 L 20.546875 -14.546875 L 20.546875 -9.4375 L 9.0625 -9.4375 L 9.0625 0 L 2.5625 0 L 2.5625 -25.59375 L 21.53125 -25.59375 Z M 21.53125 -20.46875 " /></g></g></g></svg>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 TalkPDF —
            <Link href="https://chnspart.com" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@chnspart</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={'https://facebook.com/chnspart'} target='_blank' className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={'https://twitter.com/R_CHN4'} target='_blank' className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={'https://instagram.com/chnspart'} target='_blank' className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={'https://linkedin.com/in/chnspart'} target='_blank' className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </>
  )
}
