import Image from "next/image"
import Link from "next/link"
import Typical from 'react-typical'
import Footer from "../components/Footer"
import fs from 'fs';
import path from 'path';
import Certification from "../components/Certification";
import Projects from "../components/Projects";
import Education from '../components/Education'
import { motion } from "motion/react"
export default function Blog({certs,pjs}) {
    
    return (<div className="main">
        <div className="content" >
          <div className="nav">
            <Link className='link' href='/'><span>George's About </span> </Link> / <Link className='link' href='/resume'> <span>Resume</span> </Link> / <Link className='link' href='/blogs'> <span>Blogs</span> </Link></div>
          <div className="container">
            <div className="left-side">
              <div className="greating">
                <Typical
                  steps={['Hi! ', 1000, 'I\'m George Kyaw!', 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <motion.div
                initial={{ y : -20, opacity: 0, scale: 1}}
                animate={{ y: [-60,0,-5],opacity: [0,0.25,0.5,1], scale: 1}}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: "linear"
                }}
              >
                <p>I’m a US-based machine learning and software development engineer who fueled by curiosity and a commitment to continuous learning, which has equipped me with a solid foundation in software engineering and machine learning. I’m eager to apply my skills in real-world projects, and I’m driven by the desire to innovate and solve complex problems.</p>
                <div className="contact">
                  <div className="contact-left"><span>Contacts:</span></div>
                  <div className="contact-right">
                    <Link href='https://github.com/kaungmyat999?tab=repositories' aria-label='checkout github' ><Image src='/images/github_logo.png' width={40} height={40} alt='github_logo'/></Link>
                    <Link href='https://www.linkedin.com/in/george-kyaw-472498298/' aria-label='checkout linkedin' ><Image src='/images/linkedin_logo.png' width={40} height={40} alt='linkedin_logo'/></Link>
                    <Link href='https://x.com/KaungMy51486739' aria-label='checkout x social media'><Image src='/images/TwitterX.png'width={40} height={40} alt='twitter_logo'/></Link>
                    <Link href='mailto:kaky2698@colorado.edu' aria-label='checkout email'><Image src='/images/mail_icon.png'width={40} height={40} alt='email_logo' /></Link>
                  </div>
                </div>

              </motion.div>


              
            </div>
            <div className="right-side">
              <motion.div
                initial={{ x : 200, opacity: 0 , scale: 1 }}
                animate={{x : [40,-25, 0],opacity: [0,0.4,1], scale: 1}}
                
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: "easeIn"
                }}
              >
                <Image className="profile" src='/images/IMG_1505.JPG' alt='Profile_Pic' width={350} height={450}/>
              </motion.div>
            </div>
            
          </div>
          <motion.div
                initial={{ y : -100, opacity: 0, scale: 1}}
                
                whileInView={{
                  y: 0,opacity: 10, scale: 1
                }}
                
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "linear",
                  staggerChildren: 0.3
                }}
                
               
                viewport={{ once: true }}
              >
            <div className="sections">
              <Education />
            </div>
          </motion.div>
          <motion.div
                initial={{ y : -60, opacity: 0, scale: 1}}
                
                whileInView={{
                  y: [200,100,0],opacity: 10, scale: 1
                }}
                
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "linear",
                  
                }}
                
               
                viewport={{ once: true }}
              >
          </motion.div>
          <motion.div
                initial={{ y : -60, opacity: 0, scale: 1}}
                
                whileInView={{
                  // y: 0,opacity: 10, scale: 1
                  y: [-60,0,-5],opacity: [0,0.25,0.5,1], scale: 1
                }}
                
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "linear",
                  staggerChildren: 0.3
                }}
                
               
                viewport={{ once: true }}
              >
            <div className="sections">
              <Projects pjs={pjs}/>
            </div>
          </motion.div>
          <motion.div
                initial={{ y : -60, opacity: 0, scale: 1}}
                
                whileInView={{
                  y: [-60,0,-5],opacity: [0,0.25,0.5,1], scale: 1
                }}
                
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "linear",
                  staggerChildren: 0.3
                }}
                
               
                viewport={{ once: true }}
              >
            <div className="sections">
              <Certification certs={certs}/>
            </div>
          </motion.div>
          
        </div>
        <Footer />
      </div>
    )
    
}


export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'certifications.json');
  const certData = fs.readFileSync(filePath,'utf-8')
  let certsArr =  JSON.parse(certData)

  const filePath2 = path.join(process.cwd(), 'data', 'projects.json');
  const projectData = fs.readFileSync(filePath2,'utf-8')
  let projectArr =  JSON.parse(projectData)

  return {
    props:{
      certs: certsArr,
      pjs:projectArr
    }
  }
  
}
