function Payment() {
    return (
        <form action="https://banking.idram.am/Payment/GetPayment" method="POST">
            <input type="hidden" name="EDP_LANGUAGE" value="EN" />
            <input type="hidden" name="EDP_REC_ACCOUNT" value="110002385"/>
            <input type="hidden" name="EDP_DESCRIPTION" value="Order description" />
            <input type="hidden" name="EDP_AMOUNT" value="100" />
            <input type="hidden" name="EDP_BILL_NO" value="1800" />
            <input type="hidden" name="EDP_EMAIL" value="lilitbabayan923@gmail.com"/>
            <input type="submit" value="submit" />
        </form>
    )
}

export default Payment
