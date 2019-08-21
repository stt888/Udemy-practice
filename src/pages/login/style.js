import styled from 'styled-components';


export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`;
export const LoginBox = styled.div`
    width: 400px;
    height: 300px;
    margin: 100px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    box-sizing: border-box;
`;

export const Input = styled.input`
    display: block;
    width: 300px;
    height: 35px;
    line-height: 30px;
    padding: 0 10px;
    margin: 20px auto;
    color: #777;
    border-radius: 6px;
    .password {

    }

`;

export const Button = styled.div`
    width: 300px;
    height: 35px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    box-sizing: border-box;
    padding-left: 1.3em;
`;

export const Checkbox = styled.input.attrs({
    type: 'checkbox'
})`
    position: absolute;
    left: 20px;
`;

export const Checkboxlabel = styled.div`
    display: inline-block;
    color: #969696;
    font-size: 15px;
    line-height: 1.43;
    text-align: left;
    padding-left: .35em;
    min-height: 21px;
    padding-left: 40px;
    margin-bottom: 0;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 5px;
    box-sizing: border-box;
`;