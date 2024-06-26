/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      text
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      text
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      text
      userID
      postID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        userID
        User {
          id
          name
          email
          username
          image
          website
          nofPosts
          nofFollowers
          nofFollowings
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      description
      image
      images
      video
      nofComments
      nofLikes
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      userID
      User {
        id
        name
        email
        username
        image
        website
        nofPosts
        nofFollowers
        nofFollowings
        bio
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      username
      image
      website
      nofPosts
      nofFollowers
      nofFollowings
      bio
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Posts {
        items {
          id
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      username
      image
      website
      nofPosts
      nofFollowers
      nofFollowings
      bio
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Posts {
        items {
          id
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      username
      image
      website
      nofPosts
      nofFollowers
      nofFollowings
      bio
      Comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Posts {
        items {
          id
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
