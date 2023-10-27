import React from 'react';

function InputArea() {
    return (
        <div id="request-submission-form">
            <div class="mb-3">
                <h4 class="step">Step Two:</h4>
                <p class="instructions">Write your name</p>
                <input type="text" class="form-control" id="fullNameInput" placeholder="Michelle Park"></input>
                <label for="fullNameInput" class="form-label">First Last</label>
            </div>
            <div class="mb-3">
            <h4 class="step">Step Three:</h4>
                <p class="instructions">Write your email</p>
                <input type="email" class="form-control" id="emailAddressInput" placeholder="name@example.com"></input>
                <label for="emailAddressInput" class="form-label">Email Address</label>
       
            </div>
            <div class="mb-3">
            <h4 class="step">Step Four:</h4>
                <p class="instructions">Why are you requesting PTO?</p>
                <textarea class="form-control" id="reasoniningInput" rows="3"></textarea>
                <label for="reasoningInput" class="form-label">Provide a Reason (Optional)</label>
            </div>
            </div>  
    )  
}

export default InputArea;