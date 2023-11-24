import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyForm.module.css";

const MyForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Введите email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Введите правильный email";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Введите пароль";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Минимум 6 символов";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/todo");
    } else {
      console.log("Форма не отправлена");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </div>

      <div className={styles.formField}>
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div className={styles.error}>{errors.password}</div>
        )}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;
