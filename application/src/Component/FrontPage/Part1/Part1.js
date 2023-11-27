import React,{useState,useEffect} from 'react'
import logo1 from '../../../Image/example-19.svg'
import logo2 from '../../../Image/image3.png'
import logo3 from '../../../Image/Medicine-bro.svg'
import image1 from '../../../Image/download.svg'
import image2 from '../../../Image/accident.svg'

import image3 from '../../../Image/Insurance.svg'
import image4 from '../../../Image/check.svg'
import './Part1.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getUserName } from '../../../Service/CustomerService'
import { useHistory } from 'react-router-dom';

const Part1 = () => {
  const params =useParams()
  const [login,setLogin] = useState(false)
  const [firstName,setFirstName] =useState()

    const getNameOfUser = async() =>{

        let response =await  getUserName(params.username)
        setFirstName(response.data)
        console.log(response);
    }


  useEffect(() => {
    // Check for authentication in localStorage and update the state accordingly
    if (localStorage.getItem('authentication')) {
      setLogin(true);
    }
    if (login) {
        // console.log(login)
        // getNameOfUser();
      }
  },  [login]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <>
        <div className='main'>
            <div className="section section-header">
                <div className="part1-container">
                    <div className="row">
                        <div className="part-left">
                            
                        {login ? (
                        <h3 className="text-title" style={{ fontWeight: 200 }}>
                            Welcome {firstName} !
                        </h3>
                        ) : null}
                            
                            <h2 className="text-title">Insurance</h2>
                            <h1 className="text-title">The need of the hour</h1>
                            <p className="text-description">Streamline claims, enhance policy management, and prioritize user security with our innovative insurance app</p>
                        
                        </div>
                        <div className="part-right">
                            {/* <img  src={logo1} alt="asd" class="part1-image d-lg-block d-none"/> */}
                            <div className="white-space"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-2'>
                <div className='part2-container'>
                    <div className='row-2'>
                        <div className='part-left-2'>
                            <img  src={logo2} alt="asd" className="part2-image d-lg-block d-none"/>
                        </div>
                        <div className='part-right-2'>
                            <div className='insurance-overview__content'>
                                <p className="text-description-2">Life is full of uncertainties. You may get married, find an amazing job, and start a new life. However, you might also contract an illness. Your house might be damaged in an earthquake or a flood. Your vehicle may be involved in an accident. Instances are many and, yet, the result always has a financial repercussion.</p>
                                <p className="text-description-2">While you can take measures to control or limit the financial losses suffered in a contingency, you cannot avoid them altogether. So what do you do?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='insurancePlanCards' id="insurance-plans-link">
                <div className='content'>
                    <div className='insurancePlanCard_content'>
                        <div className="insurance-tc">
                            <h2 className="insurance-tc__subtitle">Types of Insurance Plans</h2>
                            <h3>Life Insurance</h3>
                            <p className="insurance-tc__subtext">Life insurance plans primarily cover the risk of untimely demise of the insured. In case of an unforeseen demise of the insured, a death benefit is paid, which helps the family face the financial loss.</p>
                        </div>
                        <div className="insurancePlanCards__exploreMore">
                            <Link to="/insurance-plan" onClick={scrollToTop}>Explore More</Link>
                            {/* <a hExplore More</a> */}
                        </div>

                    </div>
                </div>
                <div className='insurancePlanCards' id="insurance-plans-link">
                    <div className='content'>
                        <div className='insurancePlanCard_content'>
                            <div className="insurance-tc">
                                <h2 className="insurance-tc__subtitle">Types of Insurance Plans</h2>
                                <h3>Life Insurance</h3>
                                <p className="insurance-tc__subtext">Life insurance plans primarily cover the risk of untimely demise of the insured. In case of an unforeseen demise of the insured, a death benefit is paid, which helps the family face the financial loss.</p>
                            </div>
                            <div className="insurancePlanCards__exploreMore">
                                <Link to="/insurance-plan">Explore More</Link>
                                {/* <a hExplore More</a> */}
                            </div>

                            <div className="insurancePlanCards__content__container">
                                <a className="insurancePlanCards__content__container__item icon-7 scroll-animation" href="">
                                    <img src={image1} alt="1-Year Term Life Insurance" />

                                    <h4>1-Year Term Life Insurance</h4>
                                    <div>
                                        <p>Stay covered for an entire year with a one-time payment</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-8 scroll-animation" href="">
                                    <img src={image2} alt="Personal accident" />
                                    <h4>Accident Insurance - Life</h4>
                                    <div>
                                        <p>Get coverage for death and permanent disability</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-9" herf="">
                                    <img src={image3} alt="Term Life Insurance" />
                                    <h4>Term Life Insurance</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-10" href="">
                                    <img src={image4} alt="Guaranteed Returns Insurance" />
                                    <h4>Guaranteed Returns</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='insurancePlanCards' id="insurance-plans-link">
                    <div className='content'>
                        <div className='insurancePlanCard_content'>
                            <div className="insurance-tc">
                               
                                <h3>Life Insurance</h3>
                                <p className="insurance-tc__subtext">Life insurance plans primarily cover the risk of untimely demise of the insured. In case of an unforeseen demise of the insured, a death benefit is paid, which helps the family face the financial loss.</p>
                            </div>
                            <div className="insurancePlanCards__exploreMore">
                                <Link to="/insurance-plan">Explore More</Link>
                                {/* <a hExplore More</a> */}
                            </div>

                            <div className="insurancePlanCards__content__container">
                                <a className="insurancePlanCards__content__container__item icon-7 scroll-animation" href="">
                                    <img src={image1} alt="1-Year Term Life Insurance" />

                                    <h4>1-Year Term Life Insurance</h4>
                                    <div>
                                        <p>Stay covered for an entire year with a one-time payment</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-8 scroll-animation" href="">
                                    <img src={image2} alt="Personal accident" />
                                    <h4>Accident Insurance - Life</h4>
                                    <div>
                                        <p>Get coverage for death and permanent disability</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-9" herf="">
                                    <img src={image3} alt="Term Life Insurance" />
                                    <h4>Term Life Insurance</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-10" href="">
                                    <img src={image4} alt="Guaranteed Returns Insurance" />
                                    <h4>Guaranteed Returns</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='insurancePlanCards' id="insurance-plans-link">
                    <div className='content'>
                        <div className='insurancePlanCard_content'>
                            <div className="insurance-tc">
                              
                                <h3>Life Insurance</h3>
                                <p className="insurance-tc__subtext">Life insurance plans primarily cover the risk of untimely demise of the insured. In case of an unforeseen demise of the insured, a death benefit is paid, which helps the family face the financial loss.</p>
                            </div>
                            <div className="insurancePlanCards__exploreMore">
                                <Link to="/insurance-plan">Explore More</Link>
                                {/* <a hExplore More</a> */}
                            </div>

                            <div className="insurancePlanCards__content__container">
                                <a className="insurancePlanCards__content__container__item icon-7 scroll-animation" href="">
                                    <img src={image1} alt="1-Year Term Life Insurance" />

                                    <h4>1-Year Term Life Insurance</h4>
                                    <div>
                                        <p>Stay covered for an entire year with a one-time payment</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-8 scroll-animation" href="">
                                    <img src={image2} alt="Personal accident" />
                                    <h4>Accident Insurance - Life</h4>
                                    <div>
                                        <p>Get coverage for death and permanent disability</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-9" herf="">
                                    <img src={image3} alt="Term Life Insurance" />
                                    <h4>Term Life Insurance</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-10" href="">
                                    <img src={image4} alt="Guaranteed Returns Insurance" />
                                    <h4>Guaranteed Returns</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='insurancePlanCards' id="insurance-plans-link">
                    <div className='content'>
                        <div className='insurancePlanCard_content'>
                            <div className="insurance-tc">
                               
                                <h3>Life Insurance</h3>
                                <p className="insurance-tc__subtext">Life insurance plans primarily cover the risk of untimely demise of the insured. In case of an unforeseen demise of the insured, a death benefit is paid, which helps the family face the financial loss.</p>
                            </div>
                            <div className="insurancePlanCards__exploreMore">
                                <Link to="/insurance-plan">Explore More</Link>
                                {/* <a hExplore More</a> */}
                            </div>

                            <div className="insurancePlanCards__content__container">
                                <a className="insurancePlanCards__content__container__item icon-7 scroll-animation" href="">
                                    <img src={image1} alt="1-Year Term Life Insurance" />

                                    <h4>1-Year Term Life Insurance</h4>
                                    <div>
                                        <p>Stay covered for an entire year with a one-time payment</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-8 scroll-animation" href="">
                                    <img src={image2} alt="Personal accident" />
                                    <h4>Accident Insurance - Life</h4>
                                    <div>
                                        <p>Get coverage for death and permanent disability</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-9" herf="">
                                    <img src={image3} alt="Term Life Insurance" />
                                    <h4>Term Life Insurance</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                                <a className="insurancePlanCards__content__container__item icon-10" href="">
                                    <img src={image4} alt="Guaranteed Returns Insurance" />
                                    <h4>Guaranteed Returns</h4>
                                    <div>
                                        <p>Secure your family’s future against unforeseen circumstances</p>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNzg1NEY3IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjggMmwxMCA5LjVMMjggMjEiLz48cGF0aCBkPSJNMi4wMzEgMTFoMzQuOTM3Ii8+PC9nPjwvc3ZnPg==" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>



            </div>



        </>
    )
}

export default Part1
