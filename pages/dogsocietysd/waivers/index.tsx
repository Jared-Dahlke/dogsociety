import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Picture from '../../../public/dogsociety.jpeg'
import Link from 'next/link'

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' }
]

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div className='isolate bg-white h-screen'>
			<div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
				<svg
					className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
					viewBox='0 0 1155 678'>
					<path
						fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
						fillOpacity='.3'
						d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
					/>
					<defs>
						<linearGradient
							id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
							x1='1155.49'
							x2='-78.208'
							y1='.177'
							y2='474.645'
							gradientUnits='userSpaceOnUse'>
							<stop stopColor='#9089FC' />
							<stop offset={1} stopColor='#FF80B5' />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className='px-6 pt-6 lg:px-8'>
				<nav className='flex items-center justify-between' aria-label='Global'>
					<div className='flex lg:flex-1'></div>
				</nav>
			</div>
			<main>
				<div className='relative px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl py-32 sm:py-32 lg:py-32'>
						<div className='mb-8 flex justify-center'>
							<Image
								src={Picture}
								alt='Dog Society Logo'
								width={200}
								height={50}
								className='rounded-full'
							/>
						</div>

						<div className='text-center'>
							<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
								Dog Society Waivers
							</h1>
							{/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p> */}
							<div className='mt-10 flex items-center justify-center gap-x-6'>
								<Link
									href='/dogsocietysd/waivers/visitation'
									className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Visitation Waiver
								</Link>
								<Link
									href='/dogsocietysd/waivers/petrelease'
									className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Pet Release Waiver
								</Link>
							</div>
						</div>
					</div>
					<div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
						<svg
							className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
							viewBox='0 0 1155 678'>
							<path
								fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
								fillOpacity='.3'
								d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
							/>
							<defs>
								<linearGradient
									id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
									x1='1155.49'
									x2='-78.208'
									y1='.177'
									y2='474.645'
									gradientUnits='userSpaceOnUse'>
									<stop stopColor='#9089FC' />
									<stop offset={1} stopColor='#FF80B5' />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</main>
		</div>
	)
}
