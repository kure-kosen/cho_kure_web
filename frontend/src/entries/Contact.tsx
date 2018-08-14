import * as React from "react";
import styled from "styled-components";

import { media } from "../commons/style";

import { HeroArea } from "../components/HeroArea";
import { ContactHeroContent } from "../components/ContactHeroContent";
import { inject } from "../../node_modules/mobx-react";
import RootStore from "../stores/RootStore";
import ContactForm from "../components/ContactForm";

type Prop = {
  rootStore?: RootStore;
};
type State = {
  alert: {
    message: string;
    status?: string;
  };
};

@inject("rootStore")
export default class Contact extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      alert: {
        message: "",
        status: undefined,
      },
    };

    this.successSendContact = this.successSendContact.bind(this);
    this.failSendContact = this.failSendContact.bind(this);
  }

  render() {
    const rootStore = this.props.rootStore!;

    // TODO(euglena1215): requiredの*をべた書きで書かなくてもいいようにする
    return (
      <div>
        <HeroArea InnerComponent={<ContactHeroContent />} />
        <ContactFormWrapper>
          <div>
            <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>

            <ContactForm
              contactStore={rootStore.contactStore}
              successed={this.successSendContact}
              failed={this.failSendContact}
            />
          </div>
        </ContactFormWrapper>
      </div>
    );
  }

  successSendContact(_: object) {
    this.setState({ alert: { status: "successed", message: "おたよりを送信しました。" } });
  }

  failSendContact(_: object) {
    this.setState({ alert: { status: "failed", message: "おたよりの送信に失敗しました。" } });
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

    @media ${media.mobile} {
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
