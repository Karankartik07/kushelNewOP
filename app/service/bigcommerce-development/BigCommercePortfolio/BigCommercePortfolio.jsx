"use client"
import React from "react";
import './BigCommercePortfolio.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";


export default function BigCommercePortfolio({page}) {
  return (
    <section className="projectsSectionKcom">
      <div className="projectsHeaderKcom">
        <div className="textKcom">
          <h2 className="primary-heading">Our Success Stories</h2>
          <p className="secondary-heading">
          Explore how our custom solutions have helped businesses to shine in this competitive world.
          </p>
        </div>
          <Link href="/portfolio">
        <button className="viewAllBtnKcom">
          View All Work 
          </button>
          </Link>

      </div>

<div className="b2b-sectionKcom">
  
    <div className="b2b-contentKcom">
      <div className="left-b2b-cardsKcom">
        <div className="left-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593401/Typ_CS_koameb.webp" alt="Shopify Plus" />
            <Link href="/portfolio/typhoondefense" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></Link>
          </div>
          
          <a href="/portfolio/typhoondefense" className="b2b-btnKcom">
          Typhoon Defense
            <p>{page}</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="left-b2b-cardKcom-2">
          <div className="b2b-logoKcom">
           
           <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593399/lafa_CS_xab3zf.webp" alt="Shopify Plus" />
           <Link href="/portfolio/lafayetteshooters" id="human" className="hover-linkCom"> View Case Study<MdArrowOutward /></Link>
          </div>
         
          <a href="/portfolio/lafayetteshooters" className="b2b-btnKcom">
          Lafayette Shooters
            <p>{page}</p>
          </a>  
          <hr />
        </div>
        
        <div className="left-b2b-cardKcom-3">
          <div className="b2b-logoKcom">
            <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593400/graco_CS_ltf0je.webp" alt="Shopify Plus" />
            <Link href="/portfolio/graco-corp" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward/></Link>
          </div>
         
          <a href="/portfolio/graco-corp" className="b2b-btnKcom">
          Graco-Corp
            <p>{page}</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="right-b2b-cardsKcom">
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593399/four_CS_kl40rc.webp" alt="Shopify Plus" />
            <Link href="/portfolio/fouroaksfarm" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /> </Link>
          </div>
         
          <a href="/portfolio/fouroaksfarm" className="b2b-btnKcom">
          Four Oaks Farm
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593400/fraap_CS_hnut2s.webp" alt="Shopify Plus" />
            <a href="/portfolio/krappstrapp" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
          
          <a href="/portfolio/krappstrapp" className="b2b-btnKcom">
          Krapp Strapp
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img loading="lazy" src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1748593399/top_CS_zv8zon.webp" alt="Shopify Plus" />
            <a href="/portfolio/topbrasstactical" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
         
          <a href="/portfolio/topbrasstactical" className="b2b-btnKcom">
          Top Brass Tactical
            <p>{page}</p>
          </a>
          <hr/>
        </div>

        
      </div>

      

      
    </div>
  
    </div>
    </section>
  );
}