type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex-1 py-10 px-6" data-testid="container">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
