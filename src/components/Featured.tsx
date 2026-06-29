export default function Featured() {
  return (
    <section className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/984173e8-38ca-4dec-bdae-b53295670ed2.jpg"
        alt="Сотрудник склада"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}
