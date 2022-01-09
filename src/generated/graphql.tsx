import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Comment = Document & {
  __typename?: 'Comment';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  object: CommentObjectUnion;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommentObjectUnion = Comment | News;

export enum CommentObjectUnionModel {
  Comment = 'Comment',
  News = 'News',
}

export type CreateCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  object: Scalars['String'];
  objectModel: CommentObjectUnionModel;
};

export type CreateDynamicInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type CreateNewsInput = {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateOAuthInput = {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateRetroInput = {
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateRetroMessageInput = {
  content: Scalars['String'];
  retro: Scalars['ID'];
  type: RetroMessageType;
};

export type CreateUserInput = {
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['Int']>;
};

export type Document = {
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Dynamic = Document & {
  __typename?: 'Dynamic';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createDynamic?: Maybe<Dynamic>;
  createNews?: Maybe<News>;
  createOAuth?: Maybe<OAuth>;
  createRetro?: Maybe<Retro>;
  createRetroMessage?: Maybe<RetroMessage>;
  createUser?: Maybe<User>;
  deleteRetroMessage?: Maybe<RetroMessage>;
  likeRetroMessage?: Maybe<RetroMessage>;
  register?: Maybe<User>;
  updateRetroMessage?: Maybe<RetroMessage>;
};

export type MutationCreateCommentArgs = {
  createCommentInput?: InputMaybe<CreateCommentInput>;
};

export type MutationCreateDynamicArgs = {
  input?: InputMaybe<CreateDynamicInput>;
};

export type MutationCreateNewsArgs = {
  createNewsInput?: InputMaybe<CreateNewsInput>;
};

export type MutationCreateOAuthArgs = {
  createOAuthInput?: InputMaybe<CreateOAuthInput>;
};

export type MutationCreateRetroArgs = {
  input?: InputMaybe<CreateRetroInput>;
};

export type MutationCreateRetroMessageArgs = {
  input?: InputMaybe<CreateRetroMessageInput>;
};

export type MutationCreateUserArgs = {
  createUserInput?: InputMaybe<CreateUserInput>;
};

export type MutationDeleteRetroMessageArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type MutationLikeRetroMessageArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  count?: InputMaybe<Scalars['Int']>;
};

export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterUserInput>;
};

export type MutationUpdateRetroMessageArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<UpdateRetroMessageInput>;
};

export type News = {
  __typename?: 'News';
  _id: Scalars['ID'];
  cover?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type OAuth = {
  __typename?: 'OAuth';
  _id: Scalars['ID'];
  platform?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  dynamic?: Maybe<Dynamic>;
  dynamics?: Maybe<Array<Maybe<Dynamic>>>;
  login?: Maybe<UserWithToken>;
  news?: Maybe<News>;
  newsList?: Maybe<Array<Maybe<News>>>;
  oauth?: Maybe<OAuth>;
  oauths?: Maybe<Array<Maybe<OAuth>>>;
  retro?: Maybe<Retro>;
  retroMessage?: Maybe<RetroMessage>;
  retroMessages?: Maybe<Array<Maybe<RetroMessage>>>;
  retros?: Maybe<Array<Maybe<Retro>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryCommentArgs = {
  _id: Scalars['ID'];
};

export type QueryDynamicArgs = {
  _id: Scalars['ID'];
};

export type QueryLoginArgs = {
  input?: InputMaybe<LoginUserInput>;
};

export type QueryNewsArgs = {
  _id: Scalars['ID'];
};

export type QueryOauthArgs = {
  _id: Scalars['ID'];
};

export type QueryRetroArgs = {
  _id: Scalars['ID'];
};

export type QueryRetroMessageArgs = {
  _id: Scalars['ID'];
};

export type QueryRetroMessagesArgs = {
  retro?: InputMaybe<Scalars['ID']>;
};

export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type RegisterUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['Int']>;
  sign?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Retro = Document & {
  __typename?: 'Retro';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type RetroMessage = Document & {
  __typename?: 'RetroMessage';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  status?: Maybe<RetroMessageStatus>;
  type?: Maybe<RetroMessageType>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum RetroMessageStatus {
  Closed = 'CLOSED',
  Focused = 'FOCUSED',
  Normal = 'NORMAL',
}

export enum RetroMessageType {
  Happy = 'HAPPY',
  Todo = 'TODO',
  Unhappy = 'UNHAPPY',
  Wonderring = 'WONDERRING',
}

export enum Role {
  Admin = 'ADMIN',
  Reviewer = 'REVIEWER',
  Unknown = 'UNKNOWN',
  User = 'USER',
}

export type Subscription = {
  __typename?: 'Subscription';
  commentCreated?: Maybe<Comment>;
  dynamicCreated?: Maybe<Dynamic>;
  newsCreated?: Maybe<News>;
  retroCreated?: Maybe<Retro>;
  retroMessageCreated?: Maybe<RetroMessage>;
  retroMessageDeleted?: Maybe<RetroMessage>;
  retroMessageLiked?: Maybe<RetroMessage>;
  retroMessageUpdated?: Maybe<RetroMessage>;
};

export type UpdateRetroMessageInput = {
  content?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RetroMessageStatus>;
  type?: InputMaybe<RetroMessageType>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  avatarUrl?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['Int']>;
  sign?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserWithToken = {
  __typename?: 'UserWithToken';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type DynamicFieldsFragment = {
  __typename?: 'Dynamic';
  _id: string;
  content?: string | null | undefined;
};

export type FindDynamicsQueryVariables = Exact<{ [key: string]: never }>;

export type FindDynamicsQuery = {
  __typename?: 'Query';
  dynamics?:
    | Array<
        | {
            __typename?: 'Dynamic';
            _id: string;
            content?: string | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type FindDynamicQueryVariables = Exact<{
  _id: Scalars['ID'];
}>;

export type FindDynamicQuery = {
  __typename?: 'Query';
  dynamic?:
    | {
        __typename?: 'Dynamic';
        _id: string;
        content?: string | null | undefined;
      }
    | null
    | undefined;
};

export type CreateDynamicMutationVariables = Exact<{
  content: Scalars['String'];
}>;

export type CreateDynamicMutation = {
  __typename?: 'Mutation';
  createDynamic?:
    | {
        __typename?: 'Dynamic';
        _id: string;
        content?: string | null | undefined;
      }
    | null
    | undefined;
};

export type RetroFieldsFragment = {
  __typename: 'Retro';
  _id: string;
  title?: string | null | undefined;
  content?: string | null | undefined;
  date?: string | null | undefined;
  user?:
    | {
        __typename?: 'User';
        _id: string;
        nickname?: string | null | undefined;
        avatarUrl?: string | null | undefined;
      }
    | null
    | undefined;
};

export type FindRetrosQueryVariables = Exact<{ [key: string]: never }>;

export type FindRetrosQuery = {
  __typename?: 'Query';
  retros?:
    | Array<
        | {
            __typename: 'Retro';
            _id: string;
            title?: string | null | undefined;
            content?: string | null | undefined;
            date?: string | null | undefined;
            user?:
              | {
                  __typename?: 'User';
                  _id: string;
                  nickname?: string | null | undefined;
                  avatarUrl?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type FindRetroQueryVariables = Exact<{
  _id: Scalars['ID'];
}>;

export type FindRetroQuery = {
  __typename?: 'Query';
  retro?:
    | {
        __typename: 'Retro';
        _id: string;
        title?: string | null | undefined;
        content?: string | null | undefined;
        date?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type CreateRetroMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  date: Scalars['String'];
}>;

export type CreateRetroMutation = {
  __typename?: 'Mutation';
  createRetro?:
    | {
        __typename: 'Retro';
        _id: string;
        title?: string | null | undefined;
        content?: string | null | undefined;
        date?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroCreatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type RetroCreatedSubscription = {
  __typename?: 'Subscription';
  retroCreated?:
    | {
        __typename: 'Retro';
        _id: string;
        title?: string | null | undefined;
        content?: string | null | undefined;
        date?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroMessageFieldsFragment = {
  __typename?: 'RetroMessage';
  _id: string;
  content?: string | null | undefined;
  status?: RetroMessageStatus | null | undefined;
  type?: RetroMessageType | null | undefined;
  like?: number | null | undefined;
  createdAt?: string | null | undefined;
  user?:
    | {
        __typename?: 'User';
        _id: string;
        nickname?: string | null | undefined;
        avatarUrl?: string | null | undefined;
      }
    | null
    | undefined;
};

export type FindRetroMessagesQueryVariables = Exact<{
  retro: Scalars['ID'];
}>;

export type FindRetroMessagesQuery = {
  __typename?: 'Query';
  retroMessages?:
    | Array<
        | {
            __typename?: 'RetroMessage';
            _id: string;
            content?: string | null | undefined;
            status?: RetroMessageStatus | null | undefined;
            type?: RetroMessageType | null | undefined;
            like?: number | null | undefined;
            createdAt?: string | null | undefined;
            user?:
              | {
                  __typename?: 'User';
                  _id: string;
                  nickname?: string | null | undefined;
                  avatarUrl?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type FindRetroMessageQueryVariables = Exact<{
  _id: Scalars['ID'];
}>;

export type FindRetroMessageQuery = {
  __typename?: 'Query';
  retroMessage?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type CreateRetroMessageMutationVariables = Exact<{
  retro: Scalars['ID'];
  content: Scalars['String'];
  type: RetroMessageType;
}>;

export type CreateRetroMessageMutation = {
  __typename?: 'Mutation';
  createRetroMessage?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateRetroMessageMutationVariables = Exact<{
  _id: Scalars['ID'];
  content?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RetroMessageType>;
  status?: InputMaybe<RetroMessageStatus>;
}>;

export type UpdateRetroMessageMutation = {
  __typename?: 'Mutation';
  updateRetroMessage?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type LikeRetroMessageMutationVariables = Exact<{
  _id: Scalars['ID'];
  count?: InputMaybe<Scalars['Int']>;
}>;

export type LikeRetroMessageMutation = {
  __typename?: 'Mutation';
  likeRetroMessage?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DeleteRetroMessageMutationVariables = Exact<{
  _id: Scalars['ID'];
}>;

export type DeleteRetroMessageMutation = {
  __typename?: 'Mutation';
  deleteRetroMessage?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroMessageCreatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type RetroMessageCreatedSubscription = {
  __typename?: 'Subscription';
  retroMessageCreated?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroMessageUpdatedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type RetroMessageUpdatedSubscription = {
  __typename?: 'Subscription';
  retroMessageUpdated?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroMessageDeletedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type RetroMessageDeletedSubscription = {
  __typename?: 'Subscription';
  retroMessageDeleted?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type RetroMessageLikedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type RetroMessageLikedSubscription = {
  __typename?: 'Subscription';
  retroMessageLiked?:
    | {
        __typename?: 'RetroMessage';
        _id: string;
        content?: string | null | undefined;
        status?: RetroMessageStatus | null | undefined;
        type?: RetroMessageType | null | undefined;
        like?: number | null | undefined;
        createdAt?: string | null | undefined;
        user?:
          | {
              __typename?: 'User';
              _id: string;
              nickname?: string | null | undefined;
              avatarUrl?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UserFieldsFragment = { __typename: 'User'; _id: string };

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users?:
    | Array<{ __typename: 'User'; _id: string } | null | undefined>
    | null
    | undefined;
};

export type LoginQueryVariables = Exact<{
  input?: InputMaybe<LoginUserInput>;
}>;

export type LoginQuery = {
  __typename?: 'Query';
  login?:
    | {
        __typename?: 'UserWithToken';
        token?: string | null | undefined;
        user?: { __typename: 'User'; _id: string } | null | undefined;
      }
    | null
    | undefined;
};

export const DynamicFieldsFragmentDoc = gql`
  fragment dynamicFields on Dynamic {
    _id
    content
  }
`;
export const RetroFieldsFragmentDoc = gql`
  fragment retroFields on Retro {
    __typename
    _id
    title
    content
    date
    user {
      _id
      nickname
      avatarUrl
    }
  }
`;
export const RetroMessageFieldsFragmentDoc = gql`
  fragment retroMessageFields on RetroMessage {
    _id
    content
    status
    type
    like
    createdAt
    user {
      _id
      nickname
      avatarUrl
    }
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment userFields on User {
    __typename
    _id
  }
`;
export const FindDynamicsDocument = gql`
  query FindDynamics {
    dynamics {
      ...dynamicFields
    }
  }
  ${DynamicFieldsFragmentDoc}
`;

/**
 * __useFindDynamicsQuery__
 *
 * To run a query within a React component, call `useFindDynamicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDynamicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDynamicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindDynamicsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FindDynamicsQuery,
    FindDynamicsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindDynamicsQuery, FindDynamicsQueryVariables>(
    FindDynamicsDocument,
    options,
  );
}
export function useFindDynamicsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindDynamicsQuery,
    FindDynamicsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindDynamicsQuery, FindDynamicsQueryVariables>(
    FindDynamicsDocument,
    options,
  );
}
export type FindDynamicsQueryHookResult = ReturnType<
  typeof useFindDynamicsQuery
>;
export type FindDynamicsLazyQueryHookResult = ReturnType<
  typeof useFindDynamicsLazyQuery
>;
export type FindDynamicsQueryResult = Apollo.QueryResult<
  FindDynamicsQuery,
  FindDynamicsQueryVariables
>;
export const FindDynamicDocument = gql`
  query FindDynamic($_id: ID!) {
    dynamic(_id: $_id) {
      ...dynamicFields
    }
  }
  ${DynamicFieldsFragmentDoc}
`;

/**
 * __useFindDynamicQuery__
 *
 * To run a query within a React component, call `useFindDynamicQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDynamicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDynamicQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useFindDynamicQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindDynamicQuery,
    FindDynamicQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindDynamicQuery, FindDynamicQueryVariables>(
    FindDynamicDocument,
    options,
  );
}
export function useFindDynamicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindDynamicQuery,
    FindDynamicQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindDynamicQuery, FindDynamicQueryVariables>(
    FindDynamicDocument,
    options,
  );
}
export type FindDynamicQueryHookResult = ReturnType<typeof useFindDynamicQuery>;
export type FindDynamicLazyQueryHookResult = ReturnType<
  typeof useFindDynamicLazyQuery
>;
export type FindDynamicQueryResult = Apollo.QueryResult<
  FindDynamicQuery,
  FindDynamicQueryVariables
>;
export const CreateDynamicDocument = gql`
  mutation CreateDynamic($content: String!) {
    createDynamic(input: { content: $content }) {
      ...dynamicFields
    }
  }
  ${DynamicFieldsFragmentDoc}
`;
export type CreateDynamicMutationFn = Apollo.MutationFunction<
  CreateDynamicMutation,
  CreateDynamicMutationVariables
>;

/**
 * __useCreateDynamicMutation__
 *
 * To run a mutation, you first call `useCreateDynamicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDynamicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDynamicMutation, { data, loading, error }] = useCreateDynamicMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateDynamicMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDynamicMutation,
    CreateDynamicMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDynamicMutation,
    CreateDynamicMutationVariables
  >(CreateDynamicDocument, options);
}
export type CreateDynamicMutationHookResult = ReturnType<
  typeof useCreateDynamicMutation
>;
export type CreateDynamicMutationResult =
  Apollo.MutationResult<CreateDynamicMutation>;
export type CreateDynamicMutationOptions = Apollo.BaseMutationOptions<
  CreateDynamicMutation,
  CreateDynamicMutationVariables
>;
export const FindRetrosDocument = gql`
  query FindRetros {
    retros {
      ...retroFields
    }
  }
  ${RetroFieldsFragmentDoc}
`;

/**
 * __useFindRetrosQuery__
 *
 * To run a query within a React component, call `useFindRetrosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRetrosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRetrosQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRetrosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FindRetrosQuery,
    FindRetrosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindRetrosQuery, FindRetrosQueryVariables>(
    FindRetrosDocument,
    options,
  );
}
export function useFindRetrosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindRetrosQuery,
    FindRetrosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindRetrosQuery, FindRetrosQueryVariables>(
    FindRetrosDocument,
    options,
  );
}
export type FindRetrosQueryHookResult = ReturnType<typeof useFindRetrosQuery>;
export type FindRetrosLazyQueryHookResult = ReturnType<
  typeof useFindRetrosLazyQuery
>;
export type FindRetrosQueryResult = Apollo.QueryResult<
  FindRetrosQuery,
  FindRetrosQueryVariables
>;
export const FindRetroDocument = gql`
  query FindRetro($_id: ID!) {
    retro(_id: $_id) {
      ...retroFields
    }
  }
  ${RetroFieldsFragmentDoc}
`;

/**
 * __useFindRetroQuery__
 *
 * To run a query within a React component, call `useFindRetroQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRetroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRetroQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useFindRetroQuery(
  baseOptions: Apollo.QueryHookOptions<FindRetroQuery, FindRetroQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindRetroQuery, FindRetroQueryVariables>(
    FindRetroDocument,
    options,
  );
}
export function useFindRetroLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindRetroQuery,
    FindRetroQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindRetroQuery, FindRetroQueryVariables>(
    FindRetroDocument,
    options,
  );
}
export type FindRetroQueryHookResult = ReturnType<typeof useFindRetroQuery>;
export type FindRetroLazyQueryHookResult = ReturnType<
  typeof useFindRetroLazyQuery
>;
export type FindRetroQueryResult = Apollo.QueryResult<
  FindRetroQuery,
  FindRetroQueryVariables
>;
export const CreateRetroDocument = gql`
  mutation CreateRetro($title: String, $content: String, $date: String!) {
    createRetro(input: { title: $title, content: $content, date: $date }) {
      ...retroFields
    }
  }
  ${RetroFieldsFragmentDoc}
`;
export type CreateRetroMutationFn = Apollo.MutationFunction<
  CreateRetroMutation,
  CreateRetroMutationVariables
>;

/**
 * __useCreateRetroMutation__
 *
 * To run a mutation, you first call `useCreateRetroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRetroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRetroMutation, { data, loading, error }] = useCreateRetroMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateRetroMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRetroMutation,
    CreateRetroMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateRetroMutation, CreateRetroMutationVariables>(
    CreateRetroDocument,
    options,
  );
}
export type CreateRetroMutationHookResult = ReturnType<
  typeof useCreateRetroMutation
>;
export type CreateRetroMutationResult =
  Apollo.MutationResult<CreateRetroMutation>;
export type CreateRetroMutationOptions = Apollo.BaseMutationOptions<
  CreateRetroMutation,
  CreateRetroMutationVariables
>;
export const RetroCreatedDocument = gql`
  subscription RetroCreated {
    retroCreated {
      ...retroFields
    }
  }
  ${RetroFieldsFragmentDoc}
`;

/**
 * __useRetroCreatedSubscription__
 *
 * To run a query within a React component, call `useRetroCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRetroCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetroCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRetroCreatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RetroCreatedSubscription,
    RetroCreatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RetroCreatedSubscription,
    RetroCreatedSubscriptionVariables
  >(RetroCreatedDocument, options);
}
export type RetroCreatedSubscriptionHookResult = ReturnType<
  typeof useRetroCreatedSubscription
>;
export type RetroCreatedSubscriptionResult =
  Apollo.SubscriptionResult<RetroCreatedSubscription>;
export const FindRetroMessagesDocument = gql`
  query FindRetroMessages($retro: ID!) {
    retroMessages(retro: $retro) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useFindRetroMessagesQuery__
 *
 * To run a query within a React component, call `useFindRetroMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRetroMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRetroMessagesQuery({
 *   variables: {
 *      retro: // value for 'retro'
 *   },
 * });
 */
export function useFindRetroMessagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindRetroMessagesQuery,
    FindRetroMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FindRetroMessagesQuery,
    FindRetroMessagesQueryVariables
  >(FindRetroMessagesDocument, options);
}
export function useFindRetroMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindRetroMessagesQuery,
    FindRetroMessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FindRetroMessagesQuery,
    FindRetroMessagesQueryVariables
  >(FindRetroMessagesDocument, options);
}
export type FindRetroMessagesQueryHookResult = ReturnType<
  typeof useFindRetroMessagesQuery
>;
export type FindRetroMessagesLazyQueryHookResult = ReturnType<
  typeof useFindRetroMessagesLazyQuery
>;
export type FindRetroMessagesQueryResult = Apollo.QueryResult<
  FindRetroMessagesQuery,
  FindRetroMessagesQueryVariables
>;
export const FindRetroMessageDocument = gql`
  query FindRetroMessage($_id: ID!) {
    retroMessage(_id: $_id) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useFindRetroMessageQuery__
 *
 * To run a query within a React component, call `useFindRetroMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRetroMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRetroMessageQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useFindRetroMessageQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindRetroMessageQuery,
    FindRetroMessageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindRetroMessageQuery, FindRetroMessageQueryVariables>(
    FindRetroMessageDocument,
    options,
  );
}
export function useFindRetroMessageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindRetroMessageQuery,
    FindRetroMessageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FindRetroMessageQuery,
    FindRetroMessageQueryVariables
  >(FindRetroMessageDocument, options);
}
export type FindRetroMessageQueryHookResult = ReturnType<
  typeof useFindRetroMessageQuery
>;
export type FindRetroMessageLazyQueryHookResult = ReturnType<
  typeof useFindRetroMessageLazyQuery
>;
export type FindRetroMessageQueryResult = Apollo.QueryResult<
  FindRetroMessageQuery,
  FindRetroMessageQueryVariables
>;
export const CreateRetroMessageDocument = gql`
  mutation CreateRetroMessage(
    $retro: ID!
    $content: String!
    $type: RetroMessageType!
  ) {
    createRetroMessage(
      input: { retro: $retro, content: $content, type: $type }
    ) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;
export type CreateRetroMessageMutationFn = Apollo.MutationFunction<
  CreateRetroMessageMutation,
  CreateRetroMessageMutationVariables
>;

/**
 * __useCreateRetroMessageMutation__
 *
 * To run a mutation, you first call `useCreateRetroMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRetroMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRetroMessageMutation, { data, loading, error }] = useCreateRetroMessageMutation({
 *   variables: {
 *      retro: // value for 'retro'
 *      content: // value for 'content'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateRetroMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRetroMessageMutation,
    CreateRetroMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRetroMessageMutation,
    CreateRetroMessageMutationVariables
  >(CreateRetroMessageDocument, options);
}
export type CreateRetroMessageMutationHookResult = ReturnType<
  typeof useCreateRetroMessageMutation
>;
export type CreateRetroMessageMutationResult =
  Apollo.MutationResult<CreateRetroMessageMutation>;
export type CreateRetroMessageMutationOptions = Apollo.BaseMutationOptions<
  CreateRetroMessageMutation,
  CreateRetroMessageMutationVariables
>;
export const UpdateRetroMessageDocument = gql`
  mutation UpdateRetroMessage(
    $_id: ID!
    $content: String
    $type: RetroMessageType
    $status: RetroMessageStatus
  ) {
    updateRetroMessage(
      _id: $_id
      input: { content: $content, type: $type, status: $status }
    ) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;
export type UpdateRetroMessageMutationFn = Apollo.MutationFunction<
  UpdateRetroMessageMutation,
  UpdateRetroMessageMutationVariables
>;

/**
 * __useUpdateRetroMessageMutation__
 *
 * To run a mutation, you first call `useUpdateRetroMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRetroMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRetroMessageMutation, { data, loading, error }] = useUpdateRetroMessageMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      content: // value for 'content'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateRetroMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRetroMessageMutation,
    UpdateRetroMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRetroMessageMutation,
    UpdateRetroMessageMutationVariables
  >(UpdateRetroMessageDocument, options);
}
export type UpdateRetroMessageMutationHookResult = ReturnType<
  typeof useUpdateRetroMessageMutation
>;
export type UpdateRetroMessageMutationResult =
  Apollo.MutationResult<UpdateRetroMessageMutation>;
export type UpdateRetroMessageMutationOptions = Apollo.BaseMutationOptions<
  UpdateRetroMessageMutation,
  UpdateRetroMessageMutationVariables
>;
export const LikeRetroMessageDocument = gql`
  mutation LikeRetroMessage($_id: ID!, $count: Int) {
    likeRetroMessage(_id: $_id, count: $count) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;
export type LikeRetroMessageMutationFn = Apollo.MutationFunction<
  LikeRetroMessageMutation,
  LikeRetroMessageMutationVariables
>;

/**
 * __useLikeRetroMessageMutation__
 *
 * To run a mutation, you first call `useLikeRetroMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeRetroMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeRetroMessageMutation, { data, loading, error }] = useLikeRetroMessageMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useLikeRetroMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LikeRetroMessageMutation,
    LikeRetroMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    LikeRetroMessageMutation,
    LikeRetroMessageMutationVariables
  >(LikeRetroMessageDocument, options);
}
export type LikeRetroMessageMutationHookResult = ReturnType<
  typeof useLikeRetroMessageMutation
>;
export type LikeRetroMessageMutationResult =
  Apollo.MutationResult<LikeRetroMessageMutation>;
export type LikeRetroMessageMutationOptions = Apollo.BaseMutationOptions<
  LikeRetroMessageMutation,
  LikeRetroMessageMutationVariables
>;
export const DeleteRetroMessageDocument = gql`
  mutation DeleteRetroMessage($_id: ID!) {
    deleteRetroMessage(_id: $_id) {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;
export type DeleteRetroMessageMutationFn = Apollo.MutationFunction<
  DeleteRetroMessageMutation,
  DeleteRetroMessageMutationVariables
>;

/**
 * __useDeleteRetroMessageMutation__
 *
 * To run a mutation, you first call `useDeleteRetroMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRetroMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRetroMessageMutation, { data, loading, error }] = useDeleteRetroMessageMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteRetroMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRetroMessageMutation,
    DeleteRetroMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteRetroMessageMutation,
    DeleteRetroMessageMutationVariables
  >(DeleteRetroMessageDocument, options);
}
export type DeleteRetroMessageMutationHookResult = ReturnType<
  typeof useDeleteRetroMessageMutation
>;
export type DeleteRetroMessageMutationResult =
  Apollo.MutationResult<DeleteRetroMessageMutation>;
export type DeleteRetroMessageMutationOptions = Apollo.BaseMutationOptions<
  DeleteRetroMessageMutation,
  DeleteRetroMessageMutationVariables
>;
export const RetroMessageCreatedDocument = gql`
  subscription RetroMessageCreated {
    retroMessageCreated {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useRetroMessageCreatedSubscription__
 *
 * To run a query within a React component, call `useRetroMessageCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRetroMessageCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetroMessageCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRetroMessageCreatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RetroMessageCreatedSubscription,
    RetroMessageCreatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RetroMessageCreatedSubscription,
    RetroMessageCreatedSubscriptionVariables
  >(RetroMessageCreatedDocument, options);
}
export type RetroMessageCreatedSubscriptionHookResult = ReturnType<
  typeof useRetroMessageCreatedSubscription
>;
export type RetroMessageCreatedSubscriptionResult =
  Apollo.SubscriptionResult<RetroMessageCreatedSubscription>;
export const RetroMessageUpdatedDocument = gql`
  subscription RetroMessageUpdated {
    retroMessageUpdated {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useRetroMessageUpdatedSubscription__
 *
 * To run a query within a React component, call `useRetroMessageUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRetroMessageUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetroMessageUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRetroMessageUpdatedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RetroMessageUpdatedSubscription,
    RetroMessageUpdatedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RetroMessageUpdatedSubscription,
    RetroMessageUpdatedSubscriptionVariables
  >(RetroMessageUpdatedDocument, options);
}
export type RetroMessageUpdatedSubscriptionHookResult = ReturnType<
  typeof useRetroMessageUpdatedSubscription
>;
export type RetroMessageUpdatedSubscriptionResult =
  Apollo.SubscriptionResult<RetroMessageUpdatedSubscription>;
export const RetroMessageDeletedDocument = gql`
  subscription RetroMessageDeleted {
    retroMessageDeleted {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useRetroMessageDeletedSubscription__
 *
 * To run a query within a React component, call `useRetroMessageDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRetroMessageDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetroMessageDeletedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRetroMessageDeletedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RetroMessageDeletedSubscription,
    RetroMessageDeletedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RetroMessageDeletedSubscription,
    RetroMessageDeletedSubscriptionVariables
  >(RetroMessageDeletedDocument, options);
}
export type RetroMessageDeletedSubscriptionHookResult = ReturnType<
  typeof useRetroMessageDeletedSubscription
>;
export type RetroMessageDeletedSubscriptionResult =
  Apollo.SubscriptionResult<RetroMessageDeletedSubscription>;
export const RetroMessageLikedDocument = gql`
  subscription RetroMessageLiked {
    retroMessageLiked {
      ...retroMessageFields
    }
  }
  ${RetroMessageFieldsFragmentDoc}
`;

/**
 * __useRetroMessageLikedSubscription__
 *
 * To run a query within a React component, call `useRetroMessageLikedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRetroMessageLikedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetroMessageLikedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRetroMessageLikedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    RetroMessageLikedSubscription,
    RetroMessageLikedSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    RetroMessageLikedSubscription,
    RetroMessageLikedSubscriptionVariables
  >(RetroMessageLikedDocument, options);
}
export type RetroMessageLikedSubscriptionHookResult = ReturnType<
  typeof useRetroMessageLikedSubscription
>;
export type RetroMessageLikedSubscriptionResult =
  Apollo.SubscriptionResult<RetroMessageLikedSubscription>;
export const UsersDocument = gql`
  query Users {
    users {
      ...userFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const LoginDocument = gql`
  query Login($input: LoginUserInput) {
    login(input: $input) {
      user {
        ...userFields
      }
      token
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options,
  );
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options,
  );
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<
  LoginQuery,
  LoginQueryVariables
>;
