import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import ContactStore from "@/stores/ContactStore";
import { validateEmail } from "@/utils/validation";

import { OrangeButton } from "@/components/atoms/Buttons/Button";
import TextInput from "@/components/atoms/Forms/TextInput";
import Select from "@/components/atoms/Forms/Select";
import CheckBox from "@/components/atoms/Forms/CheckBox";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";

interface IProp {
  contactStore: ContactStore;
  successed: (res: object) => void;
  failed: (res: object) => void;
  alert: {
    message: string;
    status?: string;
  };
}

export default observer((props: IProp) => {
  const { contactStore } = props;
  const { contactEnum } = contactStore;

  React.useEffect(() => {
    contactStore.fetchContactEnum();
  }, []);

  const [name, setName] = React.useState("");
  const [corner, setCorner] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const [message, setMessage] = React.useState("");
  const [readable, setReadable] = React.useState(false);

  const [sendable, setSendable] = React.useState(false);

  React.useEffect(() => {
    if (
      corner &&
      department &&
      grade &&
      !validateEmail(email).errorMessage &&
      message
    ) {
      setSendable(true);
    } else {
      setSendable(false);
    }
  }, [corner, department, grade, email, message]);

  const createContact = (e: any) => {
    e.preventDefault();

    if (!sendable) return;

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

  return contactEnum ? (
    <>
      {props.alert.status === "successed" && (
        <SuccessedAlertBar>
          <p>{props.alert.message}</p>
        </SuccessedAlertBar>
      )}
      {props.alert.status === "failed" && (
        <FailedAlertBar>
          <p>{props.alert.message}</p>
        </FailedAlertBar>
      )}

      <form>
        <InlineWrapper>
          <TextInput
            name="name"
            placeholder="名前"
            onChange={setName}
            value={name}
          />
        </InlineWrapper>

        <InlineWrapper>
          <Select
            name="corner"
            onChange={setCorner}
            value={corner}
            optionElements={contactEnum.corners}
          >
            <option value="" disabled style={{ display: "none" }}>
              題名（必須）
            </option>
          </Select>
        </InlineWrapper>

        <InlineWrapper>
          <InlineHalfWrapper>
            <Select
              name="department"
              onChange={setDepartment}
              value={department}
              optionElements={contactEnum.departments}
            >
              <option value="" disabled style={{ display: "none" }}>
                所属（必須）
              </option>
            </Select>
          </InlineHalfWrapper>
          <InlineHalfWrapper>
            <Select
              name="grade"
              onChange={setGrade}
              value={grade}
              optionElements={contactEnum.grades}
            >
              <option value="" disabled style={{ display: "none" }}>
                学年（必須）
              </option>
            </Select>
          </InlineHalfWrapper>
        </InlineWrapper>

        <InlineWrapper>
          <TextInput
            name="email"
            placeholder="メールアドレス（必須）"
            onChange={setEmail}
            value={email}
            validations={[validateEmail]}
          />
        </InlineWrapper>

        <InlineWrapper>
          <TextInput
            name="nickname"
            placeholder="ラジオネーム"
            onChange={setNickname}
            value={nickname}
          />
        </InlineWrapper>

        <InlineWrapper>
          <TextInput
            name="message"
            placeholder="内容・メッセージ（必須）"
            onChange={setMessage}
            value={message}
            multiLine={true}
          />
        </InlineWrapper>

        <InlineWrapper>
          <CheckBox name="readable" onChange={setReadable} checked={readable}>
            ラジオ内でメッセージを読み上げてもいい場合はチェックをつけてください
          </CheckBox>
        </InlineWrapper>

        <OrangeButton
          onClick={createContact}
          disabled={!sendable}
          style={{ margin: "0 auto" }}
          maxWidth={300}
        >
          送信
        </OrangeButton>
      </form>
    </>
  ) : (
    <CircleSpinner />
  );
});

const InlineWrapper = styled.div`
  margin: 20px;
`;

const InlineHalfWrapper = styled.div`
  width: 50%;
  display: inline-block;
`;

const AlertBar = styled.div`
  width: 100%;
  margin: 10px auto;
  line-height: 1rem;
  padding: 5px;
  vertical-align: middle;
  border: 3px solid #000;
  color: #000;
  text-align: center;
`;

const SuccessedAlertBar = styled(AlertBar)`
  border: 3px solid #3ed986;
  color: #000;
`;

const FailedAlertBar = styled(AlertBar)`
  border: 3px solid #d95f3f;
  color: #d95f3f;
`;
