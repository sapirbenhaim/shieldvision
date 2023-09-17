import React from 'react'
import CheckMark from '../../img/check_mark.png'
import WhiteCheckMark from '../../img/check-white.png';

const PlanContent = ({content, middlePlan}) => {
  return (
    <div className='PlanContent'>
        <img className='contentIcon' src={middlePlan ? WhiteCheckMark : CheckMark} alt="Checkmark"/>
        <p className='contentText'>{content}</p>
    </div>
  )
}

export default PlanContent