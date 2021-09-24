import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, Query, Mutation } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { IPost } from '../../types';
import { gql } from 'graphql-tag';
import {HttpHeaders} from '@angular/common/http';

export interface Response {
  getPosts?: IPost[];
  getPost?: IPost;
}

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      content
      title
      id
    }
  }
`;

const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      name
      position
      level
      level
    }
  }
`;

const GET_POST = gql`
  query GetPost($post_id: ID!) {
    getPost(id: $post_id) {
      content
      title
      id
    }
  }
`;

const GET_CURRENCY = gql`
  query currency($currency: String!) {
    rates(currency: $currency) {
      currency
      name
      rate
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($post_id: ID!) {
    deletePost(id: $post_id) {
      content
      title
      id
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $date: String!) {
    createPost(content: $content, title: $title, date: $date) {
      content
      title
      id
    }
  }
`;

@Injectable()
export class PostsServiceService {
  private querySubscription?: Subscription;
  constructor(private apollo: Apollo) {}

  getPosts(): Observable<any> {
    return this.apollo.query<any>({ query: GET_POSTS });
  }

  newPost(post: IPost): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_POST,
      variables: {
        title: post.title,
        content: post.content,
        date: new Date().toISOString(),
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      },
    });
  }
  getCurrency() {
    return this.apollo.query<any>({
      query: GET_CURRENCY,
      variables: {
        currency: 'dollar',
      },
    });
  }
  deletePost(id: string): Observable<any> {
    return this.apollo.mutate({
      mutation: DELETE_POST,
      variables: {
        post_id: id,
      },
    });
  }
  getPost(id: string): Observable<any> {
    return this.apollo.query<any>({
      query: GET_POST,
      variables: {
        id: id,
      },
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class SinglePostsGQL extends Query<Response> {
  document = gql`
    query GetPost($id: ID!) {
      getPost(id: $id) {
        content
        title
        id
      }
    }
  `;
}
// export class DeletePostGQL extends Mutation{
//   document = gql`
//     mutation DeletePost($post_id:ID!){
//      deletePost(id: $post_id){
//        content,
//        title,
//        id
//      }
//     }
//   `;
// }
