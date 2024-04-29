const express = require('express');
const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {     res.render('home', {        
    nav: [   
    { link: '/home', title: 'Home' },             
    { link: '/login', title: 'Log in' },           
    { link: '/about', title: 'About' },            
    { link: '/contact', title: 'Contact' },       
      ],
      title: 'GymBro'     });
     }
);

blogRouter.get('/login', (req, res) => {     res.render('login', {        
        nav: [   
        { link: '/home', title: 'Home' },             
        { link: '/login', title: 'Log in' },           
        { link: '/about', title: 'About' },            
        { link: '/contact', title: 'Contact' },       
          ],
          title: 'Login'     });
         }
);

blogRouter.get('/home', (req, res) => {     res.render('home', {        
    nav: [   
    { link: '/home', title: 'Home' },             
    { link: '/login', title: 'Log in' },           
    { link: '/about', title: 'About' },            
    { link: '/contact', title: 'Contact' },       
      ],
      title: 'GymBro'     });
     }
);

blogRouter.get('/about', (req, res) => {     res.render('about', {        
    nav: [   
    { link: '/home', title: 'Home' },             
    { link: '/login', title: 'Log in' },           
    { link: '/about', title: 'About' },            
    { link: '/contact', title: 'Contact' },       
      ],
      title: 'About'     });
     }
);

blogRouter.get('/contact', (req, res) => {     res.render('contact', {        
    nav: [   
    { link: '/home', title: 'Home' },             
    { link: '/login', title: 'Log in' },           
    { link: '/about', title: 'About' },            
    { link: '/contact', title: 'Contact' },       
      ],
      title: 'contact'     });
     }
);

//exercises


blogRouter.get('/legs', (req, res) => {     res.render('legs', {        
    nav: [   
    { link: '/home', title: 'Home' },             
    { link: '/login', title: 'Log in' },           
    { link: '/about', title: 'About' },            
    { link: '/contact', title: 'Contact' },       
      ],
      title: 'legs'     });
     }
);

blogRouter.get('/chest', (req, res) => {     res.render('chest', {        
  nav: [   
  { link: '/home', title: 'Home' },             
  { link: '/login', title: 'Log in' },           
  { link: '/about', title: 'About' },            
  { link: '/contact', title: 'Contact' },       
    ],
    title: 'chest'     });
   }

);

blogRouter.get('/back', (req, res) => {     res.render('back', {        
  nav: [   
  { link: '/home', title: 'Home' },             
  { link: '/login', title: 'Log in' },           
  { link: '/about', title: 'About' },            
  { link: '/contact', title: 'Contact' },       
    ],
    title: 'back'     });
   }

);

blogRouter.get('/shoulders', (req, res) => {     res.render('shoulders', {        
  nav: [   
  { link: '/home', title: 'Home' },             
  { link: '/login', title: 'Log in' },           
  { link: '/about', title: 'About' },            
  { link: '/contact', title: 'Contact' },       
    ],
    title: 'shoulders'     });
   }

);

blogRouter.get('/pullup', (req, res) => {     res.render('pullup', {        
  nav: [   
  { link: '/home', title: 'Home' },             
  { link: '/login', title: 'Log in' },           
  { link: '/about', title: 'About' },            
  { link: '/contact', title: 'Contact' },       
    ],
    title: 'pullup'     });
   }

);

blogRouter.get('/workout', (req, res) => {     res.render('workout', {        
  nav: [   
  { link: '/home', title: 'Home' },             
  { link: '/login', title: 'Log in' },           
  { link: '/about', title: 'About' },            
  { link: '/contact', title: 'Contact' },       
    ],
    title: 'workout'     });
   }

);


module.exports = blogRouter;
