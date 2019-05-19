import * as React from "react";
import styled from "styled-components";

import ContactStore from "../stores/ContactStore";

import ChkButtonBase from "../commons/ChkButtonBase";

import TextInput from "./Forms/TextInput";
import Select from "./Forms/Select";
import CheckBox from "./Forms/CheckBox";

interface IProp {
  contactStore: ContactStore;
  successed: (res: object) => void;
  failed: (res: object) => void;
}

export default (props: IProp) => {
  const [name, setName] = React.useState("");
  const [corner, setCorner] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const [message, setMessage] = React.useState("");
  const [readable, setReadable] = React.useState(false);

  const createContact = (e: any) => {
    e.preventDefault();

    const { contactStore } = props;
    const contact = contactStore.createContact({
      name,
      corner,
      department,
      grade,
      email,
      nickname,
      message,
      readable
    });

    contact.save(props.successed, props.failed);
  };

  // TODO(euglena1215): requiredの*をべた書きで書かなくてもいいようにする
  return (
    <form>
      <InlineWrapper>
        <TextInput name="name" placeholder="名前" onChange={setName} value={name} />
      </InlineWrapper>

      <InlineWrapper>
        <Select name="corner" onChange={setCorner} value={corner}>
          <option value="">題名*</option>
          <option value="0">ふつうのお便り</option>
          <option value="10">ラジオへの感想・意見</option>
          <option value="20">ラジオ出演</option>
          <option value="30">バグ報告</option>
        </Select>
      </InlineWrapper>

      <InlineWrapper>
        <InlineHalfWrapper>
          <Select name="department" onChange={setDepartment} value={department}>
            <option value="">所属*</option>
            <option value="10">機械工科</option>
            <option value="20">電気情報工学科</option>
            <option value="30">環境都市工学科</option>
            <option value="40">建築学科</option>
            <option value="50">専攻科</option>
            <option value="60">卒業生</option>
          </Select>
        </InlineHalfWrapper>
        <InlineHalfWrapper>
          <Select name="grade" onChange={setGrade} value={grade}>
            <option value="">学年*</option>
            <option value="10">1年生</option>
            <option value="20">2年生</option>
            <option value="30">3年生</option>
            <option value="40">4年生</option>
            <option value="50">5年生</option>
            <option value="60">OGOB</option>
            <option value="70">その他</option>
          </Select>
        </InlineHalfWrapper>
      </InlineWrapper>

      <InlineWrapper>
        <TextInput name="email" placeholder="メールアドレス" onChange={setEmail} value={email} />
      </InlineWrapper>

      <InlineWrapper>
        <TextInput name="nickname" placeholder="ラジオネーム" onChange={setNickname} value={nickname} />
      </InlineWrapper>

      <InlineWrapper>
        <TextInput name="message" placeholder="メッセージ" onChange={setMessage} value={message} multiLine={true} />
      </InlineWrapper>

      <InlineWrapper>
        <CheckBox name="readable" onChange={setReadable} checked={readable}>
          ラジオ内でメッセージを読み上げてもいい場合はチェックをつけてください
        </CheckBox>
      </InlineWrapper>

      <ContactFormButton text="送信" onClick={createContact} />
    </form>
  );
};

const InlineWrapper = styled.div`
  margin: 20px;
`;

const InlineHalfWrapper = styled.div`
  width: 50%;
  display: inline-block;
`;

const ContactFormButton = styled(ChkButtonBase)``;
