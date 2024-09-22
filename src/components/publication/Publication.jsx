import React from "react";
import "./publication.css";
import lead from '../../assets/lead2.jpeg';
const Publication = () => {
  return (
    <section class="publications-section">
      <div class="publications-container">
        <h1 class="publications-title">Publications</h1>

        <div class="publications-content">
          <p>
            All accepted papers will be published in Taylor & Francis conference
            proceedings. They will be recommended for Scopus Indexing.{' '}
            <span class="highlight">Taylor & Francis</span> will take final
            decision on indexing your paper.
          </p>
          <p>
            Mail To: <span class="highlight">icarsi@saveetha.ac.in</span>
          </p>
        </div>

        <div class="publications-editor">
          <div class="editor-image">
            <img src={lead} alt="Dr. G. Nagappan" class="editor-image" />
          </div>
          <p class="editor-name">Dr. G. Nagappan</p>
          <p class="editor-affiliation">
            Head of Computer Science & Engineering, Saveetha Engineering
            College, Thandalam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publication;
