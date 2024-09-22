import React from 'react';
import './ethical.css';
const Ethical = () => {
  return (
    <section class="ethics-section">
      <div class="ethics-container">
        <h1 class="ethics-title">ICARSI 2023 Ethical Standards</h1>

        <h2 class="ethics-subtitle">
          ICARSI 2023 is dedicated to maintaining high ethical standards.
        </h2>

        <ul class="ethics-list">
          <li class="ethics-list-item">
            Any suspected misconduct will be thoroughly investigated, and
            confirmed cases may lead to rejection, institutional notification,
            or banning from future conferences.
          </li>
          <li class="ethics-list-item">
            All submissions will be screened for plagiarism, with a 10%
            similarity threshold. Violations will result in manuscript rejection
            or further disciplinary action.
          </li>
          <li class="ethics-list-item">
            ICARSI 2023 promotes integrity, expecting participants to uphold
            honesty and respect in the academic process.
          </li>
        </ul>

        <h2 class="ethics-subtitle">Responsibilities of Authors</h2>
        <ul class="ethics-list">
          <li class="ethics-list-item">
            Authors are obligated to present original, unpublished research,
            ensuring that all data, methodologies, and findings are reported
            with full accuracy and integrity.
          </li>
          <li class="ethics-list-item">
            The fabrication, falsification, or improper manipulation of data is
            strictly prohibited.
          </li>
          <li class="ethics-list-item">
            Proper attribution of others' contributions through accurate
            citations is essential, and any form of plagiarism will lead to the
            immediate rejection of the manuscript.
          </li>
          <li class="ethics-list-item">
            Authors are also required to disclose any potential conflicts of
            interest that could bias the outcomes or interpretation of their
            research.
          </li>
          <li class="ethics-list-item">
            Simultaneous submission of the same work to multiple journals or
            conferences is considered unethical and is expressly forbidden.
          </li>
        </ul>

        <h2 class="ethics-subtitle">Responsibilities of Reviewers</h2>
        <ul class="ethics-list">
          <li class="ethics-list-item">
            Reviewers must handle all submitted manuscripts with strict
            confidentiality, disclosing details only to authorized individuals,
            such as fellow reviewers.
          </li>
          <li class="ethics-list-item">
            The identities and information of reviewers are kept confidential,
            though reviewers can choose to sign their comments if desired.
          </li>
          <li class="ethics-list-item">
            Reviewers should maintain professionalism by providing fair, timely,
            and objective evaluations based solely on the manuscript's
            originality, significance, and clarity.
          </li>
          <li class="ethics-list-item">
            They must disclose any conflicts of interest and avoid using
            unpublished work for personal research.
          </li>
        </ul>
        <h2 class="ethics-subtitle">Responsibilities of the Editorial Board</h2>
        <ul class="ethics-list">
          <li class="ethics-list-item">
            The editorial board is responsible for ensuring the integrity of the
            publication process. They should make decisions on submissions based
            solely on the academic merit of the work and its relevance to the
            conference's scope.
          </li>
          <li class="ethics-list-item">
            The editorial board must ensure that the review process is conducted
            fairly, confidentially, and without bias. They are also responsible
            for identifying and addressing any ethical issues that may arise,
            such as suspected plagiarism, data manipulation, or conflicts of
            interest.
          </li>
          <li class="ethics-list-item">
            The board is committed to maintaining transparency throughout the
            publication process and will take appropriate action in cases of
            malpractice, which may include rejecting manuscripts, issuing
            retractions, or reporting misconduct to the authors' institutions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ethical;
