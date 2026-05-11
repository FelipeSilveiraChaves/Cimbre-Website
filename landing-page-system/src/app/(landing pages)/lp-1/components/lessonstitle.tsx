type LessonsTitleProps = {
  LessonName: String;
  WhichLesson: String;
};

export default function LessonsTitle({
  LessonName,
  WhichLesson,
}: LessonsTitleProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <h3 className="font-title text-[32px] leading-9 font-semibold tracking-[-0.5px] text-[#202A40]">
        {LessonName}
      </h3>
      <p className="font-title inline-flex h-7.5 items-center justify-center rounded-full bg-[#202A40] px-3 text-[18px] leading-none font-semibold text-white">
        {WhichLesson}
      </p>
    </div>
  );
}
