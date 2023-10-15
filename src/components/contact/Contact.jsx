import { useTranslation } from "react-i18next";
import "./Contact.scss";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { t } = useTranslation();
  const [state] = useForm("xrgwkbqk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className="block-contact">
        <div className="contact-tittle">
          <p className="item animation_item">{t("contact")}</p>
        </div>
        <div className="contact-info">
          <form
            method="POST"
            id="form"
            action="https://formspree.io/f/xrgwkbqk"
          >
            <div className="contact-about fs-4">
              <p className="mt-3 fw-bolder item-name animation_item">
                {t("name")}
                <br></br>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="line"
                  placeholder={t("your_name")}
                ></input>
              </p>
              <p className="mt-3 fw-bolder item-mail animation_item">
                {t("email")}
                <br></br>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="line"
                  placeholder={t("your_mail")}
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </p>
            </div>
            <div className="contact-textarea fs-4 mt-5 fw-bolder">
              <p className="item animation_item msg">{t("message")}</p>
              <label htmlFor="formText"></label>
              <textarea
                id="message"
                name="message"
                className="line item animation_item"
                placeholder={t("your_message")}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="contact-send mt-5">
              <button
                type="submit"
                disabled={state.submitting}
                value="Send Email"
                className="fw-bold animation_item"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
