export type Maybe<T> = T | undefined | null;

export enum MessageType {
  Location = "LOCATION",
  Text = "TEXT",
  Picture = "PICTURE"
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { Chat } from "./entity/chat";

import { Message } from "./entity/message";

import { User } from "./entity/user";

import { Context } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = Context, TypeParent = {}> {
    users?: UsersResolver<Maybe<User[]>, TypeParent, Context>;

    chats?: ChatsResolver<Chat[], TypeParent, Context>;

    chat?: ChatResolver<Maybe<Chat>, TypeParent, Context>;
  }

  export type UsersResolver<
    R = Maybe<User[]>,
    Parent = {},
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type ChatsResolver<
    R = Chat[],
    Parent = {},
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type ChatResolver<
    R = Maybe<Chat>,
    Parent = {},
    Context = Context
  > = Resolver<R, Parent, Context, ChatArgs>;
  export interface ChatArgs {
    chatId: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = Context, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    picture?: PictureResolver<Maybe<string>, TypeParent, Context>;

    phone?: PhoneResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = User,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = User,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type PictureResolver<
    R = Maybe<string>,
    Parent = User,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = Maybe<string>,
    Parent = User,
    Context = Context
  > = Resolver<R, Parent, Context>;
}

export namespace ChatResolvers {
  export interface Resolvers<Context = Context, TypeParent = Chat> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    picture?: PictureResolver<Maybe<string>, TypeParent, Context>;

    allTimeMembers?: AllTimeMembersResolver<User[], TypeParent, Context>;

    listingMembers?: ListingMembersResolver<User[], TypeParent, Context>;

    owner?: OwnerResolver<Maybe<User>, TypeParent, Context>;

    messages?: MessagesResolver<(Maybe<Message>)[], TypeParent, Context>;

    lastMessage?: LastMessageResolver<Maybe<Message>, TypeParent, Context>;

    updatedAt?: UpdatedAtResolver<Date, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type PictureResolver<
    R = Maybe<string>,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type AllTimeMembersResolver<
    R = User[],
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type ListingMembersResolver<
    R = User[],
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = Maybe<User>,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type MessagesResolver<
    R = (Maybe<Message>)[],
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context, MessagesArgs>;
  export interface MessagesArgs {
    amount?: Maybe<number>;
  }

  export type LastMessageResolver<
    R = Maybe<Message>,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Date,
    Parent = Chat,
    Context = Context
  > = Resolver<R, Parent, Context>;
}

export namespace MessageResolvers {
  export interface Resolvers<Context = Context, TypeParent = Message> {
    id?: IdResolver<string, TypeParent, Context>;

    sender?: SenderResolver<User, TypeParent, Context>;

    chat?: ChatResolver<Chat, TypeParent, Context>;

    content?: ContentResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;

    type?: TypeResolver<number, TypeParent, Context>;

    holders?: HoldersResolver<User[], TypeParent, Context>;

    ownership?: OwnershipResolver<boolean, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type SenderResolver<
    R = User,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type ChatResolver<
    R = Chat,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type ContentResolver<
    R = string,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Date,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = number,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type HoldersResolver<
    R = User[],
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
  export type OwnershipResolver<
    R = boolean,
    Parent = Message,
    Context = Context
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  Context
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  Context
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  Context
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}

export interface IResolvers<Context = Context> {
  Query?: QueryResolvers.Resolvers<Context>;
  User?: UserResolvers.Resolvers<Context>;
  Chat?: ChatResolvers.Resolvers<Context>;
  Message?: MessageResolvers.Resolvers<Context>;
  Date?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
