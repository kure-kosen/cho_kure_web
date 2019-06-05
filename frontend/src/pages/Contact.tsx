import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { inject } from "mobx-react";

import RootStore from "@/stores/RootStore";

import { color, device } from "@/constants/styles";

import HeroArea from "@/components/atoms/HeroArea";
import ContactForm from "@/components/molecules/Contact/Form";

interface IProp {
  rootStore?: RootStore;
}

interface IState {
  alert: {
    message: string;
    status?: string;
  };
}

@inject("rootStore")
class Contact extends React.Component<IProp & RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: {
        message: "",
        status: undefined
      }
    };

    this.successSendContact = this.successSendContact.bind(this);
    this.failSendContact = this.failSendContact.bind(this);
  }

  public render() {
    const rootStore = this.props.rootStore!;

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
              successed={this.successSendContact}
              failed={this.failSendContact}
              alert={this.state.alert}
            />
          </div>
        </ContactFormWrapper>
      </div>
    );
  }

  public successSendContact(_: object) {
    this.setState({
      alert: {
        status: "successed",
        message:
          "おたよりを送信しました。 5秒後に自動でトップページに戻ります。"
      }
    });
    setTimeout(() => console.log(this.props.history.push("/")), 5000);
  }

  public failSendContact(_: object) {
    this.setState({
      alert: {
        status: "failed",
        message:
          "おたよりの送信に失敗しました。 * がついている項目は全て記入して再送信してください。"
      }
    });
  }
}

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
