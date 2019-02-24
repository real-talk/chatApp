import { Connection } from 'typeorm'
import User from './entity/user'
import Chat from './entity/chat';
import Message from './entity/message';

export interface Context {
  connection: Connection
  user: User
  chat: Chat
  message: Message
}