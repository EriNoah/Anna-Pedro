import { Label, Textarea } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
function CommentForm() {
  return (
    <div className="flex flex-col gap-2">
      <div className="max-w-md" id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Sua mensagem" />
        </div>
        <Textarea
          id="comment"
          placeholder="Escreva sua mensagem..."
          required
          rows={4}
        />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="nome" value="Seu nome" />
        </div>
        <TextInput
          icon={HiUser}
          id="nome"
          placeholder="Anna"
          required
          type="text"
        />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Seu email" />
        </div>
        <TextInput
          icon={HiMail}
          id="email4"
          placeholder="nome@email.com"
          required
          type="email"
        />
      </div>
    </div>
  );
}

export default CommentForm;
