import ExamLayout from "../shared/ExamLayout";
import { PROGRAMMING2_CHAPTERS } from "./data/index";

export default function Programming2Exam() {
  return (
    <ExamLayout
      chapters={PROGRAMMING2_CHAPTERS}
      examTitle="Programming 2"
      examSub="Python · OOP · Functional · pytest · Pandas · Matplotlib"
      glowColor="#10b981"
    />
  );
}