import React from 'react';
import './RequestSubmission.css';
import InputArea from '../ohk-components/InputForm';

function RequestSubmissionPage() {
    return (  
        <div id="request-submission-form" class="request-page">
            <div class="left-side">
                <InputArea />
            </div>

            <div class="right-side">
                <InputArea />
            </div>

        </div>
    )
} 

export default RequestSubmissionPage;