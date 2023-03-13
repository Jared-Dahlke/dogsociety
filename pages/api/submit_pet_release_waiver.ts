import dayjs from 'dayjs'
import clientPromise from '../../lib/mongodb'
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')

const createSendEmailCommand = (
	toAddress,
	fromAddress,
	firstName,
	lastName,
	phone,
	address,
	city,
	state,
	zip,
	dogs,
	amount,
	vet,
	approveTreatmentBy,
	email,
	signature
) => {
	return new SendEmailCommand({
		Destination: {
			/* required */
			CcAddresses: ['caninecare@dogsocietysd.com'],
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
					Data: `
					<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" style="color-scheme: light dark;">
<head>
  <meta charset="utf-8">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <style>
    td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
  </style>
  <![endif]-->    <title>Copy of your signed waiver</title>
  <style>.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(24px * var(--tw-space-y-reverse)) !important;
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0 !important;
  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse))) !important;
  margin-bottom: calc(32px * var(--tw-space-y-reverse)) !important;
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0 !important;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse))) !important;
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse)) !important;
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  border-color: #e5e7eb !important;
}
.border-0 {
  border: 0;
}
:root {
  color-scheme: light dark;
}
.placeholder-text-gray-400::placeholder {
  color: #9ca3af !important;
}
.hover-text-decoration-underline:hover {
  text-decoration: underline;
}
.focus-ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}
.focus-ring-inset:focus {
  --tw-ring-inset: inset !important;
}
.focus-ring-indigo-600:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity)) !important;
}
@media (max-width: 600px) {
  .sm-col-span-2 {
    grid-column: span 2 / span 2 !important;
  }
  .sm-mt-0 {
    margin-top: 0 !important;
  }
  .sm-inline-block {
    display: inline-block !important;
  }
  .sm-grid {
    display: grid !important;
  }
  .sm-h-8 {
    height: 32px !important;
  }
  .sm-w-full {
    width: 100% !important;
  }
  .sm-max-w-xs {
    max-width: 160px !important;
  }
  .sm-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
  .sm-items-start {
    align-items: flex-start !important;
  }
  .sm-gap-4 {
    gap: 16px !important;
  }
  .sm-space-y-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0 !important;
    margin-top: calc(20px * calc(1 - var(--tw-space-y-reverse))) !important;
    margin-bottom: calc(20px * var(--tw-space-y-reverse)) !important;
  }
  .sm-border-t {
    border-top-width: 1px !important;
  }
  .sm-border-gray-200 {
    border-color: #e5e7eb !important;
  }
  .sm-px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .sm-px-4 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .sm-px-6 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .sm-py-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .sm-pt-1_5 {
    padding-top: 6px !important;
  }
  .sm-pt-10 {
    padding-top: 40px !important;
  }
  .sm-pt-5 {
    padding-top: 20px !important;
  }
  .sm-text-4xl {
    font-size: 36px !important;
  }
  .sm-text-sm {
    font-size: 14px !important;
  }
  .sm-leading-6 {
    line-height: 24px !important;
  }
}</style></head>
<body style="-webkit-font-smoothing: antialiased; word-break: break-word; margin: 0; width: 100%; background-color: #f8fafc; padding: 0">    <div style="display: none">
      Please find a copy of your signed waiver attached to this email.
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
    </div>
  <div role="article" aria-roledescription="email" aria-label="Copy of your signed waiver" lang="en">    <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" class="sm-px-4" style="background-color: #f8fafc">
          <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="sm-py-8 sm-px-6" style="padding: 48px; text-align: center">
                <a href="https://dogsocietysd.com/">
                  <img src="https://waiverhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogsociety.e01eb3e6.jpeg&w=640&q=75" width="170" alt="dogsociety" style="border: 0; max-width: 100%; border-radius: 9999px; border-width: 0px; vertical-align: middle">
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-image: url('undefined'); border-radius: 4px; background-size: cover; background-position: top; background-repeat: no-repeat; text-align: left"></td>
            </tr>
            <tr role="separator">
              <td style="height: 32px"></td>
            </tr>
            <tr>
              <td class="sm-px-0" style="width: 100%; padding-left: 24px; padding-right: 24px; text-align: left">
                <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="sm-w-full sm-inline-block" style="width: 100%; padding-bottom: 32px">
                      <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="border-radius: 4px; background-color: #fff; padding: 24px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                            <p style="font-size: 16px; font-weight: 600; line-height: 28px; color: #4f46e5">
                              THE DOG SOCIETY
                            </p>
                            <h1 class="sm-text-4xl" style="margin-top: 8px; font-size: 30px; font-weight: 700; letter-spacing: -0.025em; color: #111827">
                              Signed Pet Release Waiver
                            </h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="sm-px-0" style="width: 100%; padding-left: 24px; padding-right: 24px; text-align: left">
                <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="sm-w-full sm-inline-block" style="width: 100%; padding-bottom: 32px">
                      <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="border-radius: 4px; background-color: #fff; padding: 24px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                            <p>
                              I, [ First Name ] [ Last Name ], of (address) [
                              Address ], [ City ], [ State ], [ Zip ]. This day
                              of [ Date ], pursuant to the laws of California,
                              willfully and voluntarily authorize the bear of
                              this document [THE DOG SOCIETY] with lawful
                              authority to temporarily act on my behalf for the
                              care of my [ Name, # of dogs ] (name, # of dogs)
                              pet(s). SECTION 1: GENERAL GRANT OF POWERS: The
                              bearer of this document may act for me and in my
                              name in any way that could as if I were personally
                              present and exercising such power with respect to
                              my pet’s daily care such as feeding, water,
                              bathing, housing and social interaction; and
                              emergency medical care and to require, withhold,
                              or withdraw any type of medical treatment or
                              procedure, even throughout my pet’s death may
                              ensure, provided a licenses veterinarian is in
                              agreement with the procedure being authorized. The
                              bear shall have the same access to my pet’s
                              medical records that I have, including the right
                              to disclose the contents of those records to third
                              parties. No procedure may be authorized exceeding
                              $[ Amount ] without my specific consent, obtained
                              by phone or email. I will be able to be reached at
                              one or more of the following phone numbers: [
                              Phone (Digits Only) ]. My email address is [ Email
                              ]. In case of emergency, my primary veterinarian
                              shall be [ Veterinarian ], or any veterinarian
                              recommended by them. I also approve treatment by [
                              Approve treatment by ]. SECTION 2: SPECIFIC
                              RESTRICTIONS: THE DOG SOCIETY is specifically
                              prohibited from giving consent to euthanize any of
                              my pets, except and unless I cannot be reached by
                              phone or email, and two veterinarians agree that
                              the pet is suffering, or will unconscionably
                              suffer to such a significant degree, or that such
                              pet will most likely perish because of medical
                              reasons. No pet shall be euthanized for behavioral
                              reasons, only for such humane medical reasons.
                              SECTION 3: THIRD PARTY RELIANCE: No person who
                              relies in good faith on the authority of THE DOG
                              SOCIETY under this instrument shall incur any
                              liability to me, my estate or my personal
                              representative. In order to induce third parties
                              to accept THE DOG SOCIETY’s authority, I hereby
                              indemnify and hold harmless any third party who
                              acts in good faith reliance on THE DOG SOCIETY
                              directions concerning my pets. SECTION 4:
                              TERMINATION OF POWER: THE DOG SOCIETY’s powers and
                              authority enumerated herein shall be effective
                              from 3/8/2023 until revoked by me or until such
                              power is revoked automatically by operation of
                              law.
                            </p>
                            <h1 class="sm-text-4xl" style="margin-top: 8px; font-size: 30px; font-weight: 700; letter-spacing: -0.025em; color: #111827">
                              Boarding Contract
                            </h1>
                            <p>
                              THE DOG SOCIETY LLC, and any of its members,
                              agents, employees, and staff (hereinafter referred
                              to as “The Dog Society”) agree to exercise due and
                              reasonable care to board the dog for the owner.
                              The Dog Society does not assume and shall not be
                              held responsible for any liability with respect to
                              the dog listed in this agreement, of any kind,
                              character, or nature whatsoever, arising out of or
                              from the boarding of this dog, or any damages
                              which may accrue from any other cause whatsoever,
                              including loss by fire, theft, running away,
                              injury to persons, animals or property,
                              unavoidable causes, or death or injury to any
                              other animal caused by the within named dog during
                              the term of this contract, whether this dog be on
                              the premises of The Dog Society or not, and the
                              owner of said dog agrees hereby to be and is
                              solely responsible for any and all acts of
                              behavior of said dog at any time within the
                              termand time for the contract. The owner agrees to
                              indemnify and hold harmless, The Dog Society for
                              any third party claims caused or contributed to by
                              the owner’s dog. In no cause shall The Dog Society
                              be in any way liable or responsible. The
                              responsibility and/or liability of The Dog
                              Society, in no event shall exceed the sum of Five
                              Hundred Dollars ($500.00) and the undersigned
                              agrees to limit the responsibility of Five Hundred
                              Dollars ($500.00) and no more, and agrees not to
                              claim any damages against The Dog Society of any
                              nature, whatsoever, either by way of contract,
                              equity, negligence or otherwise in excess, in
                              excess of said sum, including, but not limited to,
                              consequential and/or punitive damages. The
                              undersigned agrees and understands that any
                              disputes arising out of this Agreement will be
                              decided pursuant to the laws of the state of
                              California and venue shall be in San Diego County.
                              The owner of the within named dog specifically
                              represents that he/she is the sole owner of said
                              animal and that the named animal has not been
                              exposed to distemper or rabies within the last
                              thirty days, and that the required annual licenses
                              has been obtained. The Dog Society shall have, and
                              is hereby granted, a lien on the aforesaid animal
                              for any and all unpaid boarding and/or other
                              charges resulting from the boarding of said animal
                              within The Dog Society. The owner hereby agrees
                              that in the event the monthly or weekly boarding
                              charges are not paid within thirty days after they
                              become due an payable in accordance with the terms
                              of this contract, The Dog Society may exercise its
                              ien tights, and ten days after notice to owner may
                              dispose of said animal for any and all unpaid
                              charges, at private or public sale, and owner
                              specifically waives and claims if such sale does
                              not secure an price adequate to pay such costs of
                              board and/or other charges delinquent plus clost
                              of sale, then owner shall and must pay to The Dog
                              Society the difference. Any monies realized by The
                              Dog Society at such as sale, over, and above the
                              charges due and cost of sale shall be returned to
                              the owner. Notice shall be conclusively deemed to
                              have been given pursuant to this paragraph if
                              notice in writing of such intended sale shall be
                              mailed by registered mail to the owner of the
                              within named animal at the address given herein,
                              and no further notice shall be required. If the
                              animal becomes ill, or The Dog Society suspects
                              animal is ill, the owner shall be notified as soon
                              as possible, and if owner does not immediately
                              inform The Dog Society regarding measures to be
                              taken or if the state of the dog’s health requires
                              quick action, owner authorizes The Dog Society the
                              right and discretion to call a veterinarian or to
                              administer medicine or to give advisable attention
                              within the discretion of The Dog Society, and such
                              expenses being reusable in the amount shall be
                              promptly paid by the owner. Unless owner files
                              with The Dog Society within thirty days from the
                              date the animal was removed from The Dog Society,
                              a written demand for any claimed injury or damages
                              resulting from the boarding of said dog under the
                              contract, said owner shall and does hereby waive
                              any and all rights which he/she may have against
                              The Dog Society for any liability arising under
                              this contract, for damages, or otherwise. If any
                              word, sentence, or section of this agreement be
                              declared invalid, such ruling shall nevertheless
                              not affect any other word, sentence, or section.
                              The remedies hereunder are cumulative to The Dog
                              Society and not alternative. No person is
                              authorized by The Dog Society to change or waive
                              any of the terms or conditions of this contract
                              and The Dog Society will not be bound by any
                              changes therein, whether oral or written. All
                              terms and conditions of this agreement shall be
                              binding on the heirs, administrators, and assigned
                              of the owner of the within named animal. The
                              contract is the entire agreement between the
                              parties and supersedes any other document and or
                              oral representation and/or agreements. If action
                              is to be instituted to enforce this contract, the
                              prevailing party is entitled to recover reasonable
                              attorney’s fees and costs. If The Dog Society is
                              unable to get ahold of the owner, the animal may
                              to be taken off premises by The Dog Society
                              without the consent of the owner The owner
                              guarantees payment of any charges. If for any
                              reason this invoice is not paid when presented,
                              and is placed into collections, the owner agrees
                              that The Dog Society may recover reasonable
                              attorney’s fees, and other such costs as the court
                              may allow. Interest charged on overdue bills shall
                              be at the maximum rate allowed by law, but not to
                              exceed 1.5% per month, compounded daily. This form
                              authorizes The Dog Society permission to use
                              pictures of my dog(s) on their website, social
                              media, or other advertising materials.
                            </p>
                            <h1 class="sm-text-4xl" style="margin-top: 8px; font-size: 30px; font-weight: 700; letter-spacing: -0.025em; color: #111827">
                              Grooming Release Form
                            </h1>
                            <p>
                              Health or medical problems: Occasionally, grooming
                              can expose a hidden medical problem or aggravate a
                              current one. This can occur during or after
                              grooming. Please make sure to alert us of any
                              current or past issues so that we may keep an eye
                              out for them. All medical expenses for veterinary
                              care will be covered by the pets owner upon
                              signing this contract/agreement. Accidents:
                              Although accidents are very rare, there is a risk
                              when dealing with animals. Grooming equipment is
                              sharp, and although we use extreme caution and
                              care in all situations, possible problems could
                              occur including cuts, nicks, scratches, quicking
                              of nails, etc. In most cases this can occur, you
                              will be notified of the accident. If The Dog
                              Society LLC and any of its members, managers,
                              agents, employees, and staff (collectively “The
                              Dog Society'') feels it is serious, and the owner
                              is not on-site, the owner will be notified and The
                              Dog Society will seek immediate veterinary care
                              for your pet with the closest vet clinic. Owner
                              agrees not to hold The Dog Society responsible for
                              any injuries which might result from this grooming
                              process. Veterinarian authorization---Medical
                              Emergencies: This release gives The Dog Society
                              full authorization to seek medical treatment from
                              the nearest vet clinic, in the case of any medical
                              emergencies while in the care of The Dog Society.
                              Owner agrees to pay for any and all expenses
                              involved in obtaining the necessary treatment,
                              including, but not limited to, veterinarian
                              visits, medications, examinations, and surgery.
                              Vaccinations: All pets are REQUIRED to be up to
                              date on their Rabies, Bordetella, and distemper
                              vaccinations in order to receive grooming
                              services. Thank you for your understanding.
                              Bordetella Vaccination: Kennel Cough (similar to a
                              human cold) is a respiratory condition caused by a
                              variety of viruses and bacteria often spread by
                              direct contact by dogs. At The Dog Society, we
                              require that your dog be immunized & lept up to
                              date with their bordetella (Kennel cough) vaccine.
                              Keeping your dog current with their immunization
                              will help to prevent the spread of kennel cough
                              and/or diminish the severity of infection in your
                              pet. With the recommendation that all dogs
                              visiting us be vaccinated against kennel cough, if
                              a pet should become infected, all treatments and
                              costs associated shall be the pet owner’s
                              responsibility. Dangerous or aggressive
                              animals--Refusal of services: The Dog Society has
                              the right to refuse any services at any time. In
                              the event that your pet is too stressed or becomes
                              dangerous to groom, The Dog Society has the right
                              to refuse grooming services, stop grooming
                              services, or cancel grooming services at any time
                              before, during, or after grooming and client will
                              be charged a grooming fee (for what was done up
                              until that point). Matted coats: Animals with
                              severely matted coats require extra attention.
                              Mats in an animal’s coat grow tight, and can
                              ultimately damage and tear the animal’s skin,
                              which provides a breeding ground for parasite
                              infestations. The Dog Society will not cause
                              serious or undue stress to your pet by dematting.
                              Mats can be very difficult to remove, and may
                              require the pet to be shaved. Removing a heavily
                              matted coat can cause nicks, cuts, or abrasions
                              due to skin growth trapped in the mats. Heavy
                              matting can also trap moisture and urine near the
                              pet’s skin allowing mold, fungus or bacteria to
                              grow, producing skin irritations that exist prior
                              to the grooming process. After effects of mat
                              removal procedures can include itchiness, skin
                              redness, self-inflicted irritations or abrasions
                              and failure of the hair to regrow. In some cases,
                              pets need to be shaved to remove matting, by
                              signing below, you acknowledge that you agree to
                              this procedure, and any risk. There will be
                              additional charges for this process, it is time
                              consuming, and causes extra wear and tear on
                              grooming equipment. Cancellation/No shows: We
                              always call every appointment the day before with
                              an appointment reminder (Please confirm that we
                              have the correct number on file). If you are going
                              to miss your appointment for any reason, please
                              contact us ASAP. We require at least a 24 hour
                              notice for all cancellations or rescheduled to
                              allow us time to fill the space with a customer
                              from our waiting list. We will hold grooming
                              appointments for 15 minutes past the scheduled
                              drop-off time. Appointments later than 15 minutes
                              may be released based on demand. No shows and
                              appointments canceled with less than 24 hours
                              notice will incur a $25 fee. Satisfaction: Your
                              satisfaction is very important to us. If you are
                              unhappy for any reason with your pet’s grooming,
                              just contact us within 48 hours and we will
                              schedule a time for you to come back for an
                              adjustment at the next available time for no cost.
                              Late pick up fees: Unlike many salons in town, we
                              allow our customers to leave their dogs with us
                              until close of business at no additional charge.
                              Dogs that are left after their appointment will be
                              placed with the daycare dogs until the owner
                              arrives. Please note that The Dog Society grooming
                              salon closes at 4 p.m. We do know that “Things
                              happen” and therefore we give you a 5 minute
                              cushion past our closing hour to pick up your pet.
                              Anything past the 5 minute cushion we charge
                              $1/minute for every minute you are late past close
                              of business. Miscellaneous: This release form
                              authorizes The Dog Society permission to use
                              photography of my dog(s) on their website, social
                              media, or other advertising materials. Th Dog
                              Society does not assume and shall not be held
                              responsible for any liability with respect to the
                              dogs listed in this agreement, of any kind,
                              character, or nature whatsoever, arising out of or
                              from the grooming or boarding fo this dog, or any
                              damages with may accrue from any other cause
                              whatsoever, including loss by fire, theft, running
                              away, injury to persons, animals or property,
                              unavoidable causes, or death or injury to any
                              other animal caused by the within named dog during
                              the term of this contract, whether this dog be on
                              the premises of The Dog Society or not, and the
                              owner of said dog agrees hereby to be and is
                              solely responsible responsible for any and all
                              acts of behavior of said dog at any time within
                              the term and time for the contract. The owner
                              agrees to indemnify and hold harmless, The Dog
                              Society for any third-party claims caused or
                              contributed to by the owner’s dog. In no cases
                              shall The Dog Society be in any way liable or
                              responsible. The responsibility and/or liability
                              of The Dog Society, in no event shall exceed the
                              sum of Five Hundred Dollars ($500.00), and the
                              undersigned agrees to limit the responsibility of
                              Five Hundred Dollars ($500.00) and no more and
                              agrees not to claim any damages against The Dog
                              Society of any nature, whatsoever, either by way
                              of contract, equity, negligence or otherwise, in
                              excess of said sum, including, but not limited to,
                              consequential and/or punitive damages. The
                              undersigned agrees and understands that any
                              disputes arising out of this agreement will be
                              decided pursuant to the laws of the State of
                              California and venue shall be in San Diego County.
                              I have reviewed this service contract for accuracy
                              and understand the contents of this contract. I
                              affirm that I am the rightful legal owner of the
                              dog(s) for which services are being rendered. I
                              authorize this signed contract to be valid
                              approval for future grooming services, permitting
                              The Dog Society to accept telephone reservations
                              for services without additional signed contracts
                              or written authorization. I understand that
                              pricing is subject to change. This agreement is
                              valid for all pets that I currently own or will
                              own in the future. I have read, signed, and agreed
                              to the above.
                            </p>
                            <div class="space-y-8 divide-y divide-gray-200">
                              <div class="space-y-8 divide-y divide-gray-200 sm-space-y-5">
                                <div class="space-y-6 sm-space-y-5 sm-pt-10" style="padding-top: 32px">
                                  <div>
                                    <h3 style="font-size: 16px; font-weight: 600; line-height: 24px; color: #111827">
                                      Info
                                    </h3>
                                    <p style="margin-top: 4px; max-width: 336px; font-size: 14px; color: #6b7280">
                                      All fields are required
                                    </p>
                                  </div>
                                  <div class="space-y-6 sm-space-y-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5">
                                      <label htmlfor="first-name" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        First name
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled value="${firstName}" type="text" name="first-name" id="first-name" autocomplete="given-name" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="last-name" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Last name
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${lastName}" name="last-name" id="last-name" autocomplete="family-name" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="email" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Email address
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled id="email" name="email" value="${email}" type="email" autocomplete="email" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Phone
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${phone}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Address
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${address}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        City
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${city}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        State
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${state}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Zip
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${zip}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Name, # of dogs
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${dogs}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Amount
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${amount}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Veterinarian
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${vet}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                    <div class="sm-grid sm-grid-cols-3 sm-items-start sm-gap-4 sm-border-t sm-border-gray-200 sm-pt-5" style="--tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse));">
                                      <label htmlfor="postal-code" class="sm-pt-1_5" style="display: block; font-size: 14px; font-weight: 500; line-height: 24px; color: #111827">
                                        Approve treatment by
                                      </label>
                                      <div class="sm-col-span-2 sm-mt-0" style="margin-top: 8px">
                                        <input disabled type="text" value="${approveTreatmentBy}" name="postal-code" id="postal-code" autocomplete="postal-code" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-max-w-xs sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; max-width: 256px; border-radius: 6px; border-width: 0px; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="space-y-8 divide-y divide-gray-200 sm-space-y-5">
                              <div class="space-y-6 sm-space-y-5 sm-pt-10" style="padding-top: 32px">
                                <div>
                                  <h3 style="font-size: 16px; font-weight: 600; line-height: 24px; color: #111827">
                                    Signature
                                  </h3>
                                  <p style="margin-top: 4px; max-width: 336px; font-size: 14px; color: #6b7280">
                                    Type your full name below to sign this
                                    document.
                                  </p>
                                </div>
                                <div style="width: 100%; --tw-space-y-reverse: 0; margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(24px * var(--tw-space-y-reverse))">
                                  <input disabled value="${signature}" type="text" name="signature" id="signature" autocomplete="given-name" class="placeholder-text-gray-400 focus-ring-2 focus-ring-inset focus-ring-indigo-600 sm-text-sm sm-leading-6" style="border: 0; display: block; width: 100%; border-radius: 6px; border-width: 0px; background-color: #fce7f3; padding-top: 6px; padding-bottom: 6px; color: #111827; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); --tw-ring-inset: inset; --tw-ring-opacity: 1; --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                                </div>
                              </div>
                            </div>
                            <div style="margin-top: 20px">
                              <p style="border-radius: 6px; background-color: #f3f4f6; padding: 12px; font-size: 12px; color: #6b7280">
                                By clicking/tapping/touching/selecting or
                                otherwise interacting with the
                                &quot;Submit&quot; button, you are consenting to
                                signing this Document electronically. You agree
                                your electronic signature
                                (&quot;E-Signature&quot;) is the legal
                                equivalent of your manual signature on this
                                Document. You consent to be legally bound by
                                this Document&apos;s agreement(s),
                                acknowledgement(s), policy(ies), disclosure(s),
                                consent term(s) and condition(s). You agree that
                                no certification authority or other third party
                                verification is necessary to validate your
                                E-Signature and that the lack of such
                                certification or third party verification will
                                not in any way affect the enforceability of your
                                E-Signature. You may request a paper version of
                                an electronic record by writing to us. Your
                                current valid email is required for all
                                communications.
                              </p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr role="separator">
              <td class="sm-h-8" style="height: 64px"></td>
            </tr>
            <tr role="separator">
              <td class="sm-h-8" style="height: 12px"></td>
            </tr>
            <tr>
              <td class="sm-px-6" style="border-radius: 4px; background-color: #fff; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; text-align: left; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
                <p style="margin: 0; font-size: 14px; color: #64748b">
                  This waiver and email was generated by
                  <a href="https://waiverhq.com" class="hover-text-decoration-underline" style="text-decoration: none; color: #4338ca">WaiverHQ.com</a>. Making online waivers simple.
                </p>
              </td>
            </tr>
            <tr role="separator">
              <td class="sm-h-8" style="height: 48px"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>  </div>
</body>
</html>

					`
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
		const result = await db.collection('petreleasewaivers').insertOne(post)

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
			req.body.address,
			req.body.city,
			req.body.state,
			req.body.zip,
			req.body.dogs,
			req.body.amount,
			req.body.vet,
			req.body.approveTreatmentBy,
			req.body.email,
			req.body.signature
		)

		const sendEmailCommand2 = createSendEmailCommand(
			'sara@dogsocietysd.com',
			'caninecare@dogsocietysd.com',
			req.body.firstName,
			req.body.lastName,
			req.body.phone,
			req.body.address,
			req.body.city,
			req.body.state,
			req.body.zip,
			req.body.dogs,
			req.body.amount,
			req.body.vet,
			req.body.approveTreatmentBy,
			req.body.email,
			req.body.signature
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
