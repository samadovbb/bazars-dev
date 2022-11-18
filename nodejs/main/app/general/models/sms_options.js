module.exports = class Options{
    constructor(mobile_phone, message) {
        this.method = 'POST';
        this.url = "https://notify.eskiz.uz/api/message/sms/send/";
        this.headers = {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjc2Nywicm9sZSI6InVzZXIiLCJkYXRhIjp7ImlkIjo3NjcsIm5hbWUiOiJPT08gREFUQVRFQ0gtU09MVVRJT05TIiwiZW1haWwiOiJwcm9ncmFtbWVyMjcwNUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImFwaV90b2tlbiI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9qYzJOeXdpY205c1pTSTZJblZ6WlhJaUxDSmtZWFJoSWpwN0ltbGtJam8zTmpjc0ltNWhiV1VpT2lKUFQwOGdSRUZVUVZSRlEwZ3RVMDlNVlZSSlQwNVRJaXdpWlcxaGFXd2lPaUp3Y205bmNtRnRiV1Z5TWpjd05VQm5iV0ZwYkM1amIyMGlMQ0p5YjJ4bElqb2lkWE5sY2lJc0ltRndhVjkwYjJ0bGJpSTZJbVY1U2pCbFdFRnBUMmxLUzFZeFVXbE1RMHBvWWtkamFVOXBTayIsInN0YXR1cyI6ImFjdGl2ZSIsInNtc19hcGlfbG9naW4iOiJlc2tpejIiLCJzbXNfYXBpX3Bhc3N3b3JkIjoiZSQkayF6IiwidXpfcHJpY2UiOjUwLCJ1Y2VsbF9wcmljZSI6NTAsImJhbGFuY2UiOjI5NDcwMCwiaXNfdmlwIjowLCJob3N0Ijoic2VydmVyMSIsImNyZWF0ZWRfYXQiOiIyMDIyLTAzLTEyVDEyOjI3OjQ3LjAwMDAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0yOVQyMjo1MjoxOC4wMDAwMDBaIn0sImlhdCI6MTY2NzIzMjc3MiwiZXhwIjoxNjY5ODI0NzcyfQ.yImcqoZU9O6goAYKAxbxwQnC9gRaM2zlgxVqMxW9tJg'
        };
        this.formData = {
            mobile_phone: mobile_phone,
            message: message,
            from: '4546'
        };
        // this.call_back_url = ''
    }
}