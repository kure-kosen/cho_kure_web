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
  }

  render() {
    // TODO(euglena1215): requiredの*をべた書きで書かなくてもいいようにする
    return (
      <div>
        <HeroArea InnerComponent={<ContactHeroContent />} />
        <ContactFormWrapper>
          <ContactForm>
            <ContactFormTitle>お問い合わせフォーム</ContactFormTitle>
            <form>
              <ContactFormInputWrapper>
                {this.state.alert.status === void 0 ? null : <AlertMessage>{this.state.alert.message}</AlertMessage>}
                <ContactFormInput
                  name="name"
                  type="text"
                  placeholder="名前"
                  value={this.state.name}
                  onChange={(e: any) => this.setState({ name: e.target.value })}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormSelect
                  name="corner"
                  value={this.state.corner}
                  onChange={(e: any) => this.setState({ corner: e.target.value })}
                  required
                >
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
                  onChange={(e: any) => this.setState({ department: e.target.value })}
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
                <ContactFormSelectHalf
                  name="grade"
                  value={this.state.grade}
                  onChange={(e: any) => this.setState({ grade: e.target.value })}
                  required
                >
                  <option value="">学年*</option>
                  <option value="10">1年生</option>
                  <option value="20">2年生</option>
                  <option value="30">3年生</option>
                  <option value="40">4年生</option>
                  <option value="50">5年生</option>
                  <option value="60">OGOB</option>
                  <option value="70">その他</option>
                </ContactFormSelectHalf>
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="email"
                  type="email"
                  placeholder="メールアドレス"
                  value={this.state.email}
                  onChange={(e: any) => this.setState({ email: e.target.value })}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormInput
                  name="nickname"
                  type="text"
                  placeholder="ラジオネーム"
                  value={this.state.nickname}
                  onChange={(e: any) => this.setState({ nickname: e.target.value })}
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <ContactFormTextarea
                  name="message"
                  placeholder="内容*"
                  rows={4}
                  value={this.state.message}
                  onChange={(e: any) => this.setState({ message: e.target.value })}
                  required
                />
              </ContactFormInputWrapper>
              <ContactFormInputWrapper>
                <label>
                  <ContactFormCheckbox
                    name="readable"
                    type="checkbox"
                    checked={this.state.readable}
                    onChange={(_: any) => {
                      this.setState({ readable: !this.state.readable });
                    }}
                  />
                  ラジオ内でメッセージを読み上げてもいい場合はチェックをつけてください
                </label>
              </ContactFormInputWrapper>
              <ContactFormButton onClick={this.createContact}>送信</ContactFormButton>
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

const ContactFormCheckbox = styled.input`
  margin-left: 20px;
  margin-right: 10px;
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
