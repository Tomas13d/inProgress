import works from "../utils/works";
import {RiGithubLine} from "react-icons/ri";

const Works = () => {
    return(
        <div className="works-container" id="works">
        <h2>Some Things I’ve Built</h2>
        {works.map((item, i)=> (
               item.imgOrientation === "left" ? (
                <section key={i} className="works">
                <div className={`${item.containerClass} ${item.informationOrientation}`}>
                <img className={`${item.imgClass} logomargin`} src={item.logo}/>
                    <p>{item.information}</p>
                    <a href={item.repositoryLink} target="_blank"><button className="btn btn-dark">View Repository<RiGithubLine/></button></a>
                </div>
                <div className={`img-container ${item.imgOrientation}`}>
                    <img src={item.img} alt={`project${i}`} />
                </div>
            </section>
            ) : (
                <section key={i} className="works">
                    <div className={`img-container ${item.imgOrientation}`}>
                        <img src={item.img} alt={`project${i}`} />
                    </div>
                    <div className={`${item.containerClass} ${item.informationOrientation}`}>
                    <img className={`${item.imgClass} logomargin`} src={item.logo}/>
                        <p>{item.information}</p>
                        {item.repositoryLink ? (
                            <a href={item.repositoryLink} target="_blank"><button className="btn btn-dark"><RiGithubLine/> View Repository</button></a>
                        ) : (
                            <a href={item.repositoryLink} target="_blank"><button className="btn btn-dark">In Progress...</button></a>
                        )}
                    </div>
            </section>
            )
        ))}
            
        ))
        
    </div>
    )
}
export default Works;