import { ErrorModal } from '@/components/errorModal'
import { SuccessModal } from '@/components/successModal'
import {
	CheckCircleIcon,
	InformationCircleIcon
} from '@heroicons/react/20/solid'
import axios from 'axios'
import { useState } from 'react'
import * as EmailValidator from 'email-validator'

export default function VisitationWaiver() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zip, setZip] = useState('')
	const [dogs, setDogs] = useState('')
	const [amount, setAmount] = useState('')
	const [vet, setVet] = useState('')
	const [approveTreatmentBy, setApproveTreatmentBy] = useState('')
	const [signature, setSignature] = useState('')

	const submitIsEnabled =
		firstName &&
		lastName &&
		email &&
		phone &&
		address &&
		city &&
		state &&
		zip &&
		dogs &&
		amount &&
		vet &&
		approveTreatmentBy &&
		signature &&
		EmailValidator.validate(email)

	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const handleSubmit = async () => {
		try {
			await axios.post('/api/submit_pet_release_waiver', {
				firstName,
				lastName,
				email,
				phone,
				address,
				city,
				state,
				zip,
				dogs,
				amount,
				vet,
				approveTreatmentBy,
				signature,
				createDate: new Date()
			})
			setSuccess(true)
		} catch (error) {
			setError(true)
		}
	}

	return (
		<div className='bg-white py-32 px-6 lg:px-8'>
			<div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
				<p className='text-base font-semibold leading-7 text-indigo-600'>
					THE DOG SOCIETY
				</p>
				<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					Pet Release Authorization
				</h1>
				<p className='mt-6 text-xl leading-8'></p>
				<div className='mt-10 max-w-2xl flex flex-col gap-3'>
					<p>
						I, [ First Name ] [ Last Name ], of (address) [ Address ], [ City ],
						[ State ], [ Zip ]. This day of (Date) 3/8/2023, pursuant to the
						laws of California, willfully and voluntarily authorize the bear of
						this document [THE DOG SOCIETY] with lawful authority to temporarily
						act on my behalf for the care of my [ Name, # of dogs ] (name, # of
						dogs) pet(s). SECTION 1: GENERAL GRANT OF POWERS: The bearer of this
						document may act for me and in my name in any way that could as if I
						were personally present and exercising such power with respect to my
						pet’s daily care such as feeding, water, bathing, housing and social
						interaction; and emergency medical care and to require, withhold, or
						withdraw any type of medical treatment or procedure, even throughout
						my pet’s death may ensure, provided a licenses veterinarian is in
						agreement with the procedure being authorized. The bear shall have
						the same access to my pet’s medical records that I have, including
						the right to disclose the contents of those records to third
						parties. No procedure may be authorized exceeding $[ Amount ]
						without my specific consent, obtained by phone or email. I will be
						able to be reached at one or more of the following phone numbers: [
						Phone (Digits Only) ]. My email address is [ Email ]. In case of
						emergency, my primary veterinarian shall be [ Veterinarian ], or any
						veterinarian recommended by them. I also approve treatment by [
						Approve treatment by ]. SECTION 2: SPECIFIC RESTRICTIONS: THE DOG
						SOCIETY is specifically prohibited from giving consent to euthanize
						any of my pets, except and unless I cannot be reached by phone or
						email, and two veterinarians agree that the pet is suffering, or
						will unconscionably suffer to such a significant degree, or that
						such pet will most likely perish because of medical reasons. No pet
						shall be euthanized for behavioral reasons, only for such humane
						medical reasons. SECTION 3: THIRD PARTY RELIANCE: No person who
						relies in good faith on the authority of THE DOG SOCIETY under this
						instrument shall incur any liability to me, my estate or my personal
						representative. In order to induce third parties to accept THE DOG
						SOCIETY’s authority, I hereby indemnify and hold harmless any third
						party who acts in good faith reliance on THE DOG SOCIETY directions
						concerning my pets. SECTION 4: TERMINATION OF POWER: THE DOG
						SOCIETY’s powers and authority enumerated herein shall be effective
						from 3/8/2023 until revoked by me or until such power is revoked
						automatically by operation of law.
					</p>

					<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Boarding Contract
					</h1>
					<p>
						THE DOG SOCIETY LLC, and any of its members, agents, employees, and
						staff (hereinafter referred to as “The Dog Society”) agree to
						exercise due and reasonable care to board the dog for the owner. The
						Dog Society does not assume and shall not be held responsible for
						any liability with respect to the dog listed in this agreement, of
						any kind, character, or nature whatsoever, arising out of or from
						the boarding of this dog, or any damages which may accrue from any
						other cause whatsoever, including loss by fire, theft, running away,
						injury to persons, animals or property, unavoidable causes, or death
						or injury to any other animal caused by the within named dog during
						the term of this contract, whether this dog be on the premises of
						The Dog Society or not, and the owner of said dog agrees hereby to
						be and is solely responsible for any and all acts of behavior of
						said dog at any time within the termand time for the contract. The
						owner agrees to indemnify and hold harmless, The Dog Society for any
						third party claims caused or contributed to by the owner’s dog. In
						no cause shall The Dog Society be in any way liable or responsible.
						The responsibility and/or liability of The Dog Society, in no event
						shall exceed the sum of Five Hundred Dollars ($500.00) and the
						undersigned agrees to limit the responsibility of Five Hundred
						Dollars ($500.00) and no more, and agrees not to claim any damages
						against The Dog Society of any nature, whatsoever, either by way of
						contract, equity, negligence or otherwise in excess, in excess of
						said sum, including, but not limited to, consequential and/or
						punitive damages. The undersigned agrees and understands that any
						disputes arising out of this Agreement will be decided pursuant to
						the laws of the state of California and venue shall be in San Diego
						County. The owner of the within named dog specifically represents
						that he/she is the sole owner of said animal and that the named
						animal has not been exposed to distemper or rabies within the last
						thirty days, and that the required annual licenses has been
						obtained. The Dog Society shall have, and is hereby granted, a lien
						on the aforesaid animal for any and all unpaid boarding and/or other
						charges resulting from the boarding of said animal within The Dog
						Society. The owner hereby agrees that in the event the monthly or
						weekly boarding charges are not paid within thirty days after they
						become due an payable in accordance with the terms of this contract,
						The Dog Society may exercise its ien tights, and ten days after
						notice to owner may dispose of said animal for any and all unpaid
						charges, at private or public sale, and owner specifically waives
						and claims if such sale does not secure an price adequate to pay
						such costs of board and/or other charges delinquent plus clost of
						sale, then owner shall and must pay to The Dog Society the
						difference. Any monies realized by The Dog Society at such as sale,
						over, and above the charges due and cost of sale shall be returned
						to the owner. Notice shall be conclusively deemed to have been given
						pursuant to this paragraph if notice in writing of such intended
						sale shall be mailed by registered mail to the owner of the within
						named animal at the address given herein, and no further notice
						shall be required. If the animal becomes ill, or The Dog Society
						suspects animal is ill, the owner shall be notified as soon as
						possible, and if owner does not immediately inform The Dog Society
						regarding measures to be taken or if the state of the dog’s health
						requires quick action, owner authorizes The Dog Society the right
						and discretion to call a veterinarian or to administer medicine or
						to give advisable attention within the discretion of The Dog
						Society, and such expenses being reusable in the amount shall be
						promptly paid by the owner. Unless owner files with The Dog Society
						within thirty days from the date the animal was removed from The Dog
						Society, a written demand for any claimed injury or damages
						resulting from the boarding of said dog under the contract, said
						owner shall and does hereby waive any and all rights which he/she
						may have against The Dog Society for any liability arising under
						this contract, for damages, or otherwise. If any word, sentence, or
						section of this agreement be declared invalid, such ruling shall
						nevertheless not affect any other word, sentence, or section. The
						remedies hereunder are cumulative to The Dog Society and not
						alternative. No person is authorized by The Dog Society to change or
						waive any of the terms or conditions of this contract and The Dog
						Society will not be bound by any changes therein, whether oral or
						written. All terms and conditions of this agreement shall be binding
						on the heirs, administrators, and assigned of the owner of the
						within named animal. The contract is the entire agreement between
						the parties and supersedes any other document and or oral
						representation and/or agreements. If action is to be instituted to
						enforce this contract, the prevailing party is entitled to recover
						reasonable attorney’s fees and costs. If The Dog Society is unable
						to get ahold of the owner, the animal may to be taken off premises
						by The Dog Society without the consent of the owner The owner
						guarantees payment of any charges. If for any reason this invoice is
						not paid when presented, and is placed into collections, the owner
						agrees that The Dog Society may recover reasonable attorney’s fees,
						and other such costs as the court may allow. Interest charged on
						overdue bills shall be at the maximum rate allowed by law, but not
						to exceed 1.5% per month, compounded daily. This form authorizes The
						Dog Society permission to use pictures of my dog(s) on their
						website, social media, or other advertising materials.
					</p>

					<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Grooming Release Form{' '}
					</h1>
					<p>
						Health or medical problems: Occasionally, grooming can expose a
						hidden medical problem or aggravate a current one. This can occur
						during or after grooming. Please make sure to alert us of any
						current or past issues so that we may keep an eye out for them. All
						medical expenses for veterinary care will be covered by the pets
						owner upon signing this contract/agreement. Accidents: Although
						accidents are very rare, there is a risk when dealing with animals.
						Grooming equipment is sharp, and although we use extreme caution and
						care in all situations, possible problems could occur including
						cuts, nicks, scratches, quicking of nails, etc. In most cases this
						can occur, you will be notified of the accident. If The Dog Society
						LLC and any of its members, managers, agents, employees, and staff
						(collectively “The Dog Society'') feels it is serious, and the owner
						is not on-site, the owner will be notified and The Dog Society will
						seek immediate veterinary care for your pet with the closest vet
						clinic. Owner agrees not to hold The Dog Society responsible for any
						injuries which might result from this grooming process. Veterinarian
						authorization---Medical Emergencies: This release gives The Dog
						Society full authorization to seek medical treatment from the
						nearest vet clinic, in the case of any medical emergencies while in
						the care of The Dog Society. Owner agrees to pay for any and all
						expenses involved in obtaining the necessary treatment, including,
						but not limited to, veterinarian visits, medications, examinations,
						and surgery. Vaccinations: All pets are REQUIRED to be up to date on
						their Rabies, Bordetella, and distemper vaccinations in order to
						receive grooming services. Thank you for your understanding.
						Bordetella Vaccination: Kennel Cough (similar to a human cold) is a
						respiratory condition caused by a variety of viruses and bacteria
						often spread by direct contact by dogs. At The Dog Society, we
						require that your dog be immunized & lept up to date with their
						bordetella (Kennel cough) vaccine. Keeping your dog current with
						their immunization will help to prevent the spread of kennel cough
						and/or diminish the severity of infection in your pet. With the
						recommendation that all dogs visiting us be vaccinated against
						kennel cough, if a pet should become infected, all treatments and
						costs associated shall be the pet owner’s responsibility. Dangerous
						or aggressive animals--Refusal of services: The Dog Society has the
						right to refuse any services at any time. In the event that your pet
						is too stressed or becomes dangerous to groom, The Dog Society has
						the right to refuse grooming services, stop grooming services, or
						cancel grooming services at any time before, during, or after
						grooming and client will be charged a grooming fee (for what was
						done up until that point). Matted coats: Animals with severely
						matted coats require extra attention. Mats in an animal’s coat grow
						tight, and can ultimately damage and tear the animal’s skin, which
						provides a breeding ground for parasite infestations. The Dog
						Society will not cause serious or undue stress to your pet by
						dematting. Mats can be very difficult to remove, and may require the
						pet to be shaved. Removing a heavily matted coat can cause nicks,
						cuts, or abrasions due to skin growth trapped in the mats. Heavy
						matting can also trap moisture and urine near the pet’s skin
						allowing mold, fungus or bacteria to grow, producing skin
						irritations that exist prior to the grooming process. After effects
						of mat removal procedures can include itchiness, skin redness,
						self-inflicted irritations or abrasions and failure of the hair to
						regrow. In some cases, pets need to be shaved to remove matting, by
						signing below, you acknowledge that you agree to this procedure, and
						any risk. There will be additional charges for this process, it is
						time consuming, and causes extra wear and tear on grooming
						equipment. Cancellation/No shows: We always call every appointment
						the day before with an appointment reminder (Please confirm that we
						have the correct number on file). If you are going to miss your
						appointment for any reason, please contact us ASAP. We require at
						least a 24 hour notice for all cancellations or rescheduled to allow
						us time to fill the space with a customer from our waiting list. We
						will hold grooming appointments for 15 minutes past the scheduled
						drop-off time. Appointments later than 15 minutes may be released
						based on demand. No shows and appointments canceled with less than
						24 hours notice will incur a $25 fee. Satisfaction: Your
						satisfaction is very important to us. If you are unhappy for any
						reason with your pet’s grooming, just contact us within 48 hours and
						we will schedule a time for you to come back for an adjustment at
						the next available time for no cost. Late pick up fees: Unlike many
						salons in town, we allow our customers to leave their dogs with us
						until close of business at no additional charge. Dogs that are left
						after their appointment will be placed with the daycare dogs until
						the owner arrives. Please note that The Dog Society grooming salon
						closes at 4 p.m. We do know that “Things happen” and therefore we
						give you a 5 minute cushion past our closing hour to pick up your
						pet. Anything past the 5 minute cushion we charge $1/minute for
						every minute you are late past close of business. Miscellaneous:
						This release form authorizes The Dog Society permission to use
						photography of my dog(s) on their website, social media, or other
						advertising materials. Th Dog Society does not assume and shall not
						be held responsible for any liability with respect to the dogs
						listed in this agreement, of any kind, character, or nature
						whatsoever, arising out of or from the grooming or boarding fo this
						dog, or any damages with may accrue from any other cause whatsoever,
						including loss by fire, theft, running away, injury to persons,
						animals or property, unavoidable causes, or death or injury to any
						other animal caused by the within named dog during the term of this
						contract, whether this dog be on the premises of The Dog Society or
						not, and the owner of said dog agrees hereby to be and is solely
						responsible responsible for any and all acts of behavior of said dog
						at any time within the term and time for the contract. The owner
						agrees to indemnify and hold harmless, The Dog Society for any
						third-party claims caused or contributed to by the owner’s dog. In
						no cases shall The Dog Society be in any way liable or responsible.
						The responsibility and/or liability of The Dog Society, in no event
						shall exceed the sum of Five Hundred Dollars ($500.00), and the
						undersigned agrees to limit the responsibility of Five Hundred
						Dollars ($500.00) and no more and agrees not to claim any damages
						against The Dog Society of any nature, whatsoever, either by way of
						contract, equity, negligence or otherwise, in excess of said sum,
						including, but not limited to, consequential and/or punitive
						damages. The undersigned agrees and understands that any disputes
						arising out of this agreement will be decided pursuant to the laws
						of the State of California and venue shall be in San Diego County. I
						have reviewed this service contract for accuracy and understand the
						contents of this contract. I affirm that I am the rightful legal
						owner of the dog(s) for which services are being rendered. I
						authorize this signed contract to be valid approval for future
						grooming services, permitting The Dog Society to accept telephone
						reservations for services without additional signed contracts or
						written authorization. I understand that pricing is subject to
						change. This agreement is valid for all pets that I currently own or
						will own in the future. I have read, signed, and agreed to the
						above.
					</p>

					<div className='space-y-8 divide-y divide-gray-200'>
						<div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
							<div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
								<div>
									<h3 className='text-base font-semibold leading-6 text-gray-900'>
										Info
									</h3>
									<p className='mt-1 max-w-2xl text-sm text-gray-500'>
										All fields are required
									</p>
								</div>
								<div className='space-y-6 sm:space-y-5'>
									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='first-name'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											First name
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
												type='text'
												name='first-name'
												id='first-name'
												autoComplete='given-name'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='last-name'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Last name
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='email'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Email address
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												id='email'
												name='email'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												type='email'
												autoComplete='email'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											/>
											{!EmailValidator.validate(email) && email.length > 0 && (
												<p
													className='mt-2 text-sm text-red-600'
													id='email-error'>
													Not a valid email address.
												</p>
											)}
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Phone
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Address
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={address}
												onChange={(e) => setAddress(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											City
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={city}
												onChange={(e) => setCity(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											State
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={state}
												onChange={(e) => setState(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Zip
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={zip}
												onChange={(e) => setZip(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Name, # of dogs
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={dogs}
												onChange={(e) => setDogs(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Amount
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={amount}
												onChange={(e) => setAmount(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Veterinarian
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={vet}
												onChange={(e) => setVet(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
										<label
											htmlFor='postal-code'
											className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
											Approve treatment by
										</label>
										<div className='mt-2 sm:col-span-2 sm:mt-0'>
											<input
												type='text'
												value={approveTreatmentBy}
												onChange={(e) => setApproveTreatmentBy(e.target.value)}
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
						<div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
							<div>
								<h3 className='text-base font-semibold leading-6 text-gray-900'>
									Signature
								</h3>
								<p className='mt-1 max-w-2xl text-sm text-gray-500'>
									Type your full name below to sign this document.
								</p>
							</div>
							<div className='w-full'>
								<input
									value={signature}
									onChange={(e) => setSignature(e.target.value)}
									type='text'
									name='signature'
									id='signature'
									autoComplete='given-name'
									className='block w-full bg-pink-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
					</div>

					<button
						type='submit'
						disabled={!submitIsEnabled}
						onClick={handleSubmit}
						className='disabled:opacity-25 mt-5 w-full inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Submit
					</button>
					<div className='mt-5'>
						<p className='text-xs bg-gray-100 text-gray-500 p-3 rounded-md'>
							By clicking/tapping/touching/selecting or otherwise interacting
							with the &quot;Submit&quot; button, you are consenting to signing
							this Document electronically. You agree your electronic signature
							(&quot;E-Signature&quot;) is the legal equivalent of your manual
							signature on this Document. You consent to be legally bound by
							this Document&apos;s agreement(s), acknowledgement(s),
							policy(ies), disclosure(s), consent term(s) and condition(s). You
							agree that no certification authority or other third party
							verification is necessary to validate your E-Signature and that
							the lack of such certification or third party verification will
							not in any way affect the enforceability of your E-Signature. You
							may request a paper version of an electronic record by writing to
							us. Your current valid email is required for all communications.
						</p>
					</div>
				</div>
			</div>
			<SuccessModal
				open={success}
				setOpen={() => {
					setFirstName('')
					setLastName('')
					setEmail('')
					setPhone('')
					setSignature('')
					setSuccess(false)
				}}
			/>
			<ErrorModal open={error} setOpen={() => setError(false)} />
		</div>
	)
}
