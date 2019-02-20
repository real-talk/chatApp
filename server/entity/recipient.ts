import { Entity, ManyToOne, Column } from "typeorm";
import { Message } from "./message";
import { User } from "./user";
import { Chat } from "./chat";

interface RecipientConstructor {
  user?: User;
  message?: Message;
  receivedAt?: Date;
  readAt?: Date;
}

@Entity()
export default class Recipient {
  @ManyToOne(type => User, user => user.recipients, { primary: true })
  user: User;

  @ManyToOne(type => Message, message => message.recipients, { primary: true })
  message: Message;

  @ManyToOne(type => Chat, chat => chat.recipients)
  chat: Chat;

  @Column({nullable: true})
  receivedAt: Date;

  @Column({nullable: true})
  readAt: Date;

  constructor({user, message, receivedAt, readAt}: RecipientConstructor = {}) {
    if (user) {
      this.user = user;
    }
    if (message) {
      this.message = message;
    }
    if (receivedAt) {
      this.receivedAt = receivedAt;
    }
    if (readAt) {
      this.readAt = readAt;
    }
  }
}