import "./Interview.css"
const Interview = () => {
  return (
   <div>
    <div className="d-flex align-items-start">
        <div className="container  mx-5">
            <div className="row d-flex justify-content-center mt-3">
        <div className="col-md-3">
    <div className="sections mb-3">
  <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <ul className="list-group list-group-light">
    <li className="list-group-item px-3 py-3" >
        <h4>Commmon Question</h4>
        <span>12 Question</span>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="active" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1"  role="tab" aria-controls="v-pills-1" aria-selected="true">1. Tell me about yourself.</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2"  role="tab" aria-controls="v-pills-2" aria-selected="false">2. What is your greatest strength?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3"  role="tab" aria-controls="v-pills-3" aria-selected="false">3. What is your greatest weakness?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4"  role="tab" aria-controls="v-pills-4" aria-selected="false">4. Why should we hire you?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list" >
    <h6 className="" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5"  role="tab" aria-controls="v-pills-5" aria-selected="false">5. Why do you want to work here?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-6"  role="tab" aria-controls="v-pills-6" aria-selected="false">6. Tell me about a time you showed leadership.</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-7"  role="tab" aria-controls="v-pills-7" aria-selected="false">7. Tell me about a time you were successful on a team.</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-8-tab" data-bs-toggle="pill" data-bs-target="#v-pills-8"  role="tab" aria-controls="v-pills-8" aria-selected="false">8. What would your co-workers say about you?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-9-tab" data-bs-toggle="pill" data-bs-target="#v-pills-9"  role="tab" aria-controls="v-pills-9" aria-selected="false">9. Why do you want to leave your current role?</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list" >
    <h6 className="" id="v-pills-10-tab" data-bs-toggle="pill" data-bs-target="#v-pills-10"  role="tab" aria-controls="v-pills-10" aria-selected="false">10. Describe your most challenging project.</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-11-tab" data-bs-toggle="pill" data-bs-target="#v-pills-11"  role="tab" aria-controls="v-pills-11" aria-selected="false">11. Tell me about something you’ve accomplished that you are..</h6>
    </li>
    <li className="list-group-item px-3 py-3 interview-list">
    <h6 className="" id="v-pills-12-tab" data-bs-toggle="pill" data-bs-target="#v-pills-12"  role="tab" aria-controls="v-pills-12" aria-selected="false">12. Can you explain your employment gap?</h6>
    </li>
   
    </ul>
  </div>
  </div>
  </div>



  <div className="col-md-8">
  <div className="tab-content" id="v-pills-tabContent">
    {/* info 1 */}
    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Tell me about yourself.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>A lot of jobs require someone who can think on their feet or present ideas with crispness and clarity. This question provides employers with an early preview of your core skills, your personality and your ability to respond to an unstructured question.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be succinct, honest and engaging :</span>
                    <span className="">I call this the “SHE” formula. Resist the urge to give a detailed account of the last two decades of your career. The interviewer is looking for an answer that shows them youre qualified and can respond to an unstructured question.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Use the job description to prepare : </span>
                    <span className="">Reread what they want and highlight the most required skills that you have. Are they looking for someone who can solve problems or deal with tough customers? Pick a few and brainstorm how you can describe yourself while showcasing your strengths for what theyre seeking.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Tie your story to their needs :</span>
                    <span className=""> People love a good tale, so weave in some personality. For example, maybe you fell in love with the hospitality industry because your grandparents ran a bed and breakfast. Connect your story back to the job, keep it short, and be truthful.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Focus on professional aspects of your background.</li>
                <li>Highlight key career achievements and skills.</li>
                <li>Keep it concise and relevant to the job.</li>
                <li>Connect your experiences to the position you are applying for.</li>
                <li>Practice delivering your introduction with confidence.</li>
               </ul>
            </div>
     </div>  
    </div>
  {/* Info 2 */}
    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">What is your greatest strength?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Employers want to see if you can strike the right balance between confidence and humility. Hiring managers also want to get a sense for how self-aware and honest you are and align your strengths to the role at hand.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Describe a relevant experience :</span>
                    <span className="">If youre applying for a sales job, tell a story about a time where you helped a customer solve a problem with your solution.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Give specific details : </span>
                    <span className="">Tell them about a time you closed a deal that helped you hit a percentage of your annual number. When you share those facts with them, it helps them visualise how effective you have been.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show them you’re a well-rounded person :</span>
                    <span className="">For example, share a story of when you used a “soft” skill, like effective communication with a coworker, and then one about you using a technical skill, which could be anything asked for in the job description.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Be authentic - don’t make up strengths that you think the employer wants to hear.</li>
                <li>Tell a story about a work experience.</li>
                <li>Be sure the strengths you share are aligned to the role you want.</li>
              
               </ul>
            </div>
     </div>  
    </div>
    {/* Info 3 */}
    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">What is your greatest weakness?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>The interviewer is assessing whether your weaknesses will get in the way of doing the job. Employers are looking for humility and whether you are committed to learning and growing. This is a place you can showcase what you are doing to improve.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be humble :</span>
                    <span className="">You want to communicate an authentic story that shows you are self-aware. Its okay that you dont come off as perfect, thats authentic, which is important for someone who will have to trust you in the role that theyre hiring for.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Choose a trait that is not too relevant to the job : </span>
                    <span className="">For example, if you are applying for a project manager role, choose a weakness that is more related to creativity, which is something that doesnt disqualify you from the description of the things that would make someone successful in that role</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show how you manage it :</span>
                    <span className="">Have a fix-it strategy. For example, if you struggle with remembering product details so you track them in their phone or side notebook, thats okay, share that with them. That shows that you got commitment to solving that problem and addressing it.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Employers are looking for self-awareness and personal accountability.</li>
                <li>It’s good to be honest about what you’re not great at.</li>
                <li>Share what you are doing to actively improve on this weakness.</li>
              
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 4 */}
    <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Why should we hire you?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>This question tests how persuasive you are. Interviewers want to see if you can make a calm, confident case for yourself, even if they are acting skeptical. They are looking for factual and compelling answers.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold "> Ask yourself why you think you are qualified :</span>
                    <span className="">Prepare for the interview by picking three or four qualifications and experiences that help them understand why you are a fit for this job.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Tell them how you fit in : </span>
                    <span className="">Paint a picture of what you accomplish that gives you a leg up on the competition. Also, show them why you are a great match for this company by letting them see that you know about their mission, their vision, how they operate—and how you would fit into that really well.
 </span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Speak authentically :</span>
                    <span className="">How you say something is as important as what you say. So when you are sharing your successes and you are answering these questions, speak like the best version of yourself and make sure that you are doing it in a way that allows the interviewers to connect to you.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Start with the three or four best reasons you got.</li>
                <li>Cite results, credentials, and other peoples praise so you dont seem self-absorbed.</li>
                <li>Be concise, and invite follow-up questions at the end.</li>
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 5 */}
    <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Why do you want to work here?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Interviewers want to understand what prompted you to apply for this job. They dont want candidates who are indifferent to where they work. Instead, they want someone who offers very specific reasons for why they want this job.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold "> Make it all about them :</span>
                    <span className="">Your best answer will be about what they need. It ll show that you ve done your research and have thought through what you can contribute to that team.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show them how you can help : </span>
                    <span className="">Weave your story into the context of what you can contribute. If you have strong accounting skills and are interviewing for a finance role at a humane society, you could suggest that this job would allow you to blend your professional skills with your passion for animals.
 </span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Speak from the heart :</span>
                    <span className="">Telling a genuine story can make a big difference. For example, I once worked with a client who was applying for a zoo event manager job and she had grown up next door to that zoo and had great memories of the peacocks flying over the fence and sitting on her dads car. So her answer was that she wanted people to have fun memories of that zoo just like she did. Try to top that.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Make it about them first.</li>
                <li>Show you ve done your research.</li>
                <li>Use this as a key opportunity to outshine the competition.</li>
                <li>Speak from the heart</li>
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 6 */}
    <div className="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-6-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Tell me about a time you showed leadership.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Employers want to understand your capacity to step up and handle tough situations that undoubtedly arise in the workplace. They want to know when you ve seen an opening to lean in and lead with good judgment.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be succinct, honest and engaging :</span>
                    <span className="">I call this the “SHE” formula. Resist the urge to give a detailed account of the last two decades of your career. The interviewer is looking for an answer that shows them youre qualified and can respond to an unstructured question.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Use the job description to prepare : </span>
                    <span className="">Reread what they want and highlight the most required skills that you have. Are they looking for someone who can solve problems or deal with tough customers? Pick a few and brainstorm how you can describe yourself while showcasing your strengths for what theyre seeking.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Tie your story to their needs :</span>
                    <span className=""> People love a good tale, so weave in some personality. For example, maybe you fell in love with the hospitality industry because your grandparents ran a bed and breakfast. Connect your story back to the job, keep it short, and be truthful.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Focus on professional aspects of your background.</li>
                <li>Highlight key career achievements and skills.</li>
                <li>Keep it concise and relevant to the job.</li>
                <li>Connect your experiences to the position you are applying for.</li>
                <li>Practice delivering your introduction with confidence.</li>
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 7 */}
    <div className="tab-pane fade" id="v-pills-7" role="tabpanel" aria-labelledby="v-pills-7-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Tell me about a time you were successful on a team.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>If you can show that you ve helped a team move through a challenge, you probably have strong communication and interpersonal skills. These kinds of “soft” skills are in high demand and make people successful in their jobs.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Describe a relevant experience :</span>
                    <span className="">If youre applying for a sales job, tell a story about a time where you helped a customer solve a problem with your solution.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Give specific details : </span>
                    <span className="">Tell them about a time you closed a deal that helped you hit a percentage of your annual number. When you share those facts with them, it helps them visualise how effective you have been.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show them you’re a well-rounded person :</span>
                    <span className="">For example, share a story of when you used a “soft” skill, like effective communication with a coworker, and then one about you using a technical skill, which could be anything asked for in the job description.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Be authentic - don’t make up strengths that you think the employer wants to hear.</li>
                <li>Tell a story about a work experience.</li>
                <li>Be sure the strengths you share are aligned to the role you want.</li>
              
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 8 */}
    <div className="tab-pane fade" id="v-pills-8" role="tabpanel" aria-labelledby="v-pills-8-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Tell me about a time you were successful on a team.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Interviewers want to know if you will fit in with the team. This question can also help you highlight your strengths without feeling like you re bragging.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be humble :</span>
                    <span className="">You want to communicate an authentic story that shows you are self-aware. Its okay that you dont come off as perfect, thats authentic, which is important for someone who will have to trust you in the role that theyre hiring for.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Choose a trait that is not too relevant to the job : </span>
                    <span className="">For example, if you are applying for a project manager role, choose a weakness that is more related to creativity, which is something that doesnt disqualify you from the description of the things that would make someone successful in that role</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show how you manage it :</span>
                    <span className="">Have a fix-it strategy. For example, if you struggle with remembering product details so you track them in their phone or side notebook, thats okay, share that with them. That shows that you got commitment to solving that problem and addressing it.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Employers are looking for self-awareness and personal accountability.</li>
                <li>Its good to be honest about what youre not great at.</li>
                <li>Share what you are doing to actively improve on this weakness.</li>
              
               </ul>
            </div>
     </div>  
    </div>
     {/* Info 9 */}
    <div className="tab-pane fade" id="v-pills-9" role="tabpanel" aria-labelledby="v-pills-9-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Why do you want to leave your current role?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Employers say they want to hire people who are running “to” a role as opposed to running “away.” However, they are also interested in your honesty when things havent worked out and will give people second chances when they demonstrate hunger.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold "> Ask yourself why you think you are qualified :</span>
                    <span className="">Prepare for the interview by picking three or four qualifications and experiences that help them understand why you are a fit for this job.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Tell them how you fit in : </span>
                    <span className="">Paint a picture of what you accomplish that gives you a leg up on the competition. Also, show them why you are a great match for this company by letting them see that you know about their mission, their vision, how they operate—and how you would fit into that really well.
 </span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Speak authentically :</span>
                    <span className="">How you say something is as important as what you say. So when you are sharing your successes and you are answering these questions, speak like the best version of yourself and make sure that you are doing it in a way that allows the interviewers to connect to you.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Start with the three or four best reasons you got.</li>
                <li>Cite results, credentials, and other peoples praise so you dont seem self-absorbed.</li>
                <li>Be concise, and invite follow-up questions at the end.</li>
               </ul>
            </div>
     </div> 
    </div>
     {/* Info 10 */}
    <div className="tab-pane fade" id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-10-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Describe your most challenging project.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>Employers want to get a sense of what challenging means to you. They also want to know how you handled the situation in a calm way. They are looking for a storyline to prove that you can turn a bad story into a good story.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be succinct, honest and engaging :</span>
                    <span className="">I call this the “SHE” formula. Resist the urge to give a detailed account of the last two decades of your career. The interviewer is looking for an answer that shows them youre qualified and can respond to an unstructured question.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Use the job description to prepare : </span>
                    <span className="">Reread what they want and highlight the most required skills that you have. Are they looking for someone who can solve problems or deal with tough customers? Pick a few and brainstorm how you can describe yourself while showcasing your strengths for what theyre seeking.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Tie your story to their needs :</span>
                    <span className=""> People love a good tale, so weave in some personality. For example, maybe you fell in love with the hospitality industry because your grandparents ran a bed and breakfast. Connect your story back to the job, keep it short, and be truthful.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Focus on professional aspects of your background.</li>
                <li>Highlight key career achievements and skills.</li>
                <li>Keep it concise and relevant to the job.</li>
                <li>Connect your experiences to the position you are applying for.</li>
                <li>Practice delivering your introduction with confidence.</li>
               </ul>
            </div>
     </div>
    </div>
     {/* Info 11 */}
    <div className="tab-pane fade" id="v-pills-11" role="tabpanel" aria-labelledby="v-pills-11-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Tell me about something you ve accomplished that you are proud of.</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>This question assesses how you define a professional success. If the story resonates, the employer will want you to do similar things at his or her company. You should focus on the impact and outcomes.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Describe the situation :</span>
                    <span className="">Talk about the initial events that occurred. What were the problems that you were experiencing? What needed to be solved and what resources did you have--or not have? This is a really key part of the story, so it should be about three to four sentences long.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Get into the action : </span>
                    <span className="">Speak about the key milestones that you went through. Tell them what you did to turn the situation around. Don't go into too much detail though. It should only be about two to three sentences, and try to use active verbs, things like “I implemented” or “I persuaded”.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold "> Show the results :</span>
                    <span className="">Let them know how well things turned out, how the problems were solved and what you may have learned along the way. Try to include a clincher at the end, like dollars saved or improved profitability. It drives home that you did a great thing.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Describe the problem that existed before you took action..</li>
                <li>Talk about how you took initiative to solve the problem.</li>
                <li>Explain why you are proud of the outcome and what would have happened if you hadn t stepped in.</li>
               </ul>
            </div>
     </div>
    </div>
     {/* Info 12 */}
    <div className="tab-pane fade" id="v-pills-12" role="tabpanel" aria-labelledby="v-pills-12-tab" >
    <div>
            <div className="sections interview-right1">
        <h4 className=" mx-3 mt-5">Can you explain your employment gap?</h4>
              <div className="d-flex  mx-3 mt-3 align-items-center">
                <p id="text1"><button type="button" className="  interview-button ">practices and get feedback</button></p>
              </div>
              <div className="sections sections-2 p-2">
             <h6 className="mt-2">Overview</h6>
             <p>This question isn t designed to rule you out - its a good sign if you get the interview. Interviewers want to get more context about the gap and whether you re still going to be a great fit for the role, despite the gap.</p>
            </div>
            </div>

            <div className="sections mt-4 p-2"> 
            <h5 className="my-3 fw-bold">Answer FrameWork</h5>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Be honest :</span>
                    <span className="">The truth will set you free. Try to put the situation into the best light and dont lie; its bound to come back and haunt you. So if your job was eliminated through a merger, just say so.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Speak with confidence : </span>
                    <span className="">For example, if you had taken some time away from working, avoid acting like you are embarrassed, apologetic or ashamed. The interviewer is going to pick up on that. Instead, pause and you see how they respond. The more calm, succinct and confident you are, the more at ease the interviewer will be with your answer—and with you.</span>
                </p>
            </div>
            <div className="my-2">
                <p>
                    <span className="fw-bold ">Show the benefits of your time off :</span>
                    <span className="">Let them know how well things turned out, how the problems were solved and what you may have learned along the way. Try to include a clincher at the end, like dollars saved or improved profitability. It drives home that you did a great thing.</span>
                </p>
            </div>
            </div>

            <div className="sections mt-4 p-2">
               <h5 className="mt-2">Tips</h5>
               <ul>
                <li>Expect that they will ask about the gap - prepare for it.</li>
                <li>Answer honestly and strategically.</li>
                <li>Be confident and succinct.</li>
                <li>Shine a light on the good that came out of that time.</li>
               </ul>
            </div>
     </div>
    </div>

    
  </div>
  </div>
  </div>
</div>
</div>
   </div>
  )
}

export default Interview
