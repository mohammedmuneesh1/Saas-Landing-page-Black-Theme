import Tag from "@/components/Tag";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
    <section className="custom-layout py-24 ">
        <div className="flex justify-center">
        <Tag>Introducing Layers</Tag>
        </div>

        <div className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl text-center font-medium mt-10">
            <span>
            Your creative process derseves better.
            </span>
            <span className="text-white/15">
            {text}
            </span>
            <span className="text-lime-400 block">
            That&apos;s why we built Layers.
            </span>
        </div>
    </section>
    );
}
