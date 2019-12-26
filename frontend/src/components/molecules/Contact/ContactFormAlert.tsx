import React, { FC, useMemo } from "react";
import styled from "styled-components";

interface AlertStatus {
  alertStatus: "successed" | "failed" | undefined;
}

interface AlertMessage {
  alertMessage: string;
}

const SuccessedAlert: FC<AlertMessage> = ({ alertMessage }) =>
  useMemo(
    () => (
      <SuccessedAlertBar>
        <p>{alertMessage}</p>
      </SuccessedAlertBar>
    ),
    [alertMessage]
  );

const FailedAlert: FC<AlertMessage> = ({ alertMessage }) =>
  useMemo(
    () => (
      <FailedAlertBar>
        <p>{alertMessage}</p>
      </FailedAlertBar>
    ),
    [alertMessage]
  );

export const ContactFormAlert: FC<AlertStatus & AlertMessage> = ({
  alertStatus,
  alertMessage
}) => {
  return useMemo(() => {
    switch (alertStatus) {
      case "successed":
        return <SuccessedAlert alertMessage={alertMessage} />;
      case "failed":
        return <FailedAlert alertMessage={alertMessage} />;
      default:
        return null;
    }
  }, [alertStatus, alertMessage]);
};

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
