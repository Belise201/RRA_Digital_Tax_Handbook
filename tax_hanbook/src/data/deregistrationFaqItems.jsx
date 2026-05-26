import React from 'react';

/**
 * De-Registration handbook content (plain sections, not accordion items).
 * Each entry maps to one content-section on the De-Registration page.
 */
export const DEREGISTRATION_CONTENT_SECTIONS = [
  {
    id: 'dereg-q-docs',
    title: 'What documents are needed for de-registration?',
    body: (
      <p className="content-paragraph">
        In the cases of both de-registration of a specific tax type and full de-registration, RRA may request any
        documents of proof as necessary. The documents that are required may differ depending upon the nature of the
        request.
      </p>
    ),
  },
  {
    id: 'dereg-q-specific-tax',
    title: 'When can a taxpayer de-register for a specific tax type?',
    body: (
      <>
        <p className="content-paragraph">
          The process to apply for Dormancy of one or more tax types but having other tax account(s) open:
        </p>
        <ul className="content-list">
          <li>
            Go to{' '}
            <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
              www.rra.gov.rw
            </a>
          </li>
          <li>Click on &quot;Declare Domestic Taxes here&quot;</li>
          <li>Fill in your TIN and password and click on sign in if you already have an account in E-Tax</li>
          <li>Once logged in click on &quot;online requests&quot;</li>
          <li>
            Select &quot;Business closure&quot; and a page will appear showing either the presence or absence of tax
            arrears
          </li>
          <li>On the displayed page, choose &quot;closure of one tax account&quot;</li>
          <li>Select your preferred method of receiving the OTP: either via phone or email</li>
          <li>Fill in the OTP and click on verify</li>
          <li>Click the submit button and confirm your request.</li>
          <li>Upon successful deactivation, you&apos;ll receive a confirmation message.</li>
          <li>Click on &quot;download letter&quot; to obtain your confirmation letter.</li>
        </ul>
        <p className="content-paragraph">There are certain controls in the automation process:</p>
        <p className="content-paragraph">
          When a taxpayer wishes to close only the VAT or Income Tax account under their TIN while keeping other tax
          accounts active, this action cannot be done online. In such cases, the taxpayer must write a letter to the
          Assistant Commissioner in charge of the Registration, Filing, Payment, and Monitoring Division, explaining the
          reason for the request. The letter should be submitted through the e-Correspondence platform. The registration
          officer will then review and analyse the request.
        </p>
      </>
    ),
  },
  {
    id: 'dereg-q-when-full',
    title: 'When can a taxpayer fully de-register?',
    body: (
      <>
        <p className="content-paragraph">
          A taxpayer, or concerned parties, may request for full de-registration if the taxpayer has:
        </p>
        <ul className="content-list">
          <li>Permanently ceased all business activities</li>
          <li>Permanently departed Rwanda</li>
          <li>Deceased</li>
        </ul>
        <p className="content-paragraph">
          It is important to note that tax declarations must continue to be submitted until the taxpayer receives
          confirmation that the Rwanda Revenue Authority (RRA) has approved the de-registration. Additionally, a taxpayer
          cannot be de-registered if there are any outstanding tax arrears. However, in the event of a taxpayer&apos;s
          death, RRA may make certain considerations on a case-by-case basis.
        </p>
      </>
    ),
  },
  {
    id: 'dereg-q-how-full',
    title: 'How can a taxpayer fully de-register?',
    body: (
      <ul className="content-list">
        <li>
          Go to{' '}
          <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
            www.rra.gov.rw
          </a>
        </li>
        <li>Click on &quot;Declare Domestic Taxes here&quot;</li>
        <li>
          Fill in your TIN and password and click on sign in if you already have an account in E-Tax (If you don&apos;t
          have an account in E-Tax, click &quot;sign up.&quot; Enter your TIN and the telephone number you used for TIN
          registration. Submit to get your password for system access).
        </li>
        <li>Once logged in click on &quot;online requests&quot;.</li>
        <li>
          Select &quot;Business closure&quot; and a page will appear showing either the presence or absence of tax
          arrears.
        </li>
        <li>On the displayed page, choose &quot;Business closure&quot;.</li>
        <li>
          Choose one of the reasons for TIN deactivation. (Note that De-registration reason is only applicable when
          requested by someone representing a deceased TIN holder or for businesses undergoing liquidation or
          dissolution).
        </li>
        <li>Select your preferred method of receiving the OTP: either via phone or email.</li>
        <li>Fill in the OTP and click on verify.</li>
        <li>Click the submit button and confirm your request.</li>
        <li>Upon successful deactivation, you&apos;ll receive a confirmation message.</li>
        <li>Click on &quot;download letter&quot; to obtain your confirmation letter.</li>
      </ul>
    ),
  },
];
