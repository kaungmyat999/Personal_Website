import Link from "next/link";
import Image from "next/image";

export default function Education() {
    
    return <>
        <h2 className='subtitle'>EDUCATION</h2>
            <div className="timeline_container">
            <div className='edu'>
                <Image src='/images/cu_boulder_logo.png' alt='cuboulder_logo'  width={70} height={70} className='edu_logo'/>
                <div className='edu_text'>
                    <p className='edu_name'>Master of Science in Computer Science<br/>
                    <span className='edu_institute'>University Of Colorado Boulder</span>
                    <br/><span className='gpa'>(Current GPA: 4.0)</span>
                    </p>
                </div>
            </div>
              
        </div>
    
    
    </>
    
}
