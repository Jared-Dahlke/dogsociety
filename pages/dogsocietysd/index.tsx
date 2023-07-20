import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Picture from '../../public/dogsociety.jpeg'
import { useExcelDownloder } from 'react-xls'

export default function Home({ user: session }) {
	const router = useRouter()
	const { ExcelDownloder, Type } = useExcelDownloder()

	const valid =
		session?.user?.email?.includes('jared.dahlke@gmail.com') ||
		session?.user?.email?.toLowerCase()?.includes('dogsocietysd.com')

	const visitationWaiversQuery = useQuery(
		['visitationwaivers'],
		() => axios.get('/api/get_visitation_waivers').then((res) => res.data),
		{
			enabled: valid
		}
	)

	const petReleaseWaiversQuery = useQuery(
		['petReleaseWaivers'],
		() => axios.get('/api/get_pet_release_waivers').then((res) => res.data),
		{
			enabled: valid
		}
	)

	if (!valid) {
		return (
			<div className='isolate bg-white h-screen flex flex-col justify-center items-center relative'>
				<button
					className=' absolute top-4 left-4 rounded-md bg-gray-400 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					onClick={() => router.push('/dogsocietysd/waivers')}>
					Go To Waivers
				</button>
				<div className='text-xl mb-12'>Waiver Administration Portal</div>
				<div className='mb-8 flex justify-center'>
					<Image
						src={Picture}
						alt='Dog Society Logo'
						width={200}
						height={50}
						className='rounded-full'
					/>
				</div>
				<button
					className=' rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					onClick={() => signIn()}>
					Dog Society Employee Sign In
				</button>
			</div>
		)
	}

	const data = {
		Visitation: visitationWaiversQuery?.data || [],
		PetRelease: petReleaseWaiversQuery?.data || []
	}

	const [activeTab, setActiveTab] = React.useState('Visitation')
	const tabs = [{ name: 'Visitation' }, { name: 'Pet Release' }]

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}

	return (
		<div className='isolate bg-white h-screen  p-8'>
			<div className='sm:flex sm:items-center'>
				<div className='sm:flex-auto'>
					<h1 className='text-3xl font-semibold leading-6 text-gray-900 mb-24'>
						Admin Portal (Dog Society Employees Only)
					</h1>
				</div>
				<div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex gap-8'>
					{visitationWaiversQuery?.data && petReleaseWaiversQuery?.data && (
						<ExcelDownloder
							data={data}
							filename={'download'}
							type={Type.Button} // or type={'button'}
						>
							<button
								//	onClick={() => signOut()}
								type='button'
								className='block rounded-md bg-green-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								Download All
							</button>
						</ExcelDownloder>
					)}

					<button
						onClick={() => signOut()}
						type='button'
						className='block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Sign Out
					</button>
				</div>
			</div>
			<div>
				<div className='sm:hidden'>
					<label htmlFor='tabs' className='sr-only'>
						Select a tab
					</label>
					{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
					<select
						id='tabs'
						name='tabs'
						className='block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
						value={activeTab}>
						{tabs.map((tab) => (
							<option key={tab.name}>{tab.name}</option>
						))}
					</select>
				</div>
				<div className='hidden sm:block'>
					<div className='border-b border-gray-200'>
						<nav className='-mb-px flex space-x-8' aria-label='Tabs'>
							{tabs.map((tab) => (
								<a
									onClick={() => setActiveTab(tab.name)}
									key={tab.name}
									//href={tab.href}
									className={classNames(
										tab.name === activeTab
											? 'border-indigo-500 text-indigo-600'
											: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
										'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
									)}
									aria-current={tab.name === activeTab ? 'page' : undefined}>
									{tab.name}
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>

			{activeTab === 'Visitation' && (
				<div className='px-4 sm:px-6 lg:px-8'>
					<div className='mt-8 flow-root'>
						<div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
								<table className='min-w-full divide-y divide-gray-300'>
									<thead>
										<tr>
											<th
												scope='col'
												className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
												First Name
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Last Name
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Email
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Phone
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Signature
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Wants Email Marketing
											</th>

											<th
												scope='col'
												className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
												Signed Date
											</th>
										</tr>
									</thead>
									<tbody className='divide-y divide-gray-200'>
										{visitationWaiversQuery?.data?.map((waiver) => (
											<tr key={waiver._id}>
												<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
													{waiver.firstName}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.lastName}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.email}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.phone}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.signature}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.emailMarketing ? 'Yes' : 'No'}
												</td>
												<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
													{waiver.createDate}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}

			{activeTab === 'Pet Release' && (
				<div className='px-4 sm:px-6 lg:px-8 pt-24'>
					<div className='mt-8 flow-root'>
						<div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
							<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
								<table className='min-w-full divide-y divide-gray-300'>
									<thead>
										<tr>
											<th
												scope='col'
												className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
												First Name
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Last Name
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Email
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Phone
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Address
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Dogs
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Amount
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Vet
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Approve Treatment By
											</th>
											<th
												scope='col'
												className='py-3.5 px-3 text-left text-sm font-semibold text-gray-900'>
												Signature
											</th>

											<th
												scope='col'
												className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
												Signed Date
											</th>
										</tr>
									</thead>
									<tbody className='divide-y divide-gray-200'>
										{petReleaseWaiversQuery?.data?.map((waiver) => (
											<tr key={waiver._id}>
												<td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
													{waiver.firstName}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.lastName}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.email}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.phone}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{`${waiver.address} ${waiver.city}, ${waiver.state} ${waiver.zip}`}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.dogs}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.amount}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.vet}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.approveTreatmentBy}
												</td>
												<td className='whitespace-nowrap py-4 px-3 text-sm text-gray-500'>
													{waiver.signature}
												</td>

												<td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
													{waiver.createDate}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export const getServerSideProps = async function ({ req, res }) {
	const session = await getServerSession(req, res, authOptions)

	return {
		props: { user: session }
	}
}
