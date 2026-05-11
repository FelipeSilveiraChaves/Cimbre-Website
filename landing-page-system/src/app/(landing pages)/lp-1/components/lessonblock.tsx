import LessonsTitle from "./lessonstitle";
import TextWrapper from "./textwrapper";
import BaseContent from "./paragraph";

type LessonBlockProps = {
  lessonName: string;
  whichLesson: string;
  description: React.ReactNode;
  classNameBaseContent?: string;
};

export default function LessonBlock({
  lessonName,
  whichLesson,
  description,
  classNameBaseContent,
}: LessonBlockProps) {
  return (
    <TextWrapper>
      <div className="mt-6.25 px-2">
        {/* px-2 aumenta em 8 os 45px de paddings já somados anteriormente ficando 53px */}
        <LessonsTitle LessonName={lessonName} WhichLesson={whichLesson} />
        <BaseContent className={`pt-3 ${classNameBaseContent}`}>
          {description}
        </BaseContent>
      </div>
    </TextWrapper>
  );
}
