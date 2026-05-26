import ExamLayout from "../shared/ExamLayout";
import { ITBUSINESS_CHAPTERS } from "./data/index";

export default function ITBusinessExam() {
  return (
    <ExamLayout
      chapters={ITBUSINESS_CHAPTERS}
      examTitle="IT & Business"
      examSub="UML · BPMN · Security · Agile · Scrum · ICT & AI"
      glowColor="#8b5cf6"
    />
  );
}