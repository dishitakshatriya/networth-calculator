import axios from 'axios'

const CALCULATOR_API_URL='http://localhost:8080/api/form';

class CalculatorService {
    getForm() {
        axios.get(CALCULATOR_API_URL)
        .then(response=>{
            console.log(response)
        });
    }
}

export default new CalculatorService();