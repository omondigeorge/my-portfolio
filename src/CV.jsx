import "./CV.css";

function CV() {
  return (
    <>
      <section id="profile">
        <hr />
        <div className="left">
          <h3>Profile</h3>
        </div>
        <div className="right">
          <p>I am a web developer from Nairobi, Kenya.</p>
        </div>
      </section>

      <section id="skills">
        <hr />
        <div className="left">
          <h3>Skills</h3>
        </div>
        <div className="right">
          <ul>
            <li>Strategic Planning & Management</li>
            <li>Web Development</li>
            <li>Front End Technologies</li>
            <li>Organizational Change Management</li>
            <li>Risk Identification & Management</li>
            <li>Perfomance Monitoring & Tracking</li>
          </ul>
        </div>
      </section>

      <section id="experience">
        <hr />
        <div className="left">
          <h3>Experience</h3>
        </div>
        <div className="right">
          <div className="work-item">
            <div className="work-title-left">
              <h4>Freelance Transcriber</h4>
              <h5>Konch AI/CrowdsurfWorks</h5>
            </div>
            <div className="work-title-right">
              <h5>2021-Present</h5>
            </div>
            <ul>
              <li>Implementing advanced editing techniques to ensure that transcripts are grammatically correct and read naturally</li>
              <li>Adapting to changing client requirements, quickly learning and applying new transcription techniques</li>
              <li>Utilizing specialized transcription software to maximize accuracy and efficiency</li>
              <li>Maintaining a database of transcription information and resources</li>
              <li>Converting audio recordings into text documents within 2 hours of receiving them</li>
            <li>Developing standardized processes to improve efficiency and accuracy</li>
            <li>Utilizing subject-specific terminology and research to transcribe complex topics accurately</li>
            </ul>
          </div>
          <hr />
          <div className="work-item">
            <div className="work-title-left">
              <h4>Strategy Intern</h4>
              <h5>South Nyanza Sugar Co. Ltd.</h5>
            </div>
            <div className="work-title-right">
              <h5>June 2021-Sept 2021</h5>
            </div>
            <ul>
              <li>Developed and implemented a tailored Balanced Scorecard for performance management in collaboration with cross-functional teams.</li>
              <li>Actively drove program enhancement and innovation through methodologies like Lean Process Improvement, fostering continuous improvement and innovative solutions.</li>
              <li>Enhanced operational efficiency and decision-making by analyzing weighbridge data trends and forecasting future developments.</li>
              <li>Oversaw critical financial management aspects, including monthly report compilation and budget data for various departments.</li>
              <li>Evaluated company processes to enhance success and increase annual turnover, focusing on workflow, resource allocation, and KPIs.</li>
            </ul>
          </div>
          <hr />
          <div className="work-item">
            <div className="work-title-left">
              <h4>Freelance Transcriber/Editor</h4>
              <h5>CrowdSurf Works</h5>
            </div>
            <div className="work-title-right">
              <h5>2020-Present</h5>
            </div>
            <ul>
              <li>Implementing advanced editing techniques to ensure that transcripts are grammatically correct and read naturally</li>
              <li>Submitting completed work to the company platform and correcting any errors based on the feedback provided</li>
              <li>Understanding client specifications and noting any formatting or notation requests before submission of transcripts</li>
              <li>Adhering to all confidentiality guidelines and respecting sensitive information</li>
              <li>Ensuring timely reviewing of transcripts for spelling, grammar, or formatting errors, as well as addressing other inconsistencies</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education">
        <hr />
        <div className="left">
          <h3>Education</h3>
        </div>
        <div className="right">
        <p className="school">
            <strong>
            GLAD Technology
            </strong>
            <br />
            Web Development
            <br />
            2023
          </p>
          <p className="school">
            <strong>
              Jomo Kenyatta University of Agriculture and Technology
            </strong>
            <br />
            Bachelor of Science-Strategic Management
            <br />
            2018-2022
          </p>
          <p className="school">
            <strong>Ringa Boys High School</strong>
            <br />
            Kenya Certificate of Secondary Education
            <br />
            2014-2017
          </p>
          <p className="school">
            <strong>Goodhope Academy</strong>
            <br />
            Kenya Certificate of Primary Education
            <br />
            2006-2013
          </p>
        </div>
      </section>
    </>
  );
}

export default CV;
