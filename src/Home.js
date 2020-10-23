import React from 'react';
import ReactDOM from 'react-dom';
import Generator from './Generator';
import Validator from './Validator';
import Renewal from './Renewal';
import Faq from './Faq';
import LinkButton from './components/control/LinkButton';

// Auxiliary functions
function launchGenerator() {
  ReactDOM.render(
    <React.StrictMode>
      <Generator caption="Generate" />
    </React.StrictMode>,
    document.getElementById('pager')
  );
}

function launchValidator() {
  ReactDOM.render(
    <React.StrictMode>
      <Validator caption="Validate" />
    </React.StrictMode>,
    document.getElementById('pager')
  );
}

function launchRenewal() {
  ReactDOM.render(
    <React.StrictMode>
      <Renewal caption="Renew" />
    </React.StrictMode>,
    document.getElementById('pager')
  );
}

function launchFaq() {
  ReactDOM.render(
    <React.StrictMode>
      <Faq caption="FAQ" />
    </React.StrictMode>,
    document.getElementById('pager')
  );
}
// Generator Pages
export default function Abstract(props) {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        SilverBlade is a code seal web application,
        designed to protect your genuine SoloLearn code from plagiarism.
      </p>
      <h4>
        I would like to...
      </h4>
        <div className="container">
          <LinkButton onClick={launchGenerator}> 
            ... generate a code seal 
          </LinkButton>
          <LinkButton onClick={launchValidator}> 
            ... validate a code seal 
          </LinkButton>
          <LinkButton onClick={launchRenewal}>
             ... renew a code seal
          </LinkButton>
          <LinkButton onClick={launchFaq}>
             ... learn more about SilverBlade
          </LinkButton>
        </div>
    </div>
  );
};
