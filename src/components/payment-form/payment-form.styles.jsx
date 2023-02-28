import styled from 'styled-components';
import SpinnerContainer from '../spinner/spinner.component';

export const PaymentFormContainer = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;
`

export const PaymentButtonContainer = styled.div`
	margin-left: auto;
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: right;
`

export const PaymentSpinner = styled(SpinnerContainer)`
	
`

