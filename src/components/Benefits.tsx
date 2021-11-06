import React, { FC } from 'react'
import styled from 'styled-components'
import Section from './Section'
import KeylineGrid, { KeylineGridItem } from './KeylineGrid'
import CarIcon from '../assets/svg/icon-car.svg'
import BikeIcon from '../assets/svg/icon-bike-to-work.svg'
import AnnualBonusIcon from '../assets/svg/icon-annual-bonus.svg'
import CommissionIcon from '../assets/svg/icon-commission.svg'
import SalesBonusIcon from '../assets/svg/icon-sales-bonus.svg'
import MedicalIcon from '../assets/svg/icon-medical-ins.svg'
import EmployeeIcon from '../assets/svg/icon-employee-assistance.svg'
import DeathIcon from '../assets/svg/icon-death.svg'
import AcademyIcon from '../assets/svg/icon-academy.svg'
import PensionIcon from '../assets/svg/icon-pension.svg'
import WorkingIcon from '../assets/svg/icon-hybrid-working.svg'
import HealthIcon from '../assets/svg/icon-healthshield.svg'
import { HeadingMedium } from '../assets/styles/Typography'

interface BenefitItemProps {
  icon: React.ReactNode
  title: string
  text: string
}

interface BenefitProps {
  benefits: BenefitItemProps[]
}

export const benefitsData: BenefitItemProps[] = [
  {
    icon: <CarIcon />,
    title: 'Car Allowance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <BikeIcon />,
    title: 'Bike to work scheme',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <AnnualBonusIcon />,
    title: 'Quarterly and annual bonus',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <CommissionIcon />,
    title: 'Commission',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <SalesBonusIcon />,
    title: 'Sales bonus',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <MedicalIcon />,
    title: 'Medical insurance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <EmployeeIcon />,
    title: 'Employee Assistance Programme',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <DeathIcon />,
    title: 'Death in service',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <AcademyIcon />,
    title: 'Stonebridge Academy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <PensionIcon />,
    title: 'Pension contribution',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <WorkingIcon />,
    title: 'Hybrid working',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
  {
    icon: <HealthIcon />,
    title: 'Healthshield',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie netus diam fames egestas quam cras eu volutpat.',
  },
]

const BenefitItemStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0 4rem;
  @media screen and (min-width: 768px) {
    padding: 0;
    display: grid;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      div:last-child {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`

const BenefitTitle = styled.div`
  padding: 0 2rem;
  h3 {
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
    ${HeadingMedium}
  }
  svg {
    height: 40px;
    width: auto;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    grid-area: 1 / 1 / 1 / 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 7vw 6vw;
  }
  @media screen and (min-width: 1024px) {
    padding: 4vw 2vw;
  }
`
const Overlay = styled.div`
  position: relative;
  p {
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    transform: translateY(99%);
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    align-items: center;
    padding: 6vw;
    transition: all 200ms ease;
    will-change: transform;
    background-color: var(--green-tint);
    color: var(--grey);
    opacity: 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 4vw 3vw;
  }
`
const BenefitItem: FC<BenefitItemProps> = ({ icon, title, text }) => {
  return (
    <BenefitItemStyle>
      <BenefitTitle>
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
      </BenefitTitle>
      <Overlay>
        <p>{text}</p>
      </Overlay>
    </BenefitItemStyle>
  )
}

const Benefits: FC<BenefitProps> = ({ benefits }) => {
  return (
    <Section>
      <KeylineGrid columns={3}>
        {benefits.map((benefit, i) => (
          <KeylineGridItem key={i}>
            <BenefitItem {...benefit} />
          </KeylineGridItem>
        ))}
      </KeylineGrid>
    </Section>
  )
}

export default Benefits
