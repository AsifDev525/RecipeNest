import React from 'react'
import "./Term.css"

const Term = () => {
    return (
        <>
            <h1 class="terms-policies-title">Terms & Policies</h1>
            <div class="terms-policy-container">
                <div class="terms-section">
                    <h1 class="terms-title">Terms of Use</h1>
                    <h4 class="subHeading">Purpose</h4>
                    <p class="discription">RecipeNest is designed to help users explore and manage a variety of cooking recipes easily and enjoyably.</p>
                    <h4 class="subHeading">User Agreement</h4>
                    <p class="discription">By using RecipeNest, you agree to use the platform responsibly. Misuse or harmful behavior may result in account suspension or restriction.</p>
                    <h4 class="subHeading">Account Responsibility</h4>
                    <p class="discription">You are responsible for keeping your account login information safe. RecipeNest is not liable for any misuse caused by unauthorized access.</p>
                    <h4 class="subHeading">Content Ownership</h4>
                    <p class="discription">All recipes, images, and design materials on RecipeNest are owned by us unless stated otherwise. Please don’t copy or reuse our content without permission.</p>
                </div>
                <div className='policy-section'>
                    <h1 class="policy-title">Policies & Disclaimer</h1>
                    <h4 class="subHeading">Privacy Policy</h4>
                    <p class="discription">We value your privacy. Only necessary user data is collected to enhance your experience. Read our Privacy Policy for complete details.</p>
                    <h4 class="subHeading">Disclaimer</h4>
                    <p class="discription">All recipes are for informational purposes only. RecipeNest is not responsible for cooking results, dietary issues, or allergic reactions.</p>
                    <h4 class="subHeading">Changes to Terms</h4>
                    <p class="discription">We may update these terms from time to time. By continuing to use the site, you agree to the latest version of our terms.</p>
                    <h4 class="subHeading">Contact Us</h4>
                    <p class="discription">For any queries or clarifications, please reach out through our Contact Us page. We’ll be happy to assist you.</p>
                </div>
            </div>
        </>
    )
}
export default Term
