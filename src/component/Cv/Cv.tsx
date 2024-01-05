import cv from "../../assets/CvBárbaraContardi.pdf";
import pdf from "../../assets/pdf.png";
import '../Cv/Cv.scss'

export const Cv = () => {
  return (
    <div className="cv">
         <img src={pdf} alt="pdf" width={100} height={100}/>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="CV Bárbara Contardi.pdf"
          >
            Download CV
          </a>
    </div>
  );
};
