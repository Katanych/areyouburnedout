import React from 'react';
import { useSelector, useDispatch } from '../../store';
import { root } from '../../slices';
import FormItem, { Type } from '../FormItem';
import Button from '../../components/Button';
import Prediction from '../../components/Prediction';
import Error from '../../components/Error';

import './Form.scss';

const Form: React.FC = () => {
  const value = useSelector((state) => state.root.value);
  const prediction = useSelector((state) => state.root.prediction);
  const fetching = useSelector((state) => state.root.fetching);
  const error = useSelector((state) => state.root.error);

  const dispatch = useDispatch();

  const setValue = (valueToMerge) => {
    dispatch(root.setValue({ ...value, ...valueToMerge }));
  };

  const onReset = () => {
    if (confirm('Are you sure you want to reset? Unsaved data will be lost.')) {
      dispatch(root.resetValue());
    }
  };

  const onSubmit = () => {
    dispatch(root.postParams(value));
  };

  const items = {
    age: {
      type: Type.Number,
      id: 'age',
      title: 'Your age:',
      min: 18,
      max: 99
    },

    businessTravel: {
      type: Type.Select,
      id: 'businessTravel',
      title: 'Frequency business travels:',
      options: [
        { id: 'Non-Travel', title: 'Never' },
        { id: 'Travel_Rarely', title: 'Rarely' },
        { id: 'Travel Frequently', title: 'Frequently' }
      ]
    },

    hourlyRate: {
      type: Type.Number,
      id: 'hourlyRate',
      title: 'Hourly rate, $:',
      min: 0,
      step: 10
    },

    dailyRate: {
      type: Type.Number,
      id: 'dailyRate',
      title: 'Daily rate, $:',
      min: 0,
      step: 100
    },

    monthlyRate: {
      type: Type.Number,
      id: 'monthlyRate',
      title: 'Monthly rate, $:',
      min: 0,
      step: 1000
    },

    monthlyIncome: {
      type: Type.Number,
      id: 'monthlyIncome',
      title: 'Monthly income, $:',
      min: 0,
      step: 1000
    },

    department: {
      type: Type.Select,
      id: 'department',
      title: 'Department:',
      options: [
        { id: 'Human Resources', title: 'Human Resources' },
        { id: 'Research & Development', title: 'Research & Development' },
        { id: 'Sales', title: 'Sales' }
      ]
    },

    distanceFromHome: {
      type: Type.Number,
      id: 'distanceFromHome',
      title: 'Distance from home to workplace, km:',
      min: 0
    },

    education: {
      type: Type.Select,
      id: 'education',
      title: 'Education (including ongoing):',
      options: [
        { id: 2, title: 'School' },
        { id: 3, title: 'Bachelor' },
        { id: 4, title: 'Master' },
        { id: 5, title: 'Doctor' }
      ]
    },

    educationField: {
      type: Type.Select,
      id: 'educationField',
      title: 'Education field:',
      options: [
        { id: 'Human Resources', title: 'Human Resources' },
        { id: 'Life Sciences', title: 'Life Sciences' },
        { id: 'Marketing', title: 'Marketing' },
        { id: 'Medical', title: 'Medical' },
        { id: 'Technical Degree', title: 'Technical Degree' },
        { id: 'Other', title: 'Other' },
      ]
    },

    environmentSatisfaction: {
      type: Type.Select,
      id: 'environmentSatisfaction',
      title: 'Satisfaction with workplace (lighting, air conditioning, etc.):',
      options: [
        { id: 1, title: 'Low' },
        { id: 2, title: 'Medium' },
        { id: 3, title: 'High' },
        { id: 4, title: 'Very High' }
      ]
    },

    gender: {
      type: Type.Select,
      id: 'gender',
      title: 'Your gender:',
      options: [
        { id: 'Male', title: 'Male' },
        { id: 'Female', title: 'Female' }
      ]
    },

    jobInvolvement: {
      type: Type.Select,
      id: 'jobInvolvement',
      title: 'Level of job involvement:',
      options: [
        { id: 1, title: 'Low' },
        { id: 2, title: 'Medium' },
        { id: 3, title: 'High' },
        { id: 4, title: 'Very High' }
      ]
    },

    jobLevel: {
      type: Type.Select,
      id: 'jobLevel',
      title: 'Level of job:',
      options: [
        { id: 1, title: 'Staff' },
        { id: 2, title: 'Senior Staff' },
        { id: 3, title: 'First Level Management' },
        { id: 4, title: 'Middle Management' },
        { id: 5, title: 'Senior management' }
      ]
    },

    jobRole: {
      type: Type.Select,
      id: 'jobRole',
      title: 'Job role:',
      options: [
        { id: 'Healthcare Representative', title: 'Healthcare Representative' },
        { id: 'Human Resources', title: 'Human Resources' },
        { id: 'Laboratory Technician', title: 'Laboratory Technician' },
        { id: 'Manager', title: 'Manager' },
        { id: 'Manufacturing Director', title: 'Manufacturing Director' },
        { id: 'Research Director', title: 'Research Director' },
        { id: 'Research Scientist', title: 'Research Scientist' },
        { id: 'Sales Executive', title: 'Sales Executive' },
        { id: 'Sales Representative', title: 'Sales Representative' },
      ]
    },

    jobSatisfaction: {
      type: Type.Select,
      id: 'jobSatisfaction',
      title: 'Satisfaction with job:',
      options: [
        { id: 1, title: 'Low' },
        { id: 2, title: 'Medium' },
        { id: 3, title: 'High' },
        { id: 4, title: 'Very High' }
      ]
    },

    maritalStatus: {
      type: Type.Select,
      id: 'maritalStatus',
      title: 'Marital status:',
      options: [
        { id: 'Single', title: 'Single' },
        { id: 'Married', title: 'Married' },
        { id: 'Divorced', title: 'Divorced' }
      ]
    },

    numCompaniesWorked: {
      type: Type.Number,
      id: 'numCompaniesWorked',
      title: 'Number of companies you have worked for before current company:',
      min: 0
    },

    overTime: {
      type: Type.Select,
      id: 'overTime',
      title: 'Overtime work at least once a week:',
      options: [
        { id: 'No', title: 'No' },
        { id: 'Yes', title: 'Yes' }
      ]
    },

    percentSalaryHike: {
      type: Type.Number,
      id: 'percentSalaryHike',
      title: 'Latest salary increase at current company, %:',
      min: 0,
      step: 5
    },

    performanceRating: {
      type: Type.Select,
      id: 'performanceRating',
      title: 'Your performance rating:',
      options: [
        { id: 1, title: 'Low' },
        { id: 2, title: 'Good' },
        { id: 3, title: 'Excellent' },
        { id: 4, title: 'Outstanding' }
      ]
    },

    relationshipSatisfaction: {
      type: Type.Select,
      id: 'relationshipSatisfaction',
      title: 'Satisfaction with colleagues and work relationships:',
      options: [
        { id: 1, title: 'Low' },
        { id: 2, title: 'Medium' },
        { id: 3, title: 'High' },
        { id: 4, title: 'Very High' }
      ]
    },

    stockOptionLevel: {
      type: Type.Number,
      id: 'stockOptionLevel',
      title: 'Level of stock options:',
      min: 0,
      max: 3
    },

    totalWorkingYears: {
      type: Type.Number,
      id: 'totalWorkingYears',
      title: 'Total years of working experience:',
      min: 0
    },

    trainingTimesLastYear: {
      type: Type.Number,
      id: 'trainingTimesLastYear',
      title: 'Number of advanced education courses completed last year (Coursera, Udemy, etc.):',
      min: 0,
    },

    workLifeBalance: {
      type: Type.Select,
      id: 'workLifeBalance',
      title: 'Satisfaction with work-life balance:',
      options: [
        { id: 1, title: 'Bad' },
        { id: 2, title: 'Good' },
        { id: 3, title: 'Better' },
        { id: 4, title: 'Best' }
      ]
    },

    yearsAtCompany: {
      type: Type.Number,
      id: 'yearsAtCompany',
      title: 'Years spent at your current company:',
      min: 0,
    },

    yearsInCurrentRole: {
      type: Type.Number,
      id: 'yearsInCurrentRole',
      title: 'Years in your current role:',
      min: 0
    },

    yearsSinceLastPromotion: {
      type: Type.Number,
      id: 'yearsSinceLastPromotion',
      title: 'Years since last promotion:',
      min: 0,
      onChange: (valueToMerge) => {
        setValue({
          yearsInCurrentRole: valueToMerge.yearsSinceLastPromotion,
          yearsSinceLastPromotion: valueToMerge.yearsSinceLastPromotion
        });
      }
    },

    yearsWithCurrManager: {
      type: Type.Number,
      id: 'yearsWithCurrManager',
      title: 'Years with your current manager:',
      min: 0,
    }
  };

  const groups = [
    {
      id: 'general',
      title: 'General Info',
      items: [items.age, items.gender, items.maritalStatus]
    },
    {
      id: 'education',
      title: 'Education',
      items: [items.education, items.educationField]
    },
    {
      id: 'experience',
      title: 'Work Experience',
      items: [items.totalWorkingYears, items.numCompaniesWorked]
    },
    {
      id: 'job',
      title: 'Current Job',
      items: [
        items.jobLevel,
        items.yearsAtCompany,
        items.yearsWithCurrManager,
        items.yearsSinceLastPromotion,
        items.businessTravel,
        items.jobSatisfaction
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      items: [items.jobInvolvement, items.overTime, items.performanceRating]
    },
    {
      id: 'environment',
      title: 'Work Environment',
      items: [items.environmentSatisfaction, items.relationshipSatisfaction]
    },
    {
      id: 'balance',
      title: 'Work Life Balance',
      items: [items.distanceFromHome, items.workLifeBalance]
    },
    {
      id: 'income',
      title: 'Income',
      items: [items.monthlyIncome, items.percentSalaryHike]
    },
  ];

  return (
    <>
      <h2 className="form__title">
        Are&nbsp;You Burning&nbsp;Out, Bro?
        <br />
        <span className="form__title-secondary">Learn&nbsp;It With&nbsp;AI&nbsp;&gt;&gt;</span>
      </h2>

      <form className="form">
        {groups.map((group) => (
          <div className="form__group" key={group.id}>
            <h4 className="form__group-title">{group.title}</h4>

            {group.items.map((item) => (
              <FormItem
                key={item.id}
                {...item}
                value={value[item.id]}
                // @ts-ignore
                onChange={'onChange' in item ? item.onChange : setValue}
                disabled={fetching}
              />
            ))}
          </div>
        ))}
      </form>

      <div className="form__actions">
        <Button primary onClick={onSubmit} title="Ask AI" disabled={fetching}>
          &gt;&gt; Ask AI &lt;&lt;
        </Button>

        <Button onClick={onReset} title="Reset" disabled={fetching}>
          Reset
        </Button>
      </div>

      <div className="form__result">
        {prediction && <Prediction value={prediction} />}

        {error && <Error />}
      </div>
    </>
  );
};

export default Form;
