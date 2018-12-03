import React, { Component } from "react";
import Navbar from '../Common/Navbar';
import { dummy } from "../../action/dummy";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";
import Countries  from 'react-select-country';
import { YearPicker, MonthPicker } from 'react-dropdown-date';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Link, withRouter } from "react-router-dom";


class FillApplication extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName:"",
            middleName:"",
            lastName:"",
            country:"",
            region:"",
            fromYear:null,
            fromMonth:null,
            toMonth:null,
            toYear:null,
            EduFromYear:null,
            EdutoYear:null,
            gender:"",
            sponsorship:"",
            veteran:"",
            disability:""
            
        }
        this.firstNameHandler=this.firstNameHandler.bind(this);
        this.middleNameHandler=this.middleNameHandler.bind(this);
        this.lastNameHandler=this.lastNameHandler.bind(this);

    }
    
   

   

    selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }

      onSubmit(values) {
        console.log("Onsubmit values of fill application",values);
        //this.props.signIn(values);
        const data={
            values,
            firstName:this.state.firstName,
            middleName:this.state.middleName,
            lastName:this.state.lastName,
            fromMonth:this.state.fromMonth,
            toMonth:this.state.toMonth,
            fromYear:this.state.fromYear,
            toYear:this.state.toYear,
            EduFromYear:this.state.EduFromYear,
            EdutoYear:this.state.EdutoYear,
            gender:this.state.gender,
            sponsorship:this.state.sponsorship,
            veteran:this.state.veteran,
            disability:this.state.disability
            


        }
        console.log("Onsubmit values of dataaaaaaaa fill application",data);

        
        
      }

      firstNameHandler=(e)=>{
        this.setState({
            firstName:e.target.value
        })
    }

    middleNameHandler=(e)=>{
        this.setState({
            middleName:e.target.value
        })
    }

    lastNameHandler=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }

      genderChangeHandler=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }

    sponsorshipChangeHandler=(e)=>{
        this.setState({
            sponsorship:e.target.value
        })
    }

    veteranChangeHandler=(e)=>{
        this.setState({
            veteran:e.target.value
        })
    }

    disabilityChangeHandler=(e)=>{
        this.setState({
            disability:e.target.value
        })
    }

    render(){
        const { country, region } = this.state;
        const { handleSubmit } = this.props;
        return(
            <div>
                <Navbar/>
                <div class="row" style={{"marginBottom":"100px"}}></div>
                <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-2"></div>
                <div className="col-md-8" style={{width:"100%",marginLeft:"30px"}}>
                <h2 style={{"marginLeft":"20px",textAlign:"center"}}>Please fill the information as asked for in the application.</h2>
                <p style={{"marginLeft":"20px",textAlign:"center"}}>NOTE: The information would be monitored and kept into database for further screening. Please be assured to have authentic information</p>
                <div className="row" style={{height:"50px","marginTop":"50px"}}>
                <h2 style={{marginLeft:"20px"}}>Company Name :</h2>
                
                </div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>   
            <div style={{border:"solid 1px lightgray","height":"800px"}}>
            <h1 style={{marginTop:"20px",textAlign:"center"}}>Personal Details</h1>
                <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>

                
                {/* <Field
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    label="First Name *"
                    name="firstName"
                    type="text"
                    
                    component={this.renderField}
                    
                    /> */}
                    <div class="form-group form-control-lg ">
                    <label>First Name *</label>
                    <input className="form-control form-control-lg border border border-dark" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.firstNameHandler} />
                    </div>
                </div>

                
                
                 <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                {/* <Field
                    className="form-control form-control-lg"
                    placeholder="Middle Name"
                    label="Middle Name "
                    name="middleName"
                    type="text"
                    component={this.renderField}
                    
                    /> */}
                    <div class="form-group form-control-lg ">
                    <label>Middle Name </label>
                    <input className="form-control form-control-lg border border border-dark" type="text" placeholder="Middle Name" name="middleName" value={this.state.middleName} onChange={this.middleNameHandler} />
                    </div>

                </div>

                 <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                {/* <Field
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    label="Last Name *"
                    name="lastName"
                    type="text"
                    component={this.renderField}
                    
                    /> */}
                    <div class="form-group form-control-lg ">
                    <label>Last Name *</label>
                    <input className="form-control form-control-lg border border border-dark" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.lastNameHandler} />
                    </div>

                </div>

                 <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Address Line 1"
                    name="address1"
                    type="text"
                    component={this.renderField}
                    
                    />
                </div>

                 <div className="ml-5 mr-5 mt-5" style={{"width":"50%","marginBottom":"50px"}}>
                <Field
                    className="form-control form-control-lg"
                    placeholder=""
                    label="Address Line 2"
                    name="address2"
                    type="text"
                    component={this.renderField}
                    
                    />
                </div>

                 <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"48%"}}>
             
             <CountryDropdown
                className="form-control form-control-lg border border border-dark"
                name="country"
                value={country}
                style={{"marginLeft":"10px"}}
                onChange={(val) => this.selectCountry(val)} />
                </div>

                <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"48%"}}>
                    <RegionDropdown
                    className="form-control form-control-lg border border border-dark"
                    blankOptionLabel="Select Region"
                    country={country}
                    style={{"marginLeft":"10px"}}
                    value={region}
                    onChange={(val) => this.selectRegion(val)} />
                </div>

            

            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
            <Field
                className="form-control form-control-lg"
                placeholder=""
                label="Zip/Postal Code"
                name="zipcode"
                type="text"
                component={this.renderField}
                
                />
            </div>

            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
            <Field
                className="form-control form-control-lg"
                placeholder="(123)-456-7890"
                label="Primary Phone *"
                name="primaryPhone"
                type="text"
                component={this.renderField}
                
                />
            </div>

            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
            <Field
                className="form-control form-control-lg"
                placeholder="(123)-456-7890"
                label="Work Phone"
                name="workPhone"
                type="text"
                component={this.renderField}
                
                />
            </div>

            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
            <Field
                className="form-control form-control-lg"
                placeholder="abc@xyz.com"
                label="Email *"
                name="email"
                type="text"
                component={this.renderField}
                
                />
                </div> 
            </div>
            <div style={{border:"solid 1px lightgray","height":"550px"}}>
            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                        <h1 class="ml-5 text-center" style={{marginTop:"20px",marginLeft:"200px",width:"100%"}}>Add Experience</h1>
                        <div class="ml-5 mr-5 mt-5 pb-3">
                                <Field
                                    className="form-control form-control-lg"
                                    placeholder="Ex:Manager"
                                    label="Title*"
                                    name="experienceTitle"
                                    type="text"
                                    component={this.renderField}
                                />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Microsoft"
                                label="Company*"
                                name="experienceCompany"
                                type="text"
                                component={this.renderField}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:London, United Kingdom"
                                label="Location"
                                name="experienceLocation"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"50%"}}>
                            From
                            <MonthPicker 
                                className="form-control form-control-lg border border border-dark"
                                defaultValue={"Month"}
                                monthFormat="long"
                                onChange={(month)=>{this.setState({fromMonth:month});
                                console.log("Month onchange",month)}}
                                
                            />
                            
                            <YearPicker 
                                className="form-control form-control-lg my-modal"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                value={this.state.year}
                                onChange={(year)=>{this.setState({fromYear:year});
                            console.log("Year onchange",year)}}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            To
                            <MonthPicker 
                                className="form-control form-control-lg"
                                defaultValue={"Month"}
                                monthFormat="long"
                                onChange={(month)=>{this.setState({toMonth:month});
                                console.log("Month onchange",month)}}
                                
                            />
                           
                            <YearPicker 
                                className="form-control form-control-lg my-modal"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                value={this.state.year}
                                onChange={(year)=>{this.setState({toYear:year});
                            console.log("Year onchange",year)}}
                            />
                            </div>
     


            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Description"
                                name="experienceDescription"
                                
                                component={this.renderField}
                            />
</div>
                            
            </div>  

            </div>
<div style={{border:"solid 1px lightgray",height:"700px"}}>
            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                        <h2 style={{marginTop:"20px",textAlign:"center"}}>Add Education</h2>
                        <div class="ml-5 mr-5 mt-5 pb-3">
                                <Field
                                    className="form-control form-control-lg"
                                    placeholder="Ex:Boston University"
                                    label="School *"
                                    name="educationSchool"
                                    type="text"
                                    component={this.renderField}
                                />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Bachelor's"
                                label="Degree"
                                name="educationDegree"
                                type="text"
                                component={this.renderField}
                            />
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder="Ex:Business"
                                label="Field of Study"
                                name="educationFieldofStudy"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>

                            <div class="ml-5 mr-5 mt-5 pb-3">
                            <Field
                                className="form-control form-control-lg"
                                placeholder=""
                                label="Grade"
                                name="educationGrade"
                                type="text"
                                component={this.renderField}
                            />

                            
                            </div>


                            



                            
                            <div style={{'marginTop':'20px'}} >
                                From
                            <YearPicker 
                                className="form-control form-control-lg my-modal"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                value={this.state.year}
                                onChange={(year)=>{this.setState({EduFromYear:year});
                                console.log("Year onchange",year)}}


                                
                            />

                             To
                            <YearPicker
                                className="form-control form-control-lg"
                                defaultValue={'Year'}
                                start={1959}
                                end={2018}
                                reverse
                                required={true}
                                value={this.state.year}
                                onChange={(year)=>{this.setState({EdutoYear:year});
                                console.log("Year onchange",year)}}

                                
                            />
                            </div>

                            
                            <div style={{'marginTop':'20px'}}>
                               
                            </div>
     


</div>
            

           </div>

            
            <div className="ml-5 mr-5 mt-5" style={{"width":"30%","marginBottom":"50px"}}>
           
           <Field
                className="form-control form-control-lg"
                placeholder="Attach Resume"
                label="Add Resume"
                name="resume"
                type="file"
                component={this.renderField}
                
                />
           </div>
            


            <div style={{border:"solid 1px lightgray",height:"1500px"}}>
            <div className="ml-5 mr-5 mt-5" style={{"width":"50%"}}>
                        <h2 style={{marginTop:"20px",textAlign:"center"}}>Additional Details</h2>

                            <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"100%"}}>
                            <h4>All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status. 
                            We are also committed to compliance with all fair employment practices regarding citizenship and immigration status. 
                             </h4></div>

                            
                            
                           
                            
                            <select name="Gender" onChange={this.genderChangeHandler} value={this.state.gender} style={{'width':'100%'}}>
                                            <option value="" disabled selected hidden>Gender</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Others</option>

                                        </select>
                            



                            <div style={{'marginTop':'20px'}}>
                               
                            </div>
     


                </div>

                <div >
                <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"80%"}}>
                <h4>Do you now or will you in the future require sponsorship of a visa for employment authorization in the United States (e.g., are you currently in the U.S. on an H-1B, F-1 OPT/CPT, TN, 
                any other employer-specific non-immigrant status, or have an EAD that is tied to a nonimmigrant visa (e.g., for you or your spouse) and cannot be renewed beyond a specific date?)?
                </h4></div>

                    <select name="Select" onChange={this.sponsorshipChangeHandler} value={this.state.sponsorship} style={{'width':'40%'}}>
                                            <option value="" disabled selected hidden>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            

                    </select>

                

                <div>
                <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"80%"}}>
                <h4>If you believe you belong to any of the categories of protected veterans listed below,
                please indicate by making the appropriate selection. As a government contractor
                subject to Vietnam Era Veterans Readjustment Assistance Act (VEVRAA), we request this
                information in order to measure the effectiveness of the outreach and positive
                recruitment efforts we undertake pursuant to VEVRAA. Classification of protected
                categories is as follows:
                A "disabled veteran" is one of the following: a veteran of the U.S. military, ground,
                naval or air service who is entitled to compensation (or who but for the receipt of
                military retired pay would be entitled to compensation) under laws administered by the
                Secretary of Veterans Affairs; or a person who was discharged or released from active
                duty because of a service-connected disability.
                A "recently separated veteran" means any veteran during the three-year period beginning
                on the date of such veteran's discharge or release from active duty in the U.S.
                military, ground, naval, or air service.
                An "active duty wartime or campaign badge veteran" means a veteran who served on active
                duty in the U.S. military, ground, naval or air service during a war, or in a campaign
                or expedition for which a campaign badge has been authorized under the laws
                administered by the Department of Defense.
                An "Armed forces service medal veteran" means a veteran who, while serving on active
                duty in the U.S. military, ground, naval or air service, participated in a United
                States military operation for which an Armed Forces service medal was awarded pursuant
                to Executive Order 12985.</h4>
                </div>
                    <select name="Veteran" onChange={this.veteranChangeHandler} value={this.state.veteran} style={{'width':'40%'}}>
                                            <option value="" disabled selected hidden>Select</option>
                                            <option value="I am not a protected veteran">I am not a protected veteran</option>
                                            <option value="I identify as one or more of the classifications of a protected veteran">I identify as one or more of the classifications of a protected veteran</option>
                                            <option value="I don't wish to answer">I don't wish to answer</option>
                                            
                    </select>
                </div>
                
            
            <div>
            <div class="ml-5 mr-5 mt-5 pb-3" style={{"width":"80%"}}>
            <h4>Voluntary Self-Identification of Disability
            Why are you being asked to complete this form?
            Because we do business with the government, we must reach out to, hire, and provide
            equal opportunity to qualified people with disabilities1. To help us
            measure how well we are doing, we are asking you to tell us if you have a disability or
            if you ever had a disability. Completing this form is voluntary, but we hope that you
            will choose to fill it out. If you are applying for a job, any answer you give will be
            kept private and will not be used against you in any way.
            If you already work for us, your answer will not be used against you in any way.
            Because a person may become disabled at any time, we are required to ask all of our
            employees to update their information every five years. You may voluntarily
            self-identify as having a disability on this form without fear of any punishment
            because you did not identify as having a disability earlier.
            How do I know if I have a disability?
            You are considered to have a disability if you have a physical or mental impairment or
            medical condition that substantially limits a major life activity, or if you have a
            history or record of such an impairment or medical condition.
            Disabilities include, but are not limited to:</h4>
<ul>
            <li><h4>Blindness</h4></li>
            <li><h4>Deafness</h4></li>
            <li><h4>Cancer</h4></li>
            <li><h4>Diabetes</h4></li>
            <li><h4>Epilepsy</h4></li>
            <li><h4>Autism</h4></li>
            <li><h4>Cerebral palsy</h4></li>
            <li><h4>HIV/AIDS</h4></li>
            <li><h4>Schizophrenia</h4></li>
            <li><h4>Muscular dystrophy</h4></li>
            <li><h4>Bipolar disorder</h4></li>
            <li><h4>Major depression</h4></li>
            <li><h4>Multiple sclerosis (MS)</h4></li>
            <li><h4>Missing limbs or partially missing limbs</h4></li>
            <li><h4>Post-traumatic stress disorder (PTSD)</h4></li>
            <li><h4>Obsessive compulsive disorder</h4></li>
            <li><h4>Impairments requiring the use of a wheelchair</h4></li>
            <li><h4>Intellectual disability (previously called mental retardation)</h4></li>
</ul>
        <select name="Disability" onChange={this.disabilityChangeHandler} value={this.state.disability} style={{'width':'40%'}}>
                                            <option value="" disabled selected hidden>Select</option>
                                            <option value="Yes">Yes, I have a disability (or previously had a disability)</option>
                                            <option value="No">No, I don't have a disability</option>
                                            <option value="I don't wish to answer">I don't wish to answer</option>
                                            

                    </select>

                </div>
                </div>
                </div>

           </div>
           



           <div class="ml-5 mr-5" style={{"width":"20%","marginBottom":"100px","marginTop":"20px"}}>
                            <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    id="form-submit"
                                    tabindex="4"
                                    component={this.renderField}
                                >
                                    Submit
                                </button>
                    </div>
                    </form>
        </div>
        <div className="col-md-2"></div>    
        </div>
        </div>
        )
    }

    renderField(field) {
        //console.log("Field Details : " + JSON.stringify(field));
        const {
          meta: { touched, error },
          type,
          placeholder,
          value
        } = field;
        const className = `form-group form-control-lg ${
          touched && error ? "has-danger" : ""
        }`;
        //console.log("className : " + className);
        return (
          <div class="form-group form-control-lg has-danger">
            <label>{field.label}</label>
            <input
              class="form-control form-control-lg border border border-dark"
              type={type}
              placeholder={placeholder}
              value={value}
              {...field.input}
            />
            <div class={{ className }}>{touched ? error : ""}</div>
           
          </div>
        );
      }  
}

export default reduxForm({
    
    form: "FillApplicationForm"
  })(
    connect(
      null,
      { dummy }
    )(withRouter(FillApplication))
  );