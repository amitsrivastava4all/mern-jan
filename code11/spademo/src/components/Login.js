import React from 'react';
import { validations } from '../utils/validation';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.defaultErrorValues = {
            useridError:'',
            passwordError:''
        };
        this.state = {
            isErrorFound:false,
            userid:'',

            errors:this.defaultErrorValues
        };
    }
    validateIt(){
        let userid = this.refs.uid.value;
        let pwd = this.refs.pwd.value;
        let isErrorFound = false;
        if(validations.isBlank(userid)){
            this.defaultErrorValues.useridError = 'UserName Cant Be Blank';
            isErrorFound = true;
        }
        else if(!validations.isCorrectLen(userid,3)){
            this.defaultErrorValues.useridError ='Min 3 Chars Required for Userid';
            isErrorFound = true;
        }
        if(validations.isBlank(pwd)){
            isErrorFound = true;
            this.defaultErrorValues.passwordError = 'Password Cant Be Blank';
        }
        if(isErrorFound){
            this.setState({userid:userid, errors:this.defaultErrorValues,isErrorFound:isErrorFound});
        }
        else{
            let defaultErrorValues = {
                useridError:'',
                passwordError:''
            };
            this.setState({userid:userid,errors:defaultErrorValues,isErrorFound: isErrorFound});
            // axios call (Ajax)
        }

    }
    render(){
        let jsx ;
        if(this.state.isErrorFound){
            jsx = ( <div className='alert-danger'>
            {this.state.errors.useridError}
                <br/>
            {this.state.errors.passwordError}
        </div>);
        }
        else{
            jsx = <></>;
        }
    return (
        <div>
            <h2 className='alert-info'>Login</h2>
            {jsx}
            <div className='form-group'>
                <label>Userid</label>
                <input ref="uid" className='form-control' type='text' placeholder='Type Userid Here'/>
    <span className='alert-danger'>{this.state.errors.useridError}</span>
                </div>
                <div className='form-group'>
                <label>Password</label>
                <input ref="pwd" className='form-control' type='password' placeholder='Type Password Here'/>
                <span className='alert-danger'>{this.state.errors.passwordError}</span>
                </div>
                <div className='form-group'>
                <button className='btn btn-primary' onClick={this.validateIt.bind(this)}>Validate It</button>

                </div>
        </div>
    );
    }

}