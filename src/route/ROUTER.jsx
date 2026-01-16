import React from 'react'
import {Header} from '../compi/Header'
import { Intro } from '../compi/Intro';
import { Skills } from '../compi/Skills';
import { Footer } from '../compi/Footer';
import { Skillitem } from '../compi/Skillitem';
import { Personal } from '../compi/Personal';
const ROUTER = () => [
      {
            path: "/",
            element: <>
                  <Header/>
                  <Intro/>
                  <Skills/>
                  <Footer/>
            </>
      },
      {
            path: "/Home",
            element: <>
                   <Header/>
                  <Intro/>
                  <Skills/>
                  <Footer/>
            </>
      },
      {
            path: "/Contact",
            element: <>
                   <Header/>
                  <Intro/>
                  <Skills/>
                  <Footer/>
            </>
      },
      {
            path: "/About",
            element: <>
                   <Header/>
                  <Intro/>
                  <Skills/>
                  <Footer/>
            </>
      },
      {
            path: "/skill",
            element: <>
                  <Header/>
                  <Skillitem/>
            </>
      },
      {
            path: "/personal",
            element: <>
                  <Header/>
                  <Personal/>
            </>
      }
]
export default ROUTER;


