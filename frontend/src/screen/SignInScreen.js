import { signin } from "../api";
import { setUserInfo, getUserInfo } from "../localStorage";

const SignInScreen = {
  after_render: () => {
    document
      .getElementById("signin-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = await signin({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        if (data.error) {
          alert(data.error);
        } else {
          console.log(data);
          setUserInfo(data); //save user to localstorage
          location.hash = "/";
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      document.location.hash = "/";
    }
    return `
    <div class="form-container">
    <form  id="signin-form" >
        <ul class="form-items">
            <li>
                <h1>Sign In</h1>
            </li>
            <li>
                <label for="email">Email</label>
                <input type="email" name="email" id="email"/>
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"/>
            </li>
            <li>
                <button type="submit" class="primary">SignIn</button>
            </li>
            <li>
                <div>
                    New User? <a href="/#/register">Create New Account</a>
                </div>
            </li>
        </ul>
    </form>
    </div>`;
  },
};
export default SignInScreen;
