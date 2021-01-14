import React, {Fragment} from 'react'

import '../assets/css/Components/contact.css';

function ContactPage() {
    return (
        <Fragment>
            <div className='pink top-70 header-banner'>
                <h1>Contact Us</h1>
                <h5>support@jmahal.com</h5>
                <div className='d-flex'>
                <i class="fas fa-phone-alt pr-2"></i>
                <p>901-468-9593</p>
                
                </div>

                <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item header-icon">
                    <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="nav-item header-icon">
                    <a class="nav-link"><i class="fab fa-twitter"></i></a>
                </li>
                <li class="nav-item header-icon">
                    <a class="nav-link"><i class="fab fa-instagram"></i></a>
                </li>
            </ul>
            </div>
            <div className='policies container'>
                <p className='title-text'>SHIPPING POLICY</p>
                <br />
            <p class="font_8 main-text">To ensure that your J Mahal package is properly delivered, and you receive shipment within the time frame, please ensure your address is correct. If there are issues with verifying your address, J Mahal support will contact you to try and resolve these issues. If after several attempts of contacting you, you do not respond, your order will be canceled and your money is refunded to you.</p>
            <br />
            <p class="font_8 main-text">If you realize that you entered your shipping address incorrectly, please contact J Mahal. If your order was placed on the weekend, please call us first thing Monday morning. We will do our best to fulfill your request to revise your shipping address. If we are unable to, we do not take responsibility for the incorrect information.</p>
            <br/>
            <p class="font_8 main-text">Shipping fees are non-refundable. If you refuse any shipments from JMahal.com, you will be held responsible for the original shipping charges, plus the cost of returning the package to us. This amount will be deducted from your merchandise refund.</p>
            <br />
            <p class="font_8 main-text">If your tracking information states that your package was delivered and you have not received it, you must contact the United States Postal Service directly. JMahal <span style={{"color":"#F0AC00"}}><span style={{"text-decoration":"underline"}}><span style={{"font-weight":"bold"}}>Will NOT</span></span></span> hold responsibility for packages that state <span style={{"color":"#F0AC00"}}><span style={{"text-decoration":"underline"}}><span style={{"font-weight":"bold"}}>DELIVERED</span></span></span>.</p>
            <br />
            <p class="font_8 main-text"><span className='golden-highlight'>Just a reminder that you will receive a shipping confirmation within 5-7 business days from the day the order was placed</span>. After your payment is authorized and verified, it can still take 3-4 days to process your order. This is just an estimate, though, and doesn't include weekends or holidays. When your order has been shipped, you will receive an email with tracking information. If your order says delivered and you did not receive it, you must contact your local post office. <span className='golden-highlight'>We do not issue refunds for packages that state being delivered</span>. We offer USPS Priority Mail to most locations (domestic &amp; internationally). Your shipping cost is displayed at the point of checkout. <span class="golden-highlight">International orders may be subjected to custom&nbsp;charges by your native country</span></p>
            <br />
            <hr />
            <br />
            <p className='title-text'>SHIPPING RATES</p>
            <br />
            <p class="font_8 main-text"> Standard Shipping: $8.00 (5-7 business days)&nbsp;</p>
            <p class="font_8 main-text"> Heavy Goods Shipping: $13.50 (5-7 business days)</p>
            <p className='title-text' style={{"font-size": "20px"}}>INTERNATIONAL:</p>
            <p class="font_8 main-text"> Rest of the World: $40.50</p>
            <br />
            <hr />
            <br />
            <p className='title-text'>REFUND POLICY</p>
            <p class="font_8"><span className="golden-highlight" >**NO REFUNDS**</span></p>
            <p class="font_8 main-text">We offer <span className="golden-highlight">EXCHANGES ONLY</span> in perfect condition of the same item ONLY. <span className="golden-highlight">ANY WORN OR DAMAGED ITEMS WILL NOT BE ACCEPTED</span>.&nbsp;</p>
            <p class="font_8 main-text"> You may exchange merchandise within 7 business days of receipt of purchase.&nbsp;</p>
            <p class="font_8 main-text"> The shipping and handling fees are non-refundable.&nbsp;</p>
            <p class="font_8 main-text">· Since many of our items are limited quantities, we may occasionally sell out of an item. If this happens, we will notify you via email. If an item is out of stock there can be no exchange or return under any circumstances.</p>
            <p class="font_8"><span className="golden-highlight" >**PLEASE READ CAREFULLY OVER OUR ITEM DESCRIPTION, AS SOME ITEMS CONTAIN NO STRETCH**</span></p>

            <p class="font_8 main-text">We <span className='golden-highlight'>DO NOT</span> accept exchanges on any white items, t-shirts, swimwear, bodysuits, leggings or accessories/bags. All items are thoroughly inspected before leaving our warehouse, our company will not send customers any damaged items.<span className="golden-highlight"> PLEASE NOTE THAT ANY SALE OR DISCOUNTED ITEMS ARE FINAL SALES!</span>&nbsp;</p>
            <p class="font_8 main-text">(Any custom looks are FINAL SALE)</p>
            <p class="font_8 main-text">Please email J Mahal&nbsp;support FIRST to initiate a return. Please <span className='golden-highlight'>DO NOT</span> return any merchandise to our warehouse without speaking to someone from our sales team and receiving certified confirmation. Once approved by a sales representative, we will provide you with a return address to send your return to. <span className='golden-highlight'>Please note that the customer is responsible for any and all return shipping costs</span>.</p>
            <br />
            <hr />
            <br />
            <p className='title-text'>ORDER PROCESSING:</p>
            <p class="font_8 main-text">All orders are processed, verified, and shipped within 5-7 business days or sooner.</p>
            <p class="font_8 main-text">J Mahal is <span className='golden-highlight'>NOT</span> responsible for orders lost in the mail, incorrectly supplied addresses or unclaimed/refused packages. You may track your package using the supplied tracking number in your shipment confirmation email.</p>
            <br />
            <h4 className='signiture'>Thank you for choosing J. Mahal</h4>
            </div>
        </Fragment>
    )
}
export default ContactPage
