import ExamLayout from "../shared/ExamLayout";
import { NETWORK_CHAPTERS } from "./data/index";

export default function NetworkExam() {
  return (
    <ExamLayout
      chapters={NETWORK_CHAPTERS}
      examTitle="Computer Networks"
      examSub="Cisco ITN · OSI Model · IPv4 · CLI Commands"
      glowColor="#0ea5e9"
    />
  );
}