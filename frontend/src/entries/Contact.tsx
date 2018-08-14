import * as React from "react";
import styled from "styled-components";

import { media } from "../commons/style";
import { ChkButtonBase } from "../commons/ChkButtonBase";
import { chkColors } from "../commons/color";

import { HeroArea } from "../components/HeroArea";
import { ContactHeroContent } from "../components/ContactHeroContent";
import { inject } from "../../node_modules/mobx-react";
import RootStore from "../stores/RootStore";

type Prop = {
  rootStore?: RootStore;
};
type State = {
  name: string;
  corner?: number;
  department?: number;
  grade?: number;
  email: string;
  nickname: string;
  message: string;
  readable: boolean;
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
      name: "",
      corner: undefined,
      department: undefined,
      grade: undefined,
      email: "",
      nickname: "",
      message: "",
      readable: false,
      alert: {
        message: "",
        status: undefined,
      },
    };

    this.createContact = this.createContact.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCorner = this.onChangeCorner.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  render() {
    // TODO(euglena1215): requiredの*をべた書きで書かなくてもいいようにする
    return (
      <div>
        <HeroArea InnerComponent={<ContactHeroContent />} />
        <ContactFormWrapper>
          <ContactForm>
            <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>
            <form onSubmit={this.createContact}>
              <ContactFormInputWrapper>
                {this.state.alert.status === void 0 ? null : <AlertMessage>{this.state.alert.message}</AlertMessage>}
                <ContactFormInput
                  name="name"
                  type="text"
                  placeholder="名前"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormSelect name="corner" value={this.state.corner} onChange={this.onChangeCorner} required>
                  <option value="">題名*</option>
                  <option value="0">ふつうのお便り</option>
                  <option value="10">ラジオへの感想・意見</option>
                  <option value="20">ラジオ出演</option>
                  <option value="30">バグ報告</option>
                </ContactFormSelect>
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormSelectHalf
                  name="department"
                  value={this.state.department}
                  onChange={this.onChangeDepartment}
                  required
                >
                  <option value="">所属*</option>
                  <option value="10">機械工科</option>
                  <option value="20">電気情報工学科</option>
                  <option value="30">環境都市工学科</option>
                  <option value="40">建築学科</option>
                  <option value="50">専攻科</option>
                  <option value="60">卒業生</option>
                </ContactFormSelectHalf>
                <ContactFormSelectHalf name="grade" value={this.state.grade} onChange={this.onChangeGrade} required>
                  <option value="">学年*</option>
                  <option value="10">1年生</option>
                </ContactFormSelectHalf>
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="email"
                  type="email"
                  placeholder="メールアドレス"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="nickname"
                  type="text"
                  placeholder="ラジオネーム"
                  value={this.state.nickname}
                  onChange={this.onChangeNickname}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormTextarea
                  name="message"
                  placeholder="内容*"
                  rows={4}
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                  required
                />
              </ContactFormInputWrapper>
              <ContactFormButton>送信</ContactFormButton>
            </form>
          </ContactForm>
        </ContactFormWrapper>
      </div>
    );
  }

  createContact(e: any) {
    e.preventDefault();

    const root = this.props.rootStore!;
    const contact = root.contactStore.createContact(this.state);

    contact.save(
      (_: object) => {
        this.setState({ alert: { status: "successed", message: "おたよりを送信しました。" } });
      },
      (_: object) => {
        this.setState({ alert: { status: "failed", message: "おたよりの送信に失敗しました。" } });
      }
    );
  }

  onChangeName(e: any) {
    this.setState({ name: e.target.value });
  }

  onChangeCorner(e: any) {
    this.setState({ corner: e.target.value });
  }

  onChangeDepartment(e: any) {
    this.setState({ department: e.target.value });
  }

  onChangeGrade(e: any) {
    this.setState({ grade: e.target.value });
  }

  onChangeEmail(e: any) {
    this.setState({ email: e.target.value });
  }

  onChangeNickname(e: any) {
    this.setState({ nickname: e.target.value });
  }

  onChangeMessage(e: any) {
    this.setState({ message: e.target.value });
  }
}

const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactFormTitle = styled.div`
  margin: 2rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #00afec;
`;

const ContactForm = styled.div`
  width: 50%;
  margin-bottom: 100px;

  @media ${media.mobile} {
    width: 90%;
  }
`;

const ContactFormInputWrapper = styled.div`
  margin: 20px;
`;

const ContactFormInput = styled.input`
  margin: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid #00afec;
  border-radius: 1.5rem;

  ::placeholder {
    color: #00afec;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #00afec;
  }
`;

const ContactFormSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  line-height: 1.5rem;
  padding: 5px;
  padding-left: 30px;
  border: 2px solid #00afec;
  border-radius: 1.5rem;
  background: none transparent;
  vertical-align: middle;
  color: #00afec;
`;

const ContactFormSelectHalf = ContactFormSelect.extend`
  width: 50%;
`;

const ContactFormTextarea = styled.textarea`
  margin: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 5px;
  padding-left: 30px;
  line-height: 1.5rem;
  width: 100%;
  border: 2px solid #00afec;
  border-radius: 1.5rem;

  ::placeholder {
    color: #00afec;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #00afec;
  }
`;

const ContactFormButton = ChkButtonBase.extend`
  background-color: ${chkColors.orange};
  width: 30%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;

const AlertMessage = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  background-color: #ffe18e;
  color: #c59406;
  z-index: 100;
`;
