import { Carousel } from "antd";
import "./project.css";
import product1s1 from "./project1.png";
import product1s2 from "./p1s2.png";
import product1s3 from "./p1s2.png";
import product1s4 from "./p1s3.png";
import product1s5 from "./p1s4.png";
function Project() {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="project-container">
      <section className="project-head">
        <h>Project</h>
        <p>What i have done</p>
        <h>E-COMMERCE</h>
      </section>
      <section className="project-slider">
        <div className="project">
          <Carousel arrows infinite={false} className="slider">
            <div>
              <img src={product1s1} alt="project"></img>
            </div>
            <div>
            <img src={product1s2} alt="project"></img>
            </div>
            <div>
            <img src={product1s3} alt="project"></img>
            </div>
            <div>
            <img src={product1s4} alt="project"></img>
            </div>
            <div>
            <img src={product1s5} alt="project"></img>
            </div>
            
          </Carousel>
          <br />{" "}
        </div>
      </section>
    </div>
  );
}

export default Project;
