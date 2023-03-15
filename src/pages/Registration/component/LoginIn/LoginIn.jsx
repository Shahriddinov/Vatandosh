import "./LoginIn.scss";

export const LoginIn = () => {
    return (
        <div className="auth">
            <div className="auth-desc">
                <h2 className="auth-desc-title">Lorem ipsum dolor
                    sit amet consectetur.
                    Mauris sit mauris</h2>
                <p className="auth-desc-text">
                    Lorem ipsum dolor sit amet consectetur. Neque sed ultrices vel orci mollis felis ultrices leo. Erat vestibulum amet nibh luctus vitae velit vitae vulputate blandit. Malesuada commodo magna sed sem justo non convallis. Vestibulum id nunc et morbi lobortis non bibendum arcu netus. Eget nisi tincidunt aliquam rutrum nunc feugiat fermentum in nisi
                </p>
            </div>
            <form className="auth-form">
                <div className="auth-form-title">
                    <h3>Shaxsiy kabinetga kirish</h3>
                    <p>Iltimos ma’lumotlaringizni kirting</p>
                </div>
                <div className="auth-form-inputs">
                    <label className="auth-form-emailInput">
                        <span>Email pochtangizni kiriting</span>
                        <input type="email" />
                    </label>
                    <label className="auth-form-passwordInput">
                        <span>Parol</span>
                        <input type="password" minLength={5} maxLength={30} required />
                    </label>
                </div>
                <div className="auth-form-checkbox">
                    <div className="auth-form-checkbox-input">
                        <input type="checkbox" name="" id="" />
                        <span>Qurilmani eslab qolish</span>
                    </div>
                    <div className="auth-form-checkbox-forgetPassword">
                        <span>Parolni unutdingizmi?</span>
                    </div>
                </div>
                <button className="auth-form-submitBtn">Profilga kirish</button>
            </form>
        </div>
    )
}
