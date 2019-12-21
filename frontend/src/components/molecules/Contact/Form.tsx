import React, { FC, useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { validateEmail } from "@/utils/validation";

import ChkButtonBase from "@/components/atoms/Buttons/ChkButtonBase";
import TextInput from "@/components/atoms/Forms/TextInput";
import Select from "@/components/atoms/Forms/Select";
import CheckBox from "@/components/atoms/Forms/CheckBox";
import CircleSpinner from "@/components/atoms/Spinners/CircleSpinner";
import RootContext from "@/utils/Contexts/RootContext";
import { ContactFormAlert } from "./ContactFormAlert";

export const ContactForm: FC = observer(() => {
  const history = useHistory();

  const [alertStatus, setAlertStatus] = useState<"successed" | "failed">();
  const [alertMessage, setAlertMessage] = useState("");

  const successSendContact = useCallback(() => {
    setAlertStatus("successed");
    setAlertMessage(
      "おたよりを送信しました。 5秒後に自動でトップページに戻ります。"
    );
    setTimeout(() => history.push("/"), 5000);
  }, [alertMessage, alertStatus]);

  const failSendContact = useCallback(() => {
    setAlertStatus("failed");
    setAlertMessage(
      "おたよりの送信に失敗しました。 * がついている項目は全て記入して再送信してください。"
    );
  }, [alertMessage, alertStatus]);

  const { contactStore } = useContext(RootContext);
  const { contactEnum } = contactStore;

  useEffect(() => {
    contactStore.fetchContactEnum();
  }, []);

  const [name, setName] = useState("");
  const [corner, setCorner] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  const [message, setMessage] = useState("");
  const [readable, setReadable] = useState(false);

  const [isSendable, setIsSendable] = useState(false);

  useEffect(() => {
    if (
      corner &&
      department &&
      grade &&
      !validateEmail(email).errorMessage &&
      message
    ) {
      setIsSendable(true);
    } else {
      setIsSendable(false);
    }
  }, [corner, department, grade, email, message]);

  const createContact = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!isSendable) return;

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

      contact.save(successSendContact, failSendContact);
    },
    [successSendContact, failSendContact]
  );

  return contactEnum ? (
    <>
      <ContactFormAlert {...{ alertMessage, alertStatus }} />

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

        <ContactFormButton
          text="送信"
          onClick={createContact}
          bgcolor={isSendable ? "" : "DISABLED"}
          isSendable={isSendable}
        />
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

const ContactFormButton = styled(ChkButtonBase)<{ isSendable: boolean }>`
  width: 40%;
  margin: 0 auto;
  cursor: ${({ isSendable }) => (isSendable ? "pointer" : "default")};
`;
