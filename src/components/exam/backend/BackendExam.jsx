import ExamLayout from "../shared/ExamLayout";
import { BACKEND_CHAPTERS } from "./data/index";

export default function BackendExam() {
  return (
    <ExamLayout
      chapters={BACKEND_CHAPTERS}
      examTitle="Back-end"
      examSub="Java · Spring Boot · JPA · H2 · REST API"
      glowColor="#f59e0b"
    />
  );
}