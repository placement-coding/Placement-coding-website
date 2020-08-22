import React, { Component } from 'react'
import './Ide.css'
import axios from 'axios'
import secret from '../../secrets/secret'
import MonacoEditor from 'react-monaco-editor';
import {code} from './defaultCode'
import Ques from './Quessection';
import { Segment } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'
export default class Ide extends Component {
    state={
        code: code.cpp,
        result: 'Submit Code to See Result',
        lang: 'cpp'
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        alert("submit code")
        axios.post(`${secret.url}code/submit`,this.state)
            .then(res=>{
                console.log(res.data)
                const data = res.data
                if(data.err){
                    // Error in user code
                    this.setState({
                        result: data.error
                    })
                }else{
                    this.setState({
                        result: data.output
                    })
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }


    onCodeChangeHandler = (newCode, e) => {
        console.log(e)
        this.setState({
            code: newCode
        })
    }
    onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    editorDidMount = (e) => {
        console.log("EDITOR MOUNTED")
    }


    onLangSelectHandler = (e) => {
        const lang = e.target.value
        this.setState({
            lang,
            code: code[lang]
        })
    }


    render() {
        const options = {
            selectOnLineNumbers: true,
            renderIndentGuides: true,
            colorDecorators: true,
            cursorBlinking: "blink",
            autoClosingQuotes: "always",
            find: {
                autoFindInSelection: "always"
            },
            snippetSuggestions: "inline"
          };
        console.log(this.state)
        return (
            <>

                <div className="container">
                <Segment>
                    <Ques/>
                    </Segment>
                    <Segment>
                        <div className="col-12 mt-5">
                        <select id="lang" onChange={(e) => this.onLangSelectHandler(e)}>
                            <option value="cpp">C++</option>
                            <option value="c">C</option>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                        </select>
                             <p className="lead d-block my-0">Build your code here</p>
                             <div type="text" id="code">
                             <MonacoEditor
                                
                                height="700"
                                language={this.state.lang}
                                
                                value={this.state.code}
                                options={options}
                                onChange={this.onCodeChangeHandler}
                                editorDidMount={this.editorDidMount}
                            />
                             </div>
                        </div>
                        </Segment>
                    {/* <div className="row" > */}
                   
                        <Segment>
                   
                        {/* <div className="col-12 mt-3"> */}
                            <p className="lead d-block my-0">Provide Input</p>
                             <TextArea type="text" id="input" value={this.state.input} onChange={this.onInputChangeHandler}>
                             </TextArea>
                        {/* </div> */}
                        </Segment>
                    {/* </div> */}
                    
                    <Segment>
                    <button className="btn btn-success" onClick={this.onSubmitHandler}>Compile Code</button>
                    <button className="btn btn-success" onClick={this.onSubmitHandler}>Submit Code</button>
                    <div className="row">
                        <div className="col-12 my-5">
                             <TextArea type="text" id="result" value={this.state.result} disabled={true}>
                             </TextArea>
                        </div>
                    </div>
                    </Segment>
                </div>
               
            </>
        )
    }
}
