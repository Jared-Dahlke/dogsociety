import dayjs from 'dayjs'
import clientPromise from '../../lib/mongodb'
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')

const createSendEmailCommand = (
	toAddress,
	fromAddress,
	firstName,
	lastName,
	phone,
	email,
	signature,
	emailMarketing
) => {
	return new SendEmailCommand({
		Destination: {
			/* required */
			CcAddresses: [
				/* more items */
			],
			ToAddresses: [
				toAddress
				/* more To-email addresses */
			]
		},
		Message: {
			/* required */
			Body: {
				/* required */
				Html: {
					Charset: 'UTF-8',
					Data: `<div className='bg-white py-32 px-6 lg:px-8'>
					<h1>Thank you for signing the visitation waiver!</h1>
					<p> Below is a copy of the waiver you signed: </p>
					<div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
						<p className='text-base font-semibold leading-7 text-indigo-600'>
							THE DOG SOCIETY
						</p>
						<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Visitation Waiver
						</h1>
						<p className='mt-6 text-xl leading-8'></p>
						<div className='mt-10 max-w-2xl flex flex-col gap-3'>
							<p>
								1. I release THE DOG SOCIETY LLC, and any of its members, managers,
								agents, employees, and staff (collectively “THE DOG SOCIETY”) from
								any and all injuries, damages and liability arising from my entrance
								or my dog’s entrance into the facility including, but not limited
								to, the café/bar, events, games, dog services (boarding, daycare,
								grooming, training) attendance and participation in all activities
								with other patrons, owners, and/or other dogs (collectively, “the
								Activities”).
							</p>
							<p>
								2. I fully accept all reasonable risks of illness, injury or death
								that may be incurred during the Activities. Such risks include, but
								are not limited to: cuts, scrapes, bites, and other injuries to
								patrons, owners, or dog(s) resulting from participation in
								Activities and rough play; and possible contagious illnesses such as
								upper respiratory infections (of which one, “Bordetella”, currently
								has a vaccination available). I accept full responsibility for any
								loss or damages to my personal property.
							</p>
							<p>
								3. THE DOG SOCIETY agrees to exercise due and reasonable care in the
								handling of dogs, and in keeping the facility properly enclosed and
								sanitary. All dogs are cared for by THE DOG SOCIETY staff without
								liability on THE DOG SOCIETY for loss or damage from disease, theft,
								fire, death, escape, injury, or harm to patrons, other dogs,
								property, or for other unavoidable causes, due care and diligence
								having been exercised.
							</p>
							4. Although THE DOG SOCIETY may provide pre-screening for dogs who
							enter the facility, THE DOG SOCIETY does not guarantee or assure the
							safety of you or your pet while on the premises. If I have a dog, I
							understand that I am solely responsible for any harm caused by my
							dog(s) while my dog is entering THE DOG SOCIETY, provided reasonable
							care and precautions are followed by THE DOG SOCIETY.
							<p>
								5. I understand that any dog entering THE DOG SOCIETY must be
								current on all vaccinations and REQUIRED to be up to date on
								Required vaccinations include: DHLPP (Distemper, Hepatitis,
								Leptospirosis, Parainfluenza, Parvovirus), Bordetella, and Rabies to
								enter the premises. (Note that Rabies tags will not be accepted as
								validation.)
							</p>
							6. I further understand that any dog entering that is 6 months or
							older must be altered, and females must not be “in heat”. I give THE
							DOG SOCIETY permission to contact my vet on file to request an updated
							copy of my dog’s vaccinations and proof the dog(s) have been altered.
							If THE DOG SOCIETY is unable to secure confirmation of these records,
							the dog(s) will not be granted re-admittance until these requirements
							are met.
							<p>
								7. I shall indemnify THE DOG SOCIETY against any claims, or any
								losses or damage of any kind suffered by THE DOG SOCIETY because of
								my failure to inform THE DOG SOCIETY of any pre-existing conditions
								my dog may have (Including, but not limited to, an illness or
								aggression problems).
							</p>
							<p>
								8. I agree to keep my dog on monthly flea treatment and to take
								precautions against contagious illness and parasite exposure by
								consulting with my veterinarian prior to my dog attending THE DOG
								SOCIETY.
							</p>
							<p>
								9. I understand that in the event of injury to my dog(s), THE DOG
								SOCIETY staff may or may not notify me immediately, at their
								discretion. If the injury is not serious, staff may allow my dog to
								continue to play, and then notify me when I come to pick up my dog.
								If the injury is serious or requires that my dog be removed from
								group activities, I will be notified immediately.
							</p>
							<p>
								10. I understand and agree that should my dog become ill or in need
								of medical attention, THE DOG SOCIETY will first try to contact me.
								If unable to reach me in an emergency, THE DOG SOCIETY staff
								reserves the right and sole discretion to administer aid and/or to
								use any available veterinarians without liability, and I agree to
								promptly pay for all medical treatments received.
							</p>
							<p>
								11. I understand that my dog will only be released to the owner(s)
								or authorized representative on file, unless prior authorization has
								been made, in writing, with a THE DOG SOCIETY staff member.
							</p>
							<p>
								12. I understand that if my dog is left at THE DOG SOCIETY for a
								period of 24 hours or more without contact from me or my authorized
								representative, my dog will be considered abandoned, and all
								necessary steps will be taken to turn the dog over to the proper
								authorities and/or animal rescue agency. All boarding expenses
								within the initial 24 hours will be the owner's responsibility to
								pay.
							</p>
							<p>
								14. I agree to indemnify and hold harmless, THE DOG SOCIETY for any
								third-party claims caused or contributed to by my dog.
							</p>
							<p>
								15. I give THE DOG SOCIETY permission to use photography of myself
								and my dog(s) on their website, social media, and other marketing
								materials.
							</p>
							<p>
								16. I agree and understand that the responsibility and/or liability
								of The Dog Society in no event shall exceed the sum of Five Hundred
								Dollars ($500.00) and agree not to claim any damages against The Dog
								Society of any nature, whatsoever, either by way of contract,
								equity, negligence or otherwise, more than said sum, including, but
								not limited to, consequential and/or punitive damages. If any word,
								sentence, or section of this agreement be declared invalid, such
								ruling shall nevertheless not affect any other word, sentence, or
								section. The remedies hereunder are cumulative to The Dog Society
								and not alternative. No person is authorized by The Dog Society to
								change or waive any of the terms or conditions of this contract, and
								The Dog Society will not be bound by any changes therein, whether
								oral or written. All terms and conditions of this agreement shall be
								binding on the heirs, administrators, and assigned of the owner of
								the within named dog(s). This contract is the entire agreement
								between the parties and supersedes any other document and/or oral
								representation and/or agreements. Any disputes arising out of this
								Agreement will be decided pursuant to the laws of the State of
								California and venue shall be in San Diego County. If action is to
								be instituted to enforce this contract, the prevailing party is
								entitled to recover reasonable attorney’s fees and costs.
							</p>
							<p>
								17. I agree to abide by the policies and procedures as posted at The
								Dog Society and the “Visitation Policies”. I understand that failure
								to listen to The Dog Society staff and/or failure to follow policies
								and procedures may result in my being asked to leave, and depending
								upon the severity of the offense, may not be allowed to return to
								The Dog Society. THE DOG SOCIETY has the right to refuse any
								services at any time.
							</p>
							<p></p>
							<p></p>
							<p></p>
							<h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
								VISITATION POLICIES
							</h2>
							<p>
								Planning your first visit? At The Dog Society SAFETY Comes First
								Sure, it’s quite the list-- but you will have the peace of mind that
								all pups have been vetted just like yours, to help ensure a safe and
								fun environment for all to enjoy!
							</p>
							<h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
								Requirements upon visiting: Please carefully review, acknowledge,
								and certify the below requirements of entry.
							</h2>
							<h3>FOR ALL VISITORS:</h3>
							<p>
								All visitors must sign The Dog Society Waiver. The Dog Society has
								the right to refuse service to any customer for any reason. All
								visitors are to abide by all THE DOG SOCIETY policies and rules,
								including direction from staff. Food and Beverages: No outside food,
								drinks, dog treats, or glass bottles are allowed. Please do not feed
								dogs, allow them to eat from other patron’s tables, or get into the
								garbage. Fresh filtered water is available throughout the facility.
								Vaping and Smoking: Smoking and vaping are NOT allowed on the
								premises, inside or out. Children: We love kids and offer a fun
								place for the whole family to enjoy, however they must always be
								under strict adult supervision. The Dog Society has a 21 years and
								older age requirement after 8pm daily. Patrons and Owners knowingly
								and voluntarily assume any risk of harm to yourself and/or your dog,
								and are responsible for any destruction or damages caused, including
								property of The Dog Society, to other patrons or their dogs and are
								legally and financially liable for damage or injury inflicted by
								their dog. No other animals or pets are permitted in the
								facility—(sorry kitties, we are The Dog Society after all!)
								Carefully watch as you enter and exit every gate/door of the
								facility, maintaining your dog on a leash and in control and not
								allowing other dogs to go with you. Seek out the assistance of a
								Pack Leader (in orange shirts) should issues or concerns arise.
							</p>
							<h3>FOR DOGS WITH PEOPLE:</h3>
							<p>
								Sign The Dog Society Waiver, Pet Release Authorization, and Dog
								Services Contract. All dogs must be 4 months or older. (Puppies must
								wait two weeks after their final puppy vaccination shots are
								completed.) All dogs must have the required vaccinations, including:
								DHLPP (Distemper, Hepatitis, Leptospirosis, Parainfluenza,
								Parvovirus), Bordetella, and Rabies. (Note that Rabies tags will not
								be accepted as validation.) The Dog Society will obtain written
								proof of current vaccination and spay/neuter records from your
								veterinarian before re-entry or purchasing
								passes/packages/Memberships. All dogs must be in a good condition of
								health. No dogs displaying signs of illness will be permitted
								(vomit, diarrhea, coughing, etc.) 48 hours prior to arrival at the
								facility. All dogs must be spayed or neutered if they are 6 months
								or older. Unaltered dogs destabilize the pack, and are at greater
								risk for injury by other dogs. If your unaltered pup displays
								“humping” or other behaviors, they may be asked to not return until
								they have been altered. Females must not be “in heat” while
								attending the facilities. All dogs must be free of parasites (fleas
								and ticks) and currently on a flea/tick preventative (such as
								Frontline). All dogs are inspected upon entry into the facility and
								should parasites be found, the dogs will be turned away or flea
								bathed and dipped at an additional cost to you. Behavior: All
								first-time pups to our Visitor areas must pass a quick initial “Bar
								test” behavioral walk through with a Pack Leader to ensure that all
								who visit enjoy a safe and fun environment. Constant barking must be
								kept under control as it is disruptive to other patrons and their
								dogs. If a dog continues to bark after two warnings, the dog may be
								asked to leave the facility. Prior to future re-admittance, you are
								required to meet with one of our training coaches for a 30 min.
								consultation on dog training options and how to help you and your
								pup grow and be allowed to return. Owners must always remain with
								their dog. Leash & Collar: Your pups must be on a non-flexible,
								non-retractable leash (a maximum length of 6 feet) at all times. If
								you don’t have one, we have them available for purchase. Dogs must
								wear a collar with current name tags and contact information. Please
								leave all toys at home, and do not use other items to engage in play
								on premises so as to avoid any potential for fights with others.
								Please clean up after your pup promptly with bags provided at waste
								stations. Visitors with more than 2 pups per person must have
								Management approval prior to visitation. If a patron appears
								intoxicated, you may be sent home at your expense in an
								Uber/Lyft/taxi etc. if alternative transportation is not provided
								and your pup(s) will spend the night in one of our boarding rooms at
								their expense.
							</p>
							<p>
								I understand that failure to abide by any of these policies may
								result in prevention of entry, ejection from the premises, and/or
								suspension or termination of passes or Memberships at the sole
								discretion of management.
							</p>
							<div className='space-y-8 divide-y divide-gray-200'>
								<div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
									<div className='space-y-6 pt-8 sm:space-y-5 sm:pt-10'>
										<div>
											<h3 className='text-base font-semibold leading-6 text-gray-900'>
												Client/Owner
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
														value="${firstName}"
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
														value="${lastName}"
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
														value="${email}"
														type='email'
														autoComplete='email'
														className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
													/>
													
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
														value="${phone}"
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
											value="${signature}"
											type='text'
											name='signature'
											id='signature'
											autoComplete='given-name'
											className='block w-full bg-pink-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6'
										/>
										<div>Signed on ${dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]')}</div>
									</div>
									
								</div>
							</div>
							<div style="display: flex; gap: 4px;" className='relative flex items-start mt-4'>
								<div className='flex h-6 items-center'>
								
								</div>
								<div className='ml-3'>
									<label
									  style="margin-top: 10px;"
										htmlFor='candidates'
										className='text-sm font-medium leading-6 text-gray-900'>
										Email Marketing?  ${emailMarketing ? 'YES' : 'NO'}
									</label>
									
								</div>
							</div>
						
							<div className='mt-5'>
								<p className='text-xs bg-gray-100 text-gray-500 p-3 rounded-md'>
									By clicking/tapping/touching/selecting or otherwise interacting
									with the "Submit" button, you are consenting to signing this
									Document electronically. You agree your electronic signature
									("E-Signature") is the legal equivalent of your manual signature
									on this Document. You consent to be legally bound by this
									Document's agreement(s), acknowledgement(s), policy(ies),
									disclosure(s), consent term(s) and condition(s). You agree that no
									certification authority or other third party verification is
									necessary to validate your E-Signature and that the lack of such
									certification or third party verification will not in any way
									affect the enforceability of your E-Signature. You may request a
									paper version of an electronic record by writing to us. Your
									current valid email is required for all communications.
								</p>

							</div>
						</div>
					</div>
					
					
				</div>`
				},
				Text: {
					Charset: 'UTF-8',
					Data: 'TEXT_FORMAT_BODY'
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'Copy of your signed Dog Society Waiver'
			}
		},
		Source: fromAddress,
		ReplyToAddresses: [
			/* more items */
		]
	})
}

export default async function handler(req, res) {
	try {
		let post = req.body
		const client = await clientPromise
		const db = client.db(process.env.NEXT_PUBLIC_DATABASE_NAME)
		const result = await db.collection('visitationwaivers').insertOne(post)

		const sesClient = new SESClient({
			region: 'us-west-2',
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
			}
		})

		const sendEmailCommand = createSendEmailCommand(
			req.body.email,
			'caninecare@dogsocietysd.com',
			req.body.firstName,
			req.body.lastName,
			req.body.phone,
			req.body.email,
			req.body.signature,
			req.body.emailMarketing
		)

		const sendEmailCommand2 = createSendEmailCommand(
			'sara@dogsocietysd.com',
			'caninecare@dogsocietysd.com',
			req.body.firstName,
			req.body.lastName,
			req.body.phone,
			req.body.email,
			req.body.signature,
			req.body.emailMarketing
		)

		try {
			await sesClient.send(sendEmailCommand)
			// if (process.env.NODE_ENV === 'production') {
			// 	await sesClient.send(sendEmailCommand2)
			// }
		} catch (err) {
			console.log('Error', err)
		}

		res.json(result)
	} catch (e) {
		console.error(e)
	}
}
