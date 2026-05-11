type FAQCardProps = {
  className?: String;
  Question: String;
  Answer: String;
};

export default function FAQCard({ className, Question, Answer }: FAQCardProps) {
  return (
    <div
      className={`flex max-w-125 flex-col items-start gap-2 rounded-2xl bg-[#050D1F] p-6 ${className}`}
    >
      <p className="font-title text-2xl leading-7 font-semibold tracking-normal text-[#FFFFFF]">
        {Question}
      </p>
      <p className="font-base leading-6.5 font-[18px] tracking-normal text-[#FFFFFF65]">
        {Answer}
      </p>
    </div>
  );
}
