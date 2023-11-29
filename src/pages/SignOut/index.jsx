import Header from "../../components/Header";

const SignOut = () => {
    return (
        <div onClick={() => {
            document.cookie = 'token=0'
            window.location.href = 'http://localhost:4000/login'
        }}>
            SignOut
        </div>
    )
}

export default SignOut;