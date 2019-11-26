import React, { useCallback } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { withRouter, RouteComponentProps } from "react-router-dom";

import RootStore from "@/stores/RootStore";
import { device } from "@/constants/styles";

import ContactForm from "@/components/molecules/Contact/Form";
import { ContactHeroArea } from "@/components/molecules/Contact/ContactHeroArea";

interface IProps {
  rootStore?: RootStore;
}

interface IAlert {
  message: string;
  status?: string;
}

const Contact = observer((props: IProps & RouteComponentProps) => {
  const [alert, setAlert] = React.useState<IAlert>({
    message: "",
    status: undefined
  });

  const rootStore = props.rootStore!;

  const successSendContact = useCallback(() => {
    setAlert({
      status: "successed",
      message: "おたよりを送信しました。 5秒後に自動でトップページに戻ります。"
    });
    setTimeout(() => props.history.push("/"), 5000);
  }, [alert]);

  const failSendContact = useCallback(() => {
    setAlert({
      status: "failed",
      message:
        "おたよりの送信に失敗しました。 * がついている項目は全て記入して再送信してください。"
    });
  }, [alert]);

  return (
    <div>
      <ContactHeroArea />
      <ContactFormWrapper>
        <div>
          <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>

          <ContactForm
            contactStore={rootStore.contactStore}
            successed={successSendContact}
            failed={failSendContact}
            alert={alert}
          />
        </div>
      </ContactFormWrapper>
    </div>
  );
});

const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 50%;
    margin-bottom: 100px;

    @media ${device.mobile} {
      width: 90%;
    }
  }
`;

const ContactFormTitle = styled.div`
  margin: 2rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #00afec;
`;

export default withRouter(Contact);
