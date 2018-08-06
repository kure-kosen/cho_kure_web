import * as React from "react";
import styled from "styled-components";

import RestClient from "./../api/RestClient";
import ContactApi from "./../api/ContactApi";

import { media } from "./../commons/style";
import { ChkButtonBase } from "./../commons/ChkButtonBase";
import { chkColors } from "./../commons/color";

import { HeroArea } from "./../components/HeroArea";
import { ContactHeroContent } from "./../components/ContactHeroContent";

type Prop = {};
type State = {
  name: string;
  corner: number;
  department: number;
  grade: number;
  email: string;
  nickname: string;
  content: string;
  readable: boolean;
};

export default class Contact extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      name: "",
      corner: 0,
      department: 0,
      grade: 0,
      email: "",
      nickname: "",
      content: "",
      readable: false,
    };

    this.createContact = this.createContact.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCorner = this.onChangeCorner.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  render() {
    return (
      <div>
        <HeroArea InnerComponent={<ContactHeroContent />} />
        <ContactFormWrapper>
          <ContactForm>
            <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>
            <form onSubmit={this.createContact}>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="name"
                  type="text"
                  placeholder="名前"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="corner"
                  type="text"
                  placeholder="題名"
                  value={this.state.corner}
                  onChange={this.onChangeCorner}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <select name="department" value={this.state.department} onChange={this.onChangeDepartment}>
                  <option value="0">所属</option>
                  <option value="10">機械工科</option>
                  <option value="20">電気情報工学科</option>
                  <option value="30">環境都市工学科</option>
                  <option value="40">建築学科</option>
                  <option value="50">専攻科</option>
                  <option value="60">卒業生</option>
                </select>
                <select name="grade" value={this.state.grade} onChange={this.onChangeGrade}>
                  <option value="0">学年</option>
                  <option value="10">1年生</option>
                </select>
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="email"
                  type="text"
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
                <ContactFormInput
                  name="content"
                  type="text"
                  placeholder="内容"
                  value={this.state.content}
                  onChange={this.onChangeContent}
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

    const contactApi = new ContactApi(new RestClient());

    contactApi.saveContact(
      {
        corner: this.state.corner,
        message: this.state.content,
        nickname: this.state.nickname,
        name: this.state.name,
        department: this.state.department,
        grade: this.state.grade,
        readable: this.state.readable,
      },
      (res: object) => console.log(res),
      (err: object) => console.log(err)
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

  onChangeContent(e: any) {
    this.setState({ content: e.target.value });
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

const ContactFormButton = ChkButtonBase.extend`
  background-color: ${chkColors.orange};
  width: 30%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;
