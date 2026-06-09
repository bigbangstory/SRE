import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[72vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="font-display text-6xl tracking-caps text-accent sm:text-7xl">
        404
      </span>
      <h1 className="font-serif text-3xl text-ink">This page has moved on</h1>
      <p className="max-w-md text-muted">
        The page you are looking for is no longer here. Let us guide you back.
      </p>
      <Button href="/" arrow className="mt-2">
        Return home
      </Button>
    </Container>
  );
}
