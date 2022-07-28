import React from 'react';
import './skillsBlock.css';
import skillsImg from '../../img/skillsImg.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import html from '../../img/html5.png';
import bootstrap from '../../img/bootstrap.png';
// import cssLogo from '../../img/cssLogo.png';
// import jsLogo from '../../img/jsLogo.png';
// import htmlLogo from '../../img/htmlLogo.png';
// import bootstrapLogo from '../../img/bootstrapLogo.png';
// import borderLogo from '../../img/borderLogo.png';

const SkillsBlock = () => {
    return (
        <div className='SkillsBlock_wrapper'>
            <h3 className='SkillsBlock_header'>Skills</h3>
            <div className='SkillsBlock_content'>
                <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
                <div className='SkillsBlock_skillsAndLogos'>
                    <p className='SkillsBlock_text'>I have a vast experience in the following web technologies:</p>
                    <div className='SkillsBlock_logoWrapper'>
                        <div className='SkillsBlock_css'>
                            <img src={css} alt="css" />
                        </div>
                        <div className='SkillsBlock_js'>
                            <img src={js} alt="js" />
                        </div>
                        <div className='SkillsBlock_html'>
                            <img src={html} alt="html" />
                        </div>
                        <div className='SkillsBlock_bootstrap'>
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default SkillsBlock;