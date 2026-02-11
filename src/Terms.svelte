<script lang="ts">
  import Auth from './lib/Auth.svelte';
</script>

<Auth>
<!-- Navigation -->
<div class="navbar bg-base-100 shadow-lg fixed top-0 z-50">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl font-bold text-baltic-blue flex items-center gap-2" href="/">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 object-contain" />
      <span class="hidden md:inline">SWIM PERHENTIAN</span>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/#home">Home</a></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/register.html">Register</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/" class="btn btn-ghost">Back to Site</a>
  </div>
</div>

<!-- Terms and Conditions Content -->
<div class="pt-20 min-h-screen bg-base-100">
  <div class="container mx-auto px-4 py-12 max-w-5xl">
    <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Terms & Conditions
    </h1>
    <p class="text-center text-lg mb-8 text-gray-600">
      Swim Perhentian 2026
    </p>

    <div class="prose prose-lg max-w-none">

      <!-- Introduction -->
      <div class="card bg-base-200 shadow-xl mb-8">
        <div class="card-body">
          <p class="text-base leading-relaxed">
            The Swim Perhentian is an open water swimming event starting and finishing around
            <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline">Pulau Perhentian Besar</a>, Malaysia.
            The Event is held annually in early October.
          </p>
          <p class="text-base leading-relaxed mt-4">
            The following Event rules will apply to the Event and are subject to change. Any changes will be published on the Event website <a href="https://swimperhentian.com" class="text-tropical-teal underline">www.swimperhentian.com</a>. The most current rules at the time of the Event will apply.
          </p>
          <p class="text-base leading-relaxed mt-4">
            The Event will be conducted in a safe, friendly and sportsperson like manner. Any unsportsmanlike conduct or actions that compromise other participants health and safety will be grounds for immediate disqualification. Decisions of the Event officials are final and are not subject to appeal.
          </p>
        </div>
      </div>

      <!-- Entry Categories -->
      <div class="card bg-base-200 shadow-xl mb-8" id="entry-categories">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Entry Categories</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-bold text-lg text-tropical-teal">16 KM SOLO</h3>
              <p>1 Swimmer swimming 16km (full island circumnavigation) with 1 support boat.</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-tropical-teal">16 KM RELAY - DUO</h3>
              <p>2 swimmers swimming 16km together, sharing 1 support boat.</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-tropical-teal">16 KM RELAY - TEAM</h3>
              <p>4 swimmers swimming custom distances sharing at least one support boat per team, fees payable in full by team captain.</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-tropical-teal">10 KM SOLO</h3>
              <p>1 Swimmer swimming 10km (Bubbles Resort to Teluk Pauh) with 1 support boat.</p>
            </div>
          </div>
          <div class="alert alert-info mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Each entry permits participation in the registered category only and is only transferrable in accordance with our Cancellation Policy.</span>
          </div>
        </div>
      </div>

      <!-- Event Rules All -->
      <div class="card bg-base-200 shadow-xl mb-8" id="event-rules">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Event Rules - All Participants</h2>
          <ul class="space-y-3 list-none">
            <li>✓ The minimum age for 16km Solo swimmers at the date of entry is 18 years</li>
            <li>✓ The minimum age for 16km Relay swimmers at the date of entry is 14 years</li>
            <li>✓ The minimum age for 10km Solo swimmers at the date of entry is 18 years</li>
            <li>✓ All swimmers must agree to these Event Rules, the Refund and Cancellation Policy and the Event Waiver</li>
            <li>✓ The Event organiser reserves the right to accept, reject and cancel entries</li>
            <li>✓ Swimmers are permitted to wear any type of swimsuit or wetsuit, although swim categories will apply</li>
            <li>✓ Swim aids are permitted including snorkel, fins, paddles, but swim categories will be applied. If aids are being used, please nominate "assisted swim" when registering</li>
            <li>✓ All swimmers must wear the official event swim cap provided by the Event organiser</li>
            <li>✓ All swimmers must swim within 10 metres of their support boat at all times</li>
            <li>✓ Swimmers must remain on the Course at all times</li>
            <li>✓ The cut-off times for the 16km Event is 7 hours 30 minutes after the Event start</li>
            <li>✓ The cut-off times for the 10km Event is 5 hours after the Event start</li>
            <li>✓ The 12km checkpoint at Tanjung Basi has a cut-off time of 5 hours 30 minutes (16km swimmers only)</li>
            <li>✓ Swimmers must comply with all directions from Event officials, medical staff and Event volunteers and withdraw from the event when directed to do so</li>
            <li>✓ All swimmers must attend the mandatory Event briefing on Friday, October 2, 2026</li>
            <li>✓ All swimmers must check-in on Event Day at Event Check-in</li>
            <li>✓ No swimmer may proceed on the course without a support boat</li>
            <li>✓ All Swimmers and teams must have at least one individual as their land support</li>
          </ul>
        </div>
      </div>

      <!-- Solo Rules 16km -->
      <div class="card bg-base-200 shadow-xl mb-8" id="solo-16km">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">16 KM Solo Rules - Qualifying Swim</h2>
          <p class="mb-4">Provide evidence no later than September 15, 2026 of:</p>
          <ul class="space-y-2 list-disc list-inside">
            <li>Completing a 10km open water swim in 4 hours or less within the previous 12 months prior to registration; OR</li>
            <li>Completing a previous Swim Perhentian full 16km event within 2 years prior; OR</li>
            <li>Completed an alternative open water swim event that is at least 15km within the last 12 months prior to registration</li>
          </ul>
        </div>
      </div>

      <!-- Solo Rules 10km -->
      <div class="card bg-base-200 shadow-xl mb-8" id="solo-10km">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">10 KM Solo Rules</h2>
          <p class="font-semibold text-lg">NO qualifying swim is required.</p>
        </div>
      </div>

      <!-- Relay Rules -->
      <div class="card bg-base-200 shadow-xl mb-8" id="relay-rules">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">16 KM Relay Rules</h2>
          <h3 class="font-bold text-lg text-tropical-teal mb-2">DUO (2 Swimmers)</h3>
          <ul class="space-y-2 list-disc list-inside mb-4">
            <li>Provide evidence of a qualifying swim before September 15, 2026</li>
            <li>Relay swimmers must swim within 20 metres of each other at all times</li>
            <li>Relay swimmers may share a support boat</li>
          </ul>
          <h3 class="font-bold text-lg text-tropical-teal mb-2">TEAM (4 Swimmers)</h3>
          <ul class="space-y-2 list-disc list-inside">
            <li>Team swimmers may share a support boat</li>
            <li>Team changeovers are only permitted at the 3 designated change-over areas</li>
          </ul>
        </div>
      </div>

      <!-- Support Boats -->
      <div class="card bg-base-200 shadow-xl mb-8" id="support-boats">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Support Boats</h2>
          <ul class="space-y-2 list-disc list-inside">
            <li>All support boat crew must wear a lifejacket and carry the mandatory equipment (whistle, radio, course map, swimmer food, mobile phone in waterproof pouch)</li>
            <li>Support boat crew may only change over at the 3 designated change over areas</li>
            <li>Support boat crew must read and accept the mandatory briefing notes and rules prior to event day</li>
            <li>Support boats are provided by the Event Organiser and assigned to each swimmer/team</li>
          </ul>
        </div>
      </div>

      <!-- Event Results -->
      <div class="card bg-base-200 shadow-xl mb-8" id="event-results">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Event Results</h2>
          <ul class="space-y-2 list-disc list-inside">
            <li>This is a timed event, not a race. Full official results will be provided but no individual rankings will be prepared</li>
            <li>Every swimmer who completes their registered category will be awarded with a Finisher medal and certificate</li>
          </ul>
        </div>
      </div>

      <!-- Cancellation Conditions -->
      <div class="card bg-gradient-to-br from-mint-leaf/10 to-tropical-teal/10 shadow-xl mb-8" id="cancellation">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Cancellation Conditions</h2>
          <p class="mb-4">The refund and cancellation policy outlined below take into consideration the costs the Event Organiser incurs before the Event takes place.</p>
          <p class="mb-6">To avoid cancellation and trip change costs if you are traveling to the event, please consider taking out appropriate travel insurance and/or booking only refundable accommodation and travel.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3">Cancelled Event</h3>
          <p class="mb-4">The Event Organiser reserves the right to make any change or modification to the Event. This includes cancelling the Event or postponing the Event to a later date. Every effort is made to keep changes to a minimum.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3">Cancellation due to Force Majeure</h3>
          <p class="mb-4">If the race course or Event is changed, modified, delayed, or cancelled for any reason, including but not limited to acts of God or the elements (including without limitation, wind, rough water, rain, hail, water pollution, adverse weather condition, threats of marine wildlife, earthquake), acts of terrorism, fire, threatened or actual strike, labor difficulty, work stoppage, insurrection, war, public disaster, government-issued travel restriction or lock downs, regulatory authority issued directives, pandemics, flood, unavoidable casualty, race course conditions, or any other cause beyond the control of the Event Organiser, (Force Majeure) there will be no refund of the entry fee or any other costs incurred in connection with the Event. The Event Organiser will use best efforts to refund any unused funds at the time of the cancellation (after payment of all incurred expenses) equally in proportion to the entry price to all swimmers.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3">Cancellation by Event Organiser (Other Reasons)</h3>
          <p class="mb-4">In the event that the Event Organiser cancels the Event due to reasons other than Force Majeure, every effort will be made to refund any unused funds at the time of the cancellation (after payment of all incurred expenses) equally in proportion to the entry price paid to all swimmers.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3">Cancellation by Swimmer</h3>
          <p class="mb-2">Any cancellation must be made in writing by email to the Event Organiser. Cancellations are effective from the date of receipt. An email confirming this will be sent by return. If no email is received by you, please call the Event Organiser for confirmation.</p>
          <ul class="space-y-2 list-disc list-inside mb-4">
            <li>For cancellations made before August 1, 2026, a swimmer will receive a 50% refund returned to payee via same payment method</li>
            <li>For cancellations made after August 1, 2026, a partial transfer to the following year's event is possible by negotiation with organising committee</li>
            <li>Prior to September 15, 2026, support arrangements must be confirmed, or the swimmer's registration will be cancelled with full loss of entry fee</li>
          </ul>
          <p class="text-sm italic">Note that credit card fees and surcharges charged by third party payment providers will be added to the ticket and will be non-refundable.</p>
        </div>
      </div>

      <!-- Transfers -->
      <div class="card bg-base-200 shadow-xl mb-8" id="transfers">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Transfers</h2>
          <p>A swimmer may transfer their entry to another person in the same entry category who fulfills all entry requirements and is approved by the Event Organiser. A swimmer wishing to transfer his/her entry must inform the Event Organiser by email and provide contact and eligibility details for the replacement swimmer. A transfer fee of $75 is payable by replacement swimmer for the successful transfer of the registration.</p>
        </div>
      </div>

      <!-- Event Waiver -->
      <div class="card bg-gradient-to-br from-baltic-blue/10 to-tropical-teal/10 shadow-xl mb-8" id="event-waiver">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Event Waiver</h2>
          <p class="mb-4">These terms and conditions (Event Waiver) apply to all swimmers participating in the Event and each swimmer agreed to be bound by the Event Waiver by ticking 'Accept Event Waiver' in the registration process on the Event website.</p>

          <div class="space-y-4 text-sm leading-relaxed">
            <p>In consideration of and as a condition of acceptance by the Event Organiser of my entry in Event for myself, my heirs, executors, administrators and legal personal representatives hereby waive all and any claim, right or cause of action which I or they might otherwise have or at any future time have against the Event Organiser for or arising out of loss of life or injury (including psychological trauma) damages or loss of any description whatsoever (including property damage) which I or my equipment may suffer or sustain in the course of, or consequent upon, my entry or participation in the Event howsoever arising except to the extent limited or prohibited by law.</p>

            <p>I hereby indemnify, release and discharge the Event Organisers together with all persons and entities involved or otherwise engaged in promoting, staffing or operating the Event Organiser's other suppliers and Event sponsors, hosts, promotors and land owners and lessees (referred to as "Event Partners") together with their employees, officials, members, volunteers, agents and contractors, from all liability for loss of life or injury, (including psychological trauma), damages or loss of any description whatsoever (including property damage) which I or my equipment may suffer or sustain in the course of or consequent upon my entry or participation in the Event howsoever arising except to the extent limited or prohibited by law.</p>

            <p>I hereby declare that I am medically and physically fit and psychologically fully capable of participating in and have undertaken adequate training for the Event.</p>

            <p><strong>I warrant that prior to participating in the Event I:</strong></p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>am and must continue to be medically and physically fit and able to undertake and participate in the Event</li>
              <li>am not a danger to myself or to the health and safety of others</li>
              <li>have not at any time suffered any blackout, seizure, convulsion, fainting or dizzy spells</li>
              <li>I am not presently receiving treatment for any condition, illness, disorder or injury which would render it unsafe for me to take part in a recreational activity including participating in the Event</li>
            </ul>

            <p>I confirm that I am eighteen (18) years of age or older at the time of my entry (or fourteen (14) years for relay participants) and agree that if I am found to be younger than the minimum age I will be disqualified from the Event and no refund will be given.</p>

            <p>I agree and accept that the only insurance coverage maintained by the Event Organiser for the Event is public liability cover which may not cover any damage or loss I or my support boat crew may suffer and any loss or damage incurred will be my sole responsibility.</p>

            <p>I consent to receive such medical aid or preventative treatment, including ambulance transportation, which may be deemed advisable in the unfettered discretion of medical personnel and lifesavers in the event of any injury, accident, or illness to me as the result of my participation in the Event.</p>

            <p>I acknowledge and accept that the Event officials and any on water support event volunteers or staff have the authority to disqualify me if they believe that I should not continue in the Event for medical reasons.</p>

            <p>I acknowledge that I must, and I agree that I will, disclose any pre-existing medical or other condition that may affect the risk that either I or any other person will suffer injury, loss or damage. I acknowledge that Event Organiser rely on information provided by me and that all such information is accurate and complete. I will report any accidents, injuries, loss or damage I suffer during the Event to the relevant Event Organiser before I leave any relevant venue or race area.</p>

            <p><strong>I hereby acknowledge and agree that the Event Organiser will have the right to modify the Event or any aspect thereof (including the race rules) or to cancel the Event:</strong></p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>In event of any circumstances which prior to or during the Event, in the sole discretion of the Event Organiser, pose or may pose an unacceptable risk or danger to people or property. Without derogating from the generality of the above, such circumstances may include but are not limited to storm, rain, winds, currents, attack or risk of attack by sea creatures or any other inclement weather or ocean conditions</li>
              <li>if required under any statutory framework or should the Event Organiser be so directed or ordered by any authority or agency with relevant jurisdiction</li>
              <li>due to any circumstances reasonably outside the control of the Event Organiser necessitate modification or cancellation of the Event</li>
              <li>In event of such modification or cancellation of the Event the Event Organiser will have no obligation to refund my Event entry fee or any portion thereof</li>
            </ul>

            <p>I agree to participate in the Event in accordance with the Event Rules and conditions as determined by the Event Organiser.</p>

            <p>I acknowledge and agree that details of all Event participants will be entered into a database and publicly published/displayed by or on behalf of the Event Organiser, including but not limited to official event results and my name, postcode, suburb, age group, gender, event race number and finish time.</p>

            <p>I grant the Event Organisers and all Event Partners a royalty free worldwide licence in perpetuity, to use and allow the use of my name, image, likeness, voice, interview and statements in broadcasts, telecasts, web casts, media press materials, promotional materials and otherwise in connection with the Event.</p>

            <p>I acknowledge that I must complete the Event within the specified cut-off times. Should I not complete the said Event within the abovementioned timeframe I agree to leave the water when instructed to do so by a race official; or should I not leave the water when instructed to do so, that I may be removed by Event officials from the water for my own safety and for the safety of others and may be disqualified and/or banned from future events.</p>

            <p><strong>I acknowledge and agree that:</strong></p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Participation in the Event is inherently dangerous and physically and psychologically demanding</li>
              <li>Participation in the Event could result in serious injury or death to/of participants (including me)</li>
              <li>The risk of injury or death may be aggravated by changing sea and weather conditions, attacks from or contact with sea creatures (like sharks, stingers, jelly fish or blue bottles), other participants, vessels debris or other objects in the ocean, human error and/or participants' (including my) failure to participate in a safe and reasonable manner</li>
              <li>I have read and understood this warning and voluntary accept and assume the inherent risks in participating in the Event</li>
            </ul>

            <p>I agree that, if anything in this Event Waiver is to be considered to be unenforceable, illegal or void for any reason then it shall be read down and, if necessary, severed so that the balance of these terms and conditions of entry and race rules remain of full force and effect.</p>

            <p>I acknowledge and agree that the Event Organiser may in its sole discretion vary or supplement the terms and conditions for entry and/or participation in the Event by giving reasonable notice and that such notice may include but will not be limited to such varied or additional terms and conditions being displayed or publicly announced at the Event Venue or at the Event starting point.</p>

            <p>I acknowledge and agree that the Event Organiser reserve the right to determine in its sole discretion the number of participants for the Event and the right to accept or reject any entry at their discretion and also to issue special invitations.</p>

            <p><strong>I declare that all the information supplied by me in the Event registration system is true and correct.</strong></p>
          </div>
        </div>
      </div>

      <!-- Privacy Policy -->
      <div class="card bg-gradient-to-br from-mint-leaf/10 to-light-green/10 shadow-xl mb-8" id="privacy-policy">
        <div class="card-body">
          <h2 class="card-title text-2xl text-baltic-blue mb-4">Privacy Policy</h2>
          <p class="mb-4">This Privacy Policy sets out our commitment to protecting the privacy of personal information provided to us, or otherwise collected by us, offline or online, including through our website <a href="https://swimperhentian.com" class="text-tropical-teal underline">www.swimperhentian.com</a> (Site). In this Privacy Policy we, us or our means Swim Perhentian.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="personal-information">Personal Information</h3>
          <p class="mb-2">The types of personal information we may collect about you include:</p>
          <ul class="space-y-2 list-disc list-inside mb-4 text-sm">
            <li>your name</li>
            <li>images of you</li>
            <li>your contact details, including email address, mailing address, street address and/or telephone number</li>
            <li>your age and/or date of birth</li>
            <li>your demographic information, such as postcode</li>
            <li>your preferences and/or opinions</li>
            <li>information you provide to us through customer surveys</li>
            <li>details of products and services we have provided to you and/or that you have enquired about, and our response to you</li>
            <li>your browser session and geo-location data, device and network information, statistics on page views and sessions, acquisition sources, search queries and/or browsing behaviour</li>
            <li>information about your access and use of our Site, including through the use of Internet cookies, your communications with our Site, the type of browser you are using, the type of operating system you are using and the domain name of your Internet service provider</li>
            <li>additional personal information that you provide to us, directly or indirectly, through your use of our Site, associated applications, associated social media platforms and/or accounts from which you permit us to collect information</li>
            <li>any other personal information requested by us and/or provided by you or a third party</li>
          </ul>
          <p class="text-sm">We may collect these types of personal information directly from you or from third parties.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="collection-and-use">Collection and Use of Personal Information</h3>
          <p class="mb-2">We may collect, hold, use and disclose personal information for the following purposes:</p>
          <ul class="space-y-2 list-disc list-inside mb-4 text-sm">
            <li>to enable you to access and use our Site, associated applications and associated social media platforms</li>
            <li>to contact and communicate with you</li>
            <li>for internal record keeping and administrative purposes</li>
            <li>for analytics, market research and business development, including to operate and improve our Site, associated applications and associated social media platforms</li>
            <li>to run competitions and/or offer additional benefits to you</li>
            <li>for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you</li>
            <li>to comply with our legal obligations and resolve any disputes that we may have</li>
          </ul>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="disclosure">Disclosure of Personal Information to Third Parties</h3>
          <p class="mb-2">We may disclose personal information to:</p>
          <ul class="space-y-2 list-disc list-inside mb-4 text-sm">
            <li>third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, web-hosting and server providers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors and payment systems operators</li>
            <li>our employees, contractors and/or related entities</li>
            <li>our existing or potential agents or business partners</li>
            <li>sponsors or promoters of any competition we run</li>
            <li>anyone to whom our business or assets (or any part of them) are, or may (in good faith) be, transferred</li>
            <li>credit reporting agencies, courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you</li>
            <li>courts, tribunals, regulatory authorities and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights</li>
            <li>third parties, including agents or sub-contractors, who assist us in providing information, products, services or direct marketing to you. This may include parties located, or that store data, outside of Australia</li>
            <li>third parties to collect and process data, such as Google Analytics or other relevant businesses. This may include parties that store data outside of Australia</li>
          </ul>
          <p class="text-sm italic">By providing us with personal information, you consent to the disclosure of your personal information to third parties who reside outside Australia and acknowledge that we are not required to ensure that those third parties comply with Australian privacy laws.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="your-rights">Your Rights and Controlling Your Personal Information</h3>

          <div class="space-y-4 text-sm">
            <p><strong>Choice and consent:</strong> Please read this Privacy Policy carefully. By providing personal information to us, you consent to us collecting, holding, using and disclosing your personal information in accordance with this Privacy Policy. You do not have to provide personal information to us, however, if you do not, it may affect your use of this Site or the products and/or services offered on or through it.</p>

            <p><strong>Information from third parties:</strong> If we receive personal information about you from a third party, we will protect it as set out in this Privacy Policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person's consent to provide the personal information to us.</p>

            <p><strong>Restrict:</strong> You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below.</p>

            <p><strong>Access:</strong> You may request details of the personal information that we hold about you. An administrative fee may be payable for the provision of such information. In certain circumstances, as set out in the Privacy Act 1988 (Cth), we may refuse to provide you with personal information that we hold about you.</p>

            <p><strong>Correction:</strong> If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact us using the details below. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading or out of date.</p>

            <p><strong>Complaints:</strong> If you believe that we have breached the Australian Privacy Principles and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint.</p>

            <p><strong>Unsubscribe:</strong> To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.</p>
          </div>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="storage-security">Storage and Security</h3>
          <p class="mb-3 text-sm">We are committed to ensuring that the personal information we collect is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the personal information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.</p>
          <p class="text-sm">We cannot guarantee the security of any information that is transmitted to or by us over the Internet. The transmission and exchange of information is carried out at your own risk. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that the personal information we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="cookies">Cookies and Web Beacons</h3>
          <p class="mb-3 text-sm">We may use cookies on our Site from time to time. Cookies are text files placed in your computer's browser to store your preferences. Cookies, by themselves, do not tell us your email address or other personally identifiable information. However, they do allow third parties, such as Google and Facebook, to cause our advertisements to appear on your social media and online media feeds as part of our retargeting campaigns. If and when you choose to provide our Site with personal information, this information may be linked to the data stored in the cookie.</p>
          <p class="text-sm">We may use web beacons on our Site from time to time. Web beacons (also known as Clear GIFs) are small pieces of code placed on a web page to monitor the visitor's behaviour and collect data about the visitor's viewing of a web page. For example, web beacons can be used to count the users who visit a web page or to deliver a cookie to the browser of a visitor viewing that page.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="links">Links to Other Websites</h3>
          <p class="text-sm">Our Site may contain links to other websites. We do not have any control over those websites and we are not responsible for the protection and privacy of any personal information which you provide whilst visiting those websites. Those websites are not governed by this Privacy Policy.</p>

          <h3 class="font-bold text-lg text-tropical-teal mb-3 mt-6" id="amendments">Amendments</h3>
          <p class="text-sm mb-4">We may, at any time and at our discretion, vary this Privacy Policy by publishing the amended Privacy Policy on our Site. We recommend you check our Site regularly to ensure you are aware of our current Privacy Policy.</p>

          <p class="text-xs text-gray-600 italic mt-6">Last updated: February 11, 2026</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl">
        <div class="card-body text-center">
          <h2 class="card-title text-2xl justify-center mb-4">Questions?</h2>
          <p class="mb-4">For questions about these terms and conditions, please contact the Event Organiser:</p>
          <div class="space-y-2">
            <p><strong>Email:</strong> <a href="mailto:info@swimperhentian.com" class="underline">info@swimperhentian.com</a></p>
            <p><strong>Phone:</strong></p>
            <p>Nick: 0455 486 292 | Arno: 0419 335 592 | Charlie: 0407 008 322</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- Footer -->
<footer class="footer footer-center p-6 md:p-10 bg-base-200 text-base-content">
  <div class="w-full max-w-4xl">
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 md:h-10 md:w-10 object-contain" />
      <p class="font-bold text-xl md:text-2xl text-baltic-blue text-center">
        SWIM PERHENTIAN 2026
      </p>
    </div>
    <p class="text-sm md:text-base text-center">Malaysia's Premier Open-Water Swimming Event</p>
    <p class="text-sm md:text-base text-center">
      October 3, 2026 | <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline hover:text-mint-leaf transition-colors">Pulau Perhentian Besar</a>
    </p>
  </div>
  <div class="w-full max-w-4xl">
    <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      <a href="/#about" class="link link-hover text-sm md:text-base">About</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/register.html" class="link link-hover text-sm md:text-base">Register</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/terms.html" class="link link-hover text-sm md:text-base">Terms & Conditions</a>
    </div>
  </div>
  <div class="w-full max-w-4xl">
    <p class="text-xs md:text-sm text-center">Copyright © 2026 - All rights reserved by Swim Perhentian</p>
  </div>
</footer>
</Auth>

