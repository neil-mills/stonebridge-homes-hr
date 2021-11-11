import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
import Heading from '../components/Heading'
import ArticleHeaderLinks from '../components/ArticleHeaderLinks'
import Button from '../components/Button'
import MetaList from '../components/MetaList'
import VacancyImg from '../assets/images/vacancy-image.jpg'
import { VerticalSpacingTop } from '../assets/styles/Utils'
import Select from '../components/Select'
import Form, { TextInput, FileInput, CheckboxInput } from '../components/Form'

const VacancySubSection = styled.div`
  padding: 3rem 0;
  border: 1px solid var(--keyline-grey);
  border-width: 1px 0 0;
  &:last-child {
    padding-bottom: 0;
  }
`
const ArticleTitle = styled.div`
  display: flex;
  padding: 3rem 0;
  margin-bottom: 3rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--keyline-grey);
  align-items: flex-start;
  button {
    display: none;
  }
  @media screen and (min-width: 768px) {
    button {
      display: block;
      margin: 0;
    }
  }
`
const StyledPicture = styled.picture`
  ${VerticalSpacingTop}
  display: block;
  width: 100%;
`
const meta = { 'Date added': '04 July 21', 'Closing date': '21 July 21' }
const VacancyPage: FC = (): JSX.Element => {
  return (
    <div>
      <Section as={'div'} marginTop={false}>
        <ArticleHeaderLinks backLink={'/vacancies'} />
        <ArticleTitle>
          <div>
            <Heading
              subHeading={'Full time'}
              heading={'Marketing manager'}
              marginBottom={false}
              headingLarger={true}
              level={1}
            />
            <MetaList meta={meta} />
          </div>
          <Button link={'/'} label={'Apply now'} />
        </ArticleTitle>
        <section>
          <h2>The role</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            sodales aliquam justo, ut molestie elit nisl risus. Dignissim turpis
            neque eget in ante pulvinar risus donec. Venenatis pulvinar dolor
            arcu arcu, lorem adipiscing sed. Volutpat, vitae fusce facilisi
            tempus donec alique
          </p>
          <StyledPicture>
            <source media="(min-width: 500px)" srcSet={VacancyImg} />
            <img src={VacancyImg} />
          </StyledPicture>
        </section>
      </Section>

      <Section tint={true}>
        <h2>RESPONSIBILITIES</h2>
        <VacancySubSection>
          <h3>Subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            sodales aliquam justo, ut molestie elit nisl risus. Dignissim turpis
            neque eget in ante pulvinar risus donec. Venenatis pulvinar dolor
            arcu arcu, lorem adipiscing sed. Volutpat, vitae fusce facilisi
            tempus donec alique
          </p>
        </VacancySubSection>
        <VacancySubSection>
          <h3>Subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            sodales aliquam justo, ut molestie elit nisl risus. Dignissim turpis
            neque eget in ante pulvinar risus donec. Venenatis pulvinar dolor
            arcu arcu, lorem adipiscing sed. Volutpat, vitae fusce facilisi
            tempus donec alique
          </p>
        </VacancySubSection>
      </Section>
      <Section>
        <h2>Experience</h2>
        <VacancySubSection>
          <h3>Subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            sodales aliquam justo, ut molestie elit nisl risus. Dignissim turpis
            neque eget in ante pulvinar risus donec. Venenatis pulvinar dolor
            arcu arcu, lorem adipiscing sed. Volutpat, vitae fusce facilisi
            tempus donec alique
          </p>
        </VacancySubSection>
      </Section>
      <Section tint={true}>
        <Form method={'post'} action={'/'}>
          <fieldset>
            <legend>Apply now</legend>
            <div>
              <label htmlFor={'title'}>Title</label>
              <Select />
            </div>
            <div>
              <label htmlFor={'firstName'}>First name</label>
              <TextInput
                type={'text'}
                id={'firstName'}
                name={'firstName'}
                value={''}
              />
            </div>
            <div>
              <label htmlFor={'lastName'}>Last name</label>
              <TextInput
                type={'text'}
                id={'lastName'}
                name={'lastName'}
                value={''}
              />
            </div>
            <div>
              <label htmlFor={'email'}>Email</label>
              <TextInput type={'text'} id={'email'} name={'email'} value={''} />
            </div>
            <div>
              <label htmlFor={'phone'}>Phone</label>
              <TextInput type={'text'} id={'phone'} name={'phone'} value={''} />
            </div>
            <div>
              <label htmlFor={'cv'}>CV</label>
              <FileInput id={'cv'} name={'cv'} value={''} />
            </div>
            <div>
              <CheckboxInput
                label={'I accept the terms and conditions'}
                name={'accept'}
                id={'accept'}
                checked={true}
                last={true}
              />
            </div>
          </fieldset>
          <Button label={'Send application'} link={'/'} />
        </Form>
      </Section>
    </div>
  )
}

export default VacancyPage
