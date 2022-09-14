const skill=document.querySelector('.skill');
const aboutMe=document.querySelector('.AboutMe');
const about=document.querySelector('.about');
const projects=document.querySelector('.projects');
const contact=document.querySelector('.contact');
const contactsection=document.querySelector('.contactsection');
const skillsection=document.querySelector('.skillsection');
const projectsection=document.querySelector('.projectsection');
const mypicture=document.querySelector('.mypic');
const transform=document.querySelector('.container');
skill.addEventListener('click',function (){
    aboutMe.style.display='none';
    contactsection.style.display='none';
    skillsection.style.display='block';
    mypicture.style.display='none';
    projectsection.style.display='none';
    skill.style.backgroundColor='blue';
    about.style.backgroundColor='#0d0d0e';
    projects.style.backgroundColor='#0d0d0e';
    contact.style.backgroundColor='#0d0d0e';
    
})

about.addEventListener('click',function (){
    aboutMe.style.display='block';
    contactsection.style.display='none';
    skillsection.style.display='none';
    projectsection.style.display='none';
    mypicture.style.display='block';
    about.style.backgroundColor='blue';
    skill.style.backgroundColor='#0d0d0e';
    projects.style.backgroundColor='#0d0d0e';
    contact.style.backgroundColor='#0d0d0e';
    
    
})

projects.addEventListener('click',function (){
    aboutMe.style.display='none';
    contactsection.style.display='none';
    skillsection.style.display='none';
    mypicture.style.display='none';
    projectsection.style.display='block';
    projects.style.backgroundColor='blue';
    about.style.backgroundColor='#0d0d0e';
    skill.style.backgroundColor='#0d0d0e';
    contact.style.backgroundColor='#0d0d0e';
    
})

contact.addEventListener('click',function (){
    aboutMe.style.display='none';
    contactsection.style.display='block';
    skillsection.style.display='none';
    mypicture.style.display='none';
    projectsection.style.display='none';
    contact.style.backgroundColor='blue';
    about.style.backgroundColor='#0d0d0e';
    skill.style.backgroundColor='#0d0d0e';
    projects.style.backgroundColor='#0d0d0e';
    
   
})