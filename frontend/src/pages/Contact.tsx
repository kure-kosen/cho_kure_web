import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { withRouter, RouteComponentProps } from "react-router-dom";

import RootStore from "@/stores/RootStore";

import { color, device } from "@/constants/styles";

import HeroArea from "@/components/atoms/HeroArea";
import ContactForm from "@/components/molecules/Contact/Form";

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

  const successSendContact = () => {
    setAlert({
      status: "successed",
      message: "おたよりを送信しました。 5秒後に自動でトップページに戻ります。"
    });
    setTimeout(() => props.history.push("/"), 5000);
  };

  const failSendContact = () => {
    setAlert({
      status: "failed",
      message:
        "おたよりの送信に失敗しました。 * がついている項目は全て記入して再送信してください。"
    });
  };

  return (
    <div>
      <HeroArea>
        <HeroContentWrapper>
          Contact
          <HeroContentBar />
          ご意見ご感想お待ちしております
        </HeroContentWrapper>
      </HeroArea>
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

const HeroContentWrapper = styled.div`
  width: 60%;
  font-size: 2rem;
  text-align: center;
  color: ${color.WHITE};

  @media ${device.mobile} {
    width: 90%;
  }
`;

const HeroContentBar = styled.hr`
  display: box;
  width: 50%;
  height: 2px;
  background-color: ${color.ORANGE};
  border: 0;
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
