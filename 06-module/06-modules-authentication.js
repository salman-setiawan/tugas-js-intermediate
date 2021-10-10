export default function validateLoginData(email, password) {
    let message = "";
    const checkEmail = new RegExp(/\S+@\S+\.\S+/);
    const checkPassword = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    if (checkEmail.test(email)) {
        if (checkPassword.test(password)) {
            message = "Welcome to The Jungle";
        }
        else
            message = "tolong masukan password sesuai ketentuan";
    }
    else
        message = "tolong masukan email yang valid";
    
    alert(message);
}