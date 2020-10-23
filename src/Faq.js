import React from 'react';
import FaqItem from './components/container/FaqItem';
import { Page } from './components/container/Pager';

export default (props) => {
  return (
    <Page {...props}>
      <FaqItem question="What is SilverBlade?">
        <p>
          SilverBlade is a tool to protect your idea from plagiarism.
          It does so by including author and idea description in a
          server signed seal, which further contains a link to both
          your profile and the code for which you generate the seal.
        </p>
        <div className="alert alert-info">
          The server signature guarantees the integrity of the information
          included in the seal, which hopefully will simplify claims
          of authorship.
        </div>
      </FaqItem>
      <FaqItem question="How does it work?">
        <p>
          There are essentially two intended use cases
        </p>
        <ul>
          <li>Protecting a code</li>
          <li>Validating a code</li>
        </ul>
        <div className="text-secondary font-weight-bold">
          Protection
        </div>
        <p>
          When protecting a code, you provide your SoloLearn profile
          id number and the link to the code (or its unique code id)
          along with author and idea description, and will receive
          a seal and renewal key. You can put the seal anywhere in
          the code so it is available, should a verification become
          necessary.
        </p>
        <div className="text-secondary font-weight-bold">
          Validation
        </div>
        <p>
          A seal contained in a code can be inspected by anyone using
          this validation tool. This can be used by others to verify
          that they are looking at an original; and if the code had
          been copied including the seal, they will be redirected to
          the original version and author.
        </p>
        <p>
          Seal validation can be used by moderators, should a plagiarism
          case be brought before them. They will be directed to the original 
          author and code, and can this way verify that the seal was issued 
          for the code in question, and see when the seal was issued and 
          compare it to the code creation details provided by SoloLearn of 
          all the codes in question.
        </p>
      </FaqItem>
    </Page>
  );
}
