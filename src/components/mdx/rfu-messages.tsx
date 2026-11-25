import { Marquee } from "@/components/magicui/marquee";

type Message = { name: string; text: string; username?: string; image?: string };

function MessageCard({ message }: { message: Message }) {
  return (
    <figure className="m-0 flex w-64 shrink-0 flex-col gap-3 rounded-xl border border-border bg-muted/30 p-4 text-foreground">
      <figcaption className="flex items-center gap-2.5">
        {message.image ? (
          <img src={message.image} alt="" className="m-0 size-9 rounded-full object-cover" />
        ) : (
          <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">{message.name.charAt(0).toUpperCase()}</span>
        )}
        <span className="flex flex-col">
          <span className="text-sm font-semibold">{message.name}</span>
          {message.username && <span className="text-xs text-muted-foreground">{message.username}</span>}
        </span>
      </figcaption>
      <blockquote className="m-0 border-0 p-0 text-sm leading-relaxed text-muted-foreground">{message.text}</blockquote>
    </figure>
  );
}

export function RFUMessages({ messages }: { messages: Message[] }) {
  if (messages.length === 0) return null;

  if (messages.length === 1) {
    return <div className="not-prose my-6"><MessageCard message={messages[0]} /></div>;
  }

  return (
    <div className="not-prose relative my-6 w-full overflow-hidden">
      <Marquee repeat={6} className="[--duration:18s] motion-reduce:overflow-x-auto [&>div]:justify-start">
        {messages.map((message, index) => <MessageCard key={index} message={message} />)}
      </Marquee>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
