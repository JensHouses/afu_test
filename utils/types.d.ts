
export interface Question {
    number: string;
    class: string;
    question: string;
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    picture_question?: string | null;
    picture_a?: string | null;
    picture_b?: string | null;
    picture_c?: string | null;
    picture_d?: string | null;
};
export type QuestionType = Question & {
jens?: string;
};