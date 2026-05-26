import React from 'react';
import { FileText } from 'lucide-react';
import FaqTopicSection from '../components/FaqTopicSection';
import CommunityFaqTopicSection from '../components/CommunityFaqTopicSection';

const CUSTOMS_FAQ_ITEMS = [
  {
    id: 'customs-sum-q1',
    question: 'What is the Rwanda electronic Single Window (ReSW)?',
    answer:
      'ReSW is the platform clearing agents use to submit import and export declarations to RRA. Assessment notices with duties due are issued through this process.',
  },
  {
    id: 'customs-sum-q2',
    question: 'Do I pay all Doc IDs on an assessment with one transfer?',
    answer:
      'If the assessment lists different Doc IDs for different tax types, each must be paid separately as instructed on the notices.',
  },
  {
    id: 'customs-sum-q3',
    question: 'What is the role of a clearing agent?',
    answer:
      'The taxpayer prepares documents and contracts a clearing agent. The agent submits declarations in ReSW, receives assessments, and coordinates payment and clearance steps with Customs.',
  },
  {
    id: 'customs-imp-1',
    question: 'Import / export — Step 1: Documents and Clearing Agent',
    answer: (
      <p>The taxpayer prepares all necessary documents and contracts a Clearing Agent.</p>
    ),
  },
  {
    id: 'customs-imp-2',
    question: 'Import / export — Step 2: Submit declaration in ReSW',
    answer: (
      <p>
        The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic
        Single Window (ReSW).
      </p>
    ),
  },
  {
    id: 'customs-imp-3',
    question: 'Import / export — Step 3: Assessment and payment',
    answer: (
      <p>
        The Clearing Agent receives assessment notices with customs duties due. The taxpayer pays all duties due,
        directly or through the agent. Different Doc IDs must each be paid separately when shown on the notice.
      </p>
    ),
  },
  {
    id: 'customs-imp-4',
    question: 'Import / export — Step 4: Customs channel and verification',
    answer: (
      <p>
        ReSW allocates the consignment to a Customs channel. If verification is required, officers may request
        documents or access to the consignment; further action may be needed if there are issues.
      </p>
    ),
  },
  {
    id: 'customs-imp-5',
    question: 'Import / export — Step 5: Release order',
    answer: <p>After successful verification, the Customs Officer provides the taxpayer with a release order.</p>,
  },
  {
    id: 'customs-imp-6',
    question: 'Import / export — Step 6: Warehousing fees',
    answer: (
      <p>The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.</p>
    ),
  },
  {
    id: 'customs-imp-7',
    question: 'Import / export — Step 7: Exit note',
    answer: <p>The taxpayer receives an exit note and may leave with their consignment.</p>,
  },
  {
    id: 'customs-mv-1',
    question: 'Motor vehicle transfer — Step 1: Online transfer request',
    answer: <p>The seller applies for online motor vehicle transfer in E-Tax.</p>,
  },
  {
    id: 'customs-mv-2',
    question: 'Motor vehicle transfer — Step 2: Visit RRA and pay transfer fee',
    answer: (
      <p>
        Visit any RRA office. If the seller has no outstanding tax arrears, staff provide an assessment for the
        Registration Transfer Fee, to be paid by the buyer or seller.
      </p>
    ),
  },
  {
    id: 'customs-mv-3',
    question: 'Motor vehicle transfer — Step 3: Register the buyer',
    answer: (
      <p>
        If the buyer does not yet have a TIN, provide RRA staff with a valid Identity Document (ID) or Passport.
      </p>
    ),
  },
  {
    id: 'customs-mv-4',
    question: 'Motor vehicle transfer — Step 4: Provide required documents',
    answer: <p>The buyer must provide RRA staff with all required documents.</p>,
  },
  {
    id: 'customs-mv-5',
    question: 'Motor vehicle transfer — Step 5: Yellow Card',
    answer: (
      <p>
        RRA staff give the buyer an updated Yellow Card with the buyer&apos;s details. The buyer is then the legal
        owner.
      </p>
    ),
  },
];

const CustomsSum = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Customs Summary</h1>
              <div className="professional-title-divider" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <FaqTopicSection items={CUSTOMS_FAQ_ITEMS} defaultExpandFirst={false} />
        <CommunityFaqTopicSection categoryKey="customs-sum" />
      </div>
    </div>
  );
};

export default CustomsSum;
