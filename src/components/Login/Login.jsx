import styles from "./Login.module.css";

const Login = ({ Link }) => {
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />

          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Kullanıcı adı"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="text"
              placeholder="Şifre"
              onChange={(e) => console.log(e.target.value)}
            />

            <Link className={styles.link} to="/home">
              <button>Giriş Yap</button>
            </Link>
          </div>
        </div>

        <div className={styles.registerBox}>
          <p>
            Hesabın yok mu?
            <Link
              className="link"
              to="/register"
              style={{ textDecoration: "none" }}
            >
              <span> Kaydol</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
