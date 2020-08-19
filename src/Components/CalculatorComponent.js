import React from 'react';
import axios from 'axios'
const CALCULATOR_API_URL = 'http://localhost:8080/api/form';

class CalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:0,
            networth: [],
            chequing: 0,
            savingsForTaxes: 0,
            savingsForFun: 0,
            savingsForTravel: 0,
            savingsForPersonalDevelopment: 0,
            investment1: 0,
            investment2: 0,
            investment3: 0,
            primaryHome: 0,
            secondaryHome: 0,
            other: 0,
            rainyDayFund: 0,
            cc1: 0,
            cc2: 0,
            m1: 0,
            m2: 0,
            loc: 0,
            investmentLoan: 0,
            studentLoan: 0,
            carLoan: 0,
        }
        this.handleInput = this.handleInput.bind(this);

    }

    componentDidMount() {
        /*let id = this.props.chequing;
        console.log(id);
       // const{comp_id} = this.props.match.params;
        axios.get("/api/form/" +id)
            .then((response) => {
                this.setState(
                    { networth: response.data });
        })*/
    }

    handleInput = event => {
        let nam = event.target.name;
        let val = event.target.value;
        let val2 = 0;
        var flag = true;

        if (nam === "chequing") {
            flag = true;
            val2 = this.state.chequing;
            //this.setState({nam:val});
        } else if (nam === "savingsForTaxes") {
            flag = true;
            val2 = this.state.savingsForTaxes;
            //this.setState({nam:val});
        } else if (nam === "rainyDayFund") {
            flag = true;
            val2 = this.state.rainyDayFund;
            //this.setState({nam:val});
        } else if (nam === "savingsForFun") {
            flag = true;
            val2 = this.state.savingsForFun;
            //this.setState({nam:val});
        } else if (nam === "savingsForTravel") {
            flag = true;
            val2 = this.state.savingsForTravel;
            //this.setState({nam:val});
        } else if (nam === "savingsForPersonalDevelopment") {
            flag = true;
            val2 = this.state.savingsForPersonalDevelopment;
            //this.setState({nam:val});
        } else if (nam === "investment1") {
            flag = true;
            val2 = this.state.investment1;
            //this.setState({nam:val});
        } else if (nam === "investment2") {
            flag = true;
            val2 = this.state.investment2;
            //this.setState({nam:val});
        } else if (nam === "investment3") {
            flag = true;
            val2 = this.state.investment3;
            //this.setState({nam:val});
        } else if (nam === "primaryHome") {
            flag = true;
            val2 = this.state.primaryHome;
            //this.setState({nam:val});
        } else if (nam === "secondaryHome") {
            flag = true;
            val2 = this.state.secondaryHome;
            //this.setState({nam:val});
        } else if (nam === "other") {
            flag = true;
            val2 = this.state.other;
            //this.setState({nam:val});
        } else if (nam === "cc1") {
            flag = false;
            val2 = this.state.cc1;
            //this.setState({nam:val});
        } else if (nam === "cc2") {
            flag = false;
            val2 = this.state.cc2;
            //this.setState({nam:val});
        } else if (nam === "m1") {
            flag = false;
            val2 = this.state.m1;
            //this.setState({nam:val});
        } else if (nam === "m2") {
            flag = false;
            val2 = this.state.m2;
            //this.setState({nam:val});
        } else if (nam === "loc") {
            flag = false;
            val2 = this.state.loc;
            //this.setState({nam:val});
        } else if (nam === "investmentLoan") {
            flag = false;
            val2 = this.state.investmentLoan;
            //this.setState({nam:val});
        } else if (nam === "studentLoan") {
            flag = false;
            val2 = this.state.studentLoan;
            //this.setState({nam:val});
        } else if (nam === "carLoan") {
            flag = false;
            val2 = this.state.carLoan;
            //this.setState({nam:val});
        }

        const data = {
            flag: flag,
            value: val,
            value2: val2,
            nam: nam,
            val: val
        };
        this.setState({ nam: val });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(CALCULATOR_API_URL, data, { config })
            .then(response => {
                console.log(response);
                this.setState({result:response.data.totalNetworth})
            })
            .catch(error => {
            });

            /*axios.put(CALCULATOR_API_URL, data, { config })
            .then(response => {
                console.log(response);
                this.setState({result:response.data.totalNetworth})
            })
            .catch(error => {
            });*/
    }
    render() {
        return (
            <div>
                <form>
                    <h1 className="text-center">Networth Calculator</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Select Currency: CAD</th>
                            </tr>
                            <tr>
                                <th>Networth</th>
                                <th>$<input type="number" name="total" value={this.state.result}></input></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Cash and investments</th>
                            </tr>
                            <tr>
                                <td>Chequing</td>
                                <td><input type="text" name="chequing" onChange={this.handleInput} /></td>
                            </tr>
                            <tr>
                                <td>Savings for taxes</td>
                                <td><input type="number" name="savingsForTaxes" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Rainy Day Fund</td>
                                <td><input type="number" name="rainyDayFund" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Savings For Fun</td>
                                <td><input type="number" name="savingsForFun" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Savings For Travel</td>
                                <td><input type="number" name="savingsForTravel" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Savings For Personal Development</td>
                                <td><input type="number" name="savingsForPersonalDevelopment" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Investment 1</td>
                                <td><input type="number" name="investment1" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Investment 2</td>
                                <td><input type="number" name="investment2" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Investment 3</td>
                                <td><input type="number" name="investment3" onChange={this.handleInput} ></input></td>
                            </tr>
                            <tr>
                                <th>Long Term </th>
                            </tr>
                            <tr>
                                <td>Primary Home</td>
                                <td><input type="number" name="primaryHome" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Secondary Home</td>
                                <td><input type="number" name="secondaryHome" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Other</td>
                                <td><input type="number" name="other" onChange={this.handleInput}></input></td>
                            </tr>



                            <tr>
                                <th>Liabilities</th>
                            </tr>
                            <tr>
                                <th>Short Term Liabilities</th>
                            </tr>
                            <tr>
                                <td>Credit Card 1</td>
                                <td><input type="number" name="cc1" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Credit Card 2</td>
                                <td><input type="number" name="cc2" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <th>Long Term Debt</th>
                            </tr>
                            <tr>
                                <td>Mortgage 1</td>
                                <td><input type="number" name="m1" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Mortgage 2</td>
                                <td><input type="number" name="m2" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Line of Credit</td>
                                <td><input type="number" name="loc" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Investment Loan</td>
                                <td><input type="number" name="investmentLoan" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Student Loan</td>
                                <td><input type="number" name="studentLoan" onChange={this.handleInput}></input></td>
                            </tr>
                            <tr>
                                <td>Car Loan</td>
                                <td><input type="number" name="carLoan" onChange={this.handleInput}></input></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )

    }
}

export default CalculatorComponent