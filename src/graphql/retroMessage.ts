import { gql } from '@apollo/client';

export interface RetroMessage {
  _id: string;
  title: string;
  content: string;
  status: string;
  type: string;
  like: number;
  user: unknown;
  createdAt: string;
}

export interface RetroMessagesResult {
  retroMessages: RetroMessage[];
}

export interface RetroMessageResult {
  retroMessage: RetroMessage;
}

export const RETROMESSAGE_FRAGMENT = gql`
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

export const RETROMESSAGES_QUERY = gql`
  ${RETROMESSAGE_FRAGMENT}
  query RetroMessages($retro: ID) {
    retroMessages(retro: $retro) {
      ...retroMessageFields
    }
  }
`;

export const RETROMESSAGE_QUERY = gql`
  ${RETROMESSAGE_FRAGMENT}
  query RetroMessage($_id: ID!) {
    retroMessage(_id: $_id) {
      ...retroMessageFields
    }
  }
`;

export const CREATE_RETROMESSAGE = gql`
  ${RETROMESSAGE_FRAGMENT}
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
`;

export const UPDATE_RETROMESSAGE = gql`
  ${RETROMESSAGE_FRAGMENT}
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
`;

export const LIKE_RETROMESSAGE = gql`
  ${RETROMESSAGE_FRAGMENT}
  mutation LikeRetroMessage($_id: ID!, $count: Int) {
    likeRetroMessage(_id: $_id, count: $count) {
      ...retroMessageFields
    }
  }
`;

export const DELETE_RETROMESSAGE = gql`
  ${RETROMESSAGE_FRAGMENT}
  mutation DeleteRetroMessage($_id: ID!) {
    deleteRetroMessage(_id: $_id) {
      ...retroMessageFields
    }
  }
`;

export const CREATE_RETROMESSAGE_SUBSCRIPTION = gql`
  ${RETROMESSAGE_FRAGMENT}
  subscription retroMessageCreated {
    retroMessageCreated {
      ...retroMessageFields
    }
  }
`;

export const UPDATE_RETROMESSAGE_SUBSCRIPTION = gql`
  ${RETROMESSAGE_FRAGMENT}
  subscription retroMessageUpdated {
    retroMessageUpdated {
      ...retroMessageFields
    }
  }
`;

export const DELETE_RETROMESSAGE_SUBSCRIPTION = gql`
  ${RETROMESSAGE_FRAGMENT}
  subscription retroMessageDeleted {
    retroMessageDeleted {
      ...retroMessageFields
    }
  }
`;

export const LIKE_RETROMESSAGE_SUBSCRIPTION = gql`
  ${RETROMESSAGE_FRAGMENT}
  subscription retroMessageLiked {
    retroMessageLiked {
      ...retroMessageFields
    }
  }
`;
